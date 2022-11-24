import {  defineComponent, PropType, watch } from 'vue'
import { TableConfigs, renderTable } from './render-table'
import { usePaginationComputer, Pagination } from './pagination-hooks'


// 带render函数的组件 优点：可将逻辑区与模版区分开
export default defineComponent({
  name: 'TableReport',
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
      type: Array as PropType<Object[]>,
      default: function () {
        return []
      }
    },
    refCallback: {
      type: Object as PropType<()=>{}>,
      default: () => {}
    },
    pagination: {
      type: Object as PropType<Pagination>,
      default: function () {
        return {
          small: false,
          background: true,
          pageSize: 20,
          pageSizes: [10, 20, 50],
          // prevText:'上一页',
          // nextText:'下一页',
          layout: 'sizes,prev, pager, next,  total' // prev, pager, next, jumper, ->, total, slot
        }
      }
    }
  },
  setup(props, context) {
    const flexConfig = [
      { tag: 'item-1', isFixed: false, size: '', paddingSize: 'small', clearPadding: ['left', 'right', 'top'] },
      { tag: 'item-2', isFixed: true, size: '', paddingSize: '', clearPadding: [] }
    ]
    const paginationComputer = usePaginationComputer(props.pagination, props.tableData)

    const { renderPagination, currTableData, changeTableData } = paginationComputer
    
    return {
      flexConfig,
      renderPagination,
      currTableData,
      changeTableData
    }
  },
  watch: {
    tableData(val, oldVal) {
      console.log(`new: ${val}, old: ${oldVal}`)
      this.changeTableData(val)
    },
  },
  render() {
    // render函数在响应式数据发生更改时会自动触发
    const { 
      $attrs,
      $slots,
      tableloading,
      configs,
      refCallback,
      currTableData,
      renderPagination
    } = this
    return (
      <flex-box itemNum={2} itemConfig={this.flexConfig}>
        {{
          'item-1': () => renderTable(currTableData, tableloading, $attrs, $slots, configs, refCallback),
          'item-2': () => renderPagination
        }}
      </flex-box>
    )
  }
})
