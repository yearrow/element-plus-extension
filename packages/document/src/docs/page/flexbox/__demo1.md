####  基础用法

默认上面是固定区域，下边是弹性区域，设置is-reverse调换两个区域的位置

:::demo  

```html
<template> 
  <div style="height:100px;border:solid 1px #ccc">
    <yl-flex-box>
      <template #fixed>
        <div >
          固定区域
        </div>
      </template>
      <template #flex>
        <div style="border-top:solid 1px #ccc">
          弹性区域
        </div>
      </template>
    </yl-flex-box>
  </div>
</template>
```
:::