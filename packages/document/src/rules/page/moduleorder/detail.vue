<template>
   <div class="main-page">
    <flex-box :itemNum="2" :itemConfig="flexConfig">
      <template #item-1>
        <yl-navigation>
          <template #tool>
            <el-button @click="close" type="primary" link> 关闭 </el-button>
          </template>
        </yl-navigation>
      </template>
      <template #item-2>
        <flex-box :itemNum="2" :itemConfig="flexConfig1">
          <template #item-1>
            <panel
              :show-header="true"
              paddingSize="small"
              title="单据信息"
              >
              <template #tool>
                <flex-line :left-padding="true" :right-padding="true">
                  <template #right>
                    <el-button type="info" plain  :icon="Printer"> &nbsp;打印</el-button>
                    <el-button type="success" plain  ><i class="cs cs-excel" ></i> &nbsp;导出</el-button>
                  </template>
                </flex-line>
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
          <template #item-2>
            <panel
              :show-header="true"
              title="材料明细"
              >
              <flex-box :itemNum="2" :itemConfig="flexConfig2">
                <template #item-1>
                  <tool-bar :background="true" >
                    <flex-line :left-padding="true" :right-padding="true" >
                      <el-space>
                        <el-input v-model="input" placeholder="材料名称"></el-input>
                        <el-input v-model="input" placeholder="规格型号"></el-input>
                        <el-button type="info" :icon="Search" plain >查询</el-button>
                      </el-space>
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
                        <el-table :data="tableData" border style="width: 100%;height:100%">
                          <el-table-column prop="date" label="序号" type="index" width="60" align="center" header-align="center" />
                          <el-table-column prop="date" label="生日" width="180" header-align="center"/>
                          <el-table-column prop="name" label="姓名" width="180" header-align="center"/>
                          <el-table-column prop="address" label="地址" header-align="center"/>
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
</template>
<script setup lang="ts">
import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
  Edit,
  Search,
  Printer
} from '@element-plus/icons-vue';
const { computed } = Vue;
const { useRouter } = VueRouter;
const router = useRouter();

const close = () => {
  router.go(-1);
};

const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px'
  };
  return {
    marginRight: marginMap.default
  };
});

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
const flexConfig = [
  { tag: 'item-1', isFixed: true, size: '', paddingSize: '', clearPadding: [] },
  { tag: 'item-2', isFixed: false, size: '', paddingSize: '', clearPadding: [] }
]
const flexConfig1 = [
  { tag: 'item-1', isFixed: true, size: '', paddingSize: 'large', clearPadding: ['bottom'] },
  { tag: 'item-2', isFixed: false, size: '', paddingSize: 'large', clearPadding: [] }
]
const flexConfig2 = [
  { tag: 'item-1', isFixed: true, size: '', paddingSize: 'base', clearPadding: ['bottom'] },
  { tag: 'item-2', isFixed: false, size: '', paddingSize: 'base', clearPadding: [] }
]
const flexConfig3 = [
  { tag: 'item-1', isFixed: false, size: '', paddingSize: 'small', clearPadding: ['bottom'] },
  { tag: 'item-2', isFixed: true, size: '', paddingSize: 'small', clearPadding: [] }
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
.tree-panel-l {
  padding-top: var(--el-layout-gap-large);
}

.cell-item {
  display: flex;
  align-items: center;
}

</style>
