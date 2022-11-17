<template> 
  <div class="main-page" >
    <flex-box :itemNum="3" :itemConfig="flexConfig">
      <template #item-1>
        <div style="background:green;height:100%">hahahahah</div>
      </template>
      <template #item-2 tag="hahha">
        <div style="background:green;height:100%">固定区域2</div>
      </template>
      <template #item-3>
        <panel
          :show-header="false"
          paddingSize="small"
          > 
          <yl-table-report
            :ref-callback="(ref:any) => tableRef = ref"
            :tableloading="tableloading"
            :tableData="tableData"
            :configs="tableConfig"
            :highlight-current-row="true"
            :border="true"
            stripe
            @select="tableSelect"
            @row-click="toggleSelect"
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
          </yl-table-report>
        </panel>
      </template>
    </flex-box>
  </div>
</template>
<script lang="ts" setup>
  import materialDataSet from '../../test-data/material-data-set.json';
  const {ref, computed} = Vue
  const tableloading = ref(false)
  const tableData = ref(materialDataSet)
  const tableRef = ref(null)
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
      table: {
        attr: {
        }
      },
      columns: [
        { attr: { prop: "code", type: 'selection', label: "编码", width: 60, headerAlign: 'center', align: 'center' } },
        { attr: { prop: "code", label: "编码", width: 120, sortable:true } },
        {
          isParent :true,
          attr: { label: "材料信息", headerAlign: "center",headerSlot: 'material'},
          items: [
            { attr: { prop: "name", label: "名称", width: 160 } },
            { attr: { prop: "spec", label: "规格", width: 160   } },
            { attr: { prop: "unit", label: "单位", width: 100 } },
          ]
        },
        { attr: { prop: "orgName", label: "组织名称"} },
        { attr: { prop: "createdAt", label: "添加时间", width: 230,headerSlot: 'createAtHeader',scopedSlot: "createdAt" }}
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
</script>

<style lang="less" scoped>
.main-page {
  height: 100%;
  width: 100%;
  background: var(--el-bg-color-page);
}
</style>