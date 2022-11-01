import router from './router.ts'
import App from './App.vue'
import comsFrame from './frame/coms-frame.vue'
// 引入文档依赖
import '@cs/markdown-loader/lib/markdown.less'
import 'highlight.js/styles/atom-one-dark.css'
import ElementPlusExtension from '../src/index'
import demoContainer from './frame/demo-container.vue'
import './reset.less'
import './font/iconfont.css'


const app = Vue.createApp(App)

// 注册全局组件
app.component('ComsFrame', comsFrame)
app.component('DemoContainer', demoContainer)

// 注册组件库
if(ElementPlus) {
  app.use(ElementPlus, {
    locale: ElementPlusLocaleZhCn
  })
}
app.use(epe)
// 注册路由挂载
app
  .use(router)
  .mount('#app')

 
