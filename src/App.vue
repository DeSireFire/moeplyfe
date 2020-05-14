<template>
  <div id="app">
    <div class="beauty-Scroll">
      <el-scrollbar>
        <router-view/>
      </el-scrollbar>
    </div>
  </div>
</template>

<style>
  #app {
    width: 100%;
    /*height: calc(~"100% - 10px"); !*这里我用了计算属性*!*/
  }
  /* 美化滚动条 */
  .el-scrollbar{
      height: 100%; /*此处一定要设置高度，不然内层的计算属性不生效*/
  }
  .el-scrollbar__wrap {
    /*width: calc(~ "100% + 17px"); !*将垂直滚动条挤到可视区域之外*!*/
    /*height: calc(~ "100% + 17px"); !*将水平滚动条挤到可视区域之外*!*/
  }
  .el-scrollbar__thumb:hover {
    background-color: rgba(245,231,158,0.8) !important;
  }
</style>
