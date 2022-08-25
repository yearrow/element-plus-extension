<template>
  <div style="height:400px;">
  
   <yl-panel
    title="标题"
    :show-header="true"
    border
    > 
      <template #tool>
        <el-button
          type="primary"
          link
          >更多>></el-button
        >
      </template>
      <div class="panel-content">
        <div v-for="i in 10 " :key="i">这是内容{{i}}</div>
      </div>
    </yl-panel>
    <yl-table
      ref="ylTableRef"
      :data="tableData"
      :configs="tableConfig"
      :loading="loading"
      @select="selectchange"
      @select-all="selectall"
      @selection-change="selectchange1"
      @cell-dblclick="cellDblclick"
      >
      <template #id="scope">
        这是一个slot{{scope}}
      </template>
      <template #headerSlot="scope">
        头部slot{{scope.$index}}
      </template>
      <template #empty="scope">
        空数据
      </template>
    </yl-table>
    <el-button @click="toggleAllSelection">清除所有选择项</el-button>
  </div>
</template>
<script lang="ts" setup>

const { ref, reactive, watch, onMounted } = Vue

const ylTableRef = ref()
const loading = ref(false)
const tableConfig = {
  options: {
    height: '400px',
    stripe: true,
    tooltipEffect: 'light'
  },
  columns: [
    {
      attr: {
        type: 'selection',
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
        sortable: false,
        isParent: true,
        children: [
          {
            attr: {
              prop: 'name',
              label: '姓名',
              headerAlign: 'center',
              align: 'center',
              width: 150,
              sortable: false,
            }
          },
          {
            attr: {
              prop: 'phoneNumber',
              label: '电话',
              headerAlign: 'center',
              align: 'center',
              width: 150,
              sortable: false
            }
          }
        ]
      }
    },
    {
      attr: {
        prop: 'phoneNumber',
        label: '电话',
        headerAlign: 'center',
        align: 'center',
        width: 150,
        sortable: true
      }
    },
    {
      attr: {
        prop: 'id',
        scopedSlot: 'id',
        label: '操作',
        headerAlign: 'center',
        align: 'center',
        showOverflowTooltip: true,
        sortable: true
      }
    },
    {
      attr: {
        prop: 'id',
        headerScopedSlot: 'headerSlot',
        label: '自定义列',
        headerAlign: 'center',
        align: 'center',
        width: 150,
        sortable: true
      }
    }
  ]
}
const tableData = ref([])
onMounted(() => {
  loading.value = true
  setTimeout(() => {
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
    loading.value = false
  }, 1000);
}) 
const selectchange = (val) => {
  console.log('行选择111。。。', val)
}
const selectchange1 = (val) => {
  console.log('selectchange1111。。。', val)
}
const selectall  = (val) => {
  console.log('选择全部啦~~', val)
}
const cellDblclick = (...args) => {
  ylTableRef.value.toggleRowSelection(args[0])
}
const toggleAllSelection = () => {
  const allSelect = ylTableRef.value.clearSelection()
  console.log('allSelect', allSelect)
}
</script>