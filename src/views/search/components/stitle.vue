<template>
    <div class="stitle">
        <el-row align="middle">
            <el-col :span="24" class="content-row">
                <img class="logo" src="../../../assets/img/logo.png"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    // 搜索页标题（一般是放logo啦）
    export default {
        name: "stitle"
    }
</script>

<style scoped>
.stitle .el-row {
    line-height: 100px;
    width: 100%;
    text-align: center;
}
.logo{
    margin-top: 10%;
    vertical-align:bottom;
    max-width:100%;
    overflow:hidden;
}
</style>