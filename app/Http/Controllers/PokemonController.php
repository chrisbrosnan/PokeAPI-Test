<?php

namespace App\Http\Controllers;
use App\Models\Pokemon;

use Illuminate\Http\Request;

class PokemonController extends Controller
{
    public function import()
    {
        ini_set('max_execution_time', 300);
        $client = new \GuzzleHttp\Client();

        $range = range(1, 1118);
        foreach($range as $i){
            $response = $client->request('GET', 'https://pokeapi.co/api/v2/pokemon/' . $i, ['verify' => false]);
            $data = json_decode($response->getBody()->getContents(), true);

            $pokemon = new Pokemon();
            $pokemon->id              = $data['id'];
            $pokemon->name            = $data['name'] ?? '';
            $pokemon->types           = $data['types'] ?? '';
            $pokemon->abilities       = $data['abilities'] ?? '';
            $pokemon->image           = $data['sprites']['front_default'] ?? '';
            $pokemon->height          = $data['height'] ?? '';
            $pokemon->weight          = $data['weight'] ?? '';
            $pokemon->base_experience = $data['base_experience'] ?? '';
            $pokemon->hp              = $data['stats'][0]['base_stat'] ?? '';
            $pokemon->attack          = $data['stats'][1]['base_stat'] ?? '';
            $pokemon->defense         = $data['stats'][2]['base_stat'] ?? '';
            $pokemon->special_attack  = $data['stats'][3]['base_stat'] ?? '';
            $pokemon->special_defense = $data['stats'][4]['base_stat'] ?? '';
            $pokemon->speed           = $data['stats'][5]['base_stat'] ?? '';
            $pokemon->moves           = $data['moves'] ?? '';
            $pokemon->sprites         = $data['sprites'] ?? '';
            $pokemon->sound           = $data['cries']['latest'] ?? '';

            $pokemon->save();
        }
        return response()->json(['message' => 'Imported successfully']);
    }

    public function index()
    {
        $pokemons = Pokemon::all();
        return response()->json($pokemons);
    }

    public function show($id)
    {
        $pokemon = Pokemon::find($id);
        return response()->json($pokemon);
    }
    
    public function get_by_name($name)
    {
        $pokemon = Pokemon::where('name', $name)->first();
        return response()->json($pokemon);
    }

    public function random()
    {
        $pokemon = Pokemon::all()->inRandomOrder()->first();
        return response()->json($pokemon);
    }
}
