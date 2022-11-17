import { ref, renderSlot, onUnmounted, defineComponent } from 'vue'
import { ElTable } from 'element-plus'


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
    },
    refCallback: {
      type: Object,
      default: () => {}
    }
  },
  setup(props, context) {
    const flexConfig = [
      { tag: 'item-1', isFixed: false, size: '', paddingSize: 'small', clearPadding: ['left', 'right', 'top'] },
      { tag: 'item-2', isFixed: true, size: '', paddingSize: '', clearPadding: [] }
    ]
    return {
      flexConfig
    }
  },
  render() {
    // render函数在响应式数据发生更改时会自动触发（与react类似）
    const { $attrs, $slots, tableloading, tableData, configs, refCallback } = this
    console.log(this)
    return (
      <flex-box itemNum={2} itemConfig={this.flexConfig}>
        {{
          'item-1': () => renderTable(tableData, tableloading, $attrs, $slots, configs, refCallback),
          'item-2': () => <div style="height:100%">222222222222222</div>
        }}
      </flex-box>
    )
  }
})

const renderTable = (tableData, tableloading, attrs, slots, configs, refCallback) => {
  return (
    <el-table
      data={tableData}
      ref={refCallback}
      v-loading={tableloading}
      {...attrs}
      style="height:100%;width:100%"
      >
      {renderColumns(configs.columns, slots)}
    </el-table>
  )
}

const renderColumns = (columns, slots) => {
  return columns.map(column => {
    const columnAttr = column.attr
    if (column.isParent) {
      console.log(slots, columnAttr.headerSlot)
      return(
        <el-table-column
          prop={columnAttr.prop}
          label={columnAttr.label}
          type={columnAttr.type}
            {...columnAttr}
          >
          {{
            header: (data) => columnAttr.headerSlot ? renderSlot(slots, columnAttr.headerSlot, { $index: data.$index, column: data.column }) : columnAttr.label,
          }}
          {renderColumns(column.items, slots)}
        </el-table-column>
      )
    } else {
      return (
        <el-table-column
          prop={columnAttr.prop}
          label={columnAttr.label}
          type={columnAttr.type}
            {...columnAttr}
         >
          {{
            header: (data) => columnAttr.headerSlot ? renderSlot(slots, columnAttr.headerSlot, { $index: data.$index, column: data.column }) : columnAttr.label,
            default: (data) => columnAttr.scopedSlot? renderSlot(slots, columnAttr.scopedSlot, { $index: data.$index, row: data.row, column: data.column }): null
          }}
         </el-table-column>
      )
    }
  })
}