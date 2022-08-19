import FlexBox from './components/flex-box/flex-box.vue'
import Panel from './components/panel/panel.vue'
// import YlTable from './components/table/base-table'

const components = [
  FlexBox,
  Panel
]

const install = function(Vue:any) {
  if (install.installed) return
    install.installed = true
    // 遍历并注册全局组件
    components.map(component => {
        Vue.component(component.name, component)
  })
}
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

export default {
  install,
  ...components
}