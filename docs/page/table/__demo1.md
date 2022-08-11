####  示例


:::demo  

```html
<template>
  <div style="height:400px;">
    <yl-table :table-data="tableData" :configs="tableConfig" />
  </div>
</template>
<script lang="ts" setup>
const { ref, reactive, watch, onMounted} = Vue
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
const tableData = ref([])
onMounted(() => {
  tableData.value = [
    {name: '张三', phoneNumber: '18790000000', id: 0},
    {name: '张三1', phoneNumber: '18790000000', id: 1},
    {name: '张三2', phoneNumber: '18790000000', id: 2},
    {name: '张三3', phoneNumber: '18790000000', id: 3},
    {name: '张三4', phoneNumber: '18790000000', id: 4},
    {name: '张三5', phoneNumber: '18790000000', id: 5},
    {name: '张三6', phoneNumber: '18790000000', id: 6},
    {name: '张三7', phoneNumber: '18790000000', id: 7},
    {name: '张三8', phoneNumber: '18790000000', id: 8},
    {name: '张三9', phoneNumber: '18790000000', id: 9},
    {name: '张三10', phoneNumber: '18790000000', id: 10},
  ]
}) 
</script>
```
:::