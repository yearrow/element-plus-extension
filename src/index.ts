import FlexBox from './components/flex-box/flex-box.vue'
import Panel from './components/panel/panel.vue'
import YlTable from './components/table/table.vue'
// export { default as FlexBox } from './components/flex-box/flex-box.vue'
// export { default as Panel } from './components/panel/panel.vue'

export const registerCompnents = (app) => {
  app.component('YlFlexBox', FlexBox)
  app.component('YlPanel', Panel)
  app.component('YlTable', YlTable)
}
// export default {
//   FlexBox
// } 
// export default YlPanel 
