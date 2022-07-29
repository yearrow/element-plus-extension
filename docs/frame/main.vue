<template>
  <div class="main-page">
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less">
.main-page {
    flex:1;
    overflow: auto;
    padding: 10px 10px 10px 30px;
    section {
      max-width: 1066px;
      min-width: 560px;
      margin: 10px 0;
    }
  }
</style>
