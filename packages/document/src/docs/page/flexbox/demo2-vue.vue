<template>
  <div style="height:300px;border:solid 1px #ccc">
    <flex-box :isRow="true" :itemNum="4" :itemConfig="flexConfig">
      <template #item-1>
        固定区域1
      </template>
      <template #item-2>
        <div style="border-left:solid 1px #ccc;height:100%">
          固定区域2
        </div>
      </template>
      <template #item-3>
        <div style="border-left:solid 1px #ccc;height:100%">
          弹性区域3
        </div>
      </template>
      <template #item-4>
        <div style="border-left:solid 1px #ccc;height:100%">
          弹性区域4
        </div>
      </template>
    </flex-box>
  </div>
</template>
<script lang="ts" setup>
const flexConfig = [
  {
    tag: 'item-1',
    isFixed: true,
    size: '100px',
  },
  {
    tag: 'item-2',
    isFixed: true,
    size: '100px',
  },
  {
    tag: 'item-3',
    isFixed: false,
    size: '',
  },
  {
    tag: 'item-4',
    isFixed: false,
    size: '',
  }
]
</script>