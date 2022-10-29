####  横向

vertical属性将调整方向为纵向或横向

:::demo  

```html
<template> 
  <div style="height:100px;border:solid 1px #ccc">
    <yl-flex-box :vertical="false">
      <template #fixed>
        <div style="height:100%">
          固定区域
        </div>
      </template>
      <template #flex>
        <div style="height:100%;border-left:solid 1px #ccc">
          自适应区域
        </div>
      </template>
    </yl-flex-box>
  </div>
</template>
```
:::