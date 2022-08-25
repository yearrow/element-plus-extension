
#### 展示类页面

展示类页面布局一般内容信息较多，展示信息较为丰富，类别较多，我们一般采用区块平铺的方式展示，有时候也借助弹窗或者二级页面展示二级内容信息。

布局示例
:::demo  

```html
<template>
  <div class="main">
    <yl-flex-box :vertical="true" fixed-width="30px">
      <template #fixed>
        <div class="ele-content">
          page-header
        </div>
      </template>
      <template #flex>
        <div class="dataview-container">
          <div class="dataview">
            filter
          </div>
          <div v-for="i in 20" :key="i" class="dataview">
            dataview{{i}}
          </div>
        </div>
      </template>
    </yl-flex-box>
  </div>
</template>

<script lang="ts" setup>
</script>
<style lang="less" scoped>
.main {
  height: 400px;
  display: flex;
  flex-direction: column;
  background:var(--el-fill-color);
  border: 1px solid var(--el-border-color);
  padding:4px;
}
.ele-content {
  background: white;
  height: 100%;
  text-align: center;
  color:var(--el-text-color-secondary);
}
.dataview-container {
  padding-top:4px;
  .dataview {
    background: white;
    height: 60px;
    text-align: center;
    margin-bottom: 4px;
    color:var(--el-text-color-secondary);
  }
}
</style>
```
:::
