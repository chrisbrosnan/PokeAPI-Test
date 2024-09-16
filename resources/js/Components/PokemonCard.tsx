import { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Link } from '@inertiajs/react';

interface CardProps {
    id: number;
    apiUrl: string;
    name: string;
}

interface Pokemon {
    stats: { base_stat: number }[];
    sprites: { front_default: string };
    name: string;
    height: number;
    weight: number;
    abilities: { ability: { name: string } }[];
}

function PokemonCard({ apiUrl, id, name }: CardProps) {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        axios.get(apiUrl + `/profile/name/${name}`)
            .then(response => {
                setPokemon(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [name]);

    if (!pokemon) {
        return <div>Loading...</div>;
    }

    const stats_array = pokemon.stats.map(stat => stat.base_stat);

    return (
        <div className="sm:w-full xs:w-3/4 px-3">
            <div className="border border-2 rounded-lg px-4 bg-yellow-200 mb-3">
                <Link href={route('profile', { name: name })}>
                    <div className="text-center">
                        <h3 className="xs:text-2xl sm:text-sm py-2 font-black">{_.capitalize(name)}
                            <span className="float-right text-red-600 font-black">
                                {stats_array[0]}
                            </span>
                        </h3>
                    </div>
                </Link>
                <div>
                    <Link href={route('profile', { name: name })}>
                        <img className="bg-white w-full mx-auto mb-2 border-dotted border-2 border-sky-400 rounded-md" src={pokemon.sprites.front_default} alt={pokemon.name + ' card'} />
                    </Link>
                </div>
                <div>
                    <table className="text-xs w-full mx-auto text-center mb-2">
                        <tbody>
                            <tr>
                                <td><span className="font-black">Height:</span><br />{pokemon.height}</td>
                                <td><span className="font-black">Weight:</span><br />{pokemon.weight}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-xs my-4 h-12 sm:w-full xs:w-3/4 mx-auto">
                    <p className="font-black">Abilities: </p>
                    {pokemon.abilities.map((item, index) => (
                        <span key={index}><em>{_.capitalize(item.ability.name) + ', '}</em></span>
                    ))}
                </div>
                <div className="text-sm mb-4 text-center">
                    <Link href={route('profile', { name: name })} className="bg-sky-400 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded mx-1 text-xs">
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;