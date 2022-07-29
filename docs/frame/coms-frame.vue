<template>
  <p>
    {{ name }}
    <span>{{ meta.title }}</span>
  </p>
  <slot />
</template>

<script setup lang="ts">
const { onMounted } = Vue
const { useRoute } = VueRouter
const { meta, name } = useRoute()
onMounted(()=>{
console.log(1111, VueRouter)
})
</script>

<style lang="less" scoped>
@import url('../var.less');
p {
  font-size:26px;
  font-weight: 500;
  color:@font-color-primary;
  margin: 20px 0px;
  span {
    color: @font-color-secondary;
  }
}
</style>
