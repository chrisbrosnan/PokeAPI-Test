import { useState } from 'react';
import RandomPokemonProfile from './RandomPokemonProfile';

function PokemonRandom({apiUrl}: {apiUrl: string}) {
    const [id, setId] = useState(Math.floor(Math.random() * 1118));

    function refreshPage() {
        window.location.reload();
    }

    return (
        <div>
            <div className="xs:w-full sm:w-3/4 mx-auto">
                <div className="text-center">
                    <button className="mx-auto bg-blue-500 hover:bg-yellow-400 text-white font-bold p-2 rounded" onClick={refreshPage}>
                        Randomise
                    </button>
                </div>
                <RandomPokemonProfile apiUrl={apiUrl} id={id} />
            </div>
        </div>
    );
}

export default PokemonRandom;
