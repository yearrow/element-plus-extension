####  阴影

我们提供了以下几种投影样式，以供选择

:::demo  

```html
<template>
  <div class="shadow">
    <div
      v-for="(shadow, i) in shadowGroup"
      :key="i"
      class="shadow-item"
    >
      <div
        :style="{
          boxShadow: `var(${getCssVarName(shadow.type)})`,
          height: '120px',
          width: '120px',
        }"
      >
      </div>
      <div class="shadow-item-text">
        <div>
          {{ shadow.name }}
        </div>
        <code>
          {{ getCssVarName(shadow.type) }}
        </code>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const shadowGroup = ref([
  {
    name: 'Basic Shadow',
    type: '',
  },
  {
    name: 'Light Shadow',
    type: 'light',
  },
  {
    name: 'Lighter Shadow',
    type: 'lighter',
  },
  {
    name: 'Dark Shadow',
    type: 'dark',
  },
])

const getCssVarName = (type: string) => {
  return `--el-box-shadow${type ? '-' : ''}${type}`
}
</script>
<style scoped lang="less">
  .shadow {
    display: flex
  }
  .shadow-item {
    margin-right: 80px;
  }
  .shadow-item-text {
    padding-top: 10px
  }
</style>
```
:::