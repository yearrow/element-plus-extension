##  字号

文字的大小，层级，对比度等都是影响视觉可读性和阅读效率的重要因素，为保障文本的易读性

界面文字需满足以下要求：

- 最小可识别文字尺寸：14px

- 字体层级：区分文本主副层级，字号差距需保持2-4px

- 一个产品中不要有过多的字体层级，建议选择在 3-5 种之间，对于需要用户关注的文本信息可通过增加字重的方式突出

- 考虑通用性和用户包容性，在字号的选择上，我们将主字号定义为14px，并提供了不同层级的字号以适配不同信息层级的展示需求。


:::demo  

```html
<template>
  <table class="demo-typo-size">
    <tbody>
      <tr>
        <td>场景</td>
        <td>字号</td>
        <td>变量</td>
        <td class="color-dark-light">示例</td>
      </tr>
      <tr
        v-for="(fontSize, i) in fontSizes"
        :key="i"
        :style="`font-size: var(--el-font-size-${fontSize.type})`"
      >
        <td>{{ fontSize.level }}</td>
        <td>
          {{
            useCssVar(`--el-font-size-${fontSize.type}`).value +
            ' ' +
            formatType(fontSize.type)
          }}
        </td>
        <td>{{ '--el-font-size-' + fontSize.type }}</td>
        <td>字号规范示例</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
 import { useCssVar } from '@vueuse/core'

const fontSizes = [
  {
    level: '辅助文字',
    type: 'extra-small'
  },
  // {
  //   level: '正文（小）',
  //   type: 'small',
  // },
  {
    level: '正文',
    type: 'base',
  },
  {
    level: '小标题',
    type: 'medium',
  },
  {
    level: '标题',
    type: 'large',
  },
  {
    level: '主标题',
    type: 'extra-large',
  },
]

function formatType(type: string) {
  return type
    .split('-')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ')
}
</script>
```
:::
