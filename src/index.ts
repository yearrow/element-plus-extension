import FlexBox from './components/flex-box/flex-box.vue'
import Panel from './components/panel/panel.vue'
// export { default as FlexBox } from './components/flex-box/flex-box.vue'
// export { default as Panel } from './components/panel/panel.vue'

export const registerCompnents = (app) => {
  app.component('FlexBox', FlexBox)
  app.component('Panel', Panel)
}
// export default {
//   FlexBox
// } 
export default YlPanel 
