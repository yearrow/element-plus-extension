import { renderSlot, defineComponent, PropType } from 'vue'
import { TableConfigs, renderTable } from './render-table'

// 带render函数的组件 优点：可将逻辑区与模版区分开
export default defineComponent({
  name: 'TableOnly',
  inheritAttrs: true,
  props: {
    configs: {
      type: Object as PropType<TableConfigs>,
      required: true
    },
    tableloading: {
      type: Boolean,
      default: false
    },
    tableData: {
      required: false,
      type: Array as PropType<ReturnType<<T> () => T[]>>,
      default: function () {
        return []
      }
    },
    refCallback: {
      type: Object as PropType<()=>{}>,
      default: () => {}
    }
  },
  setup(props, context) {
    return {
    }
  },
  render() {
    // render函数在响应式数据发生更改时会自动触发
    const { $attrs, $slots, tableloading, tableData, configs, refCallback } = this
    return (
      renderTable(tableData, tableloading, $attrs, $slots, configs, refCallback)
    )
  }
})