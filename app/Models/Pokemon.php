<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pokemon extends Model
{
    use HasFactory;

    protected $table = 'pokemon';

    protected $fillable = [
        'name',
        'types',
        'abilities',
        'image',
        'height',
        'weight',
        'base_experience',
        'hp',
        'attack',
        'defense',
        'special_attack',
        'special_defense',
        'speed',
        'moves', 
        'sprites', 
        'sound'
    ];

    protected $casts = [
        'types'     => 'array',
        'abilities' => 'array',
        'moves'     => 'array',
        'sprites'   => 'array',
        'sound'     => 'string'
    ];
}
