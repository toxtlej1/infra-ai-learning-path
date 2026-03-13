// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://toxtlej1.github.io',
  base: '/infra-ai-learning-path',
  integrations: [starlight({
    title: 'AI-Empowered Infra Learning Path',
    customCss: [
      './src/styles/global.css',
    ],
    social: [
      { icon: 'github', label: 'GitHub', href: 'https://github.com/toxtlej1/infra-ai-learning-path' }
    ],
    sidebar: [
      {
        label: 'Module 1: Cloud Basics',
        autogenerate: { directory: 'module-1-cloud' }
      },
      {
        label: 'Module 2: Containers',
        autogenerate: { directory: 'module-2-containers' }
      },
      {
        label: 'Module 3: IaC',
        autogenerate: { directory: 'module-3-iac' }
      }
    ],
  }), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});