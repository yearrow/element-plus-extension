<template>
  <yl-flex-box :itemNum="2" :itemConfig="flexConfig1">
    <template #item-1>
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
    <template #item-2>
      <yl-panel
        :show-header="false"
        border
        >
        <yl-flex-box :itemNum="2" :itemConfig="flexConfig2">
          <template #item-1>
            <el-table :data="tableData" border style="width: 100%;height:400px">
              <el-table-column prop="id" type="index" label="详情"  width="80" header-align="center" align="center">
              </el-table-column>
              <el-table-column prop="date" label="生日" width="180" header-align="center"/>
              <el-table-column prop="name" label="姓名" width="180" header-align="center"  />
              <el-table-column prop="name" label="姓名" width="180" header-align="center"  />
              <el-table-column prop="address" label="地址" header-align="center" show-overflow-tooltip/>
            </el-table>
          </template>
          <template #item-2>
            <el-pagination background layout="total, sizes, prev, pager, next, jumper" style="float:right" :total="40" />
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

const flexConfig1 = [
  { tag: 'item-1', isFixed: false, size: '', paddingSize: 'large', clearPadding: ['bottom'] },
  { tag: 'item-2', isFixed: true, size: '', paddingSize: 'large', clearPadding: [] }
]
const flexConfig2 = [
  { tag: 'item-1', isFixed: false, size: '', paddingSize: 'small', clearPadding: ['bottom'] },
  { tag: 'item-2', isFixed: true, size: '', paddingSize: 'small', clearPadding: [] }
]
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
