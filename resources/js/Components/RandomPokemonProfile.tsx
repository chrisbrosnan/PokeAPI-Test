import { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import AudioBlock from './AudioBlock';

// Define the interface for the Pokemon data
interface Pokemon {
    name: string;
    apiUrl: string;
    sprites: {
        front_default: string;
        front_shiny: string;
        back_default: string;
        back_shiny: string;
    };
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
    height: number;
    weight: number;
    image: string;
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

function RandomPokemonProfile({ apiUrl, id }: { apiUrl: string, id: number }) {
    const [pokemon, getPokemon] = useState<Pokemon | null>(null);
    const [latest_cry, getLatestCry] = useState('');

    useEffect(() => {
        axios.get(apiUrl + `/pokemon/` + id)
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
            <div className="w-full mx-auto">
                <div className="text-center">
                    <h3 className="text-5xl py-4 font-black">{_.capitalize(pokemon.name)}</h3>
                </div>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 pt-4 xs:w-full sm:w-3/4 mx-auto">
                    <div className="left">
                        <div className="text-center">
                            <picture>
                                <img className="mx-auto mb-4 w-full border-dotted border-2 border-sky-400 rounded-lg" src={pokemon.image} alt={pokemon.name + ' picture'} />
                            </picture>
                        </div>
                        <div>
                            <table className="mx-auto mb-4 w-full rounded rounded-lg bg-sky-400 px-3">
                                <tbody>
                                    <tr>
                                        <td colSpan={2} className="px-6 pt-4 align-top font-black text-center underline">Stats:</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 align-top font-black pb-4 xs:text-xs">
                                            <p>HP:</p>
                                            <p>Attack:</p>
                                            <p>Defense:</p>
                                            <p>Special Attack:</p>
                                            <p>Special Defense:</p>
                                            <p>Speed:</p>
                                        </td>
                                        <td className="px-6 align-top pb-4 xs:text-xs">
                                            <p>{pokemon.hp}</p>
                                            <p>{pokemon.attack}</p>
                                            <p>{pokemon.defense}</p>
                                            <p>{pokemon.special_attack}</p>
                                            <p>{pokemon.special_defense}</p>
                                            <p>{pokemon.speed}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="mx-auto mb-4 xs:w-full sm:w-3/4  xs:text-xs">
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
                <div className="xs:w-full sm:w-3/4 mx-auto">
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
                                                    <p>Front Default: <br />
                                                    <picture>
                                                        <source srcSet={pokemon.sprites.front_default} type="image/webp" />
                                                        <img className="mx-auto" src="https://placehold.co/75x75" alt={pokemon.name + ' front'} />
                                                    </picture></p>
                                                </td>
                                                <td>
                                                    <p>Front Shiny: <br />
                                                    <picture>
                                                        <source srcSet={pokemon.sprites.back_default} type="image/webp" />
                                                        <img className="mx-auto" src="https://placehold.co/75x75" alt={pokemon.name + ' front'} />
                                                    </picture></p>
                                                </td>
                                                <td>
                                                    <p>Back Default: <br />
                                                    <picture>
                                                        <source srcSet={pokemon.sprites.front_shiny} type="image/webp" />
                                                        <img className="mx-auto" src="https://placehold.co/75x75" alt={pokemon.name + ' front'} />
                                                    </picture></p>
                                                </td>
                                                <td>
                                                    <p>Back Shiny: <br />
                                                    <picture>
                                                        <source srcSet={pokemon.sprites.back_shiny} type="image/webp" />
                                                        <img className="mx-auto" src="https://placehold.co/75x75" alt={pokemon.name + ' front'} />
                                                    </picture></p>
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

export default RandomPokemonProfile;