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
            :tableloading="tableloading"
            :tableData="tableData"
            :configs="tableConfig"
            :highlightCurrent="true"
            :border="true"
            >
            <template v-slot:test>这是一个slot内容</template>
          </yl-table-report>
        </panel>
      </template>
    </flex-box>
  </div>
</template>
<script lang="ts" setup>
  import materialDataSet from '../../test-data/material-data-set.json';
  const {ref, computed} = Vue
  const tableloading = ref(true)
  const tableData = ref(materialDataSet)
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
      clearPadding: ['left', 'right']
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
            highlightCurrent: true,
        }
      },
      columns: [
        { attr: { prop: "code", label: "编码", width: 120 } },
        {
          isParent :true,
          attr: { label: "材料信息", headerAlign: "center"},
          items: [
            { attr: { prop: "name", label: "名称", width: 160 } },
            { attr: { prop: "model", label: "规格", width: 100  } },
            { attr: { prop: "unit", label: "单位", width: 70 } },
          ]
        },
        { attr: { prop: "quantity", label: "数量", width: 100 } },
        { attr: { prop: "created", label: "添加时间", width: 120,scopedSlot: "createdAt" }}
      ]
    }
  })
</script>

<style lang="less" scoped>
.main-page {
  height: 100%;
  width: 100%;
  background: var(--el-bg-color-page);
}
</style>