##  线条

实线用于信息架构分类；虚线用于导入文件选择/证件照上传等场景

:::demo  

```html
<template>
  <div class="main">
    <div class="border-area demo-border">
      实线
      </br>border:1px solid var(--el-border-color)
    </div>
    <div class="border-area demo-border-dashed">
      虚线
      </br>border:2px dashed var(--el-border-color)
    </div>
  </div>
</template>
<style scoped>
.main {
  display: flex
}
.border-area {
  margin-right: 30px;
  width:340px;
  height: 150px;
  display:flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--el-text-color-regular);
  border-radius: 2px
}
.demo-border {
  border: 1px solid var(--el-border-color);
}
.demo-border-dashed {
  border: 2px dashed var(--el-border-color);
}
</style>
```
:::