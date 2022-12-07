##  基础用法

通过一些配置项渲染表格

:::demo  

```html
<template>
  <div style="height:400px;width:860px">
    <table-only
      :ref-callback="(ref:any) => tableRef = ref"
      :table-loading="tableloading"
      :table-data="tableData"
      :column-configs="tableConfig"
      :highlight-current-row="false"
      stripe
      :show-summary="true"
      :summary-method="getSummaries"
      @select="tableSelect"
      @row-click="toggleSelect"
      @sort-change="sortChange"
      >
      <template #createatheader >
        <el-button type="info" :icon="InfoFilled" plain size="small" circle></el-button>
        
        标题自定义
      </template>
      <template #createdat="scope">
        <el-tag type="success">{{scope.row.createdAt}}-{{scope.$index}}</el-tag>
      </template>
    </table-only>
  </div>
</template>
<script lang="ts" setup>
  import materialDataSet from '../../../test-data/material-data-set.json';
  import { InfoFilled } from '@element-plus/icons-vue'
  const {ref, computed, onMounted} = Vue
  const tableloading = ref(false)
  const tableData = ref(materialDataSet)
  const tableRef = ref(null)
  const tableConfig = computed(() => {
    return [
        { attr: { prop: "code", type: 'selection', label: "编码", width: 50, headerAlign: 'center', align: 'center' } },
        { attr: { prop: "code", label: "编码", width: 90, sortable:'custom', headerAlign: 'center' } },
        {
          isParent :true,
          attr: { label: "材料信息", headerAlign: "center"},
          items: [
            { attr: { prop: "name", label: "名称", width: 120 } },
            { attr: { prop: "spec", label: "规格", width: 120   } },
            { attr: { prop: "unit", label: "单位", width: 60 } },
          ]
        },
        { attr: { prop: "quantity", label: "数量"} },
        { attr: { prop: "orgName", label: "组织名称"} },
        { attr: { prop: "createdAt", label: "添加时间", width: 210, sortable:'custom',headerSlot: 'createatheader',scopedSlot: "createdat" }}
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
}
const getSummaries = (param: SummaryMethodProps) => {
  const { columns, data } = param
  console.log(columns, data)
  // 可以单独给合计行数字
  return ['', '合计数量：', '', '', '', 25638.36, '', '']
}

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

  前端排序：可以直接打开列的`sortable`属性来进行排序

  后端排序：将`sortable`设置为`custom`，就可以使用`sort-change`事件传递排序字段到后端进行排序

- 合计行

  打开`show-summary`属性，`el-table`会自行计算合计`本页合计`

  使用方法`summary-method`，可以自定义设置合计行的内容，也可以在后端查询总合计放在合计行


  


