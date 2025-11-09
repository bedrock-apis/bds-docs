import { defineConfig } from 'rolldown';

export default defineConfig([
   {
      input: './modules/main.ts',
      external: /^node:/,
      output: {
         file: './dist/main.js',
      }
   },
   {
      input: './addon/index.ts',
      external: /^node:/,
      output: {
         file: './dist/addon.js',
         minify: true
      }
   }
]);
