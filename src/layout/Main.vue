<template>
    <div class="Main">
        <router-view/>
    </div>
</template>

<script>

export default {
    name: "Main",
}
</script>

<style scoped>

    /*自定义样式*/
    .form-inline {
        width: 100%;
        text-align: center;
    }

    .table-datas{
        width: 100%;
        max-width: 2400px;
    }
    /* 搜素下简要信息 */
    .search-info {
        color: #fff;
        font-size: 15px;
    }
    .search-info > span{
        padding-right: 15px;
    }
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
    .logo{
        margin-top: 10%;
        vertical-align:bottom;
        max-width:100%;
        overflow:hidden;
    }
    .search-input {
        background-color: transparent !important;
        box-sizing: border-box;
        width: 60%;
        max-width: 800px;
    }


    /* 默认样式修改 */

    /* 去除伪类的背景色 */
    .table-datas >>> .el-table--border::after,
    .table-datas >>> .el-table--group::after,
    .table-datas >>> .el-table::before {
        background-color: transparent;
    }

    /* 修改mini表格中 按钮样式 */
    .table-datas >>> .el-button--mini,.table-datas >>>  .el-button--mini.is-round {
        padding: 1px;
    }

    /* 修改table row 底边线 */
    .table-datas >>> .el-table th.is-leaf {
        border-bottom: none;
    }

    .table-datas >>> .el-table td {
        border-top: 1px solid rgba(245,231,158,0.8);
        border-bottom: none;
    }

    /* 修改row 内容 padding距离，主要是调整table行高 */
    .table-datas >>> .el-table td,.table-datas >>> .el-table th {
        padding: 5px 0;
    }

    /* 修改striped属性斑马线的背景色 */
    .table-datas >>> .el-table--striped .el-table__body tr.el-table__row--striped td {
        background: rgba(153,204,255,0.3);
    }

    /* 修改鼠标移入时背景色特效 */
    .table-datas >>> .el-table--enable-row-hover .el-table__body tr:hover>td {
        background-color: rgba(245,231,158,0.3);
    }

    /* 修改表头背景色和字体颜色 */
    .table-datas >>> .el-table th {
        background: rgba(173, 216, 230, 1);
        color: white;
    }

    /* 修改表 tr(行) 的背景色透明 进而通过.el-table的背景色来控制统一背景色 */
    .table-datas >>> .el-table tr {
        background-color: transparent;
    }

    /* 表格表头文字居中 */
    .table-datas >>> .el-table th{
        padding: 5px 0;
        text-align: center;
    }

    /* 表格整体的样式 */
    .table-datas >>> .el-table {
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        flex: 1;
        max-width: 100%;
        color: #606266;
        background-color: rgba(255,255,255,0.6);
        border-radius: 10px;
        /*border: 1px solid #99CCFF;*/
    }

    /* 更改element-UI input样式 */
    .search-input >>> .el-input__inner {
        -webkit-appearance: none;
        background-color: rgba(153,204,255,0.3);
        border: 1px solid #99CCFF;
        /*border: 1px solid #99CCFF;*/
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
    .butt {
        text-align: center;
    }
    .butt > button{
        margin-left: 5%;
        margin-right: 5%;
    }
    .el-button--primary {
        color: #fff;
        font-size: 12px;
        background-color: rgba(153,204,255,0.5);
        border: 1px solid #99CCFF;
        transition: all 0.8s;
        -moz-transition: all 0.8s;
        -webkit-transition: all 0.8s;
        -o-transition: all 0.8s;
    }
    .el-button--primary:hover {
        color: aquamarine;
        font-size: 12px;
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
