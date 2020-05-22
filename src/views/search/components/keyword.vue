<template>
    <div class="keyword">
        <el-row align="middle">
            <el-col :span="24" class="content-row">
                <el-form :inline="true" :model="formInline" @submit.native.prevent @keyup.enter.native="onSubmit" class="form-inline" label-width="100px">
                    <el-input class="search-input" clearable autosize v-model="formInline.kw" placeholder="搜 索" prefix-icon="el-icon-search"></el-input>
                    <el-button icon="el-icon-search" type="primary" @click="onSubmit">搜 索</el-button>
                </el-form>
            </el-col>
            <el-col :span="24" class="content-row search-info">
                <span v-show="formInline.kw.length>0">关键词： {{ formInline.kw }} Go!</span>
                <span v-show="formInline.p>0">当前第 {{ formInline.p }} 页</span>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    // 搜索组件
    import {fetchList} from "@/api/search";

    export default {
        name: "keyword",
        data() {
            return {
                formInline: {
                    kw: '',
                    p: '',
                },
                LoadingRes: {
                    table:false,
                },
            }
        },

        methods:{
            // 传参数并获取列表
            getList() {
                fetchList(this.formInline).then(response => {
                    // 数据列表
                    this.tableData = response.data.Bitems;
                    // 数据总和数
                    this.paginationInfo.total = response.data.Bitems.length;
                    // 关闭加载loding
                    this.LoadingRes.table = false;
                })
            },
            // 搜索提交
            onSubmit() {
                // 使用搜索关键词，回转到首页
                this.formInline.p = 1;
                // 开启loading
                this.LoadingRes.table = true;
                this.getList()
                setTimeout(() => {
                    this.listLoading = false
                }, 5 * 1000)
            },
        }
    }
</script>

<style scoped>
    /* 水平垂直居中设置 */
    .content-row{
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-box-pack: center;
        -moz-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }


    /* 搜素下简要信息 */
    .form-inline {
        width: 100%;
        text-align: center;
    }
    .search-info {
        color: #fff;
        font-size: 15px;
    }
    .search-info > span{
        padding-right: 15px;
    }

    /*  关键词输入组件样式  */
    .search-input {
        background-color: transparent !important;
        box-sizing: border-box;
        width: 60%;
        max-width: 800px;
    }

    /* 更改element-UI input样式 */
    .search-input >>> .el-input__inner {
        -webkit-appearance: none;
        background-color: rgba(153,204,255,0.3);
        border: 1px solid #99CCFF;
        background-image: none;
        border-radius: 4px;
        box-sizing: border-box;
        color: #f5e79e;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: 0;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
    }
    .search-input >>> .el-input--prefix {
        padding-left: 30px;
    }
    /* 修改input 小图标颜色 */
    .search-input >>> .el-input__icon {
        height: 100%;
        width: 25px;
        text-align: center;
        transition: all .3s;
        line-height: 40px;
        color: #f5e79e;
    }
    /* 修改input placeholder文字颜色 */
    .search-input >>> .el-input__inner::-webkit-input-placeholder {
        color: #f5e79e;
    }
    .search-input >>> .el-input__inner:-moz-placeholder {
        color: #f5e79e;
    }
    .search-input >>> .el-input__inner:-ms-input-placeholder {
        color: #f5e79e;
    }

    /* 更改element-UI 按钮样式 */
    .el-button--primary {
        color: #fff;
        font-size: 15px;
        background-color: rgba(153,204,255,0.5);
        border: 1px solid #99CCFF;
        transition: all 0.8s;
        -moz-transition: all 0.8s;
        -webkit-transition: all 0.8s;
        -o-transition: all 0.8s;
    }
    .el-button--primary:hover {
        color: aquamarine;
        font-size: 15px;
        background-color: rgba(153,204,255,0.5);
        border: 1px solid #99CCFF;
    }
    .el-button--primary:focus {
        background-color: rgba(153,204,255,0.5);
        border: 1px solid #99CCFF;
    }
    .el-button+.el-button {
        margin: 0px;
    }
</style>