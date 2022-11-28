##  基础用法

通过一些配置项渲染表格,前端修改分页参数，后端根据前端的分页参数来返回数据

:::demo  

```html
<template>
  <div style="height:400px;width:860px">
     <table-async
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
  import { InfoFilled } from '@element-plus/icons-vue'
  import axios from 'axios'
  const {ref, computed, onMounted, reactive} = Vue
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
    return {
      columns: [
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
const loadData = async () => {
  console.log('paramsModel', paramsModel)
  tableloading.value = true
  const result =  await axios({
    // url: 'http://localhost:8198/mp-sso/q-master-plans-params',
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
```
:::

- 属性

  表格属性参照`el-table`,直接从dom传递

  列的属性从`configs.columns`属性传递

- 方法

  通过`ref-callback`方法拿到组件内部`el-table`的`ref`实例，拿到之后就可以对表格进行操作

- 事件

  参照`el-table`,直接从dom传递

- 插槽

  表格插槽与`el-table`插槽相同

  列插槽需要在`configs.columns`配置`headerSlot`(表头)和`scopedSlot`（列内容）属性，再在表格中间放置与配置名称相同的插槽

- 排序

  后端排序：将`sortable`设置为`custom`，就可以使用`sort-change`事件传递排序字段到后端进行排序

- 合计行

  打开`show-summary`属性，`el-table`会自行计算合计`本页合计`

  使用方法`summary-method`，可以自定义设置合计行的内容，也可以在后端查询总合计放在合计行


  


