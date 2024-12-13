import { defineConfig } from 'rolldown'


export default defineConfig([
  {
    input: './src/main.ts',
    external: /node:|unzip-stream|minimatch/,
    output: {
      dir: "./dist/",
    },
    platform: "node"
  },
  {
    input: './DOCUMENTATION/gen.mjs',
    external: /node:|unzip-stream/,
    output: {
      dir: "./dist/",
    },
    platform: "node"
  },
  {
    input: './script-api/index.js',
    external: [
      /@minecraft/
    ],
    output: {
      file: "script_api.js",
      dir: "./dist/"
    },
    platform: "neutral"
  }
]);