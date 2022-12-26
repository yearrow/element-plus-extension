<template>
  <div style="height:400px;width:860px">
    <table-async
     :ref-callback="(ref:any) => tableRef = ref"
     :table-loading="tableloading"
     :table-data="tableData"
     :column-configs="tableConfig"
     :show-summary="true"
     :summary-method="getSummaries"
     :input="paramsModel"
     @reload="loadData"
     @select="tableSelect"
     @row-click="toggleSelect"
     @sort-change="sortChange"
     >
     <template #createatheader >
       标题自定义
       <el-button type="primary" plain>button</el-button>
     </template>
     <template #material>
       材料信息<el-tag type="success">哈哈哈</el-tag>
       <el-button type="primary" plain>button</el-button>
     </template>
     <template #createdat="scope">
       <el-tag type="success">{{scope.row.createdAt}}-{{scope.$index}}</el-tag>
     </template>
     <template #isaudit="scope">
       <el-tag v-if="scope.row.isAudit" type="success">已提交</el-tag>
       <el-tag v-else type="error">未提交</el-tag>
     </template>
   </table-async>
 </div>
</template>
<script lang="ts" setup>
 import axios from 'axios';
 import { ref, computed, onMounted, reactive } from 'vue'
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
       { attr: { prop: "code", type: 'index', label: "编码", width: 60, headerAlign: 'center', align: 'center' } },
       { attr: { prop: "isAudit", label: "提交状态", width: 100, headerAlign: 'center',scopedSlot: "isaudit" , align: 'center' } },
       { attr: { prop: "orderCode", label: "单据编号", width: 150, sortable:'custom', headerAlign: 'center' } },
       { attr: { prop: "orderDate", label: "账期", width: 120, headerAlign: 'center' } },
       { attr: { prop: "planType", label: "计划类型", width: 120, headerAlign: 'center' } },
       { attr: { prop: "recordedDate", label: "入账日期", width: 120, headerAlign: 'center' } },
       { attr: { prop: "auditor", label: "提交人", width: 120, headerAlign: 'center' } },
       { attr: { prop: "maker", label: "制单人", width: 120, headerAlign: 'center' } },
       { attr: { prop: "makerDate", label: "制单时间", width: 120, headerAlign: 'center' } },
       { attr: { prop: "orgName", label: "组织名称"} },
       { attr: { prop: "createdAt", label: "添加时间", width: 230, sortable:'custom',headerSlot: 'createatheader',scopedSlot: "createdat" }}
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
 console.log('paramsModel', paramsModel)
 tableloading.value = true
 const result =  await axios({
   url: 'http://dev.mctech.vip/mp-sso/q-master-plans-params',
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

<style lang="less">
.main {  
 position: absolute;
 left: 0px;
 right: 0px;
 top: 0px;
 bottom: 0px;
 z-index: 1;
}
</style>
