<template>
  <div :class="{'yl-panel': true, 'yl-panel__border': border, 'yl-panel__shadow': false}">
    <div
      v-if="showHeader"
      class="panel-header"
    >
      <div
        v-if="showHeader"
        class="header-tool"
      >
        <div v-if="title.trim().length > 0" class="header-title">
          {{ title }}
        </div>
        <div class="tool-content">
          <slot name="tool" />
        </div>
      </div>
    </div>
    <div
      class="panel-content"
      :class="classComputed"
      :style="styleComputed"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Panel'
}
</script>
<script lang="ts" setup>
import { computed } from 'vue'
export interface Props {
  showHeader?: boolean
  title?: string
  // contentStyle?: string
  border?: boolean
  // shadow?: false,
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
   * 显示标题行
   */
  showHeader: true,
  /**
   * 标题
   */
  title: '',
  /**
   * 内容区域的样式
   */
  // contentStyle: '' ,
  /**
   * 边框
   */
  border: false,
  /**
   * 阴影
   */
  // shadow: false,
  /**
   * 内边距尺寸
   */
  paddingSize: '',
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
  return classArr
})
</script>