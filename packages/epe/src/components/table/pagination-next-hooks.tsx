
import { ref, onMounted, onUnmounted, Ref, reactive, computed, ComputedRef, watch } from 'vue'
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';

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
  const currPage = ref(1)
  const currTotol = ref(total) // 本页行数
  const limit = inputParams.limit - 1 || pagination.pageSize || 21 
  const renderPagination = computed(() => {
    return ( 
        <div style="float:right">
          <el-button-group>
            <el-button
              type="primary"
              text
              icon={ArrowLeft}
              disabled={leftDisabled.value}
              size="small"
              onClick={(event) => {
                  computerParams(true)
                }}
              >
              {pagination.prevText || '上一页'}
            </el-button>
            <el-button
              type="primary"
              text
              disabled={rightDisabled.value}
              size="small"
              onClick={(event) => {
                  computerParams(false)
                }}
              >
              {pagination.nextText || '下一页'}
              <el-icon class="el-icon--right">
                <ArrowRight />
              </el-icon>
            </el-button>
          </el-button-group>
          <span style="color: var(--el-text-color-regular);font-size: var(--el-font-size-extra-small);padding:5px">
            第 {currPage.value} 页
          </span>
        </div> 
      )
    })
  const changeTableData = (num: number) => {
    currTotol.value = num
  }
  const leftDisabled = computed(() => {
    return currPage.value === 1
  })
  const rightDisabled = computed(() => {
    return currTotol.value <= inputParams.limit - 1
  })
  const computerParams = (isLeft:boolean) => {
    if(isLeft) {
      currPage.value --
    } else {
      currPage.value ++
    }
    inputParams.draw = currPage.value
    inputParams.offset = limit * (inputParams.draw - 1)
    emit('reload')
  }
  return {
    renderPagination,
    changeTableData
  }
}
