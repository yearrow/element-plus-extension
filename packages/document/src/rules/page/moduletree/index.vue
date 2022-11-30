<template>
  <div class="main-page">
    <flex-box :itemNum="2" :itemConfig="flexConfig">
      <template #item-1>
        <yl-navigation></yl-navigation>
      </template>
      <template #item-2>
        <flex-box :itemNum="2" :is-row="true" :itemConfig="flexConfig1">
          <template #item-1>
            <panel
              :show-header="false"
              > 
              <flex-box :itemNum="2" :itemConfig="flexConfig2">
                <template #item-1>
                  <tool-bar divider>
                    <template v-slot:filter>
                        <el-input
                          v-model="input"
                          class="w-50 m-2"
                          placeholder="设备类别"
                          :suffix-icon="Search"
                        />
                    </template>
                    <flex-line :left-padding="true" :right-padding="true" left-width="100%">
                      <el-button type="primary" plain :icon="Plus">新增</el-button>
                      <el-button type="primary" plain :icon="Edit">编辑</el-button>
                      <el-button type="danger" plain  :icon="Delete" class="button-margin-left">删除</el-button>
                    </flex-line>
                  </tool-bar>
                </template>
                <template #item-2>
                  <panel
                    :show-header="false"
                    border
                    > 
                    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
                  </panel>
                </template>
              </flex-box>
            </panel>
          </template>
          <template #item-2>
            <panel
            :show-header="false"
            > 
              <flex-box :itemNum="2" :itemConfig="flexConfig2">
                <template #item-1>
                  <tool-bar divider>
                    <template v-slot:filter>
                      <el-col v-for="i in 10" :key="i" :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
                        <filter-item label="扩展过滤器" :label-width="'70px'">
                          <el-input v-model="input"  placeholder="请输入内容"></el-input>
                        </filter-item> 
                      </el-col>
                    </template>
                    <flex-line :left-padding="true" :right-padding="true" :left-clear-padding="[]" :right-clear-padding="[]">
                      <el-button type="primary" :icon="Plus" @click="dialogVisible=true">新增</el-button>
                        <el-button type="primary" plain :icon="Edit">编辑</el-button>
                        <el-button type="danger" plain  :icon="Delete" class="button-margin-left">删除</el-button>
                        <template #right>
                          <el-button type="success" plain ><i class="cs cs-excel"></i> 导出</el-button>
                        </template>
                    </flex-line>
                  </tool-bar>
                </template>
                <template #item-2>
                  <panel
                    :show-header="false"
                    border
                    padding-size="small"
                    > 
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
                  </panel>
                </template>
              </flex-box>
            </panel>
          </template>
        </flex-box>
      </template>
    </flex-box>
  </div>
  <el-dialog
    v-model="dialogVisible"
    title="编辑"
    width="50%"
    :close-on-click-modal="false"
    draggable
  >
    <EditModel v-if="dialogVisible" />
  </el-dialog>
</template>

<script setup lang="ts">
import { Search, Edit, Delete, Plus } from '@element-plus/icons-vue'
import EditModel from './edit.vue'
import axios from 'axios'
const { ref, onMounted, reactive, computed } = Vue
const input = ref('')
const dialogVisible = ref(false)
interface Tree {
  label: string
  children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const data: Tree[] = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]

const defaultProps = {
  children: 'children',
  label: 'label',
}
const flexConfig = [
  { tag: 'item-1', isFixed: true, size: '', paddingSize: '', clearPadding: [] },
  { tag: 'item-2', isFixed: false, size: '', paddingSize: '', clearPadding: [] }
]
const flexConfig1 = [
  { tag: 'item-1', isFixed: true, size: '', paddingSize: 'large', clearPadding: ['right'] },
  { tag: 'item-2', isFixed: false, size: '100px', paddingSize: 'large', clearPadding: [] }
]
const flexConfig2 = [
  { tag: 'item-1', isFixed: true, size: '', paddingSize: 'base', clearPadding: ['bottom'] },
  { tag: 'item-2', isFixed: false, size: '100px', paddingSize: 'base', clearPadding: [] }
]
const flexConfig3 = [
  { tag: 'item-1', isFixed: false, size: '', paddingSize: 'small', clearPadding: ['bottom'] },
  { tag: 'item-2', isFixed: true, size: '', paddingSize: 'small', clearPadding: [] }
]
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
<style>
.main-page1 {
  padding: 0px;
  background: var(--el-bg-color-page);
}
.right-area {
  padding-left: var(--el-layout-gap-large);
}
.g-clear-form-margin .el-form-item {
    margin-bottom:var(--el-layout-gap-base)
} 
.tree-panel {
  padding-top: var(--el-layout-gap-base);
}
.table-pagination {
  padding-top: var(--el-layout-gap-small);
}
.view-content {
  padding: var(--el-layout-gap-large)
}
</style>
