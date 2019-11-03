import resolve from 'rollup-plugin-node-resolve';
import visualizer from 'rollup-plugin-visualizer';
import sizes from 'rollup-plugin-sizes';
import filesize from 'rollup-plugin-filesize';
import analyze from 'rollup-plugin-analyzer';
import json from 'rollup-plugin-json';
import sourcemap from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
// eslint-disable-next-line import/no-default-export
export default {
  input: 'src/index.js',
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
    resolve(),
    json(),
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
