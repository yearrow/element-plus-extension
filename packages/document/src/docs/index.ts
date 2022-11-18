import router from './router.ts'
import App from './App.vue'
import comsFrame from './frame/coms-frame.vue'
// 引入文档依赖
import '@cs/markdown-loader/lib/markdown.less'
import 'highlight.js/styles/atom-one-dark.css'
import demoContainer from './frame/demo-container.vue'
// import ElementPlusExtension from '../../../../packages/epe/src/index'
import './reset.less'
import epe from '@cs/element-plus-extension/lib/epe.esm.mini.js'


const app = Vue.createApp(App)

// 注册全局组件
app.component('ComsFrame', comsFrame)
app.component('DemoContainer', demoContainer)

// 注册组件库
// if(ElementPlus) {
//   app.use(ElementPlus, {
//     locale: ElementPlusLocaleZhCn
//   })
// }
debugger
app.use(epe)
// 注册路由挂载
app
  .use(router)
  .mount('#app')

 
