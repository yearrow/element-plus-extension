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
                  <tool-bar>
                    <template v-slot:filter>
                      <div style="padding-bottom: var(--el-layout-gap-small);">
                        <el-input
                          v-model="input"
                          class="w-50 m-2"
                          placeholder="设备类别"
                          :suffix-icon="Search"
                        />
                      </div>
                    </template>
                    <el-button type="primary" plain :icon="Plus">新增</el-button>
                    <el-button type="primary" plain :icon="Edit">编辑</el-button>
                    <el-button type="danger" plain  :icon="Delete">删除</el-button>
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
                  <tool-bar>
                    <template v-slot:filter>
                      <el-form  label-position="left" label-width="90px" >
                        <el-row :gutter="12">
                          <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                            <el-form-item label="扩展过滤器">
                              <el-input v-model="input" placeholder="请输入内容"></el-input>
                            </el-form-item>
                          </el-col>
                          <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                            <el-form-item label="扩展过滤器">
                              <el-input v-model="input" placeholder="请输入内容"></el-input>
                            </el-form-item>
                          </el-col>
                          <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                            <el-form-item label="扩展过滤器">
                              <el-input v-model="input" placeholder="请输入内容"></el-input>
                            </el-form-item>
                          </el-col>
                          <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                            <el-form-item label="扩展过滤器">
                              <el-input v-model="input" placeholder="请输入内容"></el-input>
                            </el-form-item>
                          </el-col>
                          <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                            <el-form-item label="扩展过滤器">
                              <el-input v-model="input" placeholder="请输入内容"></el-input>
                            </el-form-item>
                          </el-col>
                          <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                            <el-form-item label="扩展过滤器">
                              <el-input v-model="input" placeholder="请输入内容"></el-input>
                            </el-form-item>
                          </el-col>
                          <el-col :span="2">
                            <el-button type="info" :icon="Search" plain style="margin-bottom:10px">查询</el-button>
                          </el-col>
                        </el-row>
                      </el-form>
                    </template>
                    <flex-line :left-padding="true" :right-padding="true" :left-clear-padding="['left']" :right-clear-padding="['right']">
                      <el-button type="primary" :icon="Plus" @click="dialogVisible=true">新增</el-button>
                        <el-button type="primary" plain :icon="Edit">编辑</el-button>
                        <el-button type="danger" plain  :icon="Delete">删除</el-button>
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
                    > 
                    <flex-box :itemNum="2" :itemConfig="flexConfig3">
                      <template #item-1>
                        <el-table :data="tableData" v-loading="tableLoading" border style="width: 100%;height:100%">
                          <el-table-column prop="date" label="序号" type="index" width="60" align="center" header-align="center" />
                          <el-table-column prop="name" label="材料名称" width="180" />
                          <el-table-column prop="spec" label="规格型号" width="180" />
                          <el-table-column prop="unit" label="单位" width="80" />
                          <el-table-column prop="classFullName" label="材料类别" width="180" />
                          <el-table-column prop="orgName" label="来源" />
                        </el-table>
                      </template>
                      <template #item-2>
                        <el-pagination background layout="total, sizes, prev, pager, next, jumper" style="float:right" :total="1000" />
                      </template>
                    </flex-box>
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
import materialDataSet from '../../test-data/material-data-set.json';
const { ref, onMounted } = Vue
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
const tableData = ref([])
const tableLoading = ref(false)
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

const loadData = () => {
  tableLoading.value = true
  new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      tableData.value = materialDataSet
      tableLoading.value = false
      resolve()
    }, 2000);
  })
}
onMounted(() => {
  loadData()
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
