<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\AppController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ZoomController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('AppLayout');
// });
Route::get('/', [AppController::class, 'home'])->name('app.home');

Route::get('/render', function () {
    return Inertia::render('ContainerLayout');
});

Route::get('wavelogin', [AuthenticatedSessionController::class, 'waveLogin'])
                ->name('wavelogin');
Route::post('wavelogin', [AuthenticatedSessionController::class, 'waveLogin'])
            ->name('wavelogin');
            
Route::get('/doctors/{id}', [DoctorController::class, 'show'])->name('doctors.show');
Route::resource('appointment', AppointmentController::class);
Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');
Route::get('/zoom', [ZoomController::class, 'create'])->name('zoom.create');
Route::get('/appointments/{id}', function () {
    return Inertia::render('AppointmentDetail');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';