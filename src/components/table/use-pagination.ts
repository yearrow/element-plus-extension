const { ref, watch } = Vue
export const usePagination = (props) => {
  const total = ref(props.tableData.length)
  const currentPage = ref(1)
  const pageData = ref([])
  const pageSize = ref(props.pagination.pageSize)
  const layout = ref(props.pagination.layout)
  const pageSizes = ref(props.pagination.pageSizes)
  const tableData = ref(props.tableData)
  const handleSizeChange = async (size:number) => {
    currentPage.value = 1
    dividePage()
  }
  const handleCurrentPage = async (index:number) => {
    currentPage.value = index
    dividePage()
  }
  const dividePage = () => {
    pageData.value = tableData.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)
  }
  // 监听表格数据
  watch(() => props.tableData, (n:[]) => {
    tableData.value = n
    currentPage.value = 1
    total.value = tableData.value.length
    dividePage()
  })
  return {
    tableData,
    total,
    currentPage,
    pageData,
    pageSize,
    layout,
    pageSizes,
    handleSizeChange,
    handleCurrentPage,
    dividePage
  }
}