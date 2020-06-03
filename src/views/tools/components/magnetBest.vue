<template>
    <div class="magnetBest">
        <el-row align="middle">
            <el-col :span="24" class="content-row">
                <el-input placeholder="请输入磁性链接！" v-model="input1" class="moe-input"></el-input>
                <el-button type="primary">磁链增强</el-button>
            </el-col>
            <el-select v-model="value1" multiple placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value1" multiple placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value1" multiple placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </el-row>

    </div>
</template>

<script>
    // 获取tracker列表组件
    // import {getTrackerAll} from "@/api/trackerGet";
    export default {
        name: "magnetBest",
        data() {
            return {
                input1: '',
            }
        },
    }
</script>

<style scoped>
    .content-row {
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

    /* el 样式 */
    /*  关键词输入组件样式  */
    .moe-input {
        background-color: transparent !important;
        box-sizing: border-box;
        width: 60%;
        max-width: 800px;
        /*display: inline-block;*/
    }

    /* 更改element-UI input样式 */
    .moe-input >>> .el-input__inner {
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
    .moe-input >>> .el-input--prefix {
        padding-left: 30px;
    }
    /* 修改input 小图标颜色 */
    .moe-input >>> .el-input__icon {
        height: 100%;
        width: 25px;
        text-align: center;
        transition: all .3s;
        line-height: 40px;
        color: #f5e79e;
    }
    /* 修改input placeholder文字颜色 */
    .moe-input >>> .el-input__inner::-webkit-input-placeholder {
        color: #f5e79e;
    }
    .moe-input >>> .el-input__inner:-moz-placeholder {
        color: #f5e79e;
    }
    .moe-input >>> .el-input__inner:-ms-input-placeholder {
        color: #f5e79e;
    }
    .input-with-select .el-input-group__prepend {
        background-color: transparent;
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