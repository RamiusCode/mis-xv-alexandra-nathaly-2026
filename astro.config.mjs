// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://mis-xv-alexandra-nathaly-2026.vercel.app",
  vite: {
    plugins: [tailwindcss()]
  }
});
