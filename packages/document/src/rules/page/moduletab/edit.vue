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
              <el-tabs v-model="activeName" class="padding-base tab-panel-base">
                <el-tab-pane label="基本信息" name="first">
                  <el-form
                    ref="ruleFormRef"
                    :rules="rules"
                    :label-position="'right'"
                    label-width="100px"
                    :model="formLabelAlign"
                    status-icon
                    >
                    <el-divider>
                      <el-tag>
                      基本信息
                      </el-tag>
                    </el-divider>
                    <el-row>
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
                    <el-divider>
                      <el-tag>
                      发票信息
                      </el-tag>
                    </el-divider>
                    <el-row>
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
                    <el-divider>
                      <el-tag>
                      额外信息
                      </el-tag>
                   </el-divider>
                      <el-row>
                        <el-col :span="24">
                          <el-form-item label="说明" >
                            <el-input v-model="formLabelAlign.desc" type="textarea" />
                          </el-form-item>
                        </el-col>
                      </el-row>
                  </el-form>
                </el-tab-pane>
                <el-tab-pane label="材料信息" name="second" style="height:100%">
                  <flex-box :itemNum="2" :itemConfig="flexConfig2">
                    <template #item-1>
                      <tool-bar :background="true">
                        <flex-line :left-padding="true" :right-padding="true" >
                          <el-button type="primary" plain @click="_select"><i class="cs cs-multi-add" style="font-size:14px"></i> &nbsp;选材</el-button>
                        </flex-line>
                      </tool-bar>
                    </template>
                    <template #item-2>
                      <panel
                        border
                        :show-header="false"
                        padding-size="small"
                        >
                        <el-table :data="tableData" stripe border style="width: 100%;height:100%">
                          <el-table-column prop="date" label="序号" type="index" width="60" align="center" header-align="center" />
                          <el-table-column prop="date" label="生日" width="180" header-align="center" />
                          <el-table-column prop="name" label="姓名" width="180" header-align="center"  />
                          <el-table-column prop="name" label="姓名" width="180" header-align="center"  />
                          <el-table-column prop="name" label="姓名" width="180" header-align="center"  />
                          <el-table-column prop="address" label="地址" header-align="center" >
                            <template #default="scope">
                              <el-input v-model="scope.row.address" size="small" />
                              </template>
                          </el-table-column>
                          <el-table-column prop="id" label="操作" width="80" align="center" header-align="center" >
                            <template #default="scope">
                              <el-button type="danger" link size="small" plain><i class="cs cs-delete" style="font-size:14px"></i> 删除 </el-button>
                            </template>
                          </el-table-column>
                        </el-table>
                      </panel>
                    </template>
                  </flex-box>
                </el-tab-pane>
              </el-tabs>
            </template>
            <template #item-2>
              <tool-bar :background="true" :padding-size="'base'">
                <flex-line :left-padding="true" :right-padding="true" :left-clear-padding="[]" :right-clear-padding="[]">
                  <template v-slot:right>
                    <el-button link type="primary">重置</el-button>
                    <el-button type="primary"><i class="cs cs-baocun el-icon--left"></i>保存</el-button>
                  </template>
                </flex-line>
              </tool-bar>
            </template>
          </flex-box>
        </template>
      </flex-box>
    </div>
  </template>
  <script setup lang="ts">
  import { Search, Edit, Delete } from '@element-plus/icons-vue';
  import { reactive, ref, onMounted } from 'vue';
  const { useRouter } = VueRouter;
  const router = useRouter();
  const input = ref('');
  const activeName = ref('first')
  const dialogVisible = ref(false);
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
  
  const _select = () => {
    dialogVisible.value = true;
  };
  
  const flexConfig = [
    { tag: 'item-1', isFixed: true, size: '', paddingSize: '', clearPadding: [] },
    { tag: 'item-2', isFixed: false, size: '', paddingSize: '', clearPadding: [] }
  ]
  const flexConfig1 = [
    { tag: 'item-1', isFixed: false, size: '', paddingSize: 'large', clearPadding: ['bottom'] },
    { tag: 'item-2', isFixed: true, size: '', paddingSize: 'large', clearPadding: [] }
  ]
  const flexConfig2 = [
    { tag: 'item-1', isFixed: true, size: '', paddingSize: 'base', clearPadding: ['bottom'] },
    { tag: 'item-2', isFixed: false, size: '', paddingSize: 'base', clearPadding: ['bottom'] },
  ]
const tableData = ref([])
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
  