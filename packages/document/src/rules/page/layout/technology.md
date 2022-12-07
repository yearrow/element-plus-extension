## 布局技术

- flex布局

    `flexbox`  一个弹性盒子组件,分为固定区域和弹性区域

    规范： 
        
    布局元素内容可以预计其宽度和高度时放在固定区域，固定区域的尺寸一般由内容撑开，也可以设置固定大小

    一个页面中一般只有一个主要的信息块，放在最大的弹性区域中
<image src="./img/flex.png" style="width:100%" ></image>

- `grid`布局

    24栏布局组件  ElementPlus   `Layout`  
    
<image src="./img/grid.png" style="width:100%" ></image>

- `flex-line`  工具条布局组件

    将工具条的内容分为左右两部分，左侧组件靠左，右侧组件靠右

    规定`flex-line`只能放一行元素，不能出现多行
    
    `flex-line`内部元素可以使用`el-space`留出间距

<image src="./img/flex-line.png" style="width:100%" ></image>

- `filter-item` 元素布局

    用于容器内部子元素需要显示label时使用

<image src="./img/filter-item.png" style="width:60%" ></image>
