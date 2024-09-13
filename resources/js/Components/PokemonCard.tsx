import { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Link } from '@inertiajs/react';

function PokemonCard(props) {
    const [pokemon, getPokemon] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
        .then(response => {
            getPokemon(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    var stats_array = [];
    for (var key in pokemon.stats) {
        if (!pokemon.stats.hasOwnProperty(key)) continue;
        var obj = pokemon.stats[key];
        stats_array.push(obj['base_stat']);
    }

    return (
        <div className="sm:w-full xs:w-3/4 px-3">
            <div className="border border-2 rounded-lg px-4 bg-yellow-200 mb-3">
                    <Link href={route('profile', { name: props.name })}>
                        <div className="text-center">
                            <h3 className="xs:text-2xl sm:text-sm py-2 font-black">{_.capitalize(props.name)}
                                <span className="float-right text-red-600 font-black">
                                    {stats_array[0]}
                                </span>
                            </h3>
                        </div>
                    </Link>
                    <div>
                        <Link href={route('profile', { name: props.name })}>
                            <img className="bg-white sm:w-full xs:w-3/4 mx-auto mb-2 border-dotted border-2 border-sky-400 rounded-md" src={pokemon.sprites?.front_default} alt={pokemon.name + ' card'} />
                        </Link>
                    </div>
                    <div>
                        <table className="text-xs sm:w-full xs:w-full mx-auto text-center mb-2">
                            <tbody>
                                <tr>
                                    <td><span className="font-black">Height:</span><br/>{pokemon.height}</td>
                                    <td><span className="font-black">Weight:</span><br/>{pokemon.weight}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="text-xs my-4 h-12 sm:w-full xs:w-3/4 mx-auto">
                        <p className="font-black">Abilities: </p>
                        {pokemon.abilities?.map((item, index) => (
                            <span key={index}><em>{_.capitalize(item.ability.name) + ', '}</em></span>
                        ))}
                    </div>
                    <div className="text-sm mb-4 text-center">
                        <Link href={route('profile', { name: props.name })} className="bg-sky-400 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded mx-1 text-xs">
                            Read more
                        </Link>
                    </div>
            </div>
        </div>
    );
}

export default PokemonCard;
