<template>
  
  <yl-flex-box :isReverse="true">
    <template #fixed>
      <yl-flex-box :vertical="false">
        <template #flex>
          <div style="width:100%;text-align: right;">
            <el-button :icon="CircleClose">重置</el-button>
            <el-button type="primary" :icon="Promotion">确定</el-button>
          </div>
        </template>
      </yl-flex-box>
    </template>
    <template #flex>
      <yl-flex-box fixedClass="padding-bottom" flexClass="padding-bottom">
        <template #fixed>
          <yl-tool-bar :divider="false">
            <template v-slot:filter>
              <el-form  label-position="left" label-width="90px" >
                <el-row :gutter="12">
                  <el-col  :span="6">
                    <el-form-item label="扩展过滤器">
                      <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col  :span="6">
                    <el-form-item label="扩展过滤器">
                      <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col  :span="6">
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
          </yl-tool-bar>
        </template>
        <template #flex>
          <yl-panel
            :show-header="false"
            contentStyle="padding:var(--el-layout-gap-base);"
            border
            > 
            <yl-flex-box  flexClass="" fixedClass="table-pagination" :isReverse="true">
              <template #fixed>
                <el-pagination background layout="total, sizes, prev, pager, next, jumper" style="float:right" :total="1000" />
              </template>
              <template #flex>
                  <el-table :data="tableData" border style="width: 100%;height:400px">
                    <el-table-column type="selection" label="详情"  width="60" header-align="center" align="center"> 
                    </el-table-column>
                    <el-table-column prop="date" label="生日" width="180" header-align="center"/>
                    <el-table-column prop="name" label="姓名" width="180" header-align="center"/>
                    <el-table-column prop="address" label="地址" header-align="center"/>
                  </el-table>
              </template>
            </yl-flex-box>
          </yl-panel>
        </template>
      </yl-flex-box>
    </template>
  </yl-flex-box>
</template>

<script setup lang="ts">
import { Search,  Promotion, CircleClose,Edit } from '@element-plus/icons-vue'

const { ref } = Vue
const input = ref('')
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '西安市雁塔区太白南路上上国际2009',
  },
]
</script>
<style>
.table-pagination {
  padding-top: var(--el-layout-gap-base);
}
.padding-bottom {
  padding-bottom: var(--el-layout-gap-base);
}
</style>