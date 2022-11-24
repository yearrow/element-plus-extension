<template>
  <div class="yl-box" :class="classComputed" :style="styleComputed">
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: 'Box',
  inheritAttrs: false
}
</script>
<script lang="ts" setup>
import { computed } from 'vue'
export interface Props {
  border?: boolean
  shadow?: false,
  background?: false,
  paddingSize?: string, // 内边距大小
  clearPadding?: string[], // 清除内边距
}
interface FlexStyle {
  padding?: string,
  width?: string,
  flex?: number,
  height?: string,
  borderLeft?: string,
  borderTop?: string,
  flexShrink?: number
}

const paddingDic:string[] = ['small', 'base', 'large'] // padding的枚举项


const props = withDefaults(defineProps<Props>(), {
  /**
   * 边框
   */
  border: false,
  /**
   * 阴影
   */
  shadow: false,
  /**
   * 内边距尺寸
   */
  paddingSize: '',
  /**
   * 背景色
   */
  background: false,
  /**
   * 清除内边距
   */
  clearPadding: () => []
})
const styleComputed = () => {
  const styleObj:FlexStyle = {}
  if(props.paddingSize && paddingDic.indexOf(props.paddingSize) < 0) {
    styleObj.padding = props.paddingSize
    if(props.clearPadding?.length){
      props.clearPadding.map(it => {
        styleObj['padding-' + it] = '0px'
      })
    }
  }
  return styleObj
}
const classComputed = computed(() => {
  const classArr:string[] = []
  if(props.paddingSize && paddingDic.indexOf(props.paddingSize) >= 0) {
    classArr.push('padding-' + props.paddingSize)
    if(props.clearPadding?.length){
      classArr.push(...props.clearPadding.map(it => 'padding-clear-' + it))
    }
  }
  if (props.border) {
    classArr.push('yl-box_border')
  }
  if (props.shadow) {
    classArr.push('yl-box_shadow')
  }
  if (props.background) {
    classArr.push('yl-box_background')
  }
  return classArr
})
</script>