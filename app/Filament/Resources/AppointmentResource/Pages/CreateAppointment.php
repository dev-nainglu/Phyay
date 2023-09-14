<?php

namespace App\Filament\Resources\AppointmentResource\Pages;

use App\Filament\Resources\AppointmentResource;
use App\Models\Doctor;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Database\Eloquent\Model;

class CreateAppointment extends CreateRecord
{
    protected static string $resource = AppointmentResource::class;

    protected function handleRecordCreation(array $data): Model
    {
        // calculate appointment_end_date from appointment_start_date and duration
        $data['appointment_end_date'] = now()->parse($data['appointment_start_date'])->addHours($data['duration']);
        // get fee from doctor id
        $data['price'] = Doctor::find($data['doctor_id'])->fee;
        // calculate price from duration and fee
        $data['price'] = $data['price'] * $data['duration'];
        // create appointment
        return static::getModel()::create($data);
    }
}