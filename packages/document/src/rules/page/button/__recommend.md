### 按钮及操作

#### 按钮类型定义

- 主功能按钮：业务场景上规定的主要功能按钮，如：添加、修改、审核、保存、确认等之类。
:::demo  
```html
<template>
  <el-button type="primary" :icon="Plus" >主功能</el-button>
  <el-button type="primary" plain :icon="Edit" >次主功能</el-button>
</template>
<script setup lang="ts">
import { Plus, Edit, Delete, Search, Paperclip, Setting, Printer,Coordinate } from '@element-plus/icons-vue'
</script>
```
:::

- 警告功能按钮： 一些逆向的业务操作或者对其他业务有影响的操作，如：撤销审核、撤销审批等之类。
:::demo  
```html
<template>
  <el-button type="warning" :icon="Edit" >主警告功能</el-button>
  <el-button type="warning" plain :icon="Edit" >次警告功能</el-button>
</template>
```
:::

- 危险功能按钮：一些危险的业务操作，一般会对数据造成不可逆或者可逆过程很复杂的影响。 如：删除、冲红等。
:::demo  
```html
<template>
  <el-button type="danger" :icon="Delete">主危险功能</el-button>
  <el-button type="danger" plain :icon="Delete">次危险功能</el-button>
</template>
```
:::
- 普通功能按钮：业务上实现的一个对主要业务功能进行补充的功能，如：查询、参数设置、选材按钮等。

:::demo  
```html
<template>
  <el-button type="info" :icon="Search">主普通功能</el-button>
  <el-button type="info" plain :icon="Search">次普通功能</el-button>
</template>
```
:::

- 辅助功能按钮：实现的一些不影响业务数据的功能，如数据导出、打印之类按钮。
:::demo  
```html
<template>
  <el-button type="success" :icon="Paperclip">主辅助功能</el-button>
  <el-button type="success" plain :icon="Paperclip">次辅助功能</el-button>
</template>
```
:::
- 文本按钮：提示框或表单中的取消操作, 如：取消、重置、关闭按钮，表格行内编辑或删除按钮等
:::demo  
```html
<template>
  <el-button
    link
    type="primary"
  >
    取消
  </el-button>
  <el-button
    link
    type="primary"
    :icon="Edit"
  >
    编辑
  </el-button>
  <el-button
    link
    type="danger"
    :icon="Delete"
  >
    删除
  </el-button>
  <el-button
    link
    type="primary"
  >
    更多>>
  </el-button>
</template>
```
:::
#### 规范

- 一个页面中只能有一个`主要动作按钮`
- 只有存在主要动作按钮时，才会出现`次要动作按钮`
- 如果存在`主要动作按钮`，那么其他的按钮只能是`次要动作按钮`
- 没有特殊要求情况下，按钮尺寸都使用默认大小
- 按钮都要搭配图标使用，文本按钮可以不加图标
- 按钮中涉及异步操作的都要加`loading`属性，避免发起多次请求。如：保存、提交、撤销提交等按钮



### 常用按钮

#### 主功能按钮

:::demo  
```html
<template>
  <div class="btn-items">
    新增： <el-button type="primary" :icon="Plus" >新增</el-button>
  </div>
  <div class="btn-items">
    编辑： <el-button type="primary" :icon="Edit" >编辑</el-button>
  </div>
  <div class="btn-items">
    保存： <el-button type="primary" :icon="Plus" >保存</el-button>（缺少图标）
  </div>
  <div class="btn-items">
    提交： <el-button type="primary" :icon="Coordinate" >提交</el-button>（缺少图标）
  </div>
</template>
<script setup lang="ts">
</script>
<style>
  .btn-items{
    padding-bottom: 10px
  }
</style>
```
:::


#### 普通功能按钮

:::demo  
```html
<template>
  <div class="btn-items">
    查询： <el-button type="info" :icon="Search" >查询</el-button>
  </div>
  <div class="btn-items">
    设置： <el-button type="info" :icon="Setting" >设置</el-button>
  </div>
</template>
```
:::

#### 辅助功能按钮

:::demo  
```html
<template>
  <div class="btn-items">
    打印： <el-button type="success" :icon="Printer" >打印</el-button>
  </div>
  <div class="btn-items">
    导出： <el-button type="success" :icon="Printer" >导出</el-button>（缺少图标）
  </div>
</template>
```
:::

#### 警告按钮

:::demo  
```html
<template>
  <div class="btn-items">
    撤销提交： <el-button type="warning" :icon="Coordinate" >撤销提交</el-button>（缺少图标）
  </div>
</template>
```
:::

#### 危险功能按钮

:::demo  
```html
<template>
  <div class="btn-items">
    删除： <el-button type="danger" :icon="Delete" >删除</el-button>
  </div>
</template>
```
:::

### 场景

- 警告和危险按钮是否和其他按钮分开摆放

- 删除按钮提示popver组件确认是否删除

- 行内按钮可以使用文字按钮、`small`大小的button

- 图标按钮 ...

- 线性图标和实心图标在同一个页面下不能混用