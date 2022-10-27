<template>
  <div :class="{'yl-panel': true, 'yl-panel__border': border, 'yl-panel__shadow': shadow}">
    <div
      v-if="showHeader"
      class="panel-header"
    >
      <div
        v-if="showHeader"
        class="header-tool"
      >
        <div class="header-title">
          {{ title }}
        </div>
        <div class="tool-content">
          <div class="left-title">
            <slot name="title" />
          </div>
          <div class="right-tool">
             <slot name="tool" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="panel-content"
      :style="contentStyle"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
export interface Props {
  showHeader?: boolean
  title?: string
  contentStyle?: string
  border?: boolean
  shadow?: false
}

defineOptions({
  name: 'YlPanel',
  inheritAttrs: false,
})

withDefaults(defineProps<Props>(), {
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
  contentStyle: '' ,
  /**
   * 边框
   */
  border: false,
  /**
   * 阴影
   */
  shadow: false
})
</script>