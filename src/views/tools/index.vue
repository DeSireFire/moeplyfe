<template>
    <div class="tools">
        <el-row align="middle" class="toolsTitle">
            <p>《{{toolsName}}》</p>
        </el-row>
        <el-row class="toolsMain">
            <router-view/>
        </el-row>
<!--        <el-row align="middle" class="toolsInfo">-->
<!--            <p>信息内容</p>-->
<!--        </el-row>-->
    </div>
</template>

<script>
    export default {
        name: "tools",
        computed : {
            toolsName () {
                return this.$route.name
            }
        }
    }
</script>

<style scoped>
    /* 工具箱主页，定义背景和flex布局撑满 */
    .tools {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    /*  标题  */
    .toolsTitle {
        line-height: 100px;
        width: 100%;
        text-align: center;
    }
    .toolsTitle > p {
        font-size: 5vw;
        color: azure;
    }

    /*  主题内容  */
    .toolsMain {
        line-height: 100px;
        width: 100%;
        text-align: center;
    }

    /*  工具信息  */
    .toolsInfo {
        line-height: 100px;
        width: 100%;
        text-align: center;
    }
    .toolsInfo > p {
        font-size: 5vw;
        color: azure;
    }
</style>