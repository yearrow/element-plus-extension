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
    name: 'YlFlexBox'
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
  let styleObj = {}
  if(isRow) {
    if(item.isFixed) {
      styleObj = {
        width: item.size ?? '20px',
        'border-left': 'none',
        'flex-shrink': 0,
        height: '100%',
      }
    } else {
      styleObj = {
        flex: 1,
        'border-left': 'none',
        height: '100%'
      }
    }
  } else {
    if(item.isFixed) {
      styleObj = {
        height: item.size ?? '20px',
        'border-top': 'none',
        'flex-shrink': 0,
        width: '100%',
      }
    } else {
      styleObj = {
        flex: 1,
        'border-top': 'none',
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
<style lang="less" scoped>
.flexbox {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  box-sizing: border-box;
  overflow: auto;
  .item {
    box-sizing: border-box;
    overflow: auto;
  }
}
.flexbox-row {
  flex-direction: row;
}
.flexbox-column {
  flex-direction: column;
}

// // 公共类
// .padding-base {
//   padding: var(--el-layout-gap-base)
// }
// .padding-large {
//   padding: var(--el-layout-gap-large)
// }
// .padding-small {
//   padding: var(--el-layout-gap-small)
// }
// .padding-clear-left {
//   padding-left: 0px;
// }
// .padding-clear-right {
//   padding-right: 0px;
// }
// .padding-clear-top {
//   padding-top: 0px;
// }
// .padding-clear-bottom {
//   padding-bottom: 0px;
// }
</style>