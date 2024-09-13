import { Link } from '@inertiajs/react';

function Pagination({  ...props }) {
    const range     = [...Array(Math.round(1118/50)).keys()];
    const page: any = window.location.href.substring(window.location.href.lastIndexOf('=') + 1);

    return (
        <div className="flex justify-center mt-4">
            <div className="flex flex-wrap">
                {range.map((item, index) => (
                    <Link
                        key={'page' + index}
                        href={route('all', { page: index + 1 })}
                        className={page == index + 1 ? "xs:mb-2 bg-yellow-400 hover:bg-sky-400 text-white font-bold py-2 px-3 rounded mx-1 text-xs" : "bg-sky-400 hover:bg-yellow-400 text-white font-bold py-2 px-3 rounded mx-1 text-xs"}>
                            {index + 1}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Pagination;
