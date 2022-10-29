<template>
  <yl-flex-box class="main-page1" flexClass="flex-area">
    <template #fixed>
      <yl-panel
        :show-header="false"
        contentStyle="padding:var(--el-layout-gap-base);height:24px"
        >
        <el-breadcrumb separator="/">
          <el-breadcrumb-item >基础数据</el-breadcrumb-item>
          <el-breadcrumb-item>收料登记</el-breadcrumb-item>
        </el-breadcrumb>
      </yl-panel>
    </template>
    <template #flex>
      <yl-panel
        :show-header="false"
        contentStyle="padding:var(--el-layout-gap-base)"
        >
        <yl-flex-box  flexClass="tree-panel">
          <template #fixed>
            <yl-tool-bar>
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
              <yl-flex-line>
                <el-button type="primary" :icon="Edit" @click="add">新增</el-button>
                <el-button type="primary" plain :icon="Edit" @click="edit">编辑</el-button>
                <el-button type="danger" plain  :icon="Delete">删除</el-button>
                <template v-slot:right>
                  <el-button type="success" plain :icon="Edit">导出</el-button>
                </template>
              </yl-flex-line>
            </yl-tool-bar>
          </template>
          <template #flex>
            <yl-panel
              :show-header="false"
              contentStyle="padding:var(--el-layout-gap-small);"
              border
              >
              <yl-flex-box  flexClass="" fixedClass="table-pagination" :isReverse="true">
                <template #fixed>
                  <el-pagination background layout="total, sizes, prev, pager, next, jumper" style="float:right" :total="1000" />
                </template>
                <template #flex>
                  <el-table :data="tableData" border style="width: 100%;height:100%">
                    <el-table-column prop="date" label="序号" type="index" width="60" align="center" header-align="center" />
                    <el-table-column prop="id" label="详情"  width="80" header-align="center" align="center">
                      <template #default="scope">
                        <el-button :icon="ZoomIn" size="small" circle plain @click="getDetail"/>
                        <el-button :icon="ZoomIn" size="small" circle plain @click="getDialogDetail"/>
                      </template>
                    </el-table-column>
                    <el-table-column prop="date" label="生日" width="180" header-align="center"/>
                    <el-table-column prop="name" label="姓名" width="180" header-align="center"  />
                    <el-table-column prop="name" label="姓名" width="180" header-align="center"  />
                    <el-table-column prop="name" label="姓名" width="180" header-align="center"  />
                    <el-table-column prop="address" label="地址" header-align="center" show-overflow-tooltip/>
                  </el-table>
                </template>
              </yl-flex-box>
            </yl-panel>
          </template>
        </yl-flex-box>
      </yl-panel>
    </template>
  </yl-flex-box>
  <el-dialog
    v-model="dialogVisible"
    title="单据详情"
    width="50%"
    :close-on-click-modal="true"
    draggable
  >
    <items v-if="dialogVisible"></items>
  </el-dialog>
</template>

<script setup lang="ts">
import { Search, Edit, Delete, ZoomIn } from '@element-plus/icons-vue';
import items from './items.vue';

const { useRouter } = VueRouter;
const router = useRouter();

const { ref } = Vue;
const input = ref('');
const dialogVisible = ref(false);

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009'
  }
];

const add = () => {
  router.push('moduleorder/edit', { params: {} });
};
const edit = () => {
  // router.push('moduleorder/edit1', {params: {}})
};
const getDetail = () => {
  router.push('moduleorder/detail', { params: {} });
};
const getDialogDetail = () => {
  dialogVisible.value = true;
};

</script>
<style>
.main-page1 {
  padding: 0px;
  background: var(--el-bg-color-page);
}
.flex-area {
  padding: var(--el-layout-gap-large)
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
.tree-panel-l {
  padding-top: var(--el-layout-gap-large);
}
</style>
