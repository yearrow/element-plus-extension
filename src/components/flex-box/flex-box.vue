<template>
  <div :class="'flex-box'">
    <div class="flex-box-fixed">
      <slot name="fixed"></slot>
    </div>
    <div class="flex-box-flex">
      <slot name="flex"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
    
</script>