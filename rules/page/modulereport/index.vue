<template>
  <yl-flex-box class="main-page1" flexClass="flex-area">
    <template #fixed>
      <yl-panel
        :show-header="false"
        contentStyle="padding:var(--el-layout-gap-base);height:24px"
        >
        <el-breadcrumb separator="/">
          <el-breadcrumb-item >数据汇总</el-breadcrumb-item>
          <el-breadcrumb-item>收料汇总统计</el-breadcrumb-item>
        </el-breadcrumb>
      </yl-panel>
    </template>
    <template #flex>
      <yl-flex-box flexClass="content-area">
        <template #fixed>
          <yl-panel
            :show-header="false"
            contentStyle="padding:var(--el-layout-gap-base);"
            >
            <yl-tool-bar more>
              <template v-slot:more>
                <el-form  label-position="left" label-width="90px" >
                  <el-row :gutter="12">
                    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4">
                      <el-form-item label="扩展过滤器">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4">
                      <el-form-item label="扩展过滤器">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4">
                      <el-form-item label="扩展过滤器">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4">
                      <el-form-item label="扩展过滤器">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4">
                      <el-form-item label="扩展过滤器">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4">
                      <el-form-item label="扩展过滤器">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
              </template>
              <template v-slot:filter>
                <el-form  label-position="left" label-width="90px" >
                  <el-row :gutter="12">
                    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4">
                      <el-form-item label="扩展过滤器">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4">
                      <el-form-item label="扩展过滤器">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4">
                      <el-form-item label="扩展过滤器">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4">
                      <el-form-item label="扩展过滤器">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
              </template>
              <yl-flex-box :vertical="false">
                <template #fixed>
                  <el-button type="info" :icon="Search" plain>查询</el-button>
                </template>
                <template #flex>
                  <div style="width:100%;text-align: right;">
                    <el-button type="success" plain :icon="Edit">导出</el-button>
                  </div>
                </template>
              </yl-flex-box>
            </yl-tool-bar>
          </yl-panel>
        </template>
        <template #flex>
          <yl-panel
            :show-header="false"
            contentStyle="padding:var(--el-layout-gap-base);overflow:hidden"
            style="height:100px; "
            >
            <el-row   :gutter="8">
              <el-col v-for="i in 4" :span="6">
                <div style="height:84px;border:solid 1px var(--el-border-color);border-radius:var(--el-border-radius-base)">
                
                </div>
              </el-col>
            </el-row>
          </yl-panel>
          <el-row >
            <el-col :span="12" style="padding-right: 4px;">
              <yl-panel
                :show-header="false"
                contentStyle="padding:var(--el-layout-gap-base);overflow:hidden;display:flex;justify-content:center "
                style="height:300px;margin-top:var(--el-layout-gap-base);"
                >
                <div id="mainRef" style="width: 600px;height:300px;"></div>
              </yl-panel>
            </el-col>
            <el-col :span="12" style="padding-left: 4px;">
              <yl-panel
                :show-header="false"
                contentStyle="padding:var(--el-layout-gap-base);overflow:hidden;display:flex;justify-content:center "
                style="height:300px;margin-top:var(--el-layout-gap-base);"
                >
                <div id="mainRef1" style="width: 600px;height:300px;"></div>
              </yl-panel>
            </el-col>
          </el-row>
          <yl-panel
            :show-header="true"
            contentStyle="padding:var(--el-layout-gap-base)"
            title="材料明细"
            style="height:400px; margin-top: var(--el-layout-gap-base);"
            >
            <template #tool>
              <el-input v-model="input" placeholder="请输入材料名称" style="width:220px;margin-right:var(--el-layout-gap-base)"></el-input>
              <el-input v-model="input" placeholder="请输入规格型号" style="width:220px"></el-input>
            </template>
            <yl-flex-box  flexClass="" fixedClass="table-pagination" :isReverse="true">
              <template #fixed>
                <el-pagination background layout="prev, pager, next" style="float:right" :total="1000" />
              </template>
              <template #flex>
                <el-table :data="tableData" border style="width: 100%;height:100%">
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
import { Search, Edit, Delete } from '@element-plus/icons-vue'
import * as echarts from 'echarts';

const { useRouter } = VueRouter
const router = useRouter()

const { ref,onMounted } = Vue
const input = ref('')
const isLoaded = ref(false)

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

const add = () => {
}
const mainRef = ref(null)

// 指定图表的配置项和数据
const option = {
  title: {
    text: '用料统计'
  },
  tooltip: {},
  legend: {
    top: '6%',
    data: ['销量'],
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};
const option1 = {
  title: {
    text: '数据来源'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '6%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};
onMounted(() => {
  const myChart = echarts.init(document.getElementById('mainRef'));
// 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  const myChart1 = echarts.init(document.getElementById('mainRef1'));
// 使用刚指定的配置项和数据显示图表。
  myChart1.setOption(option1);
})
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
  padding-top: var(--el-layout-gap-base);
}
.content-area {
  padding-top: var(--el-layout-gap-base);
}
</style>
