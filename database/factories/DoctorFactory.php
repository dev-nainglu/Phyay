<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Doctor>
 */
class DoctorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // add prefix doctor to name
            'name' => 'Dr. ' . $this->faker->firstName . ' ' . $this->faker->lastName,
            'experience' => $this->faker->numberBetween(1, 10),
            'fee' => $this->faker->numberBetween(3, 10) * 1000,
        ];
    }
}