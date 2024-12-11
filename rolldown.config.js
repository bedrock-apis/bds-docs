import { defineConfig } from 'rolldown'


export default defineConfig([
  {
    input: 'src/main.ts',
    external: [
      /node:/,
      "minimatch"
    ],
    output: {
      dir: "./dist/"
    },
  },
  {
    input: './DOCUMENTATION/gen.mjs',
    external: [
      /node:/g
    ],
    output: {
      dir: "./dist/"
    },
  },
  {
    input: './script-api/index.js',
    external: [
      /@minecraft/g
    ],
    output: {
      file: "script_api.js",
      dir: "./dist/"
    }
  }
]);