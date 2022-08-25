####  主色


:::demo  

```html
<template>
  <el-row>
    <el-col :span="12" class="color-card">
      <div class="color-card-header" :style="{background: 'var(' +colorData.color + ')'}">
        <div class="color-card-title">
          {{colorData.title}}
        </div>
        <div class="color-value">
          {{colorData.colorValue}}
        </div>
        <div class="color-value">
          {{colorData.color}}
        </div>
      </div>
      <div class="color-card-items">
        <div v-for="(item,i) in colorData.items" :key="i" class="color-card-item" :style="{background: 'var(' +item + ')', width: 100/colorData.items.length + '%'}"></div>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
  const colorData = {
    color: '--el-color-primary',
    title: 'Brand Color',
    colorValue: '#409EFF',
    items: [
      '--el-color-primary-dark-2',
      '--el-color-primary-light-3',
      '--el-color-primary-light-5',
      '--el-color-primary-light-7',
      '--el-color-primary-light-8',
      '--el-color-primary-light-9',
    ]
  }
</script>
<style lang="less" scoped>
@import './style.less';
</style>
```
:::

