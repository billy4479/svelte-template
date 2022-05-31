import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    svelte({
      preprocess: [sveltePreprocess({ typescript: true })],
    }),
    createHtmlPlugin(),
  ],
  build: {
    outDir: 'build',
  },
});
