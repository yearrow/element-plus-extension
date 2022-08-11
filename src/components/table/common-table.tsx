

const { defineComponent, h, renderSlot, Template } = Vue
const { ElTable, ElTableColumn } = ElementPlus
export default defineComponent({
  name: 'CommonTable',
  props: {
    data: [],
    loading: false,
    configs: {},
    slots: {}
  },
  setup(props, { slots, attrs }) {
  },
  render() {
    const columns = renderColoumns(this.configs.columns, this.slots)
    console.log(this)
    return h(ElTable, {
      ref: "tableRef",
      data: this.data,
      loading: this.loading
    },
    [...columns])
  }
})

/**
 * 构造列
 * @param columns 列属性列表
 * @param slots 传进来的slot
 * @returns 返回列的组件
 */
const renderColoumns = (columns, slots) => {
  const result = columns.map(props => {
    if(props.attr.isParent) {
      return h(ElTableColumn, columnHeader(props), [...renderColoumns(props.attr.children, slots)] )
    } else {
      const slot = props.attr.scopedSlot ? {
        default(row){
          return renderSlot(slots, props.attr.scopedSlot, {row: row.row})
        }} : null
      return h(ElTableColumn, columnHeader(props), slot
    )}
  })
  return result
}

const columnHeader = (props) => {
  return {
    type: props.attr.type,
    prop: props.attr.prop,
    label: props.attr.label,
    width: props.attr.width,
    index: props.attr.index,
    columnKey: props.attr.columnKey,
    minWidth: props.attr.minWidth,
    fixed: props.attr.fixed,
    renderHeader: props.attr.renderHeader,
    sortable: props.attr.sortable,
    formatter: props.attr.formatter,
    headerAlign: props.attr.headerAlign,
    selectable: props.attr.selectable,
    align: props.attr.align,
  }
}