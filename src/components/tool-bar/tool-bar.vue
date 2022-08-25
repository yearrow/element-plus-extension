
<template>
  <div class="yl-tool-bar">
    <div class="more">
      <div v-if="more" class="more-lable" @click="_display">
        <i class="el-icon-filesearch" /> {{ display }}
      </div>
      <div v-if="display == '隐藏'" class="more-content">
        <slot name="more" />
      </div>
    </div>
    <!-- <div v-if="display == '隐藏'" class="divider" /> -->
    <div class="filter">
      <slot name="filter" />
    </div>
    <div v-if="divider" class="divider" />
    <div class="tool">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'YlToolBar'
}
</script>
<script lang="ts" setup>
const { ref } = Vue
interface Props {
  divider: boolean
  more: boolean
}
withDefaults(defineProps<Props>(), {
  /**
   * 分割线
   */
  divider: true,
  /**
   * 展开更多
   */
  more: false,
})
const display = ref('展开')

const _display = () => {
  if (display.value === '展开') {
    display.value = '隐藏'
  } else {
    display.value = '展开'
  }
}
</script>