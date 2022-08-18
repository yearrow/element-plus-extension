
export const useTableEvent = (emits) => {
  const onSelect = (...args) => {
    emits('select', ...args)
  }
  const onSelectAll = (...args) => {
    emits('select-all', ...args)
  }
  const onSelectionChange = (...args) => {
    emits('selection-change', ...args)
  }
  const onCellMouseEnter  = (...args) => {
    emits('cell-mouse-enter', ...args)
  }
  const onCellMouseLeave  = (...args) => {
    emits('cell-mouse-leave', ...args)
  }
  const onCellClick  = (...args) => {
    emits('cell-click', ...args)
  }
  const onCellDblclick  = (...args) => {
    emits('cell-dblclick', ...args)
  }
  const onCellContextmenu  = (...args) => {
    emits('cell-contextmenu', ...args)
  }
  const onRowClick  = (...args) => {
    emits('row-click', ...args)
  }
  const onRowContextmenu  = (...args) => {
    emits('row-contextmenu', ...args)
  }
  const onRowDblclick  = (...args) => {
    emits('row-dblclick', ...args)
  }
  const onHeaderClick  = (...args) => {
    emits('header-click', ...args)
  }
  const onHeaderContextmenu  = (...args) => {
    emits('header-contextmenu', ...args)
  }
  const onSortChange  = (...args) => {
    emits('sort-change', ...args)
  }
  const onFilterChange  = (...args) => {
    emits('filter-change', ...args)
  }
  const onCurrentChange  = (...args) => {
    emits('current-change', ...args)
  }
  const onHeaderDragend  = (...args) => {
    emits('header-dragend', ...args)
  }
  const onExpandChange  = (...args) => {
    emits('expand-change', ...args)
  }
  return {
    onSelect,
    onSelectAll,
    onSelectionChange,
    onCellMouseEnter,
    onCellMouseLeave,
    onCellClick,
    onCellDblclick,
    onCellContextmenu,
    onRowClick,
    onRowContextmenu,
    onRowDblclick,
    onHeaderClick,
    onHeaderContextmenu,
    onSortChange,
    onFilterChange,
    onCurrentChange,
    onHeaderDragend,
    onExpandChange
  }
}