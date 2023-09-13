<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    // belongsTo relationship with Doctor
    public function doctors(): hasMany
    {
        return $this->hasMany(Doctor::class);
    }
}