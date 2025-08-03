import { defineConfig } from 'rolldown';

export default defineConfig([
   {
      input: './modules/main.ts',
      external: /^node:/,
      output: {
         file: './dist/main.js',
         minify: true
      }
   }
]);
