####  中性色
中性色用于文本、背景和边框颜色。 通过运用不同的中性色，来表现层次结构。

:::demo  

```html
<template>
  <el-row :gutter="10">
    <el-col v-for="(arr, i) in colorData" :span="6">
      <el-row :gutter="10">
        <el-col v-for="(item, i) in arr" :span="24">
          <div class="middle-color" :style="{background: 'var(' +item.color + ')', color: item.fontColor || '',  border: item.border ? '1px solid var(--el-border-color-light)' : '' }">
            <div class="title">{{item.title}}</div>
            <div class="color-value">{{item.colorValue}}</div>
            <div class="color-value">{{item.color}}</div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
  const colorData = [
    [
      { title: 'Primary Text', color: '--el-text-color-primary', colorValue: '#303133', fontColor:'white' },
      { title: 'Regular Text', color: '--el-text-color-regular', colorValue: '#606266', fontColor:'white' },
      { title: 'Secondary Text', color: '--el-text-color-secondary', colorValue: '#909399', fontColor:'white' },
      { title: 'Placeholder Text', color: '--el-text-color-placeholder', colorValue: '#A8ABB2', fontColor:'white' },
      { title: 'Disabled Text', color: '--el-text-color-disabled', colorValue: '#C0C4CC', fontColor:'white' },
    ],
    [
      { title: 'Darker Border', color: '--el-border-color-darker', colorValue: '#CDD0D6' },
      { title: 'Dark Border', color: '--el-border-color-dark', colorValue: '#D4D7DE' },
      { title: 'Base Border', color: '--el-border-color', colorValue: '#DCDFE6' },
      { title: 'Light Border', color: '--el-border-color-light', colorValue: '#E4E7ED' },
      { title: 'Lighter Border', color: '--el-border-color-lighter', colorValue: '#EBEEF5' },
      { title: 'Extra-light Border', color: '--el-border-color-extra-light', colorValue: '#F2F6FC' },
    ],
    [
      { title: 'Darker Fill', color: '--el-fill-color-darker', colorValue: '#E6E8EB' },
      { title: 'Dark Fill', color: '--el-fill-color-dark', colorValue: '#EBEDF0' },
      { title: 'Base Fill', color: '--el-fill-color', colorValue: '#F0F2F5' },
      { title: 'Light Fill', color: '--el-fill-color-light', colorValue: '#F5F7FA' },
      { title: 'Lighter Fill', color: '--el-fill-color-lighter', colorValue: '#FAFAFA' },
      { title: 'Extra-light Fill', color: '--el-fill-color-extra-light', colorValue: '#FAFCFF' },
      { title: 'Blank Fill', color: '--el-fill-color-blank', colorValue: '#FFFFFF', border: true },
    ],
    [
      { title: 'Basic Black', color: '--el-color-black', colorValue: '#000000', fontColor:'white' },
      { title: 'Basic White', color: '--el-color-white', colorValue: '#FFFFFF', border: true },
      { title: 'Transparent', color: '', colorValue: 'Transparent', border: true },
      { title: 'Page Background', color: '--el-bg-color-page', colorValue: '#F2F3F5', border: true },
      { title: 'Base Background', color: '--el-bg-color', colorValue: '#FFFFFF', border: true },
      { title: 'Overlay Background', color: '--el-bg-color-overlay', colorValue: '#FFFFFF', border: true }
    ],
  ]
</script>
<style lang="less" scoped>
@import './style.less';
</style>
```
:::