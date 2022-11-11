####  基础用法

使用show-header控制头部的显示或隐藏，可以自定义右侧工具栏

:::demo  

```html
<template>
   <yl-panel
    title="标题"
    :show-header="true"
    border
    :padding-size="'base'"
    > 
      <template #tool>
        <el-button
          type="primary"
          link
          >更多>></el-button
        >
      </template>
        <div v-for="i in 10 " :key="i">这是内容{{i}}</div>
    </yl-panel>
</template>

<script lang="ts" setup>
</script>
<style lang="less" scoped>
</style>
```
:::