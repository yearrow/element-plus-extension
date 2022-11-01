
## 普通页面
::: tip
web框架中直接嵌套的页面
:::

### 样式
- 背景色
普通页面背景色使用页面背景色(--el-bg-color-page)
弹窗和抽屉使用默认背景色(--el-bg-color)


<image src="./img/page-back.png"></image>

- 边距  无
- 边框  无
- 阴影  无


### 层级

- 页面
应该直接嵌套早web框架内部，为page区域的根节点。


<image src="./img/page.png" style="width:60%" ></image>

- 布局
页面和容器之间应该使用flexbox组件进行布局。container


<image src="./img/layout.png" style="width:60%" ></image>

- 容器
布局层下级直接包裹容器。


<image src="./img/container.png" style="width:60%" ></image>

### 开发指导

- 页面整体应该带使用辅助类.main-page ，用来描绘page根节点的画布。
-  具体的元素不应该直接出现在布局层，需要使用容器包裹


## Dialog 弹窗

::: tip
在普通页面之上的弹出层
:::

<image src="./img/dialog.png" style="width:50%" ></image>

### 样式

- title  标题栏：

使用默认的标题，关闭按钮，标题栏不能隐藏
- body 内容：

背景色： 组件内置默认背景色(--el-bg-color)，无需调整

边距 ： 组件内置内边距，无需调整

边框：  无

阴影：  组件内置阴影，无需调整

- 工具栏：

弹窗底部工具按钮，可以隐藏该区域

不能出现多行
### 层级

<image src="./img/dialog-layout.png" style="width:50%" ></image>

- body页面

规定弹窗的宽度，可以是具体尺寸或百分比，也可以由内容撑开
- 布局层

使用flexbox布局，工具栏放在固定区域

弹性区域放具体的容器，或者继续使用flexbox嵌套布局
- 容器

布局下级包裹容器

工具栏无需使用容器包裹，使用flex-line布局，里面直接嵌套元素

### 开发指导

- 使用flex-line组件给工具栏分区
- 根据布局规范，在弹窗中依然使用flexbox布局，但是弹性区域会失效，所以依然需要给布局包裹的容器或内容固定高度，否则弹框会撑不开

## Draw 抽屉

在普通页面之上的弹出层，同dialog，暂无特殊规范

