<template>
  <div class="yl-panel">
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
        <div class="header-tool">
          <slot name="tool" />
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
defineProps({
  /**
   * 显示标题行
   */
  showHeader: {
    type: Boolean,
    default: true
  },
  /**
   * 标题
   */
  title: {
    type: String,
    default: ''
  },
  /**
   * 内容区域的样式
   */
  contentStyle: {
    type: String,
    default: ''
  }
})
</script>

<style lang="less" scoped>
</style>
