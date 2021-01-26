import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default {
  input: 'src/index.tsx', // our source file
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es', // the preferred format
      sourcemap: true,
    },
    {
      file: pkg.browser,
      format: 'iife',
      name: 'Olark', // the global which can be used in a browser
      sourcemap: true,
    },
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      typescript: require('typescript'),
    }),
    terser(), // minifies generated bundles
  ],
};