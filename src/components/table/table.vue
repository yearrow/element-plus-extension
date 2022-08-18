<template>
  <div class="yl-table">
    <BaseTable
      ref="baseTableRef"
      :data="pageData"
      v-loading="props.loading"
      :configs="configs"
      :slots="slots"
      @select="eventMethod.onSelect"
      @select-all="eventMethod.onSelectAll"
      @selection-change="eventMethod.onSelectionChange"
      @cell-mouse-enter="eventMethod.onCellMouseEnter"
      @cell-mouse-leave="eventMethod.onCellMouseLeave"
      @cell-click="eventMethod.onCellClick"
      @cell-dblclick="eventMethod.onCellDblclick"
      @cell-contextmenu="eventMethod.onCellContextmenu"
      @row-click="eventMethod.onRowClick"
      @row-contextmenu="eventMethod.onRowContextmenu"
      @row-dblclick="eventMethod.onRowDblclick"
      @header-click="eventMethod.onHeaderClick"
      @header-contextmenu="eventMethod.onHeaderContextmenu"
      @sort-change="eventMethod.onSortChange"
      @filter-change="eventMethod.onFilterChange"
      @current-change="eventMethod.onCurrentChange"
      @header-dragend="eventMethod.onHeaderDragend"
      @expand-change="eventMethod.onExpandChange"
      class="yl-table__table">
    </BaseTable>
    <el-pagination
      class="yl-table__pagination"
      background
      :total="total"
      v-model:currentPage="currentPage"
      :layout="layout"
      v-model:page-size="pageSize"
      :page-sizes="pageSizes"
      @size-change="handleSizeChange"
      @current-change="handleCurrentPage"
    />
  </div>
</template>
<script lang="ts" setup>
import { usePagination } from './use-pagination'
import { useTableEvent } from './use-table-event'
import { useTableMethods } from './use-table-methods'
import BaseTable from './base-table'
const { ref, useSlots } = Vue
const slots = useSlots()
const emits = defineEmits([])
type Column = {
  attr: {
    type: string,
    align: string,
    headerAlign: string,
    prop: string,
    label: string,
    width: number,
    scopedSlot: string,
    fixed: string
  }
}
type TableConfig = {
  options: object,
  columns: Column[]
}
type Pagination = {
  layout: string,
  pageSizes: number[],
  pageSize: number
}
interface Props {
  tableData: [],
  loading: boolean,
  configs: TableConfig,
  pagination: Pagination
}

const props = withDefaults(defineProps<Props>(), {
  tableData: () => {
    return []
  },
  loading: false,
  configs: () => {
    return { columns: [], options: {} }
  },
  pagination: () => {
    return {
      layout: 'total, sizes, prev, pager, next',
      pageSizes: [10, 20, 30, 50, 100],
      pageSize: 10
    }
  }
})
const {
  total,
  currentPage,
  pageData,
  pageSize,
  layout,
  pageSizes,
  handleSizeChange,
  handleCurrentPage
} = usePagination(props)
// 事件
const eventMethod = useTableEvent(emits)
// 方法
const baseTableRef = ref<InstanceType<typeof ElTable>>()
const tableMethod = useTableMethods(baseTableRef)
defineExpose(tableMethod)

</script>
<style lang="less" scoped>
.yl-table__table {
  height: 100%;
}
.yl-table__pagination {
  padding-top: 10px;
  display: flex;
  justify-content: right;
}
</style>
