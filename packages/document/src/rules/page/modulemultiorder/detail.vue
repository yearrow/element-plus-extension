<template>
  <flex-box class="main-page" flexClass="flex-area">
    <template #fixed>
      <panel
        :show-header="false"
        contentStyle="padding:var(--el-layout-gap-base)"
        >
        <div class="menu-title">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item >基础数据</el-breadcrumb-item>
            <el-breadcrumb-item>收料登记</el-breadcrumb-item>
            <el-breadcrumb-item>单据详情</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="menu-tool">
            <span @click="close" role="link" style="color:var(--el-color-primary);font-size: 14px;cursor:pointer"> 关闭 </span>
            <!-- <el-button
              type="primary"
              link
              @click="close"
              >关闭</el-button> -->
          </div>
        </div>
      </panel>
    </template>
    <template #flex>
      <flex-box flexClass="tree-panel">
        <template #fixed>
          <panel
            :show-header="true"
            contentStyle="padding:var(--el-layout-gap-base);"
            title="单据信息"
            >
            <template #tool>
              <el-button type="info" plain :icon="Edit">打印</el-button>
              <el-button type="success" plain :icon="Edit">导出</el-button>
            </template>
            <el-descriptions
              :column="4"
              border
              >
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">
                    <el-icon :style="iconStyle">
                      <user />
                    </el-icon>
                    姓名
                  </div>
                </template>
                张三
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">
                    <el-icon :style="iconStyle">
                      <iphone />
                    </el-icon>
                    电话
                  </div>
                </template>
                18100000000
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">
                    <el-icon :style="iconStyle">
                      <iphone />
                    </el-icon>
                    电话
                  </div>
                </template>
                18100000000
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">
                    <el-icon :style="iconStyle">
                      <iphone />
                    </el-icon>
                    电话
                  </div>
                </template>
                18100000000
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">
                    <el-icon :style="iconStyle">
                      <location />
                    </el-icon>
                    城市
                  </div>
                </template>
                西安
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">
                    <el-icon :style="iconStyle">
                      <tickets />
                    </el-icon>
                    备注
                  </div>
                </template>
                <el-tag size="small">School</el-tag>
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">
                    <el-icon :style="iconStyle">
                      <office-building />
                    </el-icon>
                    地址
                  </div>
                </template>
                西安市雁塔区太白南路上上国际2009
              </el-descriptions-item>
            </el-descriptions>
          </panel>
        </template>
        <template #flex>
          <panel
            :show-header="true"
            contentStyle="padding:var(--el-layout-gap-base)"
            title="材料明细"
            > 
            <!-- <template #tool>
              <el-button type="success" plain :icon="Edit">导出</el-button>
            </template> -->
            <flex-box  flexClass="tree-panel">
              <template #fixed>
                <tool-bar :divider="false">
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
                        <el-col :span="2">
                          <el-button type="info" :icon="Search" plain style="margin-bottom:10px">查询</el-button>
                        </el-col>
                      </el-row>
                    </el-form>
                  </template>
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
                        <el-table-column prop="date" label="生日" width="180" header-align="center"/>
                        <el-table-column prop="name" label="姓名" width="180" header-align="center"/>
                        <el-table-column prop="address" label="地址" header-align="center"/>
                      </el-table>
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
</template>
<script setup lang="ts">
import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
  Edit,
  Search
} from '@element-plus/icons-vue'
const { computed } = Vue
const { useRouter } = VueRouter
const router = useRouter()

const close = () => {
  router.go(-1)
}


const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px',
  }
  return {
    marginRight: marginMap.default,
  }
})

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
<style lang="less" scoped>
.main-page {
  padding: 0px;
  background: var(--el-bg-color-page);
}
.flex-area {
  padding: var(--el-layout-gap-large)
}
.menu-title {
	display: flex;
	align-items: center;
	.menu-tool {
		flex: 1;
    height: 14px;
    display: flex;
    align-items: center;
    /* text-align: right; */
    justify-content: right;
	}
}
.tree-panel {
  padding-top: var(--el-layout-gap-base);
}

.cell-item {
  display: flex;
  align-items: center;
}

</style>