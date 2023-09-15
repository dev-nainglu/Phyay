<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */

    protected $list_of_names = [
        'Abuse',
        'Anxiety',
        'Workplace',
        'Sex Education',
        'LGBTQ+',
        'Youth Support',
        'Depression',
        'Disorder',
    ];
    public function run()
    {
        // add admin
        echo "Adding admin...\n";
        \App\Models\User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('admin'),
        ]);
        // add categories
        echo "Adding categories...\n";
        foreach ($this->list_of_names as $name) {
            \App\Models\Category::factory()->create([
                'name' => $name
            ]);
            // create 3 doctors for each category
            \App\Models\Doctor::factory()->count(3)->create([
                'category_id' => \App\Models\Category::where('name', $name)->first()->id
            ]);
        }
    }
}