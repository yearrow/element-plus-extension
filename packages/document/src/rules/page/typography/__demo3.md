## 字重

指字体的粗细程度。

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
    { name: 'Regular', title: '正文描述文字', weight: 400 },
    { name: 'Medium', title: '标题文字、表格的表头', weight: 500 },
    { name: 'Semibold', title: '展示型数据', weight: 600 }
  ]
</script>
<style lang="less" scoped>
  .content {
  }
</style>
```
:::

- 一个字体的字重通常至少4-6个，其中Regular与Semibold几乎是必备的。

- 同一个字体的不同字重能传达不同的信息权重和情绪。细的字体给人以细腻、轻快的感觉，而粗体则给人着重和严肃的认知。因此适合的场景使用合适的字重非常重要。

- 多数情况下，采用 Regular 以及 Medium 的两种字体重量，分别对应代码中的 400 和 500。

- 在英文或数字字体加粗的情况下会采用 semibold 的字体重量，对应代码中的 600。




## 行高

目前通用的建议中，西文的基本行高是字号的1.2倍左右。中文因为字符密实且高度一致，没有西文的上伸部（ascender）和下延部（descender）来创造行间空隙，所以一般行高需要更大，根据阅读人群划分（儿童、年轻人、老年人），可达到 1.5 至 2 倍甚至更大。

因此标准默认的行高为1.5倍。

## 段落间距

段落文本中文字的可读性，由字号、行高和段间距的变量决定。在文字较多的内容中，段落与段落之间需要有一定的间距以保证最好的显示效果。根据视觉传达标准，段落间距至少为字体大小的 1.5 倍。正文14px字号对应段间距为21px。