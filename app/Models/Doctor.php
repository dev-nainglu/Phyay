<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Doctor extends Model
{
    use HasFactory;

    protected $appends = ['image_url', 'category_name'];

    // hasOne relationship with category
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function getCategoryNameAttribute()
    {
        return $this->category->name;
    }

    public function getImageUrlAttribute()
    {
        return config('filesystems.disks.s3.url') . '/' . $this->image;
    }


}