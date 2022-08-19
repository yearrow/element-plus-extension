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
<script lang="ts">
export default {
  name: 'YlFlexBox'
}
</script>
<script lang="ts" setup>
const { computed } = Vue

interface Props {
  fixedWidth: string
  vertical: boolean
  isReverse: boolean
}

const props = withDefaults(defineProps<Props>(), {
  /**
   * 显示标题行
   */
  fixedWidth: 'auto',
  /**
   * 标题
   */
  vertical: true,
  /**
   * 内容区域的样式
   */
  isReverse: false ,
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