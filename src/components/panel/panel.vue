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

<script lang="ts">
export default {
  name: 'YlPanel'
}
</script>
<script lang="ts" setup>

interface Props {
  showHeader: boolean
  title: string
  contentStyle: string
}
withDefaults(defineProps<Props>(), {
  /**
   * 显示标题行
   */
  showHeader: () => true,
  /**
   * 标题
   */
  title: () => '',
  /**
   * 内容区域的样式
   */
  contentStyle: () => '' ,
})
</script>