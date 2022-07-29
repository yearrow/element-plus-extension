<template>
  <div class="header">
    <div class="left">
      <span>ELEMENT-PLUS-EXTENDSION</span>
    </div>
    <div class="mid">
      <ul class="menu">
        <li>首页</li>
        <li>文档</li>
        <li>组件</li>
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
</script>

<style lang="less" scoped>
@import url('../var.less');
.header {
    height: 60px;
    border-bottom: @broder-base;
    display: flex;
    font-size: @font-size-normal;
    color: @font-color-primary;
    width: 100%;
    .left {
      width: 360px;
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
