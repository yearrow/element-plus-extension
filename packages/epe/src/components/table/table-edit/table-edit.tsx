import { ref, renderSlot, onUnmounted, defineComponent } from 'vue'

// 带render函数的组件 优点：可将逻辑区与模版区分开
export default defineComponent({
  name: 'YlTableReport',
  inheritAttrs: true,
  props: {
    configs: {
      type: Object,
      required: true
    },
    tableloading: {
      type: Boolean,
      default: false
    },
    tableData: {
      required: false,
      type: Array,
      default: function () {
        return []
      }
    },
    pagination: {
      type: Object,
      default: function () {
        return {
          small: false,
          background: true,
          pageSize: 10,
          pageSizes: [10, 20, 50],
          // prevText:'上一页',
          // nextText:'下一页',
          layout: 'sizes,prev, pager, next,  total' // prev, pager, next, jumper, ->, total, slot
        }
      }
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
    const { $attrs, $slots, tableloading, tableData, configs } = this
    console.log($attrs)
    return (
      <div {...$attrs} class="render-component">
        {renderSlot($slots, 'test')}
        <br />
        这是props：{JSON.stringify(configs)}
        <br />
        {renderSlot($slots, 'test')}
      </div>
    )
  }
})