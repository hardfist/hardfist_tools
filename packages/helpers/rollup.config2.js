import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

// eslint-disable-next-line import/no-default-export
export default [
  // CommonJS
  {
    input: 'src/index.js',
    output: { file: 'lib/redux.js', format: 'cjs', indent: false },
    // external: [
    //   ...Object.keys(pkg.dependencies || {}),
    //   ...Object.keys(pkg.peerDependencies || {}),
    // ],
    plugins: [
      nodeResolve({
        extensions: ['.ts'],
      }),
      // typescript({ useTsconfigDeclarationDir: true }),
      babel(),
    ],
  },
];
