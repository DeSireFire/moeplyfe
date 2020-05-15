<template>
    <div class="Footer">
        <el-row align="middle">
            <el-col :span="24" align="middle">
                <span> Copyright 2016-2020 MoePly </span>|
                <span> Powered by <a href="https://github.com/DeSireFire">RaXianch</a> Procject </span>|
                <span> All Rights Reserved. </span>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .Footer {
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        text-align: center;

    }
    .el-footer{
        color: #f2f3f3;
        height: auto;
    }
    .el-col > span > a:link {
        font-size: 20px;
        color: #f5e79e;
        text-decoration: none;
    }
    .el-col > span > a:visited {
        font-size: 20px;
        color: #f5e79e;
        text-decoration: none;
    }
    .el-col > span > a:hover {
        font-size: 20px;
        color: #f5e79e;
        text-decoration: underline;
    }
</style>
