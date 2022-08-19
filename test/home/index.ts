import { createApp } from 'vue'
import App from './App'
import ElementPlusExtension from '../../src/index'
const app = createApp(App)

app.use(ElementPlus)

app.use(ElementPlusExtension)

app.mount('#app')
