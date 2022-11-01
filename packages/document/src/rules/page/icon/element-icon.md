##  ElementPlus图标

Element Plus 提供了一套常用的图标集合。

::: tip
详情请查看官方文档 <https://element-plus.org/zh-CN/component/icon.html>
:::

##### 使用基础
:::demo  

```html
<template>
  <el-icon v-for="comp in iconData" :size="20" class="el-icon--left" >
    <component :is="comp" />
  </el-icon>
  <el-icon :size="20" class="is-loading">
    <Loading />
  </el-icon>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
  Loading
} from '@element-plus/icons-vue'
const iconData = [
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star
]
</script>
```
:::

##### 公共类
```css
is-loading 可以让图标动态旋转
el-icon--left 图标靠左，图标右边增加5px的外边距
el-icon--right 图标靠右，图标左边增加5px的外边距
```

##### 代码示例

:::demo  
```html
<template>
  <el-icon :size="20" color="red">
    <Delete />
  </el-icon>
  <el-icon :size="20" class="is-loading">
    <Loading />
  </el-icon>
  <el-icon :size="20" class="el-icon--left">
    <Message />
  </el-icon>
  <el-icon  :size="20" class="el-icon--right">
    <Search />
  </el-icon>
</template>
<script lang="ts" setup>
import {
  Delete,
  Loading,
  Message,
  Search,
} from '@element-plus/icons-vue'
</script>
```
:::