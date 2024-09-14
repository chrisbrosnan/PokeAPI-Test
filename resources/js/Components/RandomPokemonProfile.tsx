import { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import AudioBlock from './AudioBlock';

// Define the interface for the Pokemon data
interface Pokemon {
    name: string;
    image: string;
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

function RandomPokemonProfile({ id }: { id: number }) {
    const [pokemon, getPokemon] = useState<Pokemon | null>(null);
    const [latest_cry, getLatestCry] = useState('');

    useEffect(() => {
        axios.get(`/api/pokemon/` + id)
            .then(response => {
                getPokemon(response.data);
                getLatestCry(response.data.sound);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    if (!pokemon) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="xs:w-full sm:w-3/4 mx-auto">
                <div className="text-center">
                    <h3 className="text-5xl py-4 font-black">{_.capitalize(pokemon.name)}</h3>
                </div>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 pt-4 xs:w-full sm:w-3/4 mx-auto">
                    <div className="left">
                        <div className="text-center">
                            <picture>
                                <img className="mx-auto mb-4 xs:w-full sm:w-3/4 border-dotted border-2 border-sky-400 rounded-lg" src={pokemon.image} alt={pokemon.name + ' picture'} />
                            </picture>
                        </div>
                        <div>
                            <table className="mx-auto mb-4 xs:w-full sm:w-2/3 rounded rounded-lg bg-sky-400 px-3">
                                <tbody>
                                    <tr>
                                        <td colSpan={2} className="px-6 pt-4 align-top font-black text-center underline">Stats:</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="mx-auto mb-4 xs:w-full sm:w-3/4 xs:text-xs">
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
                            <div>
                                <AudioBlock
                                    src={latest_cry}
                                />
                            </div>
                            <table className="w-full">
                                <tbody>
                                    <tr className="py-3">
                                        <td colSpan={2} className="py-4 px-3 align-top text-center font-black underline">Details:</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="xs:w-full sm:w-3/4 mx-auto">
                    <table className="w-full">
                        <tbody>
                            <tr className="py-3 mt-4 underline">
                                <td colSpan={2} className="py-4 px-3 align-top text-center font-black">Sprites:</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <table className="w-full text-center">
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

export default RandomPokemonProfile;