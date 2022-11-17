<template>
  <div class="demo-block">
    <div
      class="demo-block-meta"
      v-if="$slots.default"
    >
      <slot />
    </div>
    <div class="demo-tool">
      <img
        @click="showCode=!showCode"
        alt="expand code"
        height="20"
        src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
        class="code-expand-icon-show"
      >
    </div>
    <div
      class="demo-block-code"
      v-show="showCode"
    >
      <slot name="highlight" />
    </div>
  </div>
</template>
<script setup lang="ts">
const { ref } = Vue;
const showCode = ref(false);
</script>
<style lang="less">
.demo-block {
  border: 1px solid #ebedf0;
  border-radius: 2px;
  display: inline-block;
  width: 100%;
  position: relative;
  transition: all 0.2s;
  margin: 15px 0px;
  font-size: 14px;
  .demo-block-meta {
    position: relative;
    padding: 25px;
    transition: background-color 0.4s;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px dashed #ebedf0;
  }
  .demo-tool {
    width: 100%;
    text-align: right;
    height: 20px;
    display: block;
    line-height: 20px;
    padding: 0px 10px;
  }
  .demo-block-code {
    padding: 5px;
    border-top: 1px dashed #ebedf0;
    pre {
      margin-bottom: 0px;
    }
  }
}
</style>
