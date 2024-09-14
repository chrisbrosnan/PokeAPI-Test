<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PokemonController;
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

Route::prefix('api')->group(function () {
    Route::get('/import', [PokemonController::class, 'import'])
        ->name('import'); 
    Route::get('/pokemon', [PokemonController::class, 'index'])
        ->name('pokemon');
    Route::get('/pokemon/{id}', [PokemonController::class, 'show'])
        ->name('pokemon.show');
    Route::get('/pokemon/random', [PokemonController::class, 'random'])
        ->name('pokemon.random');
});