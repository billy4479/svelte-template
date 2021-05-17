import { defineConfig } from 'vite';
import svelte from '@sveltejs/vite-plugin-svelte';
import { minifyHtml} from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    svelte(),
    minifyHtml(),
  ],
  build: {
    outDir: 'build',
  }
});
