import { Head } from '@inertiajs/react';
import PokemonAll from '@/Components/PokemonAll';
import Navigation from '@/Components/Navigation';
import Footer from '@/Components/Footer';

export default function Welcome() {
    return (
        <>
            <Head title="PokeAPI Test - Home" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative min-h-screen flex flex-col selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full">
                        <Navigation/>
                        <main className="py-8 px-6 bg-sky-400">
                            <div className="p-4 bg-white rounded-md text-black sm:w-3/4 mx-auto xs:w-full">
                                <PokemonAll />
                            </div>
                        </main>

                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
}
