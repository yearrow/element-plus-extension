<template>
  <div style="height:300px;border:solid 1px #ccc">
    <yl-flex-box :isRow="true" :itemNum="4" :itemConfig="flexConfig">
      <template #item-1>
        <div style="height:100%;background:var(--el-fill-color-dark)">
          固定区域1
        </div>
      </template>
      <template #item-2>
        <div style="height:100%;background:var(--el-fill-color-dark)">
          固定区域2
        </div>
      </template>
      <template #item-3>
        <div style="height:100%;background:var(--el-fill-color-dark)">
          弹性区域3
        </div>
      </template>
      <template #item-4>
        <div style="height:100%; background:var(--el-fill-color-dark)">
          弹性区域4
        </div>
      </template>
    </yl-flex-box>
  </div>
</template>
<script lang="ts" setup>
const flexConfig = [
  {
    tag: 'item-1',
    isFixed: true,
    size: '100px',
    paddingSize: 'large',
    clearPadding: ['right']
  },
  {
    tag: 'item-2',
    isFixed: true,
    size: '100px',
    paddingSize: 'large',
    clearPadding: ['right']
  },
  {
    tag: 'item-3',
    isFixed: false,
    size: '',
    paddingSize: 'large',
    clearPadding: ['right']
  },
  {
    tag: 'item-4',
    isFixed: false,
    size: '',
    paddingSize: 'large'
  }
]
</script>