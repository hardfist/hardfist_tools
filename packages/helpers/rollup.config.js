import resolve from 'rollup-plugin-node-resolve';
import visualizer from 'rollup-plugin-visualizer';
import sizes from 'rollup-plugin-sizes';
import filesize from 'rollup-plugin-filesize';
// eslint-disable-next-line import/no-default-export
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'mysecret',
    globals: {
      'the-answer': 'yj-answer',
    },
  },
  external: ['lodash-es', 'lodash-es/map', 'the-answer'],
  plugins: [resolve(), visualizer(), sizes(), filesize()],
};
