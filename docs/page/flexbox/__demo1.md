####  基础用法


:::demo  

```html
<template> 
  <yl-flex-box>
    <template #fixed>
      固定区域
    </template>
    <template #flex>
      自适应区域
    </template
  </yl-flex-box>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>
```
:::