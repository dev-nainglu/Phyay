<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;

class PatientController extends Controller
{
    // create patient
    public function createPatient(Request $request)
    {
        $patient = new Patient();
        $patient->name = $request->name;
        $patient->date_of_birth = $request->date_of_birth;
        $patient->gender = $request->gender;
        $patient->phone_number = $request->phone_number;
        $patient->save();
        return response()->json([
            "message" => "patient record created"
        ], 201);
    }

    // get patient by id
    public function getPatient($id)
    {
        if (Patient::where('id', $id)->exists()) {
            $patient = Patient::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($patient, 200);
        } else {
            return response()->json([
                "message" => "patient not found"
            ], 404);
        }
    }

    // get patient by phone number
    public function getPatientByPhoneNumber($phone_number)
    {
        if (Patient::where('phone_number', $phone_number)->exists()) {
            $patient = Patient::where('phone_number', $phone_number)->get()->toJson(JSON_PRETTY_PRINT);
            return response($patient, 200);
        } else {
            return response()->json([
                "message" => "patient not found"
            ], 404);
        }
    }
}