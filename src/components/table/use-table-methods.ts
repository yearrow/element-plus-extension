export const useTableMethods = (baseTableRef) => {
  const clearSelection = () => {
    baseTableRef.value.clearSelection()
  }
  const getSelectionRows = () => {
    return baseTableRef.value.getSelectionRows()
  }
  const toggleRowSelection = (row, selected) => {
    baseTableRef.value.toggleRowSelection(row, selected)
  }
  const toggleAllSelection = () => {
    baseTableRef.value.toggleAllSelection()
  }
  const toggleRowExpansion = (row, expanded) => {
    baseTableRef.value.toggleRowExpansion(row, expanded)
  }
  const setCurrentRow = (row) => {
    baseTableRef.value.setCurrentRow(row)
  }
  const clearSort = () => {
    baseTableRef.value.clearSort()
  }
  const clearFilter = (columnKeys) => {
    baseTableRef.value.clearFilter(columnKeys)
  }
  const doLayout = () => {
    baseTableRef.value.doLayout()
  }
  const sort = (prop: string, order: string) => {
    baseTableRef.value.sort(prop, order)
  }
  const scrollTo = (options: ScrollToOptions | number, yCoord?: number) => {
    baseTableRef.value.scrollTo(options, yCoord)
  }
  const setScrollTop = (top) => {
    baseTableRef.value.setScrollTop(top)
  }
  const setScrollLeft = (left) => {
    baseTableRef.value.setScrollLeft(left)
  }
  return {
    toggleRowSelection,
    clearSelection,
    getSelectionRows,
    toggleAllSelection,
    toggleRowExpansion,
    setCurrentRow,
    clearSort,
    clearFilter,
    doLayout,
    sort,
    scrollTo,
    setScrollTop,
    setScrollLeft
  }
}