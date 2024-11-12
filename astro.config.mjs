// @ts-check
import { defineConfig } from 'astro/config';

import dotenv from 'dotenv';

import svelte from '@astrojs/svelte';

dotenv.config();

export default defineConfig({
    output: 'server',
  integrations: [svelte()]
});