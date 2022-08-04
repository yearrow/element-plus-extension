<template>
  <div class="panel g-border-radius">
    <div
      v-if="showHeader || showToolbar"
      class="panel-header"
    >
      <div
        v-if="showHeader"
        class="header-tool g-container-padding"
      >
        <div class="header-title">
          {{ title }}
        </div>
        <div class="header-tool">
          <slot name="tool" />
        </div>
      </div>
      <div
        v-if="showToolbar"
        class="header-toolbar"
      >
        <slot name="toolbar" />
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
const { defineComponent } = Vue
const YlPanel = defineComponent({
  props: {
    /**
     * 显示标题行
     */
    showHeader: {
      type: Boolean,
      default: true
    },
    /**
     * 显示工具栏
     */
    showToolbar: {
      type: Boolean,
      default: false
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
  }
})
export default YlPanel
</script>

<style lang="less" scoped>
.panel {
  background: #ffffff;
  height: 100%;
  display: flex;
  flex-direction: column;
  .panel-header {
    padding-bottom: 0;
    // border-bottom: solid 1px var(--el-border-color);
  .header-tool {
    display: flex;
    padding-bottom: 0px;
    align-items: center;
    .header-title {
      flex: 1;
      // border-left: solid 6px #409eff;
      line-height: 2;
      font-size:var(--el-font-size-medium)
    }
  }
  .header-toolbar {
  }
  }
  .panel-content {
    flex:1;
    overflow: auto;
  }
}
</style>
