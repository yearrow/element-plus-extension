<template>
  <yl-flex-box class="dialog-main" flexClass="flex-area1">
    <template #fixed>
      <yl-tool-bar :divider="false">
        <yl-flex-line>
          <el-row :gutter="8">
            <el-col :span="6">
              <el-input v-model="input" placeholder="材料名称"></el-input>
            </el-col>
            <el-col :span="6">
              <el-input v-model="input" placeholder="规格型号" ></el-input>
            </el-col>
            <el-col :span="2">
              <el-button type="info" :icon="Search" plain >查询</el-button>
            </el-col>
          </el-row>
          <template v-slot:right>
            <el-button type="success" plain ><i class="cs cs-excel"></i> &nbsp;导 出</el-button>
          </template>
        </yl-flex-line>
      </yl-tool-bar>
    </template>
    <template #flex>
      <yl-panel
        :show-header="false"
        contentStyle="padding:var(--el-layout-gap-small);"
        border
        style="height:400px"
        >
        <yl-flex-box  flexClass="" fixedClass="table-pagination" :isReverse="true">
          <template #fixed>
            <el-pagination background layout="total, sizes, prev, pager, next, jumper" style="float:right" :total="1000" />
          </template>
          <template #flex>
            <el-table :data="tableData" border style="width: 100%;height:100%">
              <el-table-column prop="id" type="index" label="详情"  width="80" header-align="center" align="center">
              </el-table-column>
              <el-table-column prop="date" label="生日" width="180" header-align="center"/>
              <el-table-column prop="name" label="姓名" width="180" header-align="center"  />
              <el-table-column prop="name" label="姓名" width="180" header-align="center"  />
              <el-table-column prop="address" label="地址" header-align="center" show-overflow-tooltip/>
            </el-table>
          </template>
        </yl-flex-box>
      </yl-panel>
    </template>
  </yl-flex-box>
</template>
<script setup lang="ts">
import { Search, Edit } from '@element-plus/icons-vue';
const { ref } = Vue;
const input = ref('');
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
</script>
<style>
.table-pagination {
  padding-top: var(--el-layout-gap-small);
}
.flex-area1 {
  padding-top: var(--el-layout-gap-large);
}
.dialog-main {
  padding: var(--el-layout-gap-large);
}
</style>
