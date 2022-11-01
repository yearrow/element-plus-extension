<template>
  <div class="yl-flex-line">
    <div class="flex_line_left">
      <slot />
    </div>
    <div class="flex_line_right">
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'YlFlexLine'
}
</script>
<script lang="ts" setup>
// defineOptions({
//   name: 'YlFlexLine',
//   inheritAttrs: true
// });
</script>
