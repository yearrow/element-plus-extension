
<template>
  <flex-box :itemNum="2" :itemConfig="flexConfig">
    <template #item-1>
      <el-form
        ref="ruleFormRef"
        :rules="rules"
        :label-position="'right'"
        label-width="100px"
        :model="formLabelAlign"
        status-icon
        >
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="formLabelAlign.name" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="英文姓名" prop="name">
              <el-input v-model="formLabelAlign.name" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="formLabelAlign.name" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="formLabelAlign.name" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="出生日期" prop="birth">
              <el-date-picker
                v-model="formLabelAlign.birth"
                type="date"
                style="width:100%"
                placeholder="请选择"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="formLabelAlign.name" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="姓名姓名" prop="name">
              <el-input v-model="formLabelAlign.name" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="formLabelAlign.name" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="排序" >
              <el-input-number v-model="formLabelAlign.num" :min="1" :max="10" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别" prop="resource">
              <el-radio-group v-model="formLabelAlign.resource">
                <el-radio label="男" />
                <el-radio label="女" />
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别" prop="resource">
              <el-radio-group v-model="formLabelAlign.resource">
                <el-radio label="男" />
                <el-radio label="女" />
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用户类型" prop="region">
              <el-select v-model="formLabelAlign.region" placeholder="请选择" style="width:100%">
                <el-option label="系统用户" value="shanghai" />
                <el-option label="注册用户" value="beijing" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用户类型" prop="region">
              <el-select v-model="formLabelAlign.region" placeholder="请选择" style="width:100%">
                <el-option label="系统用户" value="shanghai" />
                <el-option label="注册用户" value="beijing" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="电话" prop="type">
              <el-input v-model="formLabelAlign.type" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="电话" prop="type">
              <el-input v-model="formLabelAlign.type" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="启用" prop="delivery">
              <el-checkbox v-model="formLabelAlign.delivery"></el-checkbox>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="启用" prop="delivery">
              <el-checkbox v-model="formLabelAlign.delivery"></el-checkbox>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="说明" >
              <el-input v-model="formLabelAlign.desc" type="textarea" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="说明" >
              <el-input v-model="formLabelAlign.desc" type="textarea" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </template>
    <template #item-2>
      <flex-line>
        <el-checkbox v-model="checked2">保存后关闭</el-checkbox>
        <template v-slot:right>
            <el-button link type="primary">重置</el-button>
            <el-button type="primary"><i class="cs cs-baocun el-icon--left"></i>保存</el-button>
        </template>
      </flex-line>
    </template>
  </flex-box>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Promotion, CircleClose } from '@element-plus/icons-vue';

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
const flexConfig = [
  { tag: 'item-1', isFixed: false, size: '', paddingSize: 'large', clearPadding: ['bottom'] },
  { tag: 'item-2', isFixed: true, size: '', paddingSize: 'large', clearPadding: [] }
]
</script>

<style>
.dialog-main {
  padding: var(--el-layout-gap-large);
}
.flex-content {
  padding-bottom: var(--el-layout-gap-large);
}
</style>
