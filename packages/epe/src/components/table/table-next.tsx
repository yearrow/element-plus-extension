import { defineComponent, PropType, watch } from 'vue'
import { ColumnConfig, renderTable } from './render-table'
import { usePaginationComputer, Pagination, ParamsModel } from './pagination-next-hooks'



// 带render函数的组件 优点：可将逻辑区与模版区分开
export default defineComponent({
  name: 'TableNext',
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
      type: Object as PropType<Object[]>,
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
          pageSize: 20,
          prevText:'上一页',
          nextText:'下一页'
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
    const paginationComputer = usePaginationComputer(props.pagination, props.tableData.length, context.emit, props.input)

    const { renderPagination, changeTableData } = paginationComputer
    
    return {
      flexConfig,
      renderPagination,
      changeTableData
    }
  },
  watch: {
    tableData(val, oldVal) {
      this.changeTableData(val.length)
    },
  },
  computed: {
    currTableData(){
      const pgSize = this.pagination.pageSize || this.input.limit - 1
      if(pgSize + 1 > this.tableData.length) {
        return this.tableData
      } else {
        return this.tableData.slice(0, this.tableData.length -1)
      }
    }
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
      tableData,
      currTableData
    } = this
    return (
      <flex-box itemNum={2} itemConfig={this.flexConfig}>
        {{
          'item-1': () => renderTable(currTableData, tableLoading, $attrs, $slots, columnConfigs, refCallback),
          'item-2': () => renderPagination
        }}
      </flex-box>
    )
  }
})
