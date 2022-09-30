## 间距

用来区分元素的包裹层级，包括区域、元素、块外边距、内边距, 之间的间距

:::demo  

```html
<template>
  <div class="gap-demo">
    <div v-for="(item, i) in gapData" class="gap-demo-child" >
      <div class="gap-demo-item" :style="{padding: 'var(' + item.class + ')'}">
        <div class="gap-demo-iitem">
        </div>
      </div>
      <div class="gap-demo-describe">
        <span>{{item.title}}</span><br>
        <code>{{item.style}}</code><br>
        <code>{{item.class}}</code>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const gapData = [
    {
      title: '大间距',
      class: '--el-layout-gap-large',
      style: '16px'
    },
    {
      title: '标准间距',
      class: '--el-layout-gap-base',
      style: '12px'
    },
    // {
    //   title: '小间距',
    //   class: '--el-layout-gap-small',
    //   style: '8px'
    // }
  ]
</script>

<style lang="less" scoped>
.gap-demo {
  display: flex;
  border: 1px solid var(--el-border-color);
  padding: 20px;
  .gap-demo-child {
    .gap-demo-item {
      height: 100px;
      width: 200px;
      margin-right: 20px;
      border: 1px solid var(--el-border-color);
      .gap-demo-iitem {
        background: var(--el-fill-color);
        height:100%
      }
    }
    .gap-demo-describe {
      font-size: var(--el-font-size-medium);
      padding:10px;
      line-height:2;
      
    }
  }
}
</style>
```
:::


- 大间距： 一般情况下，大间距用于模块最外层的内边距(padding)

- 标准间距： 用于模块中的元素块之间的间距、内边距