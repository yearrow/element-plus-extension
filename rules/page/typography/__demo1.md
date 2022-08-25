####  字号


:::demo  

```html
<template>
  <el-row style="color:var(--el-text-color-regular)">
    <el-col :span="6">Level</el-col>
    <el-col :span="6">Font Size</el-col>
    <el-col :span="6">Variable</el-col>
    <el-col :span="6">Demo</el-col>
  </el-row>
  <el-row v-for="(item,i) in  data" :key="i" :style="{fontSize:'var(' + item.class + ')'}">
    <el-col :span="6">{{item.level}}</el-col>
    <el-col :span="6">{{item.fontSize}}</el-col>
    <el-col :span="6">{{item.class}}</el-col>
    <el-col :span="6">Build with Element</el-col>
  </el-row>
</template>

<script lang="ts" setup>
  const data = [
    { level: 'Supplementary text', fontSize: '12px Extra Small', class: '--el-font-size-extra-small' },
    { level: 'Body (small)', fontSize: '13px Small', class: '--el-font-size-small' },
    { level: 'Body', fontSize: '14px Base', class: '--el-font-size-base' },
    { level: 'Small Title', fontSize: '16px Medium', class: '--el-font-size-medium' },
    { level: 'Title', fontSize: '18px Large', class: '--el-font-size-large' },
    { level: 'Main Title', fontSize: '20px Extra Large', class: '--el-font-size-extra-large' },
  ]
</script>
```
:::
