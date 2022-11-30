<template> 
  <div class="main-page" >
    <flex-box :itemNum="3" :itemConfig="flexConfig">
      <template #item-1>
        <el-button @click="changeData">点击更改数据</el-button>  
        <el-button @click="openDialog">点击弹窗</el-button>  
      </template>
      <template #item-2 tag="hahha">
        <div style="background:green;height:100%"></div>
      </template>
      <template #item-3>
        <panel
          :show-header="false"
          paddingSize="small"
          > 
          <table-next
            :ref-callback="(ref:any) => tableRef = ref"
            :table-loading="tableloading"
            :table-data="tableData"
            :configs="tableConfig"
            :show-summary="true"
            :summary-method="getSummaries"
            :input="paramsModel"
            @reload="loadData"
            @select="tableSelect"
            @row-click="toggleSelect"
            @sort-change="sortChange"
            >
            <template #createAtHeader >
              标题自定义
              <el-button type="primary" plain>button</el-button>
            </template>
            <template #material>
              材料信息<el-tag type="success">哈哈哈</el-tag>
              <el-button type="primary" plain>button</el-button>
            </template>
            <template #createdAt="scope">
              <el-tag type="success">{{scope.row.createdAt}}-{{scope.$index}}</el-tag>
            </template>
            <template #isAudit="scope">
              <el-tag v-if="scope.row.isAudit" type="success">已提交</el-tag>
              <el-tag v-else type="error">未提交</el-tag>
            </template>
          </table-next>
        </panel>
      </template>
    </flex-box>
  </div>
  <el-dialog v-model="visible" :show-close="true">
    <template #header="{ close, titleId, titleClass }">
      <flex-line>
        哈哈哈
        <!-- <el-button type="primary" :icon="Plus" @click="add">新增</el-button>
        <el-button type="primary" plain :icon="Edit" @click="edit">编辑</el-button>
        <el-button type="danger" plain  :icon="Delete" class="button-margin-left">删除</el-button> -->
        <template v-slot:right>
          <el-button type="success" plain size="small" style="margin-right:30px"><i class="cs cs-excel"></i> &nbsp;导 出</el-button>
        </template>
      </flex-line>
    </template>
    This is dialog content.
  </el-dialog>
</template>
<script lang="ts" setup>
import axios from 'axios'
import materialDataSet from '../../../test-data/material-data-set.json';
  const {ref, computed, onMounted, reactive} = Vue
  const tableloading = ref(false)
  const tableData = ref([])
  const tableRef = ref(null)
  const visible = ref(false)
  const ParamsModel = (limit = 2, draw = 1, order = [], condtionItems = []) => {
    return {
      limit: limit,
      draw: draw,
      offset: limit * (draw - 1),
      order: order,
      condtionItems: condtionItems
    }
  }
  const paramsModel = reactive(ParamsModel(21)) 
  console.log(paramsModel)
  const flexConfig = [
    {
      tag: 'item-1',
      isFixed: true,
      size: '100px',
      paddingSize: '20px',
      clearPadding: ['left', 'right']
    },
    {
      tag: 'item-2',
      isFixed: true,
      size: '50px',
      paddingSize: 'small',
      clearPadding: ['top', 'right']
    },
    {
      tag: 'item-3',
      isFixed: false,
      size: '20%',
      paddingSize: 'large',
      clearPadding: []
    },
    {
      tag: 'item-4',
      isFixed: false,
      size: '50%',
    }
  ]
  const tableConfig = computed(() => {
    return {
      columns: [
        { attr: { prop: "code", type: 'index', label: "编码", width: 60, headerAlign: 'center', align: 'center' } },
        { attr: { prop: "isAudit", label: "提交状态", width: 100, headerAlign: 'center',scopedSlot: "isAudit" , align: 'center' } },
        { attr: { prop: "orderCode", label: "单据编号", width: 150, sortable:'custom', headerAlign: 'center' } },
        { attr: { prop: "orderDate", label: "账期", width: 120, headerAlign: 'center' } },
        { attr: { prop: "planType", label: "计划类型", width: 120, headerAlign: 'center' } },
        { attr: { prop: "recordedDate", label: "入账日期", width: 120, headerAlign: 'center' } },
        { attr: { prop: "auditor", label: "提交人", width: 120, headerAlign: 'center' } },
        { attr: { prop: "maker", label: "制单人", width: 120, headerAlign: 'center' } },
        { attr: { prop: "makerDate", label: "制单时间", width: 120, headerAlign: 'center' } },
        { attr: { prop: "orgName", label: "组织名称"} },
        { attr: { prop: "createdAt", label: "添加时间", width: 230, sortable:'custom',headerSlot: 'createAtHeader',scopedSlot: "createdAt" }}
      ]
    }
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

const changeData = () => {
  if (tableData.value.length > 0) {
    tableData.value = []
  } else {
    tableData.value = materialDataSet
  }
}
const openDialog = () => {
  visible.value = true
}
const loadData = async () => {
  console.log('paramsModel', paramsModel)
  tableloading.value = true
  const result =  await axios({
    // url: 'http://localhost:8198/mp-sso/q-master-plans-params',
    url: 'http://dev.mctech.vip/mp-sso/q-master-plans-params',
    method: 'post',
    data: paramsModel
  })
  tableData.value = result.data.rows
  tableloading.value = false
  console.log(tableData)
}
onMounted(async () => {
  await loadData()
})
</script>

<style lang="less" scoped>
.main-page {
  height: 100%;
  width: 100%;
  background: var(--el-bg-color-page);
}
</style>