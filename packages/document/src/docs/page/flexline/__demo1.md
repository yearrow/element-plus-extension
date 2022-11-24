##  基础用法

分为左右两个区域。`flex-line`组件中的元素不能换行，元素之间使用`el-space`留出间距




:::demo  

```html
<template>
  <div style="border:solid 1px #ccc">
    <flex-line :left-padding="true" :right-padding="true" :right-clear-padding="['right']"  left-width="300px">
      <el-button type="primary" :icon="Plus" @click="dialogVisible=true">新增</el-button>
      <el-button type="primary" plain :icon="Edit">编辑</el-button>
      <el-button class="button-margin-left" type="danger" plain  :icon="Delete">删除</el-button>
      <template #right>
        <el-space>
          <el-input></el-input>
          <el-input></el-input>
          <el-button type="success" plain ><i class="cs cs-excel"></i> 导出</el-button>
        </el-space>
      </template>
    </flex-line>
  </div>
</template>
<script lang="ts" setup>
  import { Plus, Edit, Delete } from '@element-plus/icons-vue'
</script>
```
:::