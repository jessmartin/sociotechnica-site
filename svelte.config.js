import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex({
      extensions: ['md'],
      layout: {
        resources: 'src/routes/resources/_resource.svelte'
      }
    }),
  ],

  kit: {
    adapter: adapter()
  },

  extensions: ['.svelte', '.md']
};

export default config;
