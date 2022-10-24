// eslint-disable-next-line no-unused-vars
const path = require('path')
// const markdownConf = require('@cs/markdown-loader')
const markdownConf = require('@cs/markdown-loader/lib/vue-markdown-config')
module.exports = {
  global: {
    cwd: __dirname,
    clear: ['dist'],
    copy: {
      'node_modules/vue/dist': 'dist/lib/vue',
      'node_modules/vue-router/dist': 'dist/lib/vue-router',
      'node_modules/element-plus/dist': 'dist/lib/element-plus',
      'node_modules/@cs/element-yearrow-theme/dist': 'dist/lib/element-yearrow-theme',
      'lib': 'dist/lib/epe'
    },
    eslint: {
      lint: false,
      option: {
        fix: true,
        exclude: 'node_modules'
      }
    },
    browserVue3: {
      rootOutPath: 'dist/',
      packerConfig: {
        resolve: {
          alias: {
            "@src": path.resolve(__dirname, 'src'),
            "@docs": path.resolve(__dirname, 'docs')
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
    },
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
      input: 'docs/index.ts',
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
      input: 'rules/index.ts',
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
    epe: {
      type: 'libraryVue3',
      input: 'src/index.ts',
      output: {
        filePath:'',
        fileName:'epe',
        library: {
          name: 'epe',
          type:'umd',
          export: 'default',
          umdNamedDefine: true 
        }
      },
      packerConfig: {
        externals : {
          vue:{
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
          }
        }
      },
    },
    test: {
      type: 'browserVue3',
      title: '测试页',
      input: 'test/home/index.ts'
    },
  }
}
