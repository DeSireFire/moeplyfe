<template>
    <div class="search">
        <el-container>
            <el-header>
                <Header/>
            </el-header>

            <el-main>
                <Main/>
            </el-main>

            <el-footer>
                <Footer/>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/views/search/components/HelloWorld.vue'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default {
    name: 'Search',
    components: {
        Header,
        Main,
        Footer
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 添加“作用域”属性以将CSS仅限于此组件 -->
<style scoped>
    .el-header, .el-footer {
        background-color: rgba(96,98,102,0.5);
        color: #333;
        line-height: 60px;
    }
    .el-main {
        /*border-radius: 10px;*/
        /*border:aqua 2px solid;*/
        background-color: rgba(96,98,102,0.2);
        /*margin: 1% 1% 1% 1%;*/
        padding: 10px;
    }
    .search {
        background: url("../../assets/img/80942286_p0.png")  center 0 no-repeat;
        background-size:cover;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
