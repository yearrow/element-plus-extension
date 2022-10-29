##  阴影
::: tip
现实生活中的物体不可完全重叠，当光打过来时，每个物体都会产生阴影。这是我们理解物体的层叠关系的重要依据。依据现实中的这一行为，我们把阴影规范挪到屏幕世界中，使得用户更容易理解我们的系统。阴影规范提供给了我们另一个表达元素区别的维度，不同的阴影清楚地传达了不同的交互状态。

:::



我们将阴影分为三个等级，分别为，Basic Shadow、Light Shadow、Lighter Shadow。


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

- Lighter Shadow：

突出组件悬停效果，表示可供性。对于这个数据概览卡片来说，鼠标移入移出时阴影的显示与隐藏提供了一个交互可能性，表明它是可以点击交互的。

主要应用于小模块以及一些小的元素之中，例如输入框的激活状态。


::: tip
可供性 (affordance)，或称为直观功能、预设用途、可操作暗示、支应性、示能性，指一件物品实际上用来做何用途，或被认为有什么用途。如果看到某个东西就明白如何使用它，这就是这个东西的可供性在起作用。例如看到一个门上的把手，就知道把手是用来握着开门的，即使我们是第一次见这个把手，这就是把手提供的可供性在起作用
:::

- Light Shadow：

给下拉列表，气泡提示等使用的阴影。


- Basic Shadow：

模态组件阴影。例如弹窗。当弹窗出现时，弹窗位于绝对的最顶层，所以阴影最大。

