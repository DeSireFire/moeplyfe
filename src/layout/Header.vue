<template>
    <div class="Header">
        <el-menu
                :default-active="activeIndex"
                mode="horizontal"
                text-color="#fff"
                router
                :collapse-transition="true"
                active-text-color="#99CCFF">
            <el-menu-item class="logo" index="/">
                <img  src="../assets/img/logo.png"/>
            </el-menu-item>
            <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
                <template slot="title">
                    <span v-text="item.name"></span>
                </template>
                <el-menu-item-group class="over-hide" v-for="sub in item.sub" :key="sub.componentName">
                    <el-menu-item class="submenu-item" :index="'/'+item.id+'/'+sub.componentName" v-text="sub.name">
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    import menu from '@/layout/components/menu-config'
    export default {
        name: "Header",
        data() {
            return {
                activeIndex: '/',
                menu: menu
            };
        },
        methods: {
        }
    }
</script>

<style scoped>
    /* logo样式 */

    /* logo 父级 */
    .logo {
        border:0;
        display: table-cell;
        vertical-align: middle;
        text-align: -webkit-center;
    }

    /* logo 图片 */

    /* 图片样式 */
    .logo > img {
        max-width: 70%;
        max-height: 100%;
        display: block;
        margin-top: 5%;
        overflow:hidden;
    }

    /* 去除第一个导航选项的底线(logo) */
    .Header >>> .el-menu-item.is-active:nth-child(1) {
        border-bottom: none;
    }

    .Header >>> .el-menu--horizontal>.el-menu-item:nth-child(1) {
        background-color: transparent;
        border-bottom: none!important;
    }

    .Header >>> .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover:nth-child(1) {
        border-bottom: none;
    }

    /* 导航样式 */

    /* 去除导航底线 */
    .Header .el-menu.el-menu--horizontal {
        border-bottom: none;
    }

    /* 设置导航部分背景透明以确保跟父标签的背景一致 */
    .Header .el-menu {
        background-color:transparent!important;
    }

    /* 修改导航条伪类样式 */
    .Header >>> .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,
    .Header >>> .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
    .Header >>> .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
        background-color: transparent;
        border-bottom: 2px solid #99CCFF;
    }

    /* 菜单item样式 */
    .el-menu--horizontal .el-menu .el-menu-item,el-menu--horizontal .el-menu .el-submenu__title {
        background-color: transparent;
    }
    .submenu-item {
        background:transparent;
    }
    .submenu-item:hover {
        background-color:rgba(153,204,255,0.5)!important;
    }

    /* 导航 i 图标 */
    .Header >>> .el-submenu__title i {
        color: #f5e79e;
    }

    /*!* 修改导航字体大小 *!*/
    /*.Header >>> .el-menu-item {*/
    /*    font-size: larger;*/
    /*}*/

</style>
