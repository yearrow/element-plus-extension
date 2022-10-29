import vue from 'rollup-plugin-vue';
import { bebalConf, typescriptConf, postcssConf } from './config/index.js';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import DefineOptions from 'unplugin-vue-define-options/rollup';


const libraryName = 'epe';
const libInput = './src/index.ts';
// esm dev 
const devEsmConfig = {
    input: libInput,
    plugins: [
      nodeResolve({
        browser: false
      }),
      commonjs(),
      typescriptConf(),
      bebalConf(),
      vue(),
      DefineOptions(),
      postcssConf('devlopment'),
    ],
    external: ['vue'],
    output: {
      libraryName,
      file: `lib/${libraryName}.esm.js`,
      format: 'esm'
    }
};

const prodEsmConfig = {
  input: libInput,
  plugins: [
    nodeResolve({
      browser: false
    }),
    commonjs(),
    typescriptConf(),
    bebalConf(),
    DefineOptions(),
    vue(),
    terser(),
    postcssConf('production'),
  ],
  external: ['vue'],
  output: {
    libraryName,
    file: `lib/${libraryName}.esm.mini.js`,
    format: 'esm'
  }
};

export {
  devEsmConfig,
  prodEsmConfig
}
