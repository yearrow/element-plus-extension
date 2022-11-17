<template>
  <div class="yl-filter-item">
    <div v-if="label.length > 0" class="filter_item_left" :style="{width: labelWidth, 'text-align': labelPosition}">
      {{label}}
    </div>
    <div class="filter_item_right">
      <slot />
    </div>
  </div>
</template>
  
<script lang="ts">
export default {
  name: 'FilterItem'
}
</script>
<script lang="ts" setup>
export interface flexLineProps {
  label: string // label 文本
  labelWidth: string // label宽度
  labelPosition: 'left'|'right' // label位置
}
const { label, labelWidth, labelPosition} = withDefaults(defineProps<flexLineProps>(), {
  label: '',
  labelWidth: '50px',
  labelPosition: 'right'
})

</script>
<style lang="less" scoped>

</style>