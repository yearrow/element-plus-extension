import { renderSlot } from 'vue'

// export interface ColumnAttrs {
//   prop?: string
//   type?: string
//   label?: string
//   width?: number
//   headerAlign?: string
//   align?: string
//   headerSlot?: string
//   scopedSlot?: string
// }
export interface ColumnConfig {
  isParent?: boolean
  attr?: unknown,
  items?: ColumnConfig[]
}
// export interface TableConfigs {
//   columns?: ColumnConfig[]
// }
export const renderTable = (tableData: any, tableLoading: boolean, attrs: unknown, slots, columnConfigs: ColumnConfig[], refCallback: ()=>{}) => {
   // 一些默认配置的属性
  const $attrs = Object.assign({
    border: true,
    stripe: true,
    highlightCurrentRow: true
  }, attrs)
  return (
    <el-table
      data={tableData}
      ref={refCallback}
      v-loading={tableLoading}
      {...$attrs}
      style="height:100%;width:100%"
      >
      {{
        default: () => renderColumns(columnConfigs, slots),
        append: () => renderSlot(slots, 'append'),
        empty:() => '暂无数据'
      }}
    </el-table>
  )
}

const renderColumns = (columns: ColumnConfig[], slots) => {
  return columns.map((column: ColumnConfig) => {
     // 一些默认配置的属性
    const columnAttr = Object.assign({
      showOverflowTooltip: true,
      headerSlot: '',
      scopedSlot: '',
      label: ''
    }, column.attr)
    if (column.isParent) {
      return(
        <el-table-column
            {...columnAttr}
          >
          {{
            header: (data) => columnAttr?.headerSlot ? renderSlot(slots, columnAttr.headerSlot, { $index: data.$index, column: data.column }) : columnAttr?.label,
          }}
          {renderColumns(column.items || [], slots)}
        </el-table-column>
      )
    } else {
      return (
        <el-table-column
            {...columnAttr}
         >
          {{
            header: (data) => columnAttr?.headerSlot ? renderSlot(slots, columnAttr?.headerSlot, { $index: data.$index, column: data.column }) : columnAttr?.label,
            default: (data) => columnAttr?.scopedSlot? renderSlot(slots, columnAttr?.scopedSlot, { $index: data.$index, row: data.row, column: data.column }): null
          }}
         </el-table-column>
      )
    }
  })
}