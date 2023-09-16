<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Doctor;
use App\Models\Category;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AppController extends Controller
{

    public function home(Request $request): Response
    {
        
        return Inertia::render('AppLayout', [
            'doctors' => $this->getDoctors(),
            // 'appoitments' => $this->getAppoitments(),
        ]);
    }

    public function getDoctors()
    {
        return Doctor::with('category')->get();
    }

    public function getAppoitments()
    {
        $patientId = Auth::user()->id;
        return Appointment::with(['doctor'])->where('patient_id', $patientId)->get();
    }
    

}
