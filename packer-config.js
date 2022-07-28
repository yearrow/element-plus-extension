// eslint-disable-next-line no-unused-vars
const path = require('path')
module.exports = {
  global: {
    cwd: __dirname,
    clear: ['dist'],
    copy: {
      'node_modules/vue/dist': 'dist/lib/vue',
      'node_modules/vue-router/dist': 'dist/lib/vue-router',
      'node_modules/element-plus/dist': 'dist/lib/element-plus'
    },
    browserVue3: {
      rootOutPath: 'dist/',
      packerConfig: {
        resolve: {
          extensions: ['.js', '.ts', '.json', '.jsx', '.vue', '.tsx']
        },
        externals: {
          vue: 'Vue'
        }
      }
    },
    library: {
      rootOutPath: 'dist/lib/'
    }
  },
  server: {
    port: 8088,
    staticPath: 'dist/',
    prefix: '',
    packerConfig: {
    }
  },
  entries: {
    home: {
      type: 'browserVue3',
      title: '门户',
      input: 'test/home/index.ts'
    }
  }
}
