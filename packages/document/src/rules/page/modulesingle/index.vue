<template> 
  <div class="main-page" >
    <flex-box :itemNum="3" :itemConfig="flexConfig">
      <template #item-1>
        <el-button @click="changeData">点击更改数据</el-button>  
        <el-button @click="openDialog">点击弹窗</el-button>  
      </template>
      <template #item-2 tag="hahha">
        <div style="background:green;height:100%">固定区域2</div>
      </template>
      <template #item-3>
        <panel
          :show-header="false"
          paddingSize="small"
          > 
          <table-report
            :ref-callback="(ref:any) => tableRef = ref"
            :tableloading="tableloading"
            :tableData="tableData"
            :configs="tableConfig"
            :show-summary="true"
            :summary-method="getSummaries"
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
          </table-report>
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
import materialDataSet from '../../../test-data/material-data-set.json';
  const {ref, computed} = Vue
  const tableloading = ref(false)
  const tableData = ref(materialDataSet)
  const tableRef = ref(null)
  const visible = ref(false)
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
        { attr: { prop: "code", type: 'selection', label: "编码", width: 60, headerAlign: 'center', align: 'center' } },
        { attr: { prop: "code", label: "编码", width: 120, sortable:true, headerAlign: 'center' } },
        {
          isParent :true,
          attr: { label: "材料信息", headerAlign: "center",headerSlot: 'material'},
          items: [
            { attr: { prop: "name", label: "名称", width: 160 } },
            { attr: { prop: "spec", label: "规格", width: 160   } },
            { attr: { prop: "unit", label: "单位", width: 100 } },
          ]
        },
        { attr: { prop: "quantity", label: "数量"} },
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
  console.log(tableData)
}
const openDialog = () => {
  visible.value = true
}
</script>

<style lang="less" scoped>
.main-page {
  height: 100%;
  width: 100%;
  background: var(--el-bg-color-page);
}
</style>