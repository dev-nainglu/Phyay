<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Doctor extends Model
{
    use HasFactory;

    // hasOne relationship with category
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}