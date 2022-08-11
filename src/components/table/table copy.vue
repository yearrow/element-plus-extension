<template>
  <yl-flex-box
    :vertical="true"
    :is-reverse="true"
  >
    <template #fixed>
      <el-pagination
        background
        :total="tableData.length"
        v-model:currentPage="currentPage"
        :layout="props.pagination.layout"
        v-model:page-size="pageSize"
        :page-sizes="props.pagination.pageSizes"
        class="table-pagination"
        style="float: right;padding-top: var(--layout-gap-base);"
        @size-change="handleSizeChange"
        @current-change="handleCurrentPage"
      />
    </template>
    <template #flex>
      <el-table
        ref="tableRef"
        v-loading="props.loading"
        :data="pageData"
        height="100%"
        highlight-current-row
        border
        @current-change="handleCurrentChange"
        @selection-change="selectionChange"
      >
        <el-table-column
          v-for="(column,i) in props.configs.columns"
          :key="i"
          :type="column.attr.type"
          :width="column.attr.width"
          :prop="column.attr.prop"
          :label="column.attr.label"
          :align="column.attr.align"
          :header-align="column.attr.headerAlign"
          :fixed="column.attr.fixed"
          show-overflow-tooltip
        >
          <template #default="scope">
            <slot
              v-if="column.attr.scopedSlot"
              :name="column.attr.scopedSlot"
              :row="scope.row"
            />
          </template>
        </el-table-column>
      </el-table>
    </template>
  </yl-flex-box>
</template>
<script lang="tsx" setup>

const { ref, reactive, watch } = Vue
const emits = defineEmits(['loadData', 'currentChange', 'selectionChange'])
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
    return { columns: [] }
  },
  pagination: () => {
    return {
      layout: 'total, sizes, prev, pager, next',
      pageSizes: [10, 20, 30, 50, 100],
      pageSize: 10
    }
  }
})
const tableRef = ref<InstanceType<typeof ElTable>>()

const tableData = ref(props.tableData)
const pageData = ref([])
const currentPage = ref(1)
const pageSize = ref(props.pagination.pageSize)

const handleSizeChange = async (size:number) => {
  currentPage.value = 1
  dividePage()
}
const handleCurrentPage = async (index:number) => {
  currentPage.value = index
  dividePage()
}
const handleCurrentChange = (row: object) => {
  emits('currentChange', row)
}
const selectionChange = (val: []) => {
  emits('selectionChange', val)
}
const dividePage = () => {
  pageData.value = tableData.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)
}
// 监听表格数据
watch(() => props.tableData, (n:[]) => {
  tableData.value = n
  currentPage.value = 1
  dividePage()
})
const toggleSelection = (rows?: []) => {
  if (rows) {
    rows.forEach((row) => {
      tableRef.value!.toggleRowSelection(row, undefined)
    })
  } else {
    tableRef.value!.clearSelection()
  }
}
const clearSelection = () => {
  tableRef.value!.clearSelection()
}
defineExpose({
  toggleSelection,
  clearSelection
})
</script>
