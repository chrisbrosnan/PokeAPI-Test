import { Suspense, useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import PokemonCard from './PokemonCard';
import Pagination from './Pagination';

function PokemonAll() {
    const [pokemon, getPokemon] = useState([]);
    const [page, setPage]       = useState(1);
    var limit : number          = Number(page * 50);
    var offset : number         = Number(limit - 50);

    if(isNaN(page)){
        var limit  : number = 50;
        var offset : number = 0;
    }

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118')
            .then(response => {
                getPokemon(response.data.results);
                setPage(Number(window.location.href.substring(window.location.href.lastIndexOf('=') + 1) ?? 1));
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    var list_of_pokemon = [];
    for (var key in pokemon) {
        // skip loop if the property is from prototype
        if (!pokemon.hasOwnProperty(key)) continue;
        var obj = pokemon[key];
        list_of_pokemon.push(obj['name']);
    }
    list_of_pokemon.sort();
    var to_be_rendered = list_of_pokemon.slice(Number(offset), Number(limit));

    return (
        <div>
            <Suspense fallback={'Loading Pokemon!'}>
                <div className="sm:grid-cols-5 xs:grid-cols-2 grid">
                    {to_be_rendered.map((item, index) => (
                        <PokemonCard key={index + 1} id={index + 1} name={item} />
                    ))}
                </div>
            </Suspense>
            <Pagination />
        </div>
    );
}

export default PokemonAll;
