<template>
  <div class="header">
    <div class="left">
      <span>ElementPlusExtention</span>
    </div>
    <div class="mid">
      <ul class="menu">
        <li 
          v-for="(item, i) in menus"
          :key="i"
          @click="changePage(item.url)"
          :class="{ 'menu-selected': currentMenu === item.url }">
          {{item.title}}
        </li>
      </ul>
    </div>
    <div class="right">
      <div class="repository">
        仓库
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const menus = [
    {
      url:'/home.html',
      title: '首页'
    },
    {
      url:'/rules.html',
      title: '文档'
    },
    {
      url:'/docs.html',
      title: '组件'
    }
  ]
const changePage = (url) => {
  if (currentMenu !== url) {
    const LOGIN_ADDRESS = document.location.origin + url
    window.open(LOGIN_ADDRESS, '_self')
  }
}
const currentMenu = document.location.pathname
</script>

<style lang="less" scoped>
@import url('../var.less');

ol, ul {
	list-style: none;
}

.header {
    height: 60px;
    border-bottom: @broder-base;
    display: flex;
    font-size: @font-size-normal;
    color: @font-color-primary;
    width: 100%;
    .left {
      width: 260px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        display: block;
        height: 40px;
      }
      span {
        font-weight:600;
        font-size: 18px;
      }
    }
    .mid {
      flex:1;
      display: flex;
      flex-direction: row;
      align-items: center;
      .menu {
        display: flex;
        flex-direction: row;
        align-items: center;
        li {
          width: 70px;
          text-align: center;
        }
        & :hover{
          color: @font-color-hover;
          cursor: pointer;
        }
        .menu-selected {
          color: @color-primary;
        }
      }
      .search {
        text-align: center;
        width: 200px;
      }
    }
    .right {
      display: flex;
      flex-direction: row;
      align-self: right;
      padding-right:20px;
      justify-content: center;
      align-items: center;
      div {
        width: 80px;
        text-align: center;
      }
      & :hover{
          color: @font-color-hover;
          cursor: pointer;
        }
    }
  }
</style>
