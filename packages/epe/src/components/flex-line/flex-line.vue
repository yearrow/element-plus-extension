<template>
  <div class="yl-line-flex">
    <div class="line_flex_left">
      <slot />
    </div>
    <div class="line_flex_right">
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'YlFlexLine',
  inheritAttrs: true
});
</script>
