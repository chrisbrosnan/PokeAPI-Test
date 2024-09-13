import { Head } from '@inertiajs/react';
import PokemonProfile from '@/Components/PokemonProfile';
import Navigation from '@/Components/Navigation';
import Footer from '@/Components/Footer';

export default function Profile() {
    const pokemon_name = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

    return (
        <>
            <Head title="PokeAPI Test - Pokemon Profile" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative min-h-screen flex flex-col selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full">
                        <Navigation/>

                        <main className="py-8 px-6 bg-sky-400">
                            <div className="p-4 bg-white rounded-md text-black">
                                <PokemonProfile name={pokemon_name} />
                            </div>
                        </main>

                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
}
