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
    const flexConfig = [
      { tag: 'item-1', isFixed: false, size: '', paddingSize: 'small', clearPadding: ['left', 'right', 'top'] },
      { tag: 'item-2', isFixed: true, size: '', paddingSize: '', clearPadding: [] }
    ]
    onUnmounted(() => {
    })

    return {
      flexConfig
    }
  },
  render() {
    // render函数在响应式数据发生更改时会自动触发（与react类似）
    const { $attrs, $slots, tableloading, tableData, configs } = this
    console.log($attrs)
    return (
      <flex-box itemNum={2} itemConfig={this.flexConfig}>
        {{
          'item-1': () => renderTable(this),
          'item-2': () => <div style="height:100%">222222222222222</div>
        }}
      </flex-box>
    )
  }
})

const renderTable = (_this) => {
  return (
    <el-table
      data={_this.tableData}
      v-loading={_this.tableLoading}
      {..._this.$attrs}
      style="height:100%;width:100%"
      >
      {renderColumns(_this.configs.columns)}
    </el-table>
  )
}

const renderColumns = (columns) => {
  return columns.map(column => {
    const columnAttr = column.attr
    if (column.isParent) {
      return(
        <el-table-column
          label={columnAttr.label}
          render-header={columnAttr.renderHeader}
          resizable={columnAttr.resizable}
          formatter={columnAttr.formatter}
          header-align={columnAttr.headerAlign}
          class-name={columnAttr.className}
          label-class-name={columnAttr.labelClassName}
          >
          {renderColumns(column.items)}
        </el-table-column>
      )
    } else {
      return (
        <el-table-column
          prop={columnAttr.prop}
          label={columnAttr.label}
          type={columnAttr.type}
          width={columnAttr.width}
          align={columnAttr.align}
          header-align={columnAttr.headerAlign}
          />
        )
    }
  })
}