import { defineConfig } from 'vite';

import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

import { createHtmlPlugin } from 'vite-plugin-html';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  plugins: [
    wasm(),
    topLevelAwait(),
    svelte({
      preprocess: [sveltePreprocess({ typescript: true })],
    }),
    createHtmlPlugin(),
  ],
  build: {
    outDir: 'build',
  },
});
