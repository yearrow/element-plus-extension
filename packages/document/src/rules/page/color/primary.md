
###  主色

主色是一个产品的代表颜色，一般与品牌色相关联。

通常，一套产品只有一个品牌主色，是界面中出现最多的颜色，在需要用色强调而且没有其他要求时，一般都会选择主色



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
    {var: '--el-color-primary-dark-2', label: '点击/选中'},
    {var: '--el-color-primary', label: '常规'},
    {var: '--el-color-primary-light-3', label: '悬浮'},
    {var: '--el-color-primary-light-5', label: '特殊场景'},
    {var: '--el-color-primary-light-7', label: '一般禁用'},
    {var: '--el-color-primary-light-8', label: '文字禁用'},
    {var: '--el-color-primary-light-9', label: '浅色/白底悬浮'}
  ]
</script>


- 使用主色突出信息，引导操作，功能状态表达

- 用于文字按钮、链接、卡片底色或边框色

- 常用于主要按钮和文字、高亮提醒、空状态

- 重点操作状态，tab的选中态，图表的颜色等
