<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Category;

class CategoryController extends Controller
{
    //
    public function index()
    {
        $categories = Category::all();
        // echo $categories;
        return Inertia::render('Components/CategoryItems', [
            'categories' => $categories,
        ]);
    }
}
