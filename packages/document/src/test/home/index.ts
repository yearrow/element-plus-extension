import App from './App'
import epe  from '../../../../epe/lib/epe.esm.mini.js'
const app = Vue.createApp(App)
app.use(ElementPlus)
app.use(epe)
app.mount('#app')
