##  基础用法

分为左右两个区域




:::demo  

```html
<template>
  <div style="border:solid 1px #ccc">
    <flex-line :left-padding="true" :right-padding="true" left-width="300px">
      <el-button type="primary" :icon="Plus" @click="dialogVisible=true">新增</el-button>
      <el-button type="primary" plain :icon="Edit">编辑</el-button>
      <el-button type="danger" plain  :icon="Delete">删除</el-button>
      <template #right>
        <el-button type="success" plain ><i class="cs cs-excel"></i> 导出</el-button>
      </template>
    </flex-line>
  </div>
</template>
<script lang="ts" setup>
  import { Plus, Edit, Delete } from '@element-plus/icons-vue'
</script>
```
:::