<template>
  <flex-box class="main-page1">
    <template #fixed>
      <panel
        :show-header="false"
        contentStyle="padding:var(--el-layout-gap-base)"
        >
        <!-- <el-breadcrumb separator="/">
          <el-breadcrumb-item >基础数据</el-breadcrumb-item>
          <el-breadcrumb-item>常用供应商</el-breadcrumb-item>
        </el-breadcrumb> -->
      </panel>
    </template>
    <template #flex>
      <flex-box :vertical="false" class="view-content" flexClass="right-area">
        <template #fixed>
          <panel
            :show-header="false"
            contentStyle="padding:var(--el-layout-gap-base)"
            > 
            <div style="width:200px"></div>
            <!-- <flex-box  flexClass="tree-panel">
              <template #fixed>
                <tool-bar>
                  <template v-slot:filter>
                    <el-form class="g-clear-form-margin"  label-position="left" label-width="70px" >
                      <el-form-item label="设备类别">
                        <el-input v-model="input" style="width:220px" placeholder="请输入内容">
                        </el-input>
                        <el-button type="info" :icon="Search" plain />
                      </el-form-item>
                      <el-form-item label="设备类别">
                        <el-input v-model="input" style="width:220px" placeholder="请输入内容">
                        </el-input>
                        <el-button type="info" :icon="Search" plain />
                      </el-form-item>
                    </el-form>
                  </template>
                  <el-button type="primary" :icon="Edit">操作1</el-button>
                  <el-button type="info" plain :icon="Edit">操作2</el-button>
                  <el-button type="info" plain  :icon="Edit">操作3</el-button>
              </tool-bar>
              </template>
              <template #flex>
                <panel
                  :show-header="false"
                  contentStyle="padding:var(--el-layout-gap-base);"
                  border
                  > 
                  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
                </panel>
              </template>
            </flex-box> -->
          </panel>
        </template>
        <template #flex>
          <panel
            :show-header="false"
            contentStyle="padding:var(--el-layout-gap-base)"
            > 
            <!-- <flex-box  flexClass="tree-panel">
              <template #fixed>
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
                  <div style="display:flex;width:100%">
                    <div>
                      <el-button type="primary" :icon="Edit" @click="dialogVisible=true">新增</el-button>
                      <el-button type="primary" plain :icon="Edit">编辑</el-button>
                      <el-button type="danger" plain  :icon="Delete">删除</el-button>
                    </div>
                    <div style="flex:1;text-align:right">
                      <el-button type="success" plain :icon="Edit">导出</el-button>
                    </div>
                  </div>
              </tool-bar>
              </template>
              <template #flex>
                <panel
                  :show-header="false"
                  contentStyle="padding:var(--el-layout-gap-base);"
                  border
                  > 
                  <flex-box  flexClass="" fixedClass="table-pagination" :isReverse="true">
                    <template #fixed>
                      <el-pagination background layout="total, sizes, prev, pager, next, jumper" style="float:right" :total="1000" />
                    </template>
                    <template #flex>
                      <el-table :data="tableData" border style="width: 100%;height:100%">
                        <el-table-column prop="date" label="生日" width="180" />
                        <el-table-column prop="name" label="姓名" width="180" />
                        <el-table-column prop="address" label="地址" />
                      </el-table>
                    </template>
                  </flex-box>
                </panel>
              </template>
            </flex-box> -->
          </panel>
        </template>
      </flex-box>
    </template>
  </flex-box>
</template>

<script setup lang="ts">
import { Search, Edit, Delete } from '@element-plus/icons-vue'
import EditModel from './edit.vue'
const { ref } = Vue
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
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
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
  padding-top: var(--el-layout-gap-base);
}
.view-content {
  padding: var(--el-layout-gap-large)
}
</style>
