###  整体布局

::: tip
布局元素指针对某个容器的内部的下级呈现单元区块。
:::

#### 布局元素
- header
- menu
- footer
- appList
- content

#### 约定

::: warning
1.模块页面的`header`,`menu`,`footer`,`appList`基础元素由`@cs/web-framework`提供，`menu`和`applist`可伸缩。`content`元素为主区域，根据具体业务进行开发，其中`content`自带了默认的背景色。

2.模块`content`内容部分也就是模块的根组件，需引入样式类`class="page-main"`。
:::

#### 布局示例

::: warning
本节示例仅为`示意图`，具体布局参数值以布局规范为准
:::


:::demo  

```html
<template>
  <div class="main">
    <div class="header">
      <div class="ele-content">header</div>
    </div>
    <div class="page-body">
      <div class="menu">
        <div class="ele-content border-dash">menu</div>
      </div>
      <div class="body-center">
        <div class="content">
          <div class="ele-content">content</div>
        </div>
        <div class="footer">
          <div class="ele-content">footer</div>
        </div>
      </div>
      <div class="body-app-list">
        <div class="ele-content border-dash">appList</div>
      </div>
    </div>
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
  .header {
    height: 40px;
    padding-bottom:8px;
  }
  .page-body {
    flex:1;
    display:flex;
    .menu {
      width:150px;
      padding-right:8px;
    }
    .body-app-list {
      width:150px;
    }
    .body-center {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding-right:8px;
      .content {
        flex:1
      }
      .footer {
        padding-top:8px;
        height:40px
      }
    }
  }
}
.ele-content {
  background: white;
  height: 100%;
  text-align: center;
  color:var(--el-text-color-secondary)
}
.border-dash {
  border: 2px dashed var(--el-border-color);
}
</style>
```
:::