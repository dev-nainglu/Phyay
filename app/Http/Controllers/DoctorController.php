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

     public function show(string $id): Response{
        // query the doctor by id, exclude timestamps
        $doctor = Doctor::find($id, ['id', 'name', 'experience', 'fee', 'image', 'category_id']);
        // query category by id, only get the name
        $category = Category::find($doctor->category_id, ['name']);
        // replace category_id with category name in doctor
        $doctor = $doctor->setAttribute('category', $category->name);
        return Inertia::render('DoctorProfile', [
            'doctor' => $doctor,
        ]);
    }

    /**
     * Return the list of doctors for the given category.
     */

    public function index(string $id): Response{
        // query the doctors by category id, exclude timestamps
        $doctors = Doctor::where('category_id', $id)->get(['id', 'name', 'experience', 'fee', 'image', 'category_id']);
        // query category by id, only get the name
        $category = Category::find($id, ['name']);
        // replace category_id with category name in doctors
        foreach ($doctors as $doctor) {
            $doctor->setAttribute('category', $category->name);
        }
        return Inertia::render('Doctors', [
            'doctors' => $doctors,
        ]);

    }



}
