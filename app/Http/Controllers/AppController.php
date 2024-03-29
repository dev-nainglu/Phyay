<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Doctor;
use App\Models\Category;
use App\Models\Appointment;
use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AppController extends Controller
{

    public function home(Request $request): Response
    {

        return Inertia::render('AppLayout', [
            'doctors' => $this->getDoctors(),
            'appointments' => $this->getAppointments(),
        ]);
    }

    public function getDoctors()
    {
        return Doctor::with('category')->get();
    }

    public function getAppointments()
    {
        // $patientId = Auth::user()->id;
        $patientId = Patient::where('name', 'Naing Lu')->first();
        return Appointment::with(['doctor'])->get();
    }


}
