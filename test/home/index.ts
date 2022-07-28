
import App from './App'
import YlPanel from '../../src/index'
const app = Vue.createApp(App)

app.use(ElementPlus)
app.component('YlPanel', YlPanel)
// app.component('YlCommonTree', YlCommonTree)

app.mount('#app')
