import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
require('dotenv').config()

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/src'),
        },
    },
    define: {
        'process.env': process.env,
    },
    /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
    resolve: {
      extensions: [
        '.js',
        '.json',
        '.jsx',
        '.mjs',
        '.ts',
        '.tsx',
        '.vue',
      ]
    },
    */
})
