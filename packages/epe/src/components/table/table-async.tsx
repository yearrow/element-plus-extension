import { defineComponent, PropType, watch } from 'vue'
import {  ColumnConfig, renderTable } from './render-table'
import { usePaginationComputer, Pagination, TableData, ParamsModel } from './pagination-async-hooks'


// 带render函数的组件 优点：可将逻辑区与模版区分开
export default defineComponent({
  name: 'TableAsync',
  inheritAttrs: true,
  props: {
    columnConfigs: {
      type: Object as PropType<ColumnConfig[]>,
      required: true
    },
    tableLoading: {
      type: Boolean,
      default: false
    },
    tableData: {
      required: false,
      type: Object as PropType<TableData>,
      default: function () {
        return {
          count: 0,
          rows: []
        }
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
          layout: '->,sizes,prev, pager, next,  total' // prev, pager, next, jumper, ->, total, slot
        }
      }
    },
    input: {
      required: false,
      type: Object as PropType<ParamsModel>,
      default: function () {
        return {
          limit: 0,
          draw: 0,
          offset: 0,
          order: [],
          condtionItems: []
        }
      }
    },
  },
  emits:{
    reload: null
  },
  setup(props, context) {
    const flexConfig = [
      { tag: 'item-1', isFixed: false, size: '', paddingSize: 'small', clearPadding: ['left', 'right', 'top'] },
      { tag: 'item-2', isFixed: true, size: '', paddingSize: '', clearPadding: [] }
    ]
    const paginationComputer = usePaginationComputer(props.pagination, props.tableData.count, context.emit, props.input)

    const { renderPagination, changeTableData } = paginationComputer
    
    return {
      flexConfig,
      renderPagination,
      changeTableData
    }
  },
  watch: {
    tableData(val, oldVal) {
      this.changeTableData(val)
    },
  },
  render() {
    // render函数在响应式数据发生更改时会自动触发
    const { 
      $attrs,
      $slots,
      tableLoading,
      columnConfigs,
      refCallback,
      renderPagination,
      tableData
    } = this
    return (
      <flex-box itemNum={2} itemConfig={this.flexConfig}>
        {{
          'item-1': () => renderTable(tableData.rows, tableLoading, $attrs, $slots, columnConfigs, refCallback),
          'item-2': () => renderPagination
        }}
      </flex-box>
    )
  }
})
