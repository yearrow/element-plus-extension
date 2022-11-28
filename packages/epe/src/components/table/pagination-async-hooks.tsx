
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
  changeTableData: (data: any) => void
}
export interface TableData {
  count:number
  rows: Object[]
}

export interface ParamsModel {
  limit: number,
  draw: number,
  offset: number,
  order?: string[],
  condtionItems?: []
}

/**
 * 先分页计算
 * @param pagination 分页配置项
 * @param total 总行数
 * @param emit 事件
 * @param inputParams 分页参数
 * @param isNext 翻页表格（翻页表格只有上一页下一页）
 * @returns 
 */
export function usePaginationComputer(pagination:Pagination, total:number, emit, inputParams:ParamsModel): PaginationComputer {
  const paginationModel = reactive(pagination)
  const currPage = ref(1)
  const pageSize = ref(paginationModel.pageSize || 10)
  const count = ref(total)
  const renderPagination = computed(() => {
    return (
      <el-pagination
        small={paginationModel.small}
        layout={paginationModel.layout}
        style="float:right"
        pageSizes={paginationModel.pageSizes}
        background={paginationModel.background}
        total={count.value}
        v-models={[
          [currPage.value, 'currentPage'],
          [pageSize.value, 'pageSize']
        ]}
        />      
      )
    })
  const changeTableData = (data:TableData) => {
    count.value = data.count
  }
  const computerParams = () => {
    inputParams.draw = currPage.value
    inputParams.limit = pageSize.value
    inputParams.offset = inputParams.limit * (inputParams.draw - 1)
    emit('reload')
  }
  watch(currPage, (n, o) => {
    computerParams()
  })
  watch(pageSize, (n, o) => {
    computerParams()
  })
  return {
    renderPagination,
    changeTableData
  }
}
