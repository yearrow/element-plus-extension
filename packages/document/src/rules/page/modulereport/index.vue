<template>
  <div class="main-page">
    <flex-box :itemNum="2" :itemConfig="flexConfig">
      <template #item-1>
        <yl-navigation></yl-navigation>
      </template>
      <template #item-2>
        <flex-box :itemNum="5" :itemConfig="flexConfig1">
          <template #item-1>
            <panel
              :show-header="false"
              paddingSize="small"
              >
              <tool-bar more :divider="false">
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
                <template v-slot:filterTool>
                  <el-row :gutter="6">
                      <el-col :span="12">
                        <el-button type="info" :icon="Search" plain>查询</el-button>
                      </el-col>
                      <el-col :span="12">
                        <el-button type="success" plain ><i class="cs cs-excel"></i> &nbsp;导 出</el-button>
                      </el-col>
                  </el-row>
                </template>
              </tool-bar>
            </panel>
          </template>
          <template #item-2>
            <panel
              :show-header="false"
              paddingSize="small"
              >
              <el-row  style="height:100%;" :gutter="8">
                <el-col v-for="i in 4" :span="6">
                  <div class="stastic-box">
                    <div class="stastic-left">
                      <div style="font-size:16px;font-weight: 700;white-space: nowrap;padding:10px;color:var(--el-text-color-regular)"> 访问总人次</div>
                      <div style="font-size:16px;font-weight: 700;white-space: nowrap;padding:0px 10px 10px 10px"> 5670</div>
                      <div style="padding:0px 10px 10px 10px">较昨日 <span style="color:red">203.33↑</span></div>
                    </div>
                    <div class="stastic-right">
                      <div :id="'chart' + i" style="width: 160px;height:100%;"></div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </panel>
          </template>
          <template #item-3>
            <el-row >
              <el-col :span="12" style="padding-right: calc(var(--el-layout-gap-large) / 2);">
                <panel
                  :show-header="false"
                  paddingSize="small"
                  >
                  <div id="mainRef" style="width: 600px;height:300px;"></div>
                </panel>
              </el-col>
              <el-col :span="12" style="padding-left: calc(var(--el-layout-gap-large) / 2);">
                <panel
                  :show-header="false"
                  paddingSize="small"
                  >
                  <div id="mainRef1" style="width: 600px;height:300px;"></div>
                </panel>
              </el-col>
            </el-row>
          </template>
          <template #item-4>
            <panel
            :show-header="true"
            title="材料明细"
            >
              <template #tool>
                <flex-line :left-padding="true" :right-padding="true">
                  <template #right>
                    <el-input v-model="input" placeholder="请输入材料名称" style="width:220px;margin-right:var(--el-layout-gap-base)"></el-input>
                    <el-input v-model="input" placeholder="请输入规格型号" style="width:220px;margin-right:var(--el-layout-gap-base)"></el-input>
                    <el-button type="info" :icon="Search" plain>查询</el-button>
                  </template>
                </flex-line>
              </template>
              <flex-box :itemNum="2" :itemConfig="[{tag: 'item-1', isFixed: false, paddingSize:'small',clearPadding: ['bottom']},{tag: 'item-2', isFixed: true, paddingSize:'small'}]">
                <template #item-1>
                  <el-table :data="tableData" border style="width: 100%;height:300px">
                    <el-table-column prop="date" label="序号" type="index" width="60" align="center" header-align="center" />
                    <el-table-column prop="date" label="生日" width="180" header-align="center"/>
                    <el-table-column prop="name" label="姓名" width="180" header-align="center"/>
                    <el-table-column prop="address" label="地址" header-align="center"/>
                  </el-table>
                </template>
                <template #item-2>
                  <el-pagination background layout="prev, pager, next" style="float:right" :total="1000" />
                </template>
              </flex-box>
            </panel>
          </template>
          <template #item-5>
            <el-tabs v-model="activeName" class="demo-tabs" style="background:white;padding:var(--el-layout-gap-small)">
              <el-tab-pane label="供应商统计" name="first">
                <flex-box :itemNum="2" :itemConfig="[{tag: 'item-1', isFixed: false, paddingSize:'small',clearPadding: ['bottom']},{tag: 'item-2', isFixed: true, paddingSize:'small'}]">
                  <template #item-1>
                    <el-table :data="tableData" border style="width: 100%;height:300px">
                      <el-table-column prop="date" label="序号" type="index" width="60" align="center" header-align="center" />
                      <el-table-column prop="date" label="生日" width="180" header-align="center"/>
                      <el-table-column prop="name" label="姓名" width="180" header-align="center"/>
                      <el-table-column prop="address" label="地址" header-align="center"/>
                    </el-table>
                  </template>
                  <template #item-2>
                    <el-pagination background layout="prev, pager, next" style="float:right" :total="1000" />
                  </template>
                </flex-box>
              </el-tab-pane>
              <el-tab-pane label="材料统计" name="second">
                <flex-box :itemNum="2" :itemConfig="[{tag: 'item-1', isFixed: false, paddingSize:'small',clearPadding: ['bottom']},{tag: 'item-2', isFixed: true, paddingSize:'small'}]">
                  <template #item-1>
                    <el-table :data="tableData" border style="width: 100%;height:300px">
                      <el-table-column prop="date" label="序号" type="index" width="60" align="center" header-align="center" />
                      <el-table-column prop="date" label="生日" width="180" header-align="center"/>
                      <el-table-column prop="name" label="姓名" width="180" header-align="center"/>
                      <el-table-column prop="address" label="地址" header-align="center"/>
                    </el-table>
                  </template>
                  <template #item-2>
                    <el-pagination background layout="prev, pager, next" style="float:right" :total="1000" />
                  </template>
                </flex-box>
              </el-tab-pane>
            </el-tabs>
          </template>
        </flex-box>
      </template>
    </flex-box>
  </div>
</template>

<script setup lang="ts">
import { Search, Edit, Delete } from '@element-plus/icons-vue';
import * as echarts from 'echarts';

const { useRouter } = VueRouter;
const router = useRouter();

const { ref, onMounted } = Vue;
const input = ref('');
const isLoaded = ref(false);
const activeName = ref('first')
const flexConfig = [
  { tag: 'item-1', isFixed: true, size: '', paddingSize: '', clearPadding: [] },
  { tag: 'item-2', isFixed: false, size: '', paddingSize: '', clearPadding: [] }
]
const flexConfig1 = [
  { tag: 'item-1', isFixed: true, size: '', paddingSize: 'large', clearPadding: ['bottom'] },
  { tag: 'item-2', isFixed: true, size: '', paddingSize: 'large', clearPadding: ['bottom'] },
  { tag: 'item-3', isFixed: true, size: '', paddingSize: 'large', clearPadding: ['bottom'] },
  { tag: 'item-4', isFixed: true, size: '', paddingSize: 'large', clearPadding: ['bottom'] },
  { tag: 'item-5', isFixed: true, size: '', paddingSize: 'large', clearPadding: [] }
]
const tableData = []
for (let i = 0; i < 50; i++) {
  tableData.push({
    id: i,
    date: '2016-05-03',
    name: 'Tom' + i,
    address: '西安市雁塔区太白南路上上国际2009',
    price: 44323.55
  })
}
const add = () => {
};
const mainRef = ref(null);

// 指定图表的配置项和数据
const option = {
  title: {
    text: '用料统计'
  },
  tooltip: {},
  legend: {
    top: '6%',
    data: ['销量']
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
const option2 = {
  xAxis: {
    show: false,
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    show: false,
    type: 'value'
  },
  series: [
    {
      data: [400, 932, 300, 4444, 560, 1330, 33],
      type: 'line',
      smooth: true
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
  for (let i = 0; i < 4; i++) {
    // 使用刚指定的配置项和数据显示图表。
    echarts.init(document.getElementById('chart' + (i + 1))).setOption(option2);
  }
});
</script>
<style lang="less" >
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
  padding-top: var(--el-layout-gap-large);
}
.stastic-box {
  height:100%;
  border-radius:var(--el-border-radius-base);
  background: linear-gradient(rgb(242, 249, 254) 0%, rgb(230, 244, 254) 100%);
  display: flex;
}
.stastic-left {
  padding: var(--el-layout-gap-base);
  
}
.stastic-right {
  padding: var(--el-layout-gap-base);
  
}
</style>
