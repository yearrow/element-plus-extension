<template>
  <div
    id="app"
    class="root-app"
  >
    <frame.header />
    <div class="content">
      <frame.menu />
      <div class="page">
        <frame.main />
        <!-- <frame.footer /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as frame from './frame/index';
</script>

<style lang="less" scoped>
@import url('./var.less');
.root-app {
  height: 100%;
  color: #1d1d1d;
  background: @background-color-base;
  display: flex;
  flex-direction: column;
  position: fixed;
  left:0;
  top:0;
  right:0;
  bottom:0;
  .content {
    flex: 1;
    display: flex;
    flex-direction: row;
    position:fixed;
    left:0;
    right:0;
    top:60px;
    bottom:0;
    .page {
      flex:1;
      display: flex;
      flex-direction:column;
    }
  }
}
</style>
