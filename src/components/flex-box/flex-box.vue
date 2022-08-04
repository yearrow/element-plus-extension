<template>
  <div :class="'flex-box'" :style="boxStyle">
    <div class="flex-box-fixed" :style="fixedStyle">
      <slot name="fixed"></slot>
    </div>
    <div class="flex-box-flex">
      <slot name="flex"></slot>
    </div>
  </div>
</template>
<script lang="ts">
const { computed, ComputedRef, defineComponent } = Vue
const YlFlexBox = defineComponent({
  props: {
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
    },
    /**
     * 需要折叠
     */
    needFlod: {
      type: Boolean,
      default: false
    },
    /**
     * 折叠状态
     */
    isFlod: {
      type: Boolean,
      default: false
    }
  },
  setup (props: any) {
    const boxStyle: ComputedRef = computed(() => {
      let style = ''
      let diriction = ''
      if (props.vertical) {
        diriction = props.isReverse ? 'column-reverse' : 'column'
      } else {
        diriction = props.isReverse ? 'row-reverse' : 'row'
      }
      style += 'flex-direction:' + diriction + ';'
      return style
    })
    const fixedStyle: ComputedRef = computed(() => {
      let style = ''
      if (props.vertical) {
        style += 'height:' + props.fixedWidth + ';'
      } else {
        style += 'width:' + props.fixedWidth + ';'
      }
      return style
    })
    return {
      boxStyle,
      fixedStyle
    }
  }
})
export default YlFlexBox
</script>
<style lang="less" scoped>
.flex-box {
  display: flex;
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  .flex-box-fixed {
    display: block;
    div {
      width: 100%;
      height: 100%;
    }
  }

  .flex-box-flex {
    flex: 1;
    overflow:auto;
    div {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
