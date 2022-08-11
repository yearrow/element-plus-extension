
import App from './App'
import {registerCompnents} from '../../src/index'
const app = Vue.createApp(App)

app.use(ElementPlus)

registerCompnents(app)
app.mount('#app')
