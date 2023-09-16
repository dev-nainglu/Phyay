<?php

namespace App\Http\Requests;

use App\Models\Patient;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Auth\Events\Lockout;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class WaveUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name'     => 'required|string|max:255',
            'dob'      => 'required',
            'nrc'      => 'nullable',
            'msisdn'   => 'required',
            'gender'   => 'nullable',
            'kyc_status' => 'required',
        ];

    }

    public function authenticate(): void
    {
        $this->ensureIsNotRateLimited();

        $phoneNumber = $this->get('msisdn');
        $user = Patient::updateOrCreate(['phone_number'=> $phoneNumber],[
            'name'     => $this->get('name'),
            'date_of_birth' => $this->get('dob'),
            'gender'    => $this->get("gender"),
            'phone_number'   => $phoneNumber,
        ]);

        Auth::login($user);

        RateLimiter::clear($this->throttleKey());
    }

    public function ensureIsNotRateLimited(): void
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return;
        }

        event(new Lockout($this));

        $seconds = RateLimiter::availableIn($this->throttleKey());

        throw ValidationException::withMessages([
            'phone_number' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    public function throttleKey(): string
    {
        return Str::transliterate(Str::lower($this->input('email')).'|'.$this->ip());
    }
}
