## 字重

指字体的粗细程度。

::: tip

同一个字体的不同字重能传达不同的信息权重和情绪。细的字体给人以细腻、轻快的感觉，而粗体则给人着重和严肃的认知。因此适合的场景使用合适的字重非常重要。

:::

:::demo  

```html
<template>
  <div class="content" >
    <div v-for="(item, i) in data" :key="i">
        <p>{{item.name}} - {{item.weight}} - {{item.title}}</p>
        <p :style="{fontSize: '36px', fontWeight: item.weight}">物资管理系统</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const data = [
    // { name: 'Light', title: '特殊场景', weight: 300 },
    { name: '正文', title: '正文描述文字', weight: 400 },
    { name: '标题', title: '标题文字、表格的表头', weight: 500 },
    { name: '大标题', title: '展示型数据', weight: 600 }
  ]
</script>
<style lang="less" scoped>
  .content {
  }
</style>
```
:::




## 行高

标准默认的行高为1.5倍。

:::

:::demo  

```html
<div style="line-height:1.5">
  <div>
    本行高度1.5本行高度1.5
  </div>
  <div>
    本行高度1.5本行高度1.5本行高度1.5
  </div>
</div>
```
:::

