

## 可用块容器

### Tab 选项卡

按业务需求进行分类

<image src="./img/tabs.png" style="width:50%" ></image>

### Panel

一个基础的包裹容器，有标题和内容两个区域，标题可以隐藏

<image src="./img/panel.png" style="width:50%" ></image>

### Toolbar 工具条

分为过滤器区域和功能条区域，有可折叠功能

<image src="./img/toolbar.png" style="width:60%" ></image>

### Form 表单

提交表单数据使用

<image src="./img/form.png" style="width:50%" ></image>

### 导航条

是一个特殊容器，只放在页面顶部

<image src="./img/menus.png" style="width:60%" ></image>

## 样式

### 层级

- 一级容器应该都包裹在页面的的`flexbox`布局中。
- 二级、三级容器包裹在块容器的`flexbox`布局层中。
- 容器中可以直接包裹具体的元素组件；容器中也可以继续嵌套容器。
- 嵌套容器时需要使用`flexbox`绘制中间布局层（容器间的嵌套最多三层）。

<image src="./img/一级容器包裹组件.png" style="width:70%" ></image>


### 背景色

使用容器组件背景色，无需特殊设置
### 边距
#### 容器嵌套
- 一级容器

    内边距`--el-layout-gap-base`  间距 `--el-layout-gap-large`

    容器和page的间距为`--el-layout-gap-large`

- 二级容器

    内边距`--el-layout-gap-small`  间距 `--el-layout-gap-base`

- 三级容器

    内边距`--el-layout-gap-small`   间距 `--el-layout-gap-small`

#### 容器内包裹组件

- 内边距`--el-layout-gap-small`  间距 `--el-layout-gap-small`

- 每一级容器都可以直接包裹组件，直接包裹组件的边距按此规范执行


:::tip
内边距：容器内部留出的空间

间距：两个容器之间的空间
:::


### 边框

- 一级容器 无边框

- 二级容器、三级容器 容器本身没有背景色的情况下显示边框
### 阴影 

无阴影


## 容器元素关系


<table style="width:50%">
  <thead>
    <tr><td>容器</td><td>可嵌套容器</td></tr>
  </thead>
  <tbody>
    <tr><td rowspan="4" style="text-align:center;line-height:3.5">tab,panel</td><td>tab</td></tr>
    <tr><td>panel</td></tr>
    <tr><td>toolbar</td></tr>
    <tr><td>form</td></tr>
    <tr><td rowspan="2" style="text-align:center;">toolbar</td><td>tab</td></tr>
    <tr><td>form</td></tr>
    <tr><td rowspan="2" style="text-align:center;line-height:3.5">form</td><td>panel</td></tr>
    <tr><td>tab</td></tr>
    <tr><td rowspan="1" style="text-align:center;">导航条</td><td>无</td></tr>
  </tbody>
</table>


## 规范
- 根据业务情景，或者界面划分来决定容器的嵌套，容器嵌套中子容器必须大于1个
- 容器嵌套的情况下，内部容器需要用边框、背景色其中一种进行区域划分，使人能一眼看出功能区域的不同

比如`toolbar`有默认的背景色，`panel`提供的边框、阴影等

- 区域内组件必须使用容器包裹，不能直接裸露在外面
- 容器嵌套不要超过三层，以免造成功能过于复杂，难以理解的问题。
- 如果其中一个一级容器中直接包裹的组件，那么其他一级容器最好也直接包裹组件，否则就会出现同一级容器内边距不相同的问题


- 如果`toolbar`单独放在一个区域，则使用`panel`再包裹一层，留出边距

<image src="./img/toolbar单独.png" style="width:80%" ></image>

## 开发指导

- `panel`的边框和阴影可以通过属性来控制显示或隐藏，无需自己写样式
- 导航条会提供公共组件，直接引入即可