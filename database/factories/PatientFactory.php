<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Patient>
 */
class PatientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'name' => $this->faker->name(),
            'Phone_number' => $this->faker->numerify('09#########'),
            'gender' => $this->faker->randomElement(
                [
                    'Male',
                    'Female',
                    'Other'
                ]
            ),
            'date_of_birth' => $this->faker->date(),
        ];
    }
}