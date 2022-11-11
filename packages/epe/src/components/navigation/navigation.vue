<template>
  <yl-panel
    :show-header="false"
    paddingSize="base"
    >
    <div class="menu-title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item >基础数据</el-breadcrumb-item>
        <el-breadcrumb-item>收料登记</el-breadcrumb-item>
        <el-breadcrumb-item>单据详情</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="menu-tool">
        <!-- <span @click="close" role="link" style="color:var(--el-color-primary);font-size: 14px;cursor:pointer"> 关闭 </span> -->
        <!-- <el-button
          type="primary"
          link
          @click="close"
          >关闭</el-button> -->
        <slot name="tool"></slot>
      </div>
    </div>
  </yl-panel>
</template>
<script lang="ts">
  export default {
    inheritAttrs: false,
    name: 'YlNavigation'
  }
</script>

<script lang="ts" setup>
  
</script>
<style lang="less" scoped>

.menu-title {
	display: flex;
	align-items: center;
	.menu-tool {
		flex: 1;
    height: 14px;
    display: flex;
    align-items: center;
    /* text-align: right; */
    justify-content: right;
	}
}
</style>