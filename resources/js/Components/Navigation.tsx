import { Link } from '@inertiajs/react';

export default function Navigation() {
    return (
        <header className="grid grid-cols-2 items-center gap-2 py-8 lg:grid-cols-3 px-6 bg-gradient-to-l from-gray-200 to-sky-500 border-solid border-b-2 ">
            <div className="flex lg:justify-center lg:col-start-2">
                <Link
                    href={route('all')}
                    className="rounded-md px-3 p-0 ring-1 ring-transparent transition hover:text-yellow-400 focus:outline-none focus-visible:ring-[#FF2D20] text-sky-500"
                >
                    <img height="80" width="100" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"/>
                </Link>
            </div>
            <nav className="-mx-3 flex flex-1 justify-end font-black">
                <Link
                    href={route('all')}
                    className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-yellow-400 focus:outline-none focus-visible:ring-[#FF2D20] text-sky-500"
                >
                    All
                </Link>
                <Link
                    href={route('random')}
                    className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-yellow-400 focus:outline-none focus-visible:ring-[#FF2D20] text-sky-500"
                >
                    Randomise
                </Link>
            </nav>
        </header>
    );
}
