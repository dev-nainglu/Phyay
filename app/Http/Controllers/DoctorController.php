<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Doctor;
use App\Models\Category;

class DoctorController extends Controller
{
    /**
     * Show the profile for the given doctor.
     */

    public function show(string $id): Response
    {
        // query the doctor by id, with category
        $doctor = Doctor::with('category')->find($id);
        return Inertia::render('DoctorProfile', [
            'doctor' => $doctor,
        ]);
    }

    /**
     * Return the list of doctors for the given category.
     */

    public function index(int $id): Response
    {
        // query the doctors by category id, exclude timestamps
        $doctors = Doctor::with(['category'])->where('category_id', $id)->get();

        return Inertia::render('DoctorsLayout', [
            'doctors' => $doctors,
            'title' => $doctors->first()->category_name,
        ]);

    }



}