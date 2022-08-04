####  基础用法


:::demo  

```html
<template> 
  <flex-box>
    <template #fixed>
      固定区域
    </template>
    <template #flex>
      自适应区域
    </template
  </flex-box>
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