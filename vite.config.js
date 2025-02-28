import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    base: '/LP-TailwindCSS/',
    plugins: [tailwindcss(), hmr()],
    build: {
        outDir: 'dist',
    },
});

function hmr() {
    return {
        name: 'custom-hmr',
        enforce: 'post',
        handleHotUpdate({ file, server }) {
            if (file.endsWith('.html')) {
                console.log('reloading html file...');
                server.ws.send({
                    type: 'full-reload',
                    path: '*'
                });
            }
        },
    }
}