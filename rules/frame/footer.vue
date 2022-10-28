<template>
  <div class="footer">
    <div class="sm">
      ElementPlusExtention@{{ packageFile.version }} Made By 房角石 © 2021 yearrow. Inc
    </div>
  </div>
</template>

<script setup lang="ts">
import packageFile from '../../package.json';
</script>

<style lang="less" scoped>
@import url('../var.less');
.footer {
    background: #f1f1f1;
    padding: 5px 0px;
    font-size: 12px;
    .sm {
      text-align:center;
      color: @font-color-secondary;
    }
  }
</style>
