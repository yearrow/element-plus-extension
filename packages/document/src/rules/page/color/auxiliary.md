### 辅助色

即功能色，借助人们的对色彩的心理模型，帮助人高效获得信息。例如绿色代表通行、成功，红色代表禁止、错误、危险操作，橙色代表提示/警告



#### 成功

<el-row :gutter="10">
  <el-col v-for="(item,i) in colorData" :key="i" :span="3">
    <div class="color-box">
      <div class="top" :style="{background: `var(${item.var})`}">{{item.var}}</div>
      <div class="bottom">{{item.label}}</div>
    </div>
  </el-col>
</el-row>

<script lang="ts" setup>
  const colorData = [
    {var: '--el-color-success-dark-2', label: '点击/选中'},
    {var: '--el-color-success', label: '常规'},
    {var: '--el-color-success-light-3', label: '悬浮'},
    {var: '--el-color-success-light-5', label: '特殊场景'},
    {var: '--el-color-success-light-7', label: '一般禁用'},
    {var: '--el-color-success-light-8', label: '文字禁用'},
    {var: '--el-color-success-light-9', label: '浅色/白底悬浮'}
  ]
  const colorData1 = [
    {var: '--el-color-warning-dark-2', label: '点击/选中'},
    {var: '--el-color-warning', label: '常规'},
    {var: '--el-color-warning-light-3', label: '悬浮'},
    {var: '--el-color-warning-light-5', label: '特殊场景'},
    {var: '--el-color-warning-light-7', label: '一般禁用'},
    {var: '--el-color-warning-light-8', label: '文字禁用'},
    {var: '--el-color-warning-light-9', label: '浅色/白底悬浮'}
  ]
  const colorData2 = [
    {var: '--el-color-danger-dark-2', label: '点击/选中'},
    {var: '--el-color-danger', label: '常规'},
    {var: '--el-color-danger-light-3', label: '悬浮'},
    {var: '--el-color-danger-light-5', label: '特殊场景'},
    {var: '--el-color-danger-light-7', label: '一般禁用'},
    {var: '--el-color-danger-light-8', label: '文字禁用'},
    {var: '--el-color-danger-light-9', label: '浅色/白底悬浮'}
  ]
  const colorData3 = [
    {var: '--el-color-primary-dark-2', label: '点击/选中'},
    {var: '--el-color-primary', label: '常规'},
    {var: '--el-color-primary-light-3', label: '悬浮'},
    {var: '--el-color-primary-light-5', label: '特殊场景'},
    {var: '--el-color-primary-light-7', label: '一般禁用'},
    {var: '--el-color-primary-light-8', label: '文字禁用'},
    {var: '--el-color-primary-light-9', label: '浅色/白底悬浮'}
  ]
   const colorData4 = [
    {var: '--el-color-info-dark-2', label: '点击/选中'},
    {var: '--el-color-info', label: '常规'},
    {var: '--el-color-info-light-3', label: '悬浮'},
    {var: '--el-color-info-light-5', label: '特殊场景'},
    {var: '--el-color-info-light-7', label: '一般禁用'},
    {var: '--el-color-info-light-8', label: '文字禁用'},
    {var: '--el-color-info-light-9', label: '浅色/白底悬浮'}
  ]
</script>

#### 警告/提醒

<el-row :gutter="10">
  <el-col v-for="(item,i) in colorData1" :key="i" :span="3">
    <div class="color-box">
      <div class="top" :style="{background: `var(${item.var})`}">{{item.var}}</div>
      <div class="bottom">{{item.label}}</div>
    </div>
  </el-col>
</el-row>

#### 错误

<el-row :gutter="10">
  <el-col v-for="(item,i) in colorData2" :key="i" :span="3">
    <div class="color-box">
      <div class="top" :style="{background: `var(${item.var})`}">{{item.var}}</div>
      <div class="bottom">{{item.label}}</div>
    </div>
  </el-col>
</el-row>

#### 链接

<el-row :gutter="10">
  <el-col v-for="(item,i) in colorData3" :key="i" :span="3">
    <div class="color-box">
      <div class="top" :style="{background: `var(${item.var})`}">{{item.var}}</div>
      <div class="bottom">{{item.label}}</div>
    </div>
  </el-col>
</el-row>

#### 信息色

<el-row :gutter="10">
  <el-col v-for="(item,i) in colorData4" :key="i" :span="3">
    <div class="color-box">
      <div class="top" :style="{background: `var(${item.var})`}">{{item.var}}</div>
      <div class="bottom">{{item.label}}</div>
    </div>
  </el-col>
</el-row>
