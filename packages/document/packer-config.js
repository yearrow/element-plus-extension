// eslint-disable-next-line no-unused-vars
const path = require('path');
const defineOptions = require('unplugin-vue-define-options/webpack');
const markdownConf = require('@cs/markdown-loader/lib/vue-markdown-config');
module.exports = {
  global: {
    cwd: __dirname,
    clear: ['dist'],
    copy: {
      'node_modules/vue/dist': 'dist/lib/vue',
      'node_modules/vue-router/dist': 'dist/lib/vue-router',
      'node_modules/element-plus/dist': 'dist/lib/element-plus',
      'node_modules/@cs/element-yearrow-theme/dist': 'dist/lib/element-yearrow-theme',
      '../epe/lib': 'dist/lib/epe'
    },
    browserVue3: {
      rootOutPath: 'dist/',
      packerConfig: {
        resolve: {
          alias: {
            '@docs': path.resolve(__dirname, 'docs')
          },
          extensions: ['.js', '.ts', '.vue', '.tsx', '.jsx', '.json']
        },
        externals: {
          vue: 'Vue'
        }
      }
    },
    libraryVue3: {
      rootOutPath: 'lib/',
      packerConfig: {
      }
    }
  },
  server: {
    port: 8099,
    staticPath: 'dist/',
    prefix: '/dosktop-element/',
    packerConfig: {
    }
  },
  entries: {
    docs: {
      type: 'browserVue3',
      title: 'element-plus-extension',
      input: 'src/docs/index.ts',
      packerConfig: {
        module: {
          rules: [
            {
              test: /\.md$/,
              use: [
                {
                  loader: 'vue-loader'
                },
                {
                  loader: '@cs/markdown-loader',
                  options: markdownConf()
                }
              ]
            }
          ]
        }
      }
    },
    rules: {
      type: 'browserVue3',
      title: 'element-plus-extension',
      input: 'src/rules/index.ts',
      packerConfig: {
        module: {
          rules: [
            {
              test: /\.md$/,
              use: [
                {
                  loader: 'vue-loader'
                },
                {
                  loader: '@cs/markdown-loader',
                  options: markdownConf()
                }
              ]
            }
          ]
        }
      }
    },
    test: {
      type: 'browserVue3',
      title: '测试页',
      input: 'src/test/home/index.ts'
    }
  }
};
