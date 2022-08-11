<template>
  <div :class="'yl-flex-box'" :style="boxStyle">
    <div class="flex-box-fixed" :style="fixedStyle">
      <slot name="fixed"></slot>
    </div>
    <div class="flex-box-flex">
      <slot name="flex"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { computed } = Vue
const props = defineProps({
  /**
   * 固定容器宽度
   */
  fixedWidth: {
    required: false,
    type: String,
    default: 'auto'
  },
  /**
   * 纵向
   */
  vertical: {
    type: Boolean,
    default: true
  },
  /**
   * 置换方向
   */
  isReverse: {
    type: Boolean,
    default: false
  }
})
const boxStyle: ComputedRef = computed(() => {
  let diriction = ''
  if (props.vertical) {
    diriction = props.isReverse ? 'column-reverse' : 'column'
  } else {
    diriction = props.isReverse ? 'row-reverse' : 'row'
  }
  return {
    flexDirection: diriction
  }
})
const fixedStyle: ComputedRef = computed(() => {
  const style = {
    height: 'auto',
    width: 'auto'
  }
  if (props.vertical) {
    style.height = props.fixedWidth
  } else {
    style.width = props.fixedWidth
  }
  return style
})
</script>
<style lang="less" scoped>
</style>
