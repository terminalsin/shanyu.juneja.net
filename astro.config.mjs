// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://terminalsin.github.io',
  base: '/',
  integrations: [mdx()],

  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});