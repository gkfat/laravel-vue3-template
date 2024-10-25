import {
    fileURLToPath,
    URL,
} from 'node:url';

import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import vuetify from 'vite-plugin-vuetify';

import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        vuetify({ autoImport: true }),
        laravel({
            input: [
                'resources/js/main.ts'
            ],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./resources/js', import.meta.url)),
        },
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.vue',
        ],
    },
    publicDir: 'public',
    build: {
        outDir: 'public',
        copyPublicDir: true,
        emptyOutDir: false
    }
});
