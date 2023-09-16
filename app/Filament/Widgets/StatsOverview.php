<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            //
            Stat::make('Total Patients', \App\Models\Patient::count())
                ->icon('icon-patient'),
            Stat::make('Total Doctors', \App\Models\Doctor::count())
                ->icon('icon-doctor'),
            Stat::make('Total Categories', \App\Models\Category::count())
                ->icon('icon-category'),
            // upcoming appointments
            Stat::make('Upcoming Appointments', \App\Models\Appointment::where('status', 'upcoming')->count())
                ->icon('icon-appointment'),
            // completed appointments
            Stat::make('Completed Appointments', \App\Models\Appointment::where('status', 'completed')->count())
                ->icon('icon-appointment'),
            // cancelled appointments
            Stat::make('Cancelled Appointments', \App\Models\Appointment::where('status', 'cancelled')->count())
                ->icon('icon-appointment'),
        ];
    }
}