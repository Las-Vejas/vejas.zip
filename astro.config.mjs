// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import cloudflare from "@astrojs/cloudflare";
// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: cloudflare(),
    vite: {
        plugins: [tailwindcss()],
    },
    image: {
    domains: ['images.example.com', 'another-cdn.com'],
  },
});