<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Appointment;

class AppointmentController extends Controller
{
    //
    public function index(): Response
    {
        // catch query string id
        $id = request()->query('id');
        $appointments = Appointment::where('patient_id', $id)->get();
        // get doctor name from doctor id and patient name from patient id
        foreach ($appointments as $appointment) {
            $appointment->doctor_name = $appointment->doctor->name;
            $appointment->patient_name = $appointment->patient->name;
        }
        // remove doctor and patient from appointment
        $appointments = $appointments->makeHidden(['doctor', 'patient']);
        // echo $appointments;
        return Inertia::render('Appointment', [
            'appointments' => $appointments,
        ]);
    }
}
