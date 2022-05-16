import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      pages: './deploy/build'
    }),
    trailingSlash: 'always',
    prerender: {
      default: true,
      crawl: true,
      enabled: true,
      onError: 'continue',
      entries: ['*']
    },
    vite: {
      ssr: {
        noExternal: ['three']
      }
    }
  },
  extensions: ['.svelte']
};

export default config;
