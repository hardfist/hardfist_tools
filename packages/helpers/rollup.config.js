/* eslint-disable import/no-default-export */
import resolve from 'rollup-plugin-node-resolve';
import visualizer from 'rollup-plugin-visualizer';
import path from 'path';
import sizes from 'rollup-plugin-sizes';
import filesize from 'rollup-plugin-filesize';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import sourcemap from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import peerDep from 'rollup-plugin-peer-deps-external';
import builtins from 'rollup-plugin-node-builtins';

function createConfig(output, production) {
  return {
    input: 'src/index.ts',
    output: [
      {
        file: output,
        format: 'umd',
        sourcemap: production,
        name: 'mysecret',
        globals: {
          'the-answer': 'yj-answer',
          'react-redux': 'reactRedux',
        },
      },
    ],
    external: ['lodash-es', 'lodash-es/map', 'the-answer'],
    plugins: [
      builtins(),
      commonjs(),
      resolve({
        preferBuiltins: true,
        browser: true,
      }),
      json(),
      peerDep(),
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
      production && terser(),
    ].filter(Boolean),
  };
}

export default [
  createConfig('lib/secret.js', false),
  createConfig('lib/secret.min.js', true),
];
