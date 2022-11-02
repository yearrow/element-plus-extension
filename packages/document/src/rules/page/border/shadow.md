##  阴影
::: tip
现实生活中的物体不可完全重叠，当光打过来时，每个物体都会产生阴影。这是我们理解物体的层叠关系的重要依据。依据现实中的这一行为，我们把阴影规范挪到屏幕世界中，使得用户更容易理解我们的系统。阴影规范提供给了我们另一个表达元素区别的维度，不同的阴影清楚地传达了不同的交互状态。

:::


需要用到阴影的地方统一使用系规范提供标准阴影

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
  // {
  //   name: 'Basic Shadow',
  //   type: '',
  // },
  // {
  //   name: 'Light Shadow',
  //   type: 'light',
  // },
  {
    name: 'Lighter Shadow',
    type: 'lighter',
  },
  // {
  //   name: 'Dark Shadow',
  //   type: 'dark',
  // },
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
