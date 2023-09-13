<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Patient extends Model
{
    use HasFactory;

    // hasMany relationship with Appointment
    public function appointments(): HasMany
    {
        return $this->hasMany(Appointment::class);
    }
}