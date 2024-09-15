export default function Footer({ appName, laravelVersion, phpVersion, devName }) {
    return (
        <footer className="bg-yellow-400 py-6 text-center text-md text-sky-500 font-black">
            {appName} - Laravel v{laravelVersion} - PHP v{phpVersion} - Developed by {devName}
        </footer>
    );
}
