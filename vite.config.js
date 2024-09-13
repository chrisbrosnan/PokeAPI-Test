import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        define: {
            'process.env.APP_NAME': JSON.stringify(env.APP_NAME)
        },
        plugins: [
            laravel({
                input: 'resources/js/app.tsx',
                refresh: true,
            }),
            react(),
        ],
    };
});