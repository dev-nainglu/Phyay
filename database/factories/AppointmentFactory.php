<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Appointment>
 */
class AppointmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // time in even hours
            'appointment_start_date' => $this->faker->dateTimeBetween('now', '+1 week')->format('Y-m-d H:00:00'),
            'duration' => $this->faker->randomElement(
                [
                    1,
                    2,
                    3
                ]
            ),
            'status' => 'upcoming',
            'price' => $this->faker->numberBetween(3, 10) * 1000,
        ];
    }
}