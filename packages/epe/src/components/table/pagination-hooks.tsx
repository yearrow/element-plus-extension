
import { ref, onMounted, onUnmounted, Ref, reactive, computed, ComputedRef, watch } from 'vue'

export interface Pagination {
  small?: boolean, // 是否使用小型分页样式
  background?: boolean, // 是否为分页按钮添加背景色
  pageSize?: number, // 每页显示条目个数
  pageSizes?: number[], // 每页显示个数选择器的选项设置
  prevText?: string, // 翻页表格上一页
  nextText?: string, // 翻页表格下一页
  layout?: string // 组件布局，子组件名用逗号分隔 sizes / prev / pager / next / jumper / -> / total / slot
}

interface PaginationComputer {
  renderPagination: ComputedRef<JSX.Element>,
  currTableData: ComputedRef<Object[]>,
  changeTableData: (data: any) => void
}
/**
 * 后分页计算
 * @param pagination 分页参数
 * @param tableData 数据
 * @returns 
 */
export function usePaginationComputer(pagination:Pagination, tableData:Object[]): PaginationComputer {
  const paginationModel = reactive(pagination)
  const currPage = ref(1)
  const pageSize = ref(paginationModel.pageSize || 10)
  const allData = ref(tableData)
  const renderPagination = computed(() => {
    return (
      <el-pagination
        small={paginationModel.small}
        layout={paginationModel.layout}
        style="float:right"
        pageSizes={paginationModel.pageSizes}
        background={paginationModel.background}
        total={allData.value.length}
        v-models={[
          [currPage.value, 'currentPage'],
          [pageSize.value, 'pageSize']
        ]}
        />      
      )
    })

  const currTableData = computed(() => {
    return allData.value.slice((currPage.value - 1) * pageSize.value, currPage.value * pageSize.value)
  })
  const changeTableData = (data) => {
    allData.value = data
  }
  return {
    renderPagination,
    currTableData,
    changeTableData
  }
}

