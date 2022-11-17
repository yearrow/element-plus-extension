##  基础用法

分为label区域和内容区域，可以设置label宽度和文本


:::demo  

```html
<template>
  <filter-item label="材料名称" :label-width="'80px'">
    <el-input v-model="input"  placeholder="请输入内容"></el-input>
  </filter-item> 
</template>
<script lang="ts" setup>
  import {ref} from 'vue'
  import { Plus, Edit, Delete } from '@element-plus/icons-vue'
  const input = ref('')
</script>
```
:::