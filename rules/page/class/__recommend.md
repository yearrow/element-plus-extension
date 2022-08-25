::: tip
提供常用的公共类，减少样式的重复写入
:::

### 公共类

```css
.page-main {
    width:100%;
    height: 100%;
}
/*边框*/ 
.g-border-solid{
    border:1px var(--el-border-color) solid;
}
.g-border-l-solid{
    border:1px var(--el-border-color-light) solid;
}
.g-border-b-dotted{
    border:2px var(--el-border-color) dotted;
}
.g-border-l-dotted{
    border:2px var(--el-border-color-light) dotted;
}

/*边框投影*/ 
.g-box-shadow-base{
   box-shadow:var(--el-box-shadow);
}
.g-box-shadow-light{
   box-shadow:var(--el-box-shadow-light);
}

/* 危险按钮偏移类 */
.g-button-margin-left {
    margin-left: 50px !important;
}

 /* 工具条按钮有浮动 */
.g-button-float-right {
    float: right;
    margin-left:auto;
}

/* 容器的内边距 */
.g-container-padding {
    padding: var(--el-layout-gap-base);
    box-sizing: border-box;
}
/*容器内边距头部免除*/
.g-container-padding-nontop {
    padding: var(--el-layout-gap-base);
    padding-top: 0px;
    box-sizing: border-box;
}

/* 容器的内边距10 */
.g-container-padding-large {
    padding: var(--el-layout-gap-large);
    box-sizing: border-box;
}
.g-container-padding-nontop-large {
    padding: var(--el-layout-gap-large);
    box-sizing: border-box;
}
/*填充容器样式*/
.g-container-full-fill {
    width:100%;
    height:100%;
}

/*保存后关闭的浮动按钮*/
.g-form-save-close-float {
    float: left;
    padding: var(--el-layout-gap-large);
}
 
/* 表单底部样式 */
.g-dialog-footer {
    text-align: right;
}

/* tabPanel样式 */
.g-tab-panel-base {
    box-sizing: border-box;
    padding: var(--el-layout-gap-base);
    padding-top: 0px;
    background:var(--el-bg-color);
    height: 100%;
    display: flex;
    flex-direction: column
}

/* 移除边框样式 */
.g-clear-border {
    border: none !important;
}
```