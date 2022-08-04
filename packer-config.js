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
      'node_modules/@cs/element-yearrow-theme/dist': 'dist/lib/element-yearrow-theme'
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
    library: {
      rootOutPath: 'lib/' 
    }
  },
  server: {
    port: 8099,
    staticPath: 'dist/',
    prefix: '',
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
    lib: {
      type: 'library',
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
    }
  }
}
