<template>
  <div class="main-page">
    <p>
      <span>{{ meta.title }}</span>
    </p>
    <slot />
  </div>
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
