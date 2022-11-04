
<template>
  <div class="yl-tool-bar">
    <div class="filter-area">
      <div class="filter-content">
        <div class="filter">
          <slot name="filter" />
        </div>
        <div class="more">
          <!-- <div v-if="more" class="more-lable" @click="_display">
            <i class="el-icon-filesearch" /> {{ display }}
          </div> -->
          <div v-if="display == '隐藏'" class="more-content">
            <slot name="more" />
          </div>
        </div>
      </div>
      <div class="tool-func">
          <slot name="filterTool" />
          <div v-if="more" @click="_display" class="display-btn">{{display}}</div>
      </div>
    </div>
    <div v-if="divider" class="divider" />
    <div v-if="tool" class="tool">
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
import { ref } from 'vue' 
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'
export interface Props {
  divider?: boolean
  more?: boolean
  tool?: boolean
}

// defineOptions({
//   name: 'YlToolBar',
//   inheritAttrs: true,
// })

const { divider, more, tool } = withDefaults(defineProps<Props>(), {
  /**
   * 分割线
   */
  divider: true,
  /**
   * 展开更多
   */
  more: false,
  /**
   * 显示工具栏
   */
  tool: true
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