<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'appName' => config('app.name'),
        'devName' => 'Chris Brosnan'
    ]);
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'appName' => config('app.name'),
        'devName' => 'Chris Brosnan'
    ]);
})->name('all');

Route::get('/random', function () {
    return Inertia::render('Random', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'appName' => config('app.name'),
        'devName' => 'Chris Brosnan'
    ]);
})->name('random');

Route::get('/search', function () {
    return Inertia::render('Welcome', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'appName' => config('app.name'),
        'devName' => 'Chris Brosnan'
    ]);
})->name('search');

Route::get('/profile/{name}', function () {
    return Inertia::render('Profile', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'appName' => config('app.name'),
        'devName' => 'Chris Brosnan'
    ]);
})->name('profile');

require __DIR__.'/auth.php';
