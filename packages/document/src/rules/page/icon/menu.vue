<template>
  <div class="content font-class">
    <ul class="icon_lists dib-box">
          
          <li class="dib">
            <span class="icon cs cs-fenxi"></span>
            <div class="name">
              分析
            </div>
            <div class="code-name">.menu-fenxi
            </div>
          </li>
          
          <li class="dib">
            <span class="icon cs cs-wode"></span>
            <div class="name">
              个人
            </div>
            <div class="code-name">.menu-wode
            </div>
          </li>
          
          <li class="dib">
            <span class="icon cs cs-taizhangguanli"></span>
            <div class="name">
              台账
            </div>
            <div class="code-name">.menu-taizhang
            </div>
          </li>
          
          <li class="dib">
            <span class="icon cs cs-baobiao"></span>
            <div class="name">
              报表
            </div>
            <div class="code-name">.menu-baobiao
            </div>
          </li>
          
          <li class="dib">
            <span class="icon cs cs-caidan"></span>
            <div class="name">
              表单
            </div>
            <div class="code-name">.menu-biaodan
            </div>
          </li>
          
          <li class="dib">
            <span class="icon cs cs-liebiao"></span>
            <div class="name">
              列表
            </div>
            <div class="code-name">.menu-liebiao
            </div>
          </li>
          
          <li class="dib">
            <span class="icon cs cs-yibiaopan"></span>
            <div class="name">
              门户
            </div>
            <div class="code-name">.menu-menhu
            </div>
          </li>
          
        </ul>
  </div>
</template>
<style lang="less" scoped>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
}
.icon_lists {
  display: flex;
  flex-wrap: wrap;
}
.icon_lists {
  li {
    width: 100px;
    margin-bottom: 10px;
    margin-right: 20px;
    text-align: center;
    list-style: none !important;
  }
}

.dib-box {
  list-style: none;
  .dib {
    vertical-align: top;
    font-size: 12px;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: inherit;
    span {
      font-size: 30px;
    }
    .name {
      color:var(--el-text-color-regular)
    }
    .code-name {
      color:var(--el-text-color-regular)
    }
  }
}
</style>
