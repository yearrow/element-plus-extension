####  辅助色

除了主颜色外，您需要在不同的场景中使用不同的场景颜色 (例如，危险的颜色表示危险的操作)

:::demo  

```html
<template>
  <el-row :gutter="10">
    <el-col v-for="(colorType, i) in colorData" :span="6">
      <div  class="color-card">
        <div class="color-card-header" :style="{background: 'var(' +colorType.color + ')'}">
          <div class="color-card-title">
            {{colorType.title}}
          </div>
          <div class="color-value">
            {{colorType.colorValue}}
          </div>
          <div class="color-value">
            {{colorType.color}}
          </div>
        </div>
        <div class="color-card-items">
          <div v-for="(item,i) in colorType.items" :key="i" class="color-card-item" :style="{background: 'var(' +item + ')', width: 100/colorType.items.length + '%'}"></div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
  const colorData = [{
    color: '--el-color-success',
    title: 'Success',
    colorValue: '#409EFF',
    items: [
      '--el-color-success-dark-2',
      '--el-color-success-light-3',
      '--el-color-success-light-5',
      '--el-color-success-light-7',
      '--el-color-success-light-8',
      '--el-color-success-light-9',
    ]
  },
  {
    color: '--el-color-warning',
    title: 'Warning',
    colorValue: '#409EFF',
    items: [
      '--el-color-warning-dark-2',
      '--el-color-warning-light-3',
      '--el-color-warning-light-5',
      '--el-color-warning-light-7',
      '--el-color-warning-light-8',
      '--el-color-warning-light-9',
    ]
  },
  {
    color: '--el-color-danger',
    title: 'Danger',
    colorValue: '#409EFF',
    items: [
      '--el-color-danger-dark-2',
      '--el-color-danger-light-3',
      '--el-color-danger-light-5',
      '--el-color-danger-light-7',
      '--el-color-danger-light-8',
      '--el-color-danger-light-9',
    ]
  },
  {
    color: '--el-color-info',
    title: 'Info',
    colorValue: '#409EFF',
    items: [
      '--el-color-info-dark-2',
      '--el-color-info-light-3',
      '--el-color-info-light-5',
      '--el-color-info-light-7',
      '--el-color-info-light-8',
      '--el-color-info-light-9',
    ]
  }]
</script>
<style lang="less" scoped>
@import './style.less';
</style>
```
:::