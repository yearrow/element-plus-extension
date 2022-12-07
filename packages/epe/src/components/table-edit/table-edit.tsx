import { ref, renderSlot, onUnmounted, defineComponent, PropType } from 'vue'
import { ColumnConfig, renderTable } from './render-table'

// 带render函数的组件 优点：可将逻辑区与模版区分开
export default defineComponent({
  name: 'TableEdit',
  inheritAttrs: true,
  props: {
    columnConfigs: {
      type: Object as PropType<ColumnConfig[]>,
      required: true
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
  setup() {
    onUnmounted(() => {
    })

    return {
    }
  },
  render() {
    // render函数在响应式数据发生更改时会自动触发（与react类似）
    const { $attrs, $slots, tableData, columnConfigs } = this
    console.log($attrs)
    return (
      <div {...$attrs} class="render-component">
        {renderSlot($slots, 'test')}
        <br />
        这是props：{JSON.stringify(columnConfigs)}
        <br />
        {renderSlot($slots, 'test')}
      </div>
    )
  }
})