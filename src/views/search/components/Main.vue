<template>
    <div class="Main">
        <el-row align="middle">
            <el-col :span="24" class="content-row">
                <img class="logo" src="../../../assets/img/stay-and-play-at-home-with-popular-past-google-doodles-fischinger-2017-6753651837108768-law.gif"/>
            </el-col>
            <el-col :span="24" class="content-row">
                <el-form :inline="true" :model="formInline" class="form-inline" label-width="100px">
                    <el-input class="search-input" clearable autosize v-model="formInline.kw" placeholder="搜 索" prefix-icon="el-icon-search"></el-input>
                    <el-button icon="el-icon-search" type="primary" @click="onSubmit">搜 索</el-button>
                </el-form>
            </el-col>
            <el-col :span="24" class="content-row">
                <el-table
                        :data="tableData"
                        stripe
                        fit
                        highlight-current-row
                        :cell-style="{padding:'0px'}"
                        :row-style="{height:'20px'}"
                        style="width: 100%;font-size: 10px;"
                >
                    <el-table-column
                            prop="mdate"
                            label="日期"
                            sortable
                            align="center"
                            min-width="10%">
                        <template slot-scope="{row}">
                            <span>{{ row.mdate }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="mtitle"
                            label="名称"
                            sortable
                            align="left"
                            min-width="40%">
                    </el-table-column>
                    <el-table-column
                            prop="magnet"
                            label="磁性链接"
                            sortable
                            align="center"
                            min-width="10%">
                        <template slot-scope="{row}">
                            <el-button :href="row.magnet" type="success" icon="el-icon-download" size="mini"></el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="msize"
                            label="文件大小"
                            sortable
                            align="center"
                            min-width="10%">
                    </el-table-column>
                    <el-table-column
                            prop="morigin"
                            label="网站来源"
                            sortable
                            align="center"
                            min-width="10%">
                    </el-table-column>
                </el-table>
<!--                <div class="table-datas">-->
<!--                    -->
<!--                </div>-->
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data() {
            return {
                formInline: {
                    kw: '',
                },
                tableData: [{
                    "mtitle": "LoliHouse[喵萌奶茶屋&LoliHouse] 白猫计划 零之纪元 / Shironeko Project Zero Chronicle - 05 [WebRip 1080p HEVC-10bit AAC][简繁内封字幕]",
                    "mdate": "2020-05-07 17:19",
                    "mpublisher": "LoliHouse",
                    "magnet": "magnet:?xt=urn:btih:FQPACMQDPHRS5MYK23QT4TS6Q6MA6O3R&dn=&tr=http%3A%2F%2F104.238.198.186%3A8000%2Fannounce&tr=udp%3A%2F%2F104.238.198.186%3A8000%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=http%3A%2F%2Ftracker4.itzmx.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.publicbt.com%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&tr=http%3A%2F%2Fopen.acgtracker.com%3A1096%2Fannounce&tr=https%3A%2F%2Ft-115.rhcloud.com%2Fonly_for_ylbud&tr=http%3A%2F%2Ftracker1.itzmx.com%3A8080%2Fannounce&tr=http%3A%2F%2Ftracker2.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Ftracker1.itzmx.com%3A8080%2Fannounce&tr=udp%3A%2F%2Ftracker2.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Ftracker4.itzmx.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftr.bangumi.moe%3A6969%2Fannounce&tr=http%3A%2F%2Ft.nyaatracker.com%2Fannounce&tr=http%3A%2F%2Fopen.nyaatorrents.info%3A6544%2Fannounce&tr=http%3A%2F%2Ft2.popgo.org%3A7456%2Fannonce&tr=http%3A%2F%2Fshare.camoe.cn%3A8080%2Fannounce&tr=http%3A%2F%2Fopentracker.acgnx.se%2Fannounce&tr=http%3A%2F%2Ftracker.acgnx.se%2Fannounce&tr=http%3A%2F%2Fnyaa.tracker.wf%3A7777%2Fannounce&tr=http%3A%2F%2Ft.nyaatracker.com%3A80%2Fannounce&tr=https%3A%2F%2Ftr.bangumi.moe%3A9696%2Fannounce&tr=http%3A%2F%2Ft.acg.rip%3A6699%2Fannounce&tr=http%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=http%3A%2F%2Fopen.acgnxtracker.com%2Fannounce&tr=http%3A%2F%2Fsukebei.tracker.wf%3A8888%2Fannounce&tr=http%3A%2F%2Ftracker.kamigami.org%3A2710%2Fannounce&tr=https%3A%2F%2Ftracker.nanoha.org%2Fannounce",
                    "magnetSpare": "magnet:?xt=urn:btih:FQPACMQDPHRS5MYK23QT4TS6Q6MA6O3R&dn=&tr=http%3A%2F%2F104.238.198.186%3A8000%2Fannounce&tr=udp%3A%2F%2F104.238.198.186%3A8000%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=http%3A%2F%2Ftracker4.itzmx.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.publicbt.com%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&tr=http%3A%2F%2Fopen.acgtracker.com%3A1096%2Fannounce&tr=https%3A%2F%2Ft-115.rhcloud.com%2Fonly_for_ylbud&tr=http%3A%2F%2Ftracker1.itzmx.com%3A8080%2Fannounce&tr=http%3A%2F%2Ftracker2.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Ftracker1.itzmx.com%3A8080%2Fannounce&tr=udp%3A%2F%2Ftracker2.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Ftracker4.itzmx.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftr.bangumi.moe%3A6969%2Fannounce&tr=http%3A%2F%2Ft.nyaatracker.com%2Fannounce&tr=http%3A%2F%2Fopen.nyaatorrents.info%3A6544%2Fannounce&tr=http%3A%2F%2Ft2.popgo.org%3A7456%2Fannonce&tr=http%3A%2F%2Fshare.camoe.cn%3A8080%2Fannounce&tr=http%3A%2F%2Fopentracker.acgnx.se%2Fannounce&tr=http%3A%2F%2Ftracker.acgnx.se%2Fannounce&tr=http%3A%2F%2Fnyaa.tracker.wf%3A7777%2Fannounce&tr=http%3A%2F%2Ft.nyaatracker.com%3A80%2Fannounce&tr=https%3A%2F%2Ftr.bangumi.moe%3A9696%2Fannounce&tr=http%3A%2F%2Ft.acg.rip%3A6699%2Fannounce&tr=http%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=http%3A%2F%2Fopen.acgnxtracker.com%2Fannounce&tr=http%3A%2F%2Fsukebei.tracker.wf%3A8888%2Fannounce&tr=http%3A%2F%2Ftracker.kamigami.org%3A2710%2Fannounce&tr=https%3A%2F%2Ftracker.nanoha.org%2Fannounce",
                    "msize": "572.9MB",
                    "morigin": "dmhy",
                    "murl": "https://share.dmhy.org/topics/view/540535_LoliHouse_Shironeko_Project_Zero_Chronicle_-_05_WebRip_1080p_HEVC-10bit_AAC.html"
                },
                {
                    "mtitle": "喵萌奶茶屋【喵萌奶茶屋】★04月新番★[白貓Project ZERO CHRONICLE/白猫プロジェクト ZERO CHRONICLE/Shironeko Project Zero Chronicle][05][1080p][繁體][招募翻譯]",
                    "mdate": "2020-05-07 17:01",
                    "mpublisher": "nekomoekissaten",
                    "magnet": "magnet:?xt=urn:btih:Z23CE3RAB4T6ILTBE7NKK3NETUBISYUH&dn=&tr=http%3A%2F%2F104.238.198.186%3A8000%2Fannounce&tr=udp%3A%2F%2F104.238.198.186%3A8000%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=http%3A%2F%2Ftracker4.itzmx.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.publicbt.com%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&tr=http%3A%2F%2Fopen.acgtracker.com%3A1096%2Fannounce&tr=https%3A%2F%2Ft-115.rhcloud.com%2Fonly_for_ylbud&tr=http%3A%2F%2Ftracker1.itzmx.com%3A8080%2Fannounce&tr=http%3A%2F%2Ftracker2.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Ftracker1.itzmx.com%3A8080%2Fannounce&tr=udp%3A%2F%2Ftracker2.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Ftracker4.itzmx.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftr.bangumi.moe%3A6969%2Fannounce&tr=http%3A%2F%2Ft.nyaatracker.com%2Fannounce&tr=http%3A%2F%2Fopen.nyaatorrents.info%3A6544%2Fannounce&tr=http%3A%2F%2Ft2.popgo.org%3A7456%2Fannonce&tr=http%3A%2F%2Fshare.camoe.cn%3A8080%2Fannounce&tr=http%3A%2F%2Fopentracker.acgnx.se%2Fannounce&tr=http%3A%2F%2Ftracker.acgnx.se%2Fannounce&tr=http%3A%2F%2Fnyaa.tracker.wf%3A7777%2Fannounce&tr=http%3A%2F%2Ft.nyaatracker.com%3A80%2Fannounce&tr=https%3A%2F%2Ftr.bangumi.moe%3A9696%2Fannounce&tr=http%3A%2F%2Ft.acg.rip%3A6699%2Fannounce&tr=http%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=http%3A%2F%2Fopen.acgnxtracker.com%2Fannounce&tr=http%3A%2F%2Fsukebei.tracker.wf%3A8888%2Fannounce&tr=http%3A%2F%2Ftracker.kamigami.org%3A2710%2Fannounce&tr=https%3A%2F%2Ftracker.nanoha.org%2Fannounce&tr=http%3A%2F%2Fbigfoot1942.sektori.org%3A6969%2Fannounce",
                    "magnetSpare": "magnet:?xt=urn:btih:Z23CE3RAB4T6ILTBE7NKK3NETUBISYUH&dn=&tr=http%3A%2F%2F104.238.198.186%3A8000%2Fannounce&tr=udp%3A%2F%2F104.238.198.186%3A8000%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=http%3A%2F%2Ftracker4.itzmx.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.publicbt.com%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&tr=http%3A%2F%2Fopen.acgtracker.com%3A1096%2Fannounce&tr=https%3A%2F%2Ft-115.rhcloud.com%2Fonly_for_ylbud&tr=http%3A%2F%2Ftracker1.itzmx.com%3A8080%2Fannounce&tr=http%3A%2F%2Ftracker2.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Ftracker1.itzmx.com%3A8080%2Fannounce&tr=udp%3A%2F%2Ftracker2.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Ftracker4.itzmx.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftr.bangumi.moe%3A6969%2Fannounce&tr=http%3A%2F%2Ft.nyaatracker.com%2Fannounce&tr=http%3A%2F%2Fopen.nyaatorrents.info%3A6544%2Fannounce&tr=http%3A%2F%2Ft2.popgo.org%3A7456%2Fannonce&tr=http%3A%2F%2Fshare.camoe.cn%3A8080%2Fannounce&tr=http%3A%2F%2Fopentracker.acgnx.se%2Fannounce&tr=http%3A%2F%2Ftracker.acgnx.se%2Fannounce&tr=http%3A%2F%2Fnyaa.tracker.wf%3A7777%2Fannounce&tr=http%3A%2F%2Ft.nyaatracker.com%3A80%2Fannounce&tr=https%3A%2F%2Ftr.bangumi.moe%3A9696%2Fannounce&tr=http%3A%2F%2Ft.acg.rip%3A6699%2Fannounce&tr=http%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=http%3A%2F%2Fopen.acgnxtracker.com%2Fannounce&tr=http%3A%2F%2Fsukebei.tracker.wf%3A8888%2Fannounce&tr=http%3A%2F%2Ftracker.kamigami.org%3A2710%2Fannounce&tr=https%3A%2F%2Ftracker.nanoha.org%2Fannounce&tr=http%3A%2F%2Fbigfoot1942.sektori.org%3A6969%2Fannounce",
                    "msize": "559.4MB",
                    "morigin": "dmhy",
                    "murl": "https://share.dmhy.org/topics/view/540534_04_Project_ZERO_CHRONICLE_ZERO_CHRONICLE_Shironeko_Project_Zero_Chronicle_05_1080p.html"
                }]
            }
        },
        created(){
            this.tableHeight = window.innerHeight-200
        },
        methods:{
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>

    /*自定义样式*/
    .table-datas{
        width: 100%;
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
        vertical-align:bottom;
    }
    .search-input {
        background-color: transparent !important;
        box-sizing: border-box;
        width: 60%;
        max-width: 800px;
        min-width: 600px;
    }


    /* 默认样式修改 */
    .el-table{
        /* 表格字体颜色 */
        /*color:white;*/
        /* 表格边框颜色 */
        /* border: 0.5px solid #758a99; */
        /*height: 500px;*/
    }
    /* 表格内背景颜色 */
    .el-table th, .el-table tr,.el-table td{
        border: 0;
        background-color: transparent;
    }
    /* 双数行背景颜色 */
    .el-table--striped .el-table__body tr.el-table__row--striped td {

        /*background-color:#fff;*/
        background-color: rgba(148, 144, 144, 0.3)
    }
    /* 使表格背景透明 */
    .el-table th, .el-table tr {
        background-color: transparent;
    }
    /* 删除表格下横线 */
    .el-table::before {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0px;
    }
    /* 表格表头字体颜色 */
    .el-table thead {
        color: white;
        font-weight: 500;
        background-color: rgba(148, 144, 144, 0.3)
    }

    .table-datas >>> .el-table th{
        padding: 5px 0;
        text-align: center;
    }

    .table-datas >>> .el-table {
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        flex: 1;
        max-width: 100%;
        color: #606266;
    }

    /* 更改element-UI input样式 */
    .search-input >>> .el-input__inner {
        -webkit-appearance: none;
        background-color: rgba(153,204,255,0.1);
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
</style>
