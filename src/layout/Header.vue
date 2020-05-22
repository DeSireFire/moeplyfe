<template>
    <div class="Header">
        <el-menu
                :default-active="activeIndex"
                class=""
                mode="horizontal"
                @select="handleSelect"
                text-color="#fff"
                :collapse-transition="true"
                active-text-color="#99CCFF">
            <el-menu-item class="logo" index="/">
                <img  src="../assets/img/logo.png"/>
            </el-menu-item>
            <el-submenu class="submenu" index="2">
                <template class="submenu-title" slot="title">工具箱</template>
                <el-menu-item class="submenu-item" index="2-1">选项1</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                activeIndex: '/'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>


    /* 图标logo */
    .logo > img {
        max-width: 70%;
        max-height: 100%;
        display: block;
        margin-top: 5%;
        overflow:hidden;
    }
    .logo {
        border:0;
        display: table-cell;
        vertical-align: middle;
    }
    /* 修改导航条伪类样式 */
    .Header >>> .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,
    .Header >>> .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover:nth-child(1),
    .Header >>> .el-menu--horizontal>.el-submenu .el-submenu__title:hover
    {
        background-color: transparent;
    }

    /* 去除第一个导航选项的底线 */
    .Header >>> .el-menu-item.is-active:nth-child(1) {
        border-bottom: none;
    }

    /* 去除导航底线 */
    .Header .el-menu.el-menu--horizontal {
        border-bottom: none;
    }

    /* 设置导航部分背景透明以确保跟父标签的背景一致 */
    .Header .el-menu {
        background-color:transparent;
    }

    /* 修改导航字体大小 */
    .Header >>> .el-menu-item {
        font-size: larger;
    }

</style>
