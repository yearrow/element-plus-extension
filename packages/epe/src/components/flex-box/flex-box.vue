<template>
  <div :class="'yl-flex-box'" :style="boxStyle">
    <div :class="'flex-box-fixed ' + fixedClass" :style="fixedStyle">
      <slot name="fixed"></slot>
    </div>
    <div :class="'flex-box-flex ' + flexClass">
      <slot name="flex"></slot>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'YlFlexBox'
}
</script>
<script lang="ts" setup>
import { computed, ComputedRef, StyleValue } from 'vue'

export interface Props {
  fixedWidth: string
  vertical: boolean
  isReverse: boolean,
  fixedClass: string,
  flexClass: string
}

// defineOptions({
//   name: 'YlFlexBox',
//   inheritAttrs: true,
// })

const props = withDefaults(defineProps<Props>(), {
  /**
   * 固定区域宽度
   */
  fixedWidth: 'auto',
  /**
   * 横向
   */
  vertical: true,
  /**
   * 翻转
   */
  isReverse: false ,
  /**
   * 固定区域样式类
   */
  fixedClass: '',
  /**
   * 固定区域样式类
   */
   flexClass: ''
})

const boxStyle = computed(() => {
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
const fixedStyle = computed(() => {
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