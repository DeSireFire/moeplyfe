<template>
    <div id="app">
            <el-container class="moe-body">
                <el-header>
                    <app-header v-if="header_show"></app-header>
                </el-header>
                <el-main>
                    <router-view v-on:header="header" v-on:footer="footer"></router-view>
                </el-main>
                <el-footer>
                    <app-footer v-if="footer_show"></app-footer>
                </el-footer>
            </el-container>
    </div>
</template>

<script>
    import Header from './layout/Header'
    import Footer from './layout/Footer'
    export default {
        name: 'App',
        data(){
            return {
                header_show:true,
                footer_show:true,
            }
        },
        components: {
            'app-header':Header,
            'app-footer':Footer,
        },
        methods:{
            //是否显示头部
            header:function (bool) {
                this.header_show = bool;
            },
            //是否显示底部
            footer:function (bool) {
                this.footer_show = bool;
            }
        }
    }
</script>

<style>
    /* 修改默认样式 */
    .el-footer {
        background-color: rgba(96,98,102,0.5);
    }
    .el-header {
        background-color: rgba(96,98,102,0.5);
    }

    /* 主体内容模块，作为.search子盒子使用 flex: auto; 布局达到它撑满屏幕高度*/
    .el-main {
        background-color: rgba(96,98,102,0.2);
        padding: 10px;
        flex: auto;
    }

    /* 调整padding */
    .moe-body .el-main {
        /*padding: 0px;*/
        overflow: hidden;
        background-color: rgba(96,98,102,0.2);
    }

    /* 背景图片样式 */
    #app {
        background: url("./assets/img/80942286_p0.png")  center 0 no-repeat;
        background-size:cover;
        background-attachment:fixed;
        /*height: 100vh;*/
        /*display: flex;*/
        /*flex-direction: column;*/
    }

    .el-menu--horizontal  .el-menu {
        background-color: rgba(96,98,102,0.5);
    }

    /* 滚动条 */
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
