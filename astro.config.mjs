// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    vite: {
        resolve: {
            alias: {
                '@styles': '/src/assets/styles',
            },
        },
        css: {
            preprocessorOptions: {
              scss: {
                additionalData: `
                    @use "@styles/_mixins.scss" as *;
                    @use "@styles/_variables.scss" as *;
                `,
              },
            },
        }
    }
});
