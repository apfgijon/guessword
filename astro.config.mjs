// @ts-check
import { defineConfig } from 'astro/config';

import dotenv from 'dotenv';

import svelte from '@astrojs/svelte';
import vercelServerless from '@astrojs/vercel/serverless';

dotenv.config();

export default defineConfig({
    output: 'server',
  integrations: [svelte()],
  adapter: vercelServerless()
});