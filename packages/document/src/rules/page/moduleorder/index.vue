<template>
  <div class="main-page">
    <yl-flex-box :itemNum="2" :itemConfig="flexConfig">
      <template #item-1>
        <yl-navigation></yl-navigation>
      </template>
      <template #item-2>
        <yl-panel
        :show-header="false"
        contentStyle="padding:var(--el-layout-gap-base)"
        >
          <yl-flex-box :itemNum="2" :itemConfig="flexConfig1">
            <template #item-1>
              <yl-panel
              :show-header="false"
              contentStyle="padding:var(--el-layout-gap-base)"
              >
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
                    <el-button type="primary" :icon="Plus" @click="add">新增</el-button>
                    <el-button type="primary" plain :icon="Edit" @click="edit">编辑</el-button>
                    <el-button type="danger" plain  :icon="Delete">删除</el-button>
                    <span style="padding-left:10px">合计金额：<span style="color:red">333433.88</span></span>
                    <template v-slot:right>
                        <el-button type="success" plain ><i class="cs cs-excel"></i> &nbsp;导 出</el-button>
                    </template>
                  </yl-flex-line>
                </yl-tool-bar>
              </yl-panel>
            </template>
            <template #item-2>
              <yl-panel
              :show-header="false"
              border
              >
                <yl-flex-box :itemNum="2" :itemConfig="flexConfig2">
                  <template #item-1>
                    <el-table :data="tableData" border stripe  highlight-current-row style="width: 100%;height:100%">
                      <el-table-column prop="date" label="序号" type="index" width="60" align="center" header-align="center" />
                      <el-table-column prop="id" label="详情"  width="80" header-align="center" align="center">
                        <template #default="scope">
                          <el-button :icon="ZoomIn" size="small" circle plain @click="getDetail"/>
                          <el-button :icon="ZoomIn" size="small" circle plain @click="getDialogDetail"/>
                        </template>
                      </el-table-column>
                      <el-table-column prop="id" label="详情"  width="100" header-align="center" align="center">
                        <template #default="scope">
                          <el-tag v-if="scope.$index % 2 === 0" class="ml-2" type="success" size="small">已提交</el-tag>
                          <el-tag v-else class="ml-2" type="danger" size="small">未提交</el-tag>
                        </template>
                      </el-table-column>
                      <el-table-column prop="date" label="生日" width="180" header-align="center"/>
                      <el-table-column prop="name" label="单据编号" width="180" header-align="center">
                        <template #default="scope">
                          <el-button type="primary" link> 收料-202201010003 </el-button>
                        </template>
                      </el-table-column>
                      <el-table-column prop="price" label="金额" width="180" align="right" header-align="center" :formatter="priceFormat" />
                      <el-table-column prop="name" label="姓名" width="180" header-align="center"  />
                      <el-table-column prop="address" label="地址" header-align="center" show-overflow-tooltip/>
                    </el-table>
                  </template>
                  <template #item-2>
                    <el-pagination background layout="total, sizes, prev, pager, next, jumper" style="float:right" :total="1000" />
                  </template>
                </yl-flex-box>
              </yl-panel>
            </template>
          </yl-flex-box>
        </yl-panel>
      </template>
    </yl-flex-box>
  </div>
  <el-dialog
    v-model="dialogVisible"
    title="明细"
    width="50%"
    draggable
  >
    <items v-if="dialogVisible" />
  </el-dialog>
</template>

<script setup lang="ts">
import { Search, Edit, Delete, ZoomIn, Plus } from '@element-plus/icons-vue';
import items from './items.vue';
const { useRouter } = VueRouter;
const router = useRouter();

const { ref, onMounted } = Vue;
const input = ref('');
const dialogVisible = ref(false);
const tableData =ref([])



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
const priceFormat = (row, column, cellValue, index) => {
  const arr = String(row.price).split('.')
  return arr[0] + '.' + (arr[1] + '00000').substring(0,2)
}
const flexConfig = [
  { tag: 'item-1', isFixed: true, size: '', paddingSize: '', clearPadding: [] },
  { tag: 'item-2', isFixed: false, size: '', paddingSize: 'large', clearPadding: [] }
]
const flexConfig1 = [
  { tag: 'item-1', isFixed: true, size: '', paddingSize: 'base', clearPadding: ['bottom'] },
  { tag: 'item-2', isFixed: false, size: '', paddingSize: 'base', clearPadding: [] }
]
const flexConfig2 = [
  { tag: 'item-1', isFixed: false, size: '', paddingSize: 'small', clearPadding: ['bottom'] },
  { tag: 'item-2', isFixed: true, size: '', paddingSize: 'small', clearPadding: [] }
]
onMounted(async () => {
  for (let i = 0; i < 50; i++) {
    tableData.value.push({
      id: i,
      date: '2016-05-03',
      name: 'Tom' + i,
      address: '西安市雁塔区太白南路上上国际2009',
      price: 2533.40
    })
  }
})
</script>