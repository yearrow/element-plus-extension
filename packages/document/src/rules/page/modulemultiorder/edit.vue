
<template>
   <flex-box class="main-page1" flexClass="flex-area">
    <template #fixed>
      <panel
        :show-header="false"
        contentStyle="padding:var(--el-layout-gap-base)"
        >
	      <div class="menu-title">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item >基础数据</el-breadcrumb-item>
            <el-breadcrumb-item>收料登记</el-breadcrumb-item>
            <el-breadcrumb-item>编辑</el-breadcrumb-item>
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
        <flex-box  flexClass="tree-panel">
          <template #fixed>
            <panel
              :show-header="true"
              contentStyle="padding:var(--el-layout-gap-base)"
              >
              <template #title>
                <div class="order-no">
                  No. <span>超耗-20221000001</span>
                </div>
              </template>
              <template #tool>
                  <el-button type="primary" plain :icon="Edit">选材</el-button>
                  <el-button type="primary" :icon="Edit">保存</el-button>
              </template>
              <el-form
                ref="ruleFormRef"
                :rules="rules"
                :label-position="'right'"
                label-width="100px"
                :model="formLabelAlign"
                status-icon
                >
                <el-row :gutter="12">
                  <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                    <el-form-item label="姓名" prop="name">
                      <el-input v-model="formLabelAlign.name" />
                    </el-form-item>
                  </el-col>
                  <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                    <el-form-item label="英文姓名" prop="name">
                      <el-input v-model="formLabelAlign.name" />
                    </el-form-item>
                  </el-col>
                  <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                    <el-form-item label="姓名" prop="name">
                      <el-input v-model="formLabelAlign.name" />
                    </el-form-item>
                  </el-col>
                  <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                    <el-form-item label="姓名" prop="name">
                      <el-input v-model="formLabelAlign.name" />
                    </el-form-item>
                  </el-col>
                  <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                    <el-form-item label="出生日期" prop="birth">
                      <el-date-picker
                        v-model="formLabelAlign.birth"
                        type="date"
                        style="width:100%"
                        placeholder="请选择"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                    <el-form-item label="出生日期" prop="birth">
                      <el-date-picker
                        v-model="formLabelAlign.birth"
                        type="date"
                        style="width:100%"
                        placeholder="请选择"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                    <el-form-item label="出生日期" prop="birth">
                      <el-date-picker
                        v-model="formLabelAlign.birth"
                        type="date"
                        style="width:100%"
                        placeholder="请选择"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                    <el-form-item label="用户类型" prop="region">
                      <el-select v-model="formLabelAlign.region" placeholder="请选择" style="width:100%">
                        <el-option label="系统用户" value="shanghai" />
                        <el-option label="注册用户" value="beijing" />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                    <el-form-item label="用户类型" prop="region">
                      <el-select v-model="formLabelAlign.region" placeholder="请选择" style="width:100%">
                        <el-option label="系统用户" value="shanghai" />
                        <el-option label="注册用户" value="beijing" />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                    <el-form-item label="用户类型" prop="region">
                      <el-select v-model="formLabelAlign.region" placeholder="请选择" style="width:100%">
                        <el-option label="系统用户" value="shanghai" />
                        <el-option label="注册用户" value="beijing" />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                    <el-form-item label="用户类型" prop="region">
                      <el-select v-model="formLabelAlign.region" placeholder="请选择" style="width:100%">
                        <el-option label="系统用户" value="shanghai" />
                        <el-option label="注册用户" value="beijing" />
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </panel>
          </template>
          <template #flex>
            <flex-box  fixedClass="tree-panel" :isReverse="true">
              <template #fixed>
                <panel
                  :show-header="false"
                  contentStyle="padding:var(--el-layout-gap-base)"
                  >
                  <el-form
                    ref="ruleFormRef"
                    :rules="rules"
                    :label-position="'right'"
                    label-width="100px"
                    :model="formLabelAlign"
                    status-icon
                    >
                      <el-form-item label="备注">
                        <el-input v-model="formLabelAlign.desc" type="textarea" />
                      </el-form-item>
                  </el-form>
                </panel>
              </template>
              <template #flex>
                <panel
                  :show-header="false"
                  contentStyle="padding:var(--el-layout-gap-base)"
                  >
                  <el-table :data="tableData" stripe border style="width: 100%;height:100%">
                    <el-table-column prop="date" label="生日" width="180" header-align="center" />
                    <el-table-column prop="name" label="姓名" width="180" header-align="center"  />
                    <el-table-column prop="address" label="地址" header-align="center" >
                      <template #default="scope">
                        <el-input v-model="scope.row.address" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="id" label="操作" width="80" align="center" header-align="center" >
                      <template #default="scope">
                        <el-button type="danger" :icon="Delete" size="small" circle />
                      </template>
                    </el-table-column>
                  </el-table>
                </panel>
              </template>
            </flex-box>
          </template>
        </flex-box>
    </template>
  </flex-box>
</template>

<script setup lang="ts">
import { Search, Edit, Delete, Promotion, CircleClose } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';

const { useRouter } = VueRouter;
const router = useRouter();
const input = ref('');

const formLabelAlign = reactive({
  name: '',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
  num: 1,
  birth: ''
});
const checked2 = ref(true);

const rules = reactive < FormRules > ({
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在3到5直接', trigger: 'blur' }
  ],
  region: [
    {
      required: true,
      message: '请选择用户类型',
      trigger: 'change'
    }
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change'
    }
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change'
    }
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change'
    }
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: '请输入电话号码',
      trigger: 'change'
    }
  ],
  resource: [
    {
      required: true,
      message: '请选择性别',
      trigger: 'change'
    }
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' }
  ]
});
const close = () => {
  router.go(-1);
};
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

<style lang="less" scoped>
.main-page1 {
  padding: 0px;
  background: var(--el-bg-color-page);
}
.flex-area {
  padding: var(--el-layout-gap-large)
}
.tree-panel {
  padding-top: var(--el-layout-gap-base);
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
.order-no {
  height: 100%;
  display: flex;
  align-items: center;
  font-size: var(--el-font-size-base);
  span {
    color: red
  }
}
</style>
