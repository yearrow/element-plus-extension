<template>
  <div class="menu">
    <div
      class="menu-warp"
      :key="index"
      v-for="(item, index) in menuData"
    >
      <div class="menu-header">
        {{ item.menuHeader.title }}
      </div>
      <div
        class="menu-item"
        :key="iindex"
        v-for="(iitem, iindex) in item.menuItem"
        :class="{ 'menu-item-selected': currentMenu === iitem.name.toLowerCase() }"
        
      >
        <div v-if="iitem.type==='element'" class="menu-item-element" @click="linkNewPage(iitem.link)">{{ iitem.title }} </div>
        <div v-else-if="iitem.type==='group'" class="menu-item-group">{{ iitem.title }} </div>
        <div v-else class="menu-item-element">{{ iitem.title }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import menuData from './menu-data.json'
import router from '../router'
const { ref } = Vue
const currentMenu = ref(document.location.hash.split('/')[1])
const linkNewPage = function (link) {
  if (link) {
    currentMenu.value = link.split('/')[1]
    router.push(link)
  }
}
</script>

<style lang="less" scoped>
@import url('../var.less');
.menu {
  width: 260px;
  overflow: auto;
  border-right: @broder-base;
  .menu-warp {
    font-size: @font-size-normal;
    color: @font-color-primary;
    width: 100%;
    .menu-header {
      height:36px;
      line-height:36px;
      padding-left: 32px;
      color: @font-color-secondary;
    }
    .menu-header:hover {
      cursor: default;
    }
    .menu-item {
      height:36px;
      line-height:36px;
      color: @font-color-primary;
      span {
        color: @font-color-secondary;
      }
      .menu-item-element {
        padding: 3px 3px 3px 48px;
        &:hover {
          color: @font-color-hover;
          cursor: pointer;
          background: mix(@color-white, @color-primary, 90%);
        }
        &:hover span {
          color: @font-color-hover;
          cursor: pointer;
          background: mix(@color-white, @color-primary, 90%);
        }
      }
      .menu-item-group {
        padding: 3px 3px 3px 48px;
        color: @font-color-placeholder;
      }
    }
    .menu-item-selected {

        color: @font-color-hover;
        cursor: pointer;
        background: mix(@color-white, @color-primary, 90%);
        .menu-item-disabled {
          color: @font-color-hover;
        }
    }
    .menu-item-selected span {
        color: @font-color-hover;
        cursor: pointer;
        background: mix(@color-white, @color-primary, 90%);
      }
  }
}
</style>
