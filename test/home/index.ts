
import App from './App'
import ElementPlusExtension from '../../src/index'
const app = Vue.createApp(App)

app.use(ElementPlus)

app.use(ElementPlusExtension)

app.mount('#app')
