import { Head } from '@inertiajs/react';
import Navigation from '@/Components/Navigation';
import PokemonRandom from '@/Components/PokemonRandom';
import Footer from '@/Components/Footer';

export default function Random({ appName, laravelVersion, phpVersion, devName, apiUrl }) {
    return (
        <>
            <Head title="PokeAPI Test - Random Pokemon" />
            <div className="bg-gray-50 text-black/50">
                <div className="relative min-h-screen flex flex-col selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full">
                        <Navigation/>

                            <main className="py-8 px-6 bg-gradient-to-r from-cyan-500 to-green-500">
                                <div className="p-4 bg-white rounded-md text-black">
                                    <PokemonRandom apiUrl={apiUrl} />
                                </div>
                            </main>

                            <Footer appName={appName} laravelVersion={laravelVersion} phpVersion={phpVersion} devName={devName} />
                    </div>
                </div>
            </div>
        </>
    );
}
