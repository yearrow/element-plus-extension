<template>
  <flex-box :itemNum="2" :itemConfig="flexConfig1">
    <template #item-1>
      <tool-bar :background="false" border>
        <flex-line :left-padding="true" :right-padding="true" >
          <el-space>
            <el-input v-model="input" placeholder="材料名称"></el-input>
            <el-input v-model="input" placeholder="规格型号"></el-input>
            <el-button type="info" :icon="Search" plain >查询</el-button>
          </el-space>
          <template v-slot:right>
            <el-button type="success" plain ><i class="cs cs-excel"></i> &nbsp;导 出</el-button>
          </template>
        </flex-line>
      </tool-bar>
    </template>
    <template #item-2>
      <panel
        :show-header="false"
        border
        padding-size="small"
        >
        <table-async
          :ref-callback="(ref:any) => tableRef = ref"
          :table-loading="tableloading"
          :table-data="tableData"
          :column-configs="tableConfig"
          :input="paramsModel"
          height="400px"
          @reload="loadData"
          @select="tableSelect"
          @row-click="toggleSelect"
          @sort-change="sortChange"
          >
        </table-async>
      </panel>
    </template>
  </flex-box>
</template>
<script lang="ts" setup>
import { Search, Edit } from '@element-plus/icons-vue';
import axios from 'axios'
const {ref, computed, onMounted, reactive} = Vue
const input = ref('');
const props = defineProps({
  currentRow: {}
})
const flexConfig1 = [
  { tag: 'item-1', isFixed: false, size: '', paddingSize: 'large', clearPadding: ['bottom'] },
  { tag: 'item-2', isFixed: true, size: '', paddingSize: 'large', clearPadding: [] }
]
  const tableloading = ref(false)
  const tableData = ref({})
  const tableRef = ref(null)
  const ParamsModel = (limit = 2, draw = 1, order = [], condtionItems = []) => {
    return {
      limit: limit,
      draw: draw,
      offset: limit * (draw - 1),
      order: order,
      condtionItems: condtionItems
    }
  }
  const paramsModel = reactive(ParamsModel(20)) 
  const tableConfig = computed(() => {
    return [
        { attr: { prop: "code", type: 'index', label: "序号", width: 60, align: 'center' } },
        { attr: { prop: "materialCode", label: "材料编码", width: 80 } },
        { attr: { prop: "materialName", label: "材料名称", width: 180 } },
        { attr: { prop: "materialModel", label: "规格型号", width: 180 } },
        { attr: { prop: "materialUnit", label: "单位", width: 80 } },
        { attr: { prop: "planQuantity", label: "计划量", width: 120, align: 'right' } },
        { attr: { prop: "itemRemark", label: "备注" } },
      ]
  })
const tableSelect = (selection, row) => {
  console.log(selection, row)
}
const toggleSelect = (row,column) => {
  console.log('tableRef',tableRef)
  tableRef.value!.toggleRowSelection(row, undefined)
}
const sortChange = ({column, prop, order}) => {
  console.log('后端排序字段：', column, prop, order)
  let method = 'asc'
  if (order === 'descending') method = 'desc'
  paramsModel.order = [[prop, method]]
  loadData()
}
const getSummaries = (param: SummaryMethodProps) => {
  const { columns, data } = param
  // 可以单独给合计行数字
  return ['', '合计数量：', '', '', '', 25638.36, '', '']
}

const loadData = async () => {
  paramsModel.condtionItems = [{
    fieldName: "orderId",
    op: "eq",
    fieldValue: props.currentRow?.id,
  },{
    fieldName: "isRemoved",
    op: "eq",
    fieldValue: false,
  }]
  tableloading.value = true
  const result =  await axios({
    url: 'http://dev.mctech.vip/mp-sso/q-master-plan-items',
    method: 'post',
    data: paramsModel
  })
  tableData.value = result.data
  tableloading.value = false
  console.log(tableData)
}
onMounted(async () => {
  await loadData()
})

</script>
<style>
.table-pagination {
  padding-top: var(--el-layout-gap-small);
}
.flex-area1 {
  padding-top: var(--el-layout-gap-large);
}
.dialog-main {
  padding: var(--el-layout-gap-large);
}
</style>
