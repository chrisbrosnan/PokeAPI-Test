import { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import AudioBlock from './AudioBlock';

interface Pokemon {
    sprites: {
        front_default: string;
        front_shiny: string;
        back_default: string;
        back_shiny: string;
    };
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
    height: number;
    weight: number;
    base_experience: number;
    abilities: {
        ability: {
            name: string;
        };
    }[];
    types: {
        type: {
            name: string;
        };
    }[];
    moves: {
        move: {
            name: string;
        };
    }[];
    cries: {
        legacy: string;
        latest: string;
    };
}

function PokemonProfile({ name }: { name: string }) {
    const [pokemon, getPokemon] = useState<Pokemon | null>(null);
    const [latest_cry, getLatestCry] = useState('');

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/` + name)
            .then(response => {
                getPokemon(response.data);
                getLatestCry(response.data.cries.latest);
            })
            .catch(error => {
                console.error(error);
            });
    }, [name]);

    if (!pokemon) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="w-3/4 mx-auto">
                <div className="text-center">
                    <h3 className="text-5xl py-4 font-black">{_.capitalize(name)}</h3>
                </div>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="left">
                        <div className="text-center">
                            <img className="mx-auto mb-4 w-3/4 border-dotted border-2 border-sky-400 rounded-md" src={pokemon.sprites.front_default} alt={name + ' picture'} />
                        </div>
                        <div>
                            <table className="mx-auto mb-4 w-3/4 rounded rounded-m bg-sky-400">
                                <tbody>
                                    <tr>
                                        <td colSpan={2} className="px-4 pt-4 align-top font-black text-center underline">Stats:</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 align-top font-black pb-4 xs:text-xs">
                                            {pokemon.stats.map((item, index) => (
                                                <p key={index}><em>{_.capitalize(item.stat.name)}</em></p>
                                            ))}
                                        </td>
                                        <td className="px-3 align-top pb-4 xs:text-xs">
                                            {pokemon.stats.map((item, index) => (
                                                <p key={index}>{item.base_stat}</p>
                                            ))}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="mx-auto mb-4 w-3/4 xs:text-xs">
                                <tbody>
                                    <tr>
                                        <td className="py-1 px-3 font-black underline">Height:</td>
                                        <td className="py-1 px-3">{pokemon.height}</td>
                                    </tr>
                                    <tr className="py-1">
                                        <td className="py-1 px-3 font-black underline">Weight:</td>
                                        <td className="py-1 px-3">{pokemon.weight}</td>
                                    </tr>
                                    <tr className="py-1">
                                        <td className="py-1 px-3 font-black underline">Base Experience:</td>
                                        <td className="py-1 px-3">{pokemon.base_experience}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="right">
                        <div>
                            <div className="text-center grid grid-cols-2">
                                <div className="text-center font-black pb-4 underline">
                                    Sound:
                                </div>
                                <AudioBlock
                                    name={name}
                                    src={latest_cry}
                                />
                            </div>
                            <table className="w-full">
                                <tbody>
                                    <tr className="py-3">
                                        <td colSpan={2} className="py-4 px-3 align-top text-center font-black underline">Details:</td>
                                    </tr>
                                    <tr className="py-3">
                                        <td className="py-3 px-3 align-top font-black">Abilities:</td>
                                        <td className="py-3 px-3 align-top">
                                            {pokemon.abilities.map((item, index) => (
                                                <p key={index}>{_.capitalize(item.ability.name)}</p>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr className="py-3">
                                        <td className="py-3 px-3 align-top font-black">Types:</td>
                                        <td className="py-3 px-3 align-top">
                                            {pokemon.types.map((item, index) => (
                                                <p key={index}>{_.capitalize(item.type.name)}</p>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr className="py-3">
                                        <td className="py-3 px-3 align-top font-black">Moves:</td>
                                        <td className="py-3 px-3 align-top">
                                            {pokemon.moves.map((item, index) => (
                                                <span key={index}>{_.capitalize(item.move.name)}, </span>
                                            ))}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div>
                    <table className="w-full">
                        <tbody>
                            <tr className="py-3 mt-4 underline">
                                <td colSpan={2} className="py-4 px-3 align-top text-center font-black">Sprites:</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <table className="w-full text-center">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p>Front Default: <br /><img className="mx-auto" src={pokemon.sprites.front_default} alt={name + ' front'} /></p>
                                                </td>
                                                <td>
                                                    <p>Front Shiny: <br /><img className="mx-auto" src={pokemon.sprites.front_shiny} alt={name + ' front (shiny)'} /></p>
                                                </td>
                                                <td>
                                                    <p>Back Default: <br /><img className="mx-auto" src={pokemon.sprites.back_default} alt={name + ' back'} /></p>
                                                </td>
                                                <td>
                                                    <p>Back Shiny: <br /><img className="mx-auto" src={pokemon.sprites.back_shiny} alt={name + ' back (shiny)'} /></p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default PokemonProfile;  