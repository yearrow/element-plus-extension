

### 通用组件库
element-plus
::: tip
element-plus官方组件库，跟随官方组件一起更新
:::
element-plus-extension
::: tip
扩展组件库，基于element-plus，扩展了我们经常使用的组件
:::
element-yearrow-theme
::: tip
样式库，element-plus和element-plus-extension的样式集合，只需要引用这一个样式文件即可
:::

#### 安装

```bash

$ npm install @cs/element-plus --D
$ npm install @cs/element-plus-extension --D
$ npm install @cs/element-yearrow-theme --D

```

#### 引入

使用头部引入方式

```
  <link rel="stylesheet" href="./lib/element-yearrow-theme/index.css" />
  <script src="./lib/element-plus/index.full.min.js"></script>
  <script src="./lib/epe/epe.mini.js"></script>
```


```javascript
// index.ts
import App from './App'

const app = Vue.createApp(App)

app.use(ElementPlus)

app.use(epe)

app.mount('#app')

```
#### 使用示例（YlPanel 面板）


:::demo  

```html
<template>
   <yl-panel
    title="标题"
    :show-header="true"
    border
    > 
      <template #tool>
        <el-button
          type="primary"
          link
          >更多>></el-button
        >
      </template>
      <div class="panel-content">
        <div v-for="i in 10 " :key="i">这是内容{{i}}</div>
      </div>
    </yl-panel>
</template>

<script lang="ts" setup>
</script>
<style lang="less" scoped>
  .panel-content {
    padding: 10px
  }
</style>
```
:::

::: tip
其余组件请查看组件文档

::: 

### 业务组件库
暂留
### 三方组件库

项目中如果要引入第三方组件，评估组件大小，如果组件大于会给包增加大于100K的体积时考虑在.html头部挂载的方式引入。
如果较小直接在页面中引用手动注册使用。