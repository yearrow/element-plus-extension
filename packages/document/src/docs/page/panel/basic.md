####  基础用法

使用`show-header`控制头部的显示或隐藏，可以自定义右侧工具栏

:::demo  

```html
<template>
   <panel
    title="标题"
    :show-header="true"
    border
    :padding-size="'base'"
    > 
      <template #tool>
    <flex-line :left-padding="true" :right-padding="true" :left-clear-padding="['left']">
        <el-button type="primary" :icon="Plus" @click="dialogVisible=true">新增</el-button>
        <el-button type="primary" plain :icon="Edit">编辑</el-button>
        <el-button type="danger" plain  :icon="Delete">删除</el-button>
      <template #right>
        <el-button
          type="primary"
          link
          >更多>></el-button
        >
      </template>
    </flex-line>
      </template>
        <div v-for="i in 10 " :key="i">这是内容{{i}}</div>
    </panel>
</template>

<script lang="ts" setup>
</script>
<style lang="less" scoped>
</style>
```
:::