import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://my-prompt-library.example.com',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    })
  ]
});
