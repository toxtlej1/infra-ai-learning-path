// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jesustoxtle.github.io',
  base: '/infra-ai-learning-path',
  integrations: [
    starlight({
      title: 'AI-Empowered Infra Learning Path',
      customCss: [
        './src/styles/global.css',
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/your-username/infra-ai-learning-path' }
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
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
