<template>
  <div :class="[isRow? 'flexbox flexbox-row' : 'flexbox flexbox-column']"
      >
    <div v-for="(item, index) in itemRenderList" 
        :key="index" 
        class="item"
        :class="itemClass(item)"
        :style="itemStyle(isRow, item)"
        >
        <slot :name="`item-${index + 1}`"> </slot>
    </div>
  </div>
</template>
<script lang="ts">
  export default {
    inheritAttrs: false,
    name: 'FlexBox'
  }
</script>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';
export interface itemConfig {
  tag: string,  // 子项标识
  isFixed?: boolean, // 是否为固定区域
  size?: string, // 固定区域大小
  paddingSize?: string, // 内边距大小
  clearPadding?: string[] // 清除内边距
}
export interface flexboxProps {
  isRow?: boolean, // 横向排列
  itemNum?: number, // 子容器数目
  itemConfig?: itemConfig[],  // 子容器相关配置
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

const { isRow, itemNum, itemConfig } = withDefaults(defineProps<flexboxProps>(), {
  isRow: false,
  itemNum: 1,
  itemConfig: () =>{ 
    return [
      {
        tag: 'item-1',
        isFixed: false,
        size: '',
        paddingSize: '',
        clearPadding: []
      }
    ]
  }
})
const itemStyle = (isRow: boolean = false, item:itemConfig) => {
  let styleObj: FlexStyle = {}
  if(isRow) {
    if(item.isFixed) {
      styleObj = {
        width: item.size ?? '',
        borderLeft: 'none',
        flexShrink: 0,
        height: '100%',
      }
    } else {
      styleObj = {
        flex: 1,
        borderLeft: 'none',
        height: '100%'
      }
    }
  } else {
    if(item.isFixed) {
      styleObj = {
        height: item.size ?? '',
        borderTop: 'none',
        flexShrink: 0,
        width: '100%',
      }
    } else {
      styleObj = {
        flex: 1,
        borderTop: 'none',
        width: '100%'
      }
    }
  }
  // 处理自己给padding尺寸的情况
  if(item.paddingSize && paddingDic.indexOf(item.paddingSize) < 0) {
    styleObj.padding = item.paddingSize
    if(item.clearPadding?.length){
      item.clearPadding.map(it => {
        styleObj['padding-' + it] = '0px'
      })
    }
  }
  return styleObj
}
const itemRenderList = computed(()=>{
   const List = new Array<itemConfig> ();
   for (let index = 0; index < itemNum; index++) {
    let element = itemConfig[index];
    if(element &&  element.tag === `item-${index + 1}`) {
      element.tag = `item-${index + 1}`
    } else {
      element = {
        tag: `item-${index + 1}`,
        isFixed: false,
        size: '',
      }
    }
    List.push(element)
   }
   return List
})
/**
 * 处理边框
 * @param item 
 */
const itemClass = (item:itemConfig) => {
  const classArr = [item.tag]
  if(item.paddingSize && paddingDic.indexOf(item.paddingSize) >= 0) {
    classArr.push('padding-' + item.paddingSize)
    if(item.clearPadding?.length){
      classArr.push(...item.clearPadding.map(it => 'padding-clear-' + it))
    }
  }
  return classArr
}
</script>