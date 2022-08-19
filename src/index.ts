import FlexBox from './components/flex-box/flex-box.vue'
import Panel from './components/panel/panel.vue'
// import YlTable from './components/table/base-table'

const components = [
  FlexBox,
  Panel
]

const install = function(Vue:any) {
    components.map(component => {
        Vue.component(component.name, component)
  })
}

export default {
  install,
  ...components
}