<template>
  <div
    id="app"
    class="root-app"
  >
    <div class="main-header">
      <frame.header/>
    </div>
    <div class="content">
      <div class="main-menu">
        <frame.menu />
      </div>
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
  position: absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
  .main-header {
    height: 60px;
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: row;
    overflow: auto;
    .page {
      flex:1;
      display: flex;
      flex-direction:column;
      overflow: auto;
    }
    .main-menu {
    }
  }
}
</style>
