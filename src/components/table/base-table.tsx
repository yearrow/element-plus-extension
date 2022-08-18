const { defineComponent, h, renderSlot, ref } = Vue
const { ElTable, ElTableColumn, ElPagination } = ElementPlus

export default defineComponent({
  name: 'CommonTable',
  props: {
    data: [],
    configs: {
      type: Object,
      default: () => {
        return { columns: [], options: {} }
      }
    },
    pagination: {
      type: Object,
      default: () => {
        return {
          layout: 'total, sizes, prev, pager, next',
          pageSizes: [10, 20, 30, 50, 100],
          pageSize: 10
        }
      }
    },
    loading: false
  },
  emits: [
    'select',
    'select-all',
    'selection-change',
    'cell-mouse-enter',
    'cell-mouse-leave',
    'cell-click',
    'cell-dblclick',
    'cell-contextmenu',
    'row-click',
    'row-contextmenu',
    'row-dblclick',
    'header-click',
    'header-contextmenu',
    'sort-change',
    'filter-change',
    'current-change',
    'header-dragend',
    'expand-change'
  ],
  expose: [
    'toggleRowSelection',
    'clearSelection',
    'getSelectionRows',
    'toggleAllSelection',
    'toggleRowExpansion',
    'setCurrentRow',
    'clearSort',
    'clearFilter',
    'doLayout',
    'sort',
    'scrollTo',
    'setScrollTop',
    'setScrollLeft'
  ],
  methods: {
    clearSelection () {
      this.$refs.tableRef.clearSelection()
    },
    getSelectionRows () {
      return this.$refs.tableRef.getSelectionRows()
    },
    toggleRowSelection (row) {
      this.$refs.tableRef.toggleRowSelection(row)
    },
    toggleAllSelection () {
      this.$refs.tableRef.toggleAllSelection()
    },
    toggleRowExpansion (row, expanded) {
      this.$refs.tableRef.toggleRowExpansion(row, expanded)
    },
    setCurrentRow (row) {
      this.$refs.tableRef.setCurrentRow(row)
    },
    clearSort () {
      this.$refs.tableRef.clearSort()
    },
    clearFilter (columnKeys) {
      this.$refs.tableRef.clearFilter(columnKeys)
    },
    doLayout () {
      this.$refs.tableRef.doLayout()
    },
    sort (prop: string, order: string) {
      this.$refs.tableRef.sort(prop, order)
    },
    scrollTo (options: ScrollToOptions | number, yCoord?: number) {
      this.$refs.tableRef.scrollTo(options, yCoord)
    },
    setScrollTop (top) {
      this.$refs.tableRef.setScrollTop(top)
    },
    setScrollLeft (left) {
      this.$refs.tableRef.setScrollLeft(left)
    },
    renderTable (attrs, slots) {
      const columns = renderColoumns(this.configs.columns, slots)
      return h(ElTable, {
        ref: "tableRef",
        // 属性
        data: this.data,
        vLoading: this.loading,
        height: this.configs.options.height,
        maxHeight: this.configs.options.maxHeight,
        stripe: this.configs.options.stripe,
        border: this.configs.options.border,
        size: this.configs.options.size,
        fit: this.configs.options.fit,
        showHeader: this.configs.options.showHeader,
        highlightCurrentRow: this.configs.options.highlightCurrentRow,
        currentRowKey: this.configs.options.currentRowKey,
        rowClassName: this.configs.options.rowClassName,
        rowStyle: this.configs.options.rowStyle,
        cellClassName: this.configs.options.cellClassName,
        cellStyle: this.configs.options.cellStyle,
        headerRowClassName: this.configs.options.headerRowClassName,
        headerRowStyle: this.configs.options.headerRowStyle,
        headerCellClassName: this.configs.options.headerCellClassName,
        headerCellStyle: this.configs.options.headerCellStyle,
        rowKey: this.configs.options.rowKey,
        emptyText: this.configs.options.emptyText,
        defaultExpandAll: this.configs.options.defaultExpandAll,
        expandRowKeys: this.configs.options.expandRowKeys,
        defaultSort: this.configs.options.defaultSort,
        tooltipEffect: this.configs.options.tooltipEffect,
        showSummary: this.configs.options.showSummary,
        sumText: this.configs.options.sumText,
        summaryMethod: this.configs.options.summaryMethod,
        spanMethod: this.configs.options.spanMethod,
        selectOnIndeterminate: this.configs.options.selectOnIndeterminate,
        indent: this.configs.options.indent,
        lazy: this.configs.options.lazy,
        load: this.configs.options.load,
        treeProps: this.configs.options.treeProps,
        tableLayout: this.configs.options.tableLayout,
        scrollbarAlwaysOn: this.configs.options.scrollbarAlwaysOn,
        flexible: this.configs.options.flexible,
        // 事件
        onSelect: this.handleEvent('select'),
        onSelectAll: this.handleEvent('select-all'),
        onSelectionChange: this.handleEvent('selection-change'),
        onCellMouseEnter: this.handleEvent('cell-mouse-enter'),
        onCellMouseLeave: this.handleEvent('cell-mouse-leave'),
        onCellClick: this.handleEvent('cell-click'),
        onCellDblclick: this.handleEvent('cell-dblclick'),
        onCellContextmenu: this.handleEvent('cell-contextmenu'),
        onRowClick: this.handleEvent('row-click'),
        onRowContextmenu: this.handleEvent('row-contextmenu'),
        onRowDblclick: this.handleEvent('row-dblclick'),
        onHeaderClick: this.handleEvent('header-click'),
        onHeaderContextmenu: this.handleEvent('header-contextmenu'),
        onSortChange: this.handleEvent('sort-change'),
        onFilterChange: this.handleEvent('filter-change'),
        onCurrentChange: this.handleEvent('current-change'),
        onHeaderDragend: this.handleEvent('header-dragend'),
        onExpandChange: this.handleEvent('expand-change'),
      },
      [...columns])
    },
    renderPagination() {
      return h(ElPagination, {
        class: "yl-table__pagination",
        background:true,
        total:12,
        'modelValue:CurrentPage': 2,
        layout: this.props.pagination.layout,
        vModelPageSize:"pageSize",
        pageSizes:this.props.pagination.pageSizes
      })
    }
  },
  setup(props, { slots, attrs, emit }) {
    const handleEvent = (action) => {
      return function () {
        emit(action, ...arguments)
      }
    }
    return {
      handleEvent,
      slots,
      attrs,
      props
    }
  },
  render() {
    return h('div', {
      class: "yl-table"
    }, [
      this.renderTable(this.attrs, this.slots),
      this.renderPagination(this.attrs)
    ])
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
      // slot处理
      const defaultSlot = props.attr.scopedSlot ? {
        default: (row) => {
          return renderSlot(slots, props.attr.scopedSlot, {row: row.row, column: row.column, $index: row.$index})
        }} : null
      const headerSlot = props.attr.headerScopedSlot ? {
        header: (col) => {
          return renderSlot(slots, props.attr.headerScopedSlot, {column: col.column, $index: col.$index})
        }}: null
      const slot = {
        default: defaultSlot?.default,
        header: headerSlot?.header
      }
      return h(ElTableColumn, columnHeader(props), slot)
    }
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
    sortMethod: props.attr.sortMethod,
    sortBy: props.attr.sortBy,
    sortOrders: props.attr.sortOrders,
    resizable: props.attr.resizable,
    showOverflowTooltip: props.attr.showOverflowTooltip,
    formatter: props.attr.formatter,
    headerAlign: props.attr.headerAlign,
    selectable: props.attr.selectable,
    align: props.attr.align,
    className: props.attr.className,
    labelClassName: props.attr.labelClassName,
    reserveSelection: props.attr.reserveSelection,
    filters: props.attr.filters,
    filterPlacement: props.attr.filterPlacement,
    filterMultiple: props.attr.filterMultiple,
    filterMethod: props.attr.filterMethod,
    filteredValue: props.attr.filteredValue,
  }
}