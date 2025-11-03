// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter';
import configIntegration from './vendor/integration/index';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx(), configIntegration()],
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '~': '/src',
            },
        },
    },
    markdown: {
        remarkPlugins: [readingTimeRemarkPlugin],
    },
});
