// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { DEFAULT_EXTENSIONS } from '@babel/core';

export default {
  input: './src/index.ts',

  plugins: [
    typescript({
      useTsconfigDeclarationDir: true
    }),
    babel({
      babelHelpers:"runtime",
      exclude: ['node_modules/**','dist'],
      extensions: [
        ...DEFAULT_EXTENSIONS,
        '.ts',
        '.tsx'
      ]
    }),
    resolve(),
    commonjs(),
    
  ],
  output: [
    {
      file: 'dist/esm/0_zZWZz.js',
      format: 'esm',
      name: '0_zZWZz',
    }, {
      file: 'dist/umd/0_zZWZz.js',
      format: 'umd',
      name: '0_zZWZz',
    }
  ],
  external:[
    "@babel/runtime",
  ]
}