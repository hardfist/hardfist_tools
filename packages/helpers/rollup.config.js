import resolve from 'rollup-plugin-node-resolve';
import visualizer from 'rollup-plugin-visualizer';
import path from 'path';
import sizes from 'rollup-plugin-sizes';
import filesize from 'rollup-plugin-filesize';
import analyze from 'rollup-plugin-analyzer';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import sourcemap from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
// eslint-disable-next-line import/no-default-export
export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/secret.js',
      format: 'umd',
      sourcemap: true,
      name: 'mysecret',
      globals: {
        'the-answer': 'yj-answer',
      },
    },
  ],
  external: ['lodash-es', 'lodash-es/map', 'the-answer'],
  plugins: [
    commonjs(),
    resolve(),
    json(),
    typescript({
      check: process.env.NODE_ENV === 'production',
      tsconfig: path.resolve('tsconfig.json'),
      tsconfigOverride: {},
      objectHashIgnoreUnknownHack: true,
    }),
    sourcemap(),
    visualizer(),
    sizes(),
    filesize(),
    terser(),
    analyze({
      summaryOnly: true,
    }),
  ],
};
