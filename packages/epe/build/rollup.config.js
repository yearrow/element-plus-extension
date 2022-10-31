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
      DefineOptions(),
      nodeResolve({
        browser: false
      }),
      commonjs(),
      typescriptConf(),
      bebalConf(),
      vue(),
      postcssConf('devlopment'),
    ],
    external: ['vue'],
    output: {
      libraryName,
      file: `lib/${libraryName}.esm.js`,
      format: 'esm'
    }
};
// esm prod 
const prodEsmConfig = {
  input: libInput,
  plugins: [
    DefineOptions(),
    nodeResolve({
      browser: false
    }),
    commonjs(),
    typescriptConf(),
    bebalConf(),
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



// esm prod 
const prodIifeConfig = {
  input: libInput,
  plugins: [
    nodeResolve({
      browser: true
    }),
    commonjs(),
    typescriptConf(),
    bebalConf(),
    vue(),
    // terser(),
    postcssConf('production'),
  ],
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue'
    },
    name: libraryName,
    file: `lib/${libraryName}.iife.js`,
    format: 'iife'
  }
};

export {
  devEsmConfig,
  prodEsmConfig,
  prodIifeConfig
}
