####  禁用状态


:::demo  

```html
<template>
  <div style="height:400px">
    <yl-panel
      title="类别"
      :show-header="true"
      :content-style="{ padding:'var(--layout-gap-base)' }"
    >
      <yl-table :table-data="tableData" :configs="tableConfig" />
    </yl-panel >
  </div>
</template>
<script lang="ts" setup>
const { ref, reactive, watch } = Vue
  const tableData = ref([])
  const tableConfig = {
  columns: [
    {
      attr: {
        type: 'index',
        label: '序号',
        width: 55,
        align: 'center',
        headerAlign: 'center'
      }
    },
    {
      attr: {
        prop: 'name',
        label: '姓名',
        headerAlign: 'center',
        align: 'center',
        width: 150,
        sortable: false
      }
    },
    {
      attr: {
        prop: 'phoneNumber',
        label: '电话',
        headerAlign: 'center',
        align: 'center',
        sortable: false
      }
    },
    {
      attr: {
        prop: 'id',
        scopedSlot: 'id',
        label: '操作',
        headerAlign: 'center',
        width: 100,
        align: 'center',
        sortable: false
      }
    }
  ]
}
</script>
```
:::