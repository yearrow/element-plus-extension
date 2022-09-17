##  圆角

圆角是用一段与图形两边相切的圆弧替换原来的直角，圆角的大小用圆弧的半径R表示

在界面中运用圆角主要有以下两个好处：

<image src="./img/圆角.jpg" style="width: 600px;"></image>

- 亲和感。我们倾向于“避免尖锐的边缘，因为在自然界中它们可能会构成威胁”。运用圆角矩形能给我们带来亲和感，圆角越大，亲和感越高。

- 辨识度。相对于没有圆角，人可以更快的辨识圆角矩形。

:::demo  

```html
<template>
  <el-row :gutter="12" class="demo-radius">
    <el-col
      v-for="(radius, i) in radiusGroup"
      :key="i"
      :span="6"
      :xs="{ span: 12 }"
    >
      <div class="title">{{ radius.name }}</div>
      <div class="value">
        <code>border-radius: {{ getValue(radius.type) || '0px' }}</code>
      </div>
      <div class="value">
        <code>{{ radius.var }}</code>
      </div>
      <div
        class="radius"
        :style="{
          borderRadius: radius.type
            ? `var(--el-border-radius-${radius.type})`
            : '',
        }"
      />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radiusGroup = ref([
  // {
  //   name: 'No Radius',
  //   type: '',
  //   var: 'none'
  // },
  {
    name: 'Small Radius',
    type: 'small',
    var: '--el-border-radius-small'
  },
  {
    name: 'Base Radius',
    type: 'base',
    var: '--el-border-radius-base'
  },
  // {
  //   name: 'Round Radius',
  //   type: 'round',
  //   var: '--el-border-radius-round'
  // },
])

const getValue = (type: string) => {
  const getCssVarValue = (prefix, type) =>
    getComputedStyle(document.documentElement).getPropertyValue(
      `--el-${prefix}-${type}`
    )
  return getCssVarValue('border-radius', type)
}
</script>
<style scoped>
.demo-radius .title {
  color: var(--el-text-color-regular);
  font-size: 18px;
  margin: 10px 0;
}
.demo-radius .value {
  color: var(--el-text-color-primary);
  font-size: 16px;
  margin: 10px 0;
}
.demo-radius .radius {
  height: 100px;
  width: 80%;
  border: 1px solid var(--el-border-color);
  border-radius: 0;
  margin-top: 20px;
}
</style>
```
:::

- Small： 小的边界半径2px适用于小型组件，如复选框标记和标签、按钮和输入组件。

- Base: 中等大小的半径4px适用于卡片类的组件。