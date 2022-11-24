## 简易用法

可以通过`background`控制背景色的显示，`border`控制边框显示

:::demo  

```html
<template>
  <tool-bar :background="false" border>
    <flex-line :left-padding="true" :right-padding="true" :left-clear-padding="[]" :right-clear-padding="[]">
      <el-button type="primary" :icon="Plus" @click="add">新增</el-button>
      <el-button type="primary" plain :icon="Edit" @click="edit">编辑</el-button>
      <el-button type="danger" plain  :icon="Delete">删除</el-button>
      <span style="padding-left:10px">合计金额：<span style="color:red">333433.88</span></span>
      <template v-slot:right>
          <el-button type="success" plain ><i class="cs cs-excel"></i> &nbsp;导 出</el-button>
      </template>
    </flex-line>
  </tool-bar>
</template>
```
:::