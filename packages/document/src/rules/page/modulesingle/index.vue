<template> 
  <div class="main-page" >
    <yl-flex-box :itemNum="4" :itemConfig="flexConfig">
      <template #item-1>
        <div style="background:green;height:100%">hahahahah</div>
      </template>
      <template #item-2 tag="hahha">
        <div style="background:green;height:100%">固定区域2</div>
      </template>
      <template #item-3>
        弹性区域3
      </template>
      <template #item-4>
        弹性区域4
      </template>
    </yl-flex-box>
  </div>
</template>
<script lang="ts" setup>
  const {ref} = Vue
  const flexConfig = [
    {
      tag: 'item-1',
      isFixed: true,
      size: '100px',
      paddingSize: '20px',
      clearPadding: ['left', 'right']
    },
    {
      tag: 'item-2',
      isFixed: true,
      size: '100px',
      paddingSize: 'small',
      clearPadding: ['top', 'right']
    },
    {
      tag: 'item-3',
      isFixed: false,
      size: '20%',
      paddingSize: 'large',
      clearPadding: ['left', 'right']
    },
    {
      tag: 'item-4',
      isFixed: false,
      size: '50%',
    }
  ]
</script>

<style lang="less" scoped>
.main-page {
  height: 100%;
  width: 100%;
  background: var(--el-bg-color-page);
}
</style>