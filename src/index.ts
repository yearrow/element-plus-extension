import FlexBox from './components/flex-box/flex-box.vue'
import Panel from './components/panel/panel.vue'
// import YlTable from './components/table/base-table'
// export { default as FlexBox } from './components/flex-box/flex-box.vue'
// export { default as Panel } from './components/panel/panel.vue'

export const registerCompnents = (app) => {
  app.component(FlexBox.name, FlexBox)
  app.component(Panel.name, Panel)
  // app.component('YlTable', YlTable)
}
