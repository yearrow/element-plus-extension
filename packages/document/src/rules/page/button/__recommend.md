::: tip
常用的操作按钮。
:::

## 使用场景

### 功能类型

根据功能类型将功能按钮分为主功能按钮和次功能按钮

主功能按钮指的是页面中的主要按钮，使人能一眼看出该页面的重点功能

使用普通实心按钮

除了主功能按钮，其他的都是次功能，使用普通空心按钮

主功能也可以是警告、错误功能按钮，根据业务场景决定

:::demo  
```html
<template>
  <el-button type="primary" :icon="Plus" >主功能</el-button>
  <el-button type="primary" plain :icon="Edit" >次功能</el-button>
  <el-button type="warning" :icon="Edit" >主功能</el-button>
  <el-button type="warning" plain :icon="Edit" >次功能</el-button>
</template>
<script setup lang="ts">
import { Plus, Edit, Delete, Search, Paperclip, Setting, Printer,Coordinate } from '@element-plus/icons-vue'
</script>
```
:::
### 业务类型


#### 主功能按钮

业务场景上规定的主要功能按钮，如：添加、修改、审核、保存、确认等之类。
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

#### 警告功能按钮

一些逆向的业务操作或者对其他业务有影响的操作，如：撤销审核、撤销审批等之类。
:::demo  
```html
<template>
  <el-button type="warning" :icon="Edit" >主警告功能</el-button>
  <el-button type="warning" plain :icon="Edit" >次警告功能</el-button>
</template>
```
:::

#### 危险功能按钮

一些危险的业务操作，一般会对数据造成不可逆或者可逆过程很复杂的影响。 如：删除、冲红等。
:::demo  
```html
<template>
  <el-button type="danger" :icon="Delete">主危险功能</el-button>
  <el-button type="danger" plain :icon="Delete">次危险功能</el-button>
</template>
```
:::
#### 普通功能按钮

业务上实现的一个对主要业务功能进行补充的功能，如：查询、参数设置、选材按钮等。

:::demo  
```html
<template>
  <el-button type="info" :icon="Search">主普通功能</el-button>
  <el-button type="info" plain :icon="Search">次普通功能</el-button>
</template>
```
:::

#### 辅助功能按钮

实现的一些不影响业务数据的功能，如数据导出、打印之类按钮。
:::demo  
```html
<template>
  <el-button type="success" :icon="Paperclip">主辅助功能</el-button>
  <el-button type="success" plain :icon="Paperclip">次辅助功能</el-button>
</template>
```
:::
#### 文字按钮


提示框或表单中的取消操作, 如：取消、重置、关闭按钮，表格行内编辑或删除按钮等
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
### 按钮形状

按钮的形状有：方形按钮、椭圆按钮、圆形图标按钮、文字按钮

- 一默认使用方形按钮

- 行内表单删除使用圆形图标按钮

- 表格里的查看详情、打印、导出按钮使用圆形图标按钮

### 按钮大小

按钮分为大按钮（large）、标准按钮（base）、小按钮（small） 三种尺寸

- 默认使用标准按钮

- 表格行内都使用小按钮


### 按钮位置

- toolbar工具栏

  使用 `flex-line`布局

- 表格行内


- 表单

## 开发指导

- 一个页面中只能有一个`主要动作按钮`
- 只有存在主要动作按钮时，才会出现`次要动作按钮`
- 如果存在`主要动作按钮`，那么其他的按钮只能是`次要动作按钮`
- 没有特殊要求情况下，按钮尺寸都使用默认大小
- 按钮都要搭配图标使用，文本按钮可以不加图标
- 按钮中涉及异步操作的都要加`loading`属性，避免发起多次请求。如：保存、提交、撤销提交等按钮
- 如果按钮只有两个字，中间使用空格隔开，按钮和图标之间也要有间隙

- 在`toolbar`中警告、危险按钮摆放在主功能按钮右侧，设置一个偏移量公共类`g-button-margin-left`

- 删除按钮提示popver组件确认是否删除

- 表格行内按钮可以使用文字按钮、图标按钮、小按钮



## 示例


:::demo  
```html
<template>
  <div class="btn-items">
    新增： <el-button type="primary" :icon="Plus" >新 增</el-button>
  </div>
  <div class="btn-items">
    编辑： <el-button type="primary" :icon="Edit" >编 辑</el-button>
  </div>
  <div class="btn-items">
    保存： <el-button type="primary"><i class="cs cs-baocun" style="font-size:14px"></i> &nbsp;保 存</el-button>
  </div>
  <div class="btn-items">
    提交： <el-button type="primary" ><i class="cs cs-tijiao" style="font-size:14px"></i> &nbsp;提 交</el-button>
  </div>
  <div class="btn-items">
    查询： <el-button type="info" :icon="Search" >查询</el-button>
  </div>
  <div class="btn-items">
    设置： <el-button type="info" :icon="Setting" >设置</el-button>
  </div>
  <div class="btn-items">
    打印： <el-button type="success" :icon="Printer" >打印</el-button>
  </div>
  <div class="btn-items">
    导出： <el-button type="success" ><i class="cs cs-excel" style="font-size:14px"></i> &nbsp; 导出</el-button>
  </div>
  <div class="btn-items">
    撤销提交： <el-button type="warning"><i class="cs cs-chexiao" style="font-size:14px"></i> &nbsp;撤销提交</el-button>
  </div>
  <div class="btn-items">
    删除： <el-button type="danger" :icon="Delete" >删除</el-button>
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


