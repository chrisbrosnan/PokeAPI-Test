<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PokemonController;
use App\Http\Middleware\Cors;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'appName' => config('app.name'),
        'devName' => config('app.developer'),
        'apiUrl' => config('app.api_url'),
    ]);
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'appName' => config('app.name'),
        'devName' => config('app.developer'),
        'apiUrl' => config('app.api_url'),
    ]);
})->name('all');

Route::get('/random', function () {
    return Inertia::render('Random', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'appName' => config('app.name'),
        'devName' => config('app.developer'),
        'apiUrl' => config('app.api_url'),
    ]);
})->name('random');

Route::get('/profile/{name}', function () {
    return Inertia::render('Profile', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'appName' => config('app.name'),
        'devName' => config('app.developer'),
        'apiUrl' => config('app.api_url'),
    ]);
})->name('profile');

Route::prefix('/api')->group(function () {
    Route::get('/import', [PokemonController::class, 'import'])
        ->name('import'); 
    Route::get('/pokemon/{id}', [PokemonController::class, 'show'])
        ->name('pokemon.show');
    Route::get('/pokemon/name/{name}', [PokemonController::class, 'get_by_name'])
        ->name('pokemon.get_by_name');
    Route::get('/pokemon/random', [PokemonController::class, 'random'])
        ->name('pokemon.random');
    Route::get('/pokemon', [PokemonController::class, 'index'])
        ->name('pokemon');
})->middleware(Cors::class);