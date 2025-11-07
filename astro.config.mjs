// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { readingTimeRemarkPlugin } from "./src/utils/frontmatter";
import configIntegration from "./vendor/integration/index";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), icon(), configIntegration()],
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "~": "/src",
      },
    },
  },
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
  },
});
