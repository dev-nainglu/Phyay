<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Patient extends Authenticatable
{
    use HasFactory;

    // hasMany relationship with Appointment
    public function appointments(): HasMany
    {
        return $this->hasMany(Appointment::class);
    }
}