<template>
  <div class="yl-flex-line">
    <div v-if="slots.default" class="flex_line_left" :class="leftClass" :style="{ width: leftWidth }">
      <slot />
    </div>
    <div v-if="slots.right" class="flex_line_right" :class="rightClass">
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FlexLine'
}
</script>
<script lang="ts" setup>
import { computed, useSlots } from 'vue'
export interface flexLineProps {
  leftPadding: boolean // 显示左侧插槽内边距
  leftClearPadding: string[] // 清除左侧内边距
  rightPadding: boolean
  rightClearPadding: string[]
  leftWidth: string
}
// padding值
const defaultSize = 'padding-small'
const slots = useSlots()
const { leftPadding, leftClearPadding, rightPadding, rightClearPadding, leftWidth } = withDefaults(defineProps<flexLineProps>(), {
  leftPadding: false,
  leftClearPadding: () =>{
    return []
  },
  rightPadding: false,
  rightClearPadding: () =>{ 
    return []
  },
  leftWidth: '50%'
})
const leftClass = computed(() => {
  const classArr:string[] = []
  if (leftPadding) {
    classArr.push(defaultSize)
    if(leftClearPadding?.length){
      classArr.push(...leftClearPadding.map(it => 'padding-clear-' + it))
    }
  }
  return classArr
})
const rightClass = computed(() => {
  const classArr:string[] = []
  if (rightPadding) {
    classArr.push(defaultSize)
    if(rightClearPadding?.length){
      classArr.push(...rightClearPadding.map(it => 'padding-clear-' + it))
    }
  }
  return classArr
})
</script>
<style lang="less" scoped>

</style>