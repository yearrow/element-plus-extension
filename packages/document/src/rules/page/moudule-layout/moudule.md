### 模块布局

::: tip
上文中`content`区域即为模块内容区域，本节对此区域进行布局说明
:::

#### 布局元素

- page-header
- filter
- tool
- alert
- dataview

约定
::: warning

1.页面开发中，无论是一级页面还是二级页面等都应该有`page-header`元素，`page-header`标题应该是模块的路径，`page-header`元素不应该随页面内容滚动

2.应该适当的使用tip元素提示数据展示，或者功能操作

3.`filter`、`tool`、`dataview`在使用时应该使用容器组件包裹，有时候为了紧凑性考虑，可以把不同功能组件包裹在同一个容器内

4.页面上的区块之间应该留有间隙，区块容器内部和组件之间也应该有间隔，都使用`--el-layout-gap-base`变量来做间隔大小。
:::

#### 操作类页面

操作类页面布局一般输入操作比较频繁，要求页面整个区域尽量减少通过滚动太浏览隐藏内容，我们一般要求操作内容是直观可见，如果内容较多，一般采用选项卡或者弹窗方式显示二级页面内容。


::: tip

你应该考虑使用`flex-box`组件布局操作类页面。

:::


布局示例

:::demo  

```html
<template>
  <div class="main">
    <flex-box :vertical="true" fixed-width="30px">
      <template #fixed>
        <div class="ele-content">
          page-header
        </div>
      </template>
      <template #flex>
        <flex-box :vertical="true" fixed-width="30px" class="ele-gap">
          <template #fixed>
            <div class="ele-content">
             filter
            </div>
          </template>
          <template #flex>
            <flex-box :vertical="true" fixed-width="30px" class="ele-gap">
              <template #fixed>
                <div class="ele-content">
                tool
                </div>
              </template>
              <template #flex>
                <flex-box :vertical="true" fixed-width="30px" class="ele-gap">
                  <template #fixed>
                    <div class="ele-content">
                    tip
                    </div>
                  </template>
                  <template #flex>
                    <div class="dataview-container">
                      <div v-for="i in 20" :key="i" class="dataview">
                        dataview
                      </div>
                    </div>
                  </template>
                </flex-box>
              </template>
            </flex-box>
          </template>
        </flex-box>
      </template>
    </flex-box>
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
.ele-gap {
  padding-top:4px;
}
.dataview-container {
  padding-top:4px;
  .dataview {
    background: white;
    height: 20px;
    text-align: center;
    color:var(--el-text-color-secondary);
  }
}
</style>
```
:::

