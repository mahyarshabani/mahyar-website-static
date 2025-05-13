import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/mahyar-website-static/',
    plugins: [
        tailwindcss(),
    ],
})