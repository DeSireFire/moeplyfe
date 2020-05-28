<template>
    <div class="dataList">
        <el-col :span="24" class="content-row">
            <div class="table-datas">
                <el-table
                        v-loading="LoadingRes.table"
                        element-loading-text="少女祈祷中..."
                        element-loading-spinner="el-icon-loading"
                        element-loading-background="rgba(255, 255, 255,0.6)"
                        :data="tableData"
                        stripe
                        fit
                        highlight-current-row
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
                            <div class="butt">
                                <el-button :href="magnetSplice(row.magnet,row.mtitle,row.trackers)" type="primary" icon="el-icon-download" size="mini" alt="磁链x32"></el-button>
                                <el-button :href="magnetSplice(row.magnetSpare,row.mtitle,row.trackers)" type="primary" icon="el-icon-download" size="mini" alt="磁链x40"></el-button>
                            </div>
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
            </div>
        </el-col>
        <el-col :span="24" class="content-row">
            <!-- 三端分离后使用的分页方案 -->
            <!-- :total="paginationInfo.total" -->
            <!-- layout="total, sizes, prev, pager, next, jumper" -->
            <el-pagination
                    v-show="paginationInfo.total>0"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="paginationInfo.page"
                    :page-sizes="paginationInfo.limit"
                    :page-size="paginationInfo.total"
                    layout="jumper"
            >
            </el-pagination>
        </el-col>
    </div>
</template>

<script>
    // 搜索结果
    import {fetchList} from "@/api/search";

    export default {
        name: "dataList",
        // 获取列表函数
        data() {
            return {
                tableData: [
                    {
                        "mtitle": "花園壓制組[Snow-Raws] 大叔与棉花糖/Ojisan to Marshmallow/おじさんとマシュマロ (BD 1920x1080 HEVC-YUV420P10 FLAC)",
                        "mdate": "2020-05-15 10:32",
                        "mpublisher": "chenai",
                        "msize": "2.0GB",
                        "morigin": "dmhy",
                        "murl": "https://share.dmhy.org/topics/view/540922_Snow-Raws_Ojisan_to_Marshmallow_BD_1920x1080_HEVC-YUV420P10_FLAC.html",
                        "magnet": "VF3D3YB2UO7X4IVZOAQHLMOSADXCLPBY",
                        "magnetSpare": "a9763de03aa3bf7e22b9702075b1d200ee25bc38",
                        "trackers": [
                            "http://104.238.198.186:8000/announce",
                            "udp://104.238.198.186:8000/announce",
                            "http://tracker.openbittorrent.com:80/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "http://tracker4.itzmx.com:2710/announce",
                            "http://tracker.publicbt.com:80/announce",
                            "http://tracker.prq.to/announce",
                            "http://open.acgtracker.com:1096/announce",
                            "https://t-115.rhcloud.com/only_for_ylbud",
                            "http://tracker1.itzmx.com:8080/announce",
                            "http://tracker2.itzmx.com:6961/announce",
                            "udp://tracker1.itzmx.com:8080/announce",
                            "udp://tracker2.itzmx.com:6961/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "udp://tracker4.itzmx.com:2710/announce",
                            "http://share.camoe.cn:8080/announce",
                            "http://t.nyaatracker.com/announce",
                            "http://opentracker.acgnx.se/announce",
                            "http://opentracker.acgnx.com:6869/announce",
                            "http://nyaa.tracker.wf:7777/announce"
                        ]
                    },
                    {
                        "mtitle": "花園壓制組[Snow-Raws] 大叔与棉花糖/Ojisan to Marshmallow/おじさんとマシュマロ (BD 1920x1080 HEVC-YUV420P10 FLAC)",
                        "mdate": "2020-05-15 10:32",
                        "mpublisher": "chenai",
                        "msize": "2.0GB",
                        "morigin": "dmhy",
                        "murl": "https://share.dmhy.org/topics/view/540922_Snow-Raws_Ojisan_to_Marshmallow_BD_1920x1080_HEVC-YUV420P10_FLAC.html",
                        "magnet": "VF3D3YB2UO7X4IVZOAQHLMOSADXCLPBY",
                        "magnetSpare": "a9763de03aa3bf7e22b9702075b1d200ee25bc38",
                        "trackers": [
                            "http://104.238.198.186:8000/announce",
                            "udp://104.238.198.186:8000/announce",
                            "http://tracker.openbittorrent.com:80/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "http://tracker4.itzmx.com:2710/announce",
                            "http://tracker.publicbt.com:80/announce",
                            "http://tracker.prq.to/announce",
                            "http://open.acgtracker.com:1096/announce",
                            "https://t-115.rhcloud.com/only_for_ylbud",
                            "http://tracker1.itzmx.com:8080/announce",
                            "http://tracker2.itzmx.com:6961/announce",
                            "udp://tracker1.itzmx.com:8080/announce",
                            "udp://tracker2.itzmx.com:6961/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "udp://tracker4.itzmx.com:2710/announce",
                            "http://share.camoe.cn:8080/announce",
                            "http://t.nyaatracker.com/announce",
                            "http://opentracker.acgnx.se/announce",
                            "http://opentracker.acgnx.com:6869/announce",
                            "http://nyaa.tracker.wf:7777/announce"
                        ]
                    },
                    {
                        "mtitle": "花園壓制組[Snow-Raws] 大叔与棉花糖/Ojisan to Marshmallow/おじさんとマシュマロ (BD 1920x1080 HEVC-YUV420P10 FLAC)",
                        "mdate": "2020-05-15 10:32",
                        "mpublisher": "chenai",
                        "msize": "2.0GB",
                        "morigin": "dmhy",
                        "murl": "https://share.dmhy.org/topics/view/540922_Snow-Raws_Ojisan_to_Marshmallow_BD_1920x1080_HEVC-YUV420P10_FLAC.html",
                        "magnet": "VF3D3YB2UO7X4IVZOAQHLMOSADXCLPBY",
                        "magnetSpare": "a9763de03aa3bf7e22b9702075b1d200ee25bc38",
                        "trackers": [
                            "http://104.238.198.186:8000/announce",
                            "udp://104.238.198.186:8000/announce",
                            "http://tracker.openbittorrent.com:80/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "http://tracker4.itzmx.com:2710/announce",
                            "http://tracker.publicbt.com:80/announce",
                            "http://tracker.prq.to/announce",
                            "http://open.acgtracker.com:1096/announce",
                            "https://t-115.rhcloud.com/only_for_ylbud",
                            "http://tracker1.itzmx.com:8080/announce",
                            "http://tracker2.itzmx.com:6961/announce",
                            "udp://tracker1.itzmx.com:8080/announce",
                            "udp://tracker2.itzmx.com:6961/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "udp://tracker4.itzmx.com:2710/announce",
                            "http://share.camoe.cn:8080/announce",
                            "http://t.nyaatracker.com/announce",
                            "http://opentracker.acgnx.se/announce",
                            "http://opentracker.acgnx.com:6869/announce",
                            "http://nyaa.tracker.wf:7777/announce"
                        ]
                    },
                    {
                        "mtitle": "花園壓制組[Snow-Raws] 大叔与棉花糖/Ojisan to Marshmallow/おじさんとマシュマロ (BD 1920x1080 HEVC-YUV420P10 FLAC)",
                        "mdate": "2020-05-15 10:32",
                        "mpublisher": "chenai",
                        "msize": "2.0GB",
                        "morigin": "dmhy",
                        "murl": "https://share.dmhy.org/topics/view/540922_Snow-Raws_Ojisan_to_Marshmallow_BD_1920x1080_HEVC-YUV420P10_FLAC.html",
                        "magnet": "VF3D3YB2UO7X4IVZOAQHLMOSADXCLPBY",
                        "magnetSpare": "a9763de03aa3bf7e22b9702075b1d200ee25bc38",
                        "trackers": [
                            "http://104.238.198.186:8000/announce",
                            "udp://104.238.198.186:8000/announce",
                            "http://tracker.openbittorrent.com:80/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "http://tracker4.itzmx.com:2710/announce",
                            "http://tracker.publicbt.com:80/announce",
                            "http://tracker.prq.to/announce",
                            "http://open.acgtracker.com:1096/announce",
                            "https://t-115.rhcloud.com/only_for_ylbud",
                            "http://tracker1.itzmx.com:8080/announce",
                            "http://tracker2.itzmx.com:6961/announce",
                            "udp://tracker1.itzmx.com:8080/announce",
                            "udp://tracker2.itzmx.com:6961/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "udp://tracker4.itzmx.com:2710/announce",
                            "http://share.camoe.cn:8080/announce",
                            "http://t.nyaatracker.com/announce",
                            "http://opentracker.acgnx.se/announce",
                            "http://opentracker.acgnx.com:6869/announce",
                            "http://nyaa.tracker.wf:7777/announce"
                        ]
                    },
                    {
                        "mtitle": "花園壓制組[Snow-Raws] 大叔与棉花糖/Ojisan to Marshmallow/おじさんとマシュマロ (BD 1920x1080 HEVC-YUV420P10 FLAC)",
                        "mdate": "2020-05-15 10:32",
                        "mpublisher": "chenai",
                        "msize": "2.0GB",
                        "morigin": "dmhy",
                        "murl": "https://share.dmhy.org/topics/view/540922_Snow-Raws_Ojisan_to_Marshmallow_BD_1920x1080_HEVC-YUV420P10_FLAC.html",
                        "magnet": "VF3D3YB2UO7X4IVZOAQHLMOSADXCLPBY",
                        "magnetSpare": "a9763de03aa3bf7e22b9702075b1d200ee25bc38",
                        "trackers": [
                            "http://104.238.198.186:8000/announce",
                            "udp://104.238.198.186:8000/announce",
                            "http://tracker.openbittorrent.com:80/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "http://tracker4.itzmx.com:2710/announce",
                            "http://tracker.publicbt.com:80/announce",
                            "http://tracker.prq.to/announce",
                            "http://open.acgtracker.com:1096/announce",
                            "https://t-115.rhcloud.com/only_for_ylbud",
                            "http://tracker1.itzmx.com:8080/announce",
                            "http://tracker2.itzmx.com:6961/announce",
                            "udp://tracker1.itzmx.com:8080/announce",
                            "udp://tracker2.itzmx.com:6961/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "udp://tracker4.itzmx.com:2710/announce",
                            "http://share.camoe.cn:8080/announce",
                            "http://t.nyaatracker.com/announce",
                            "http://opentracker.acgnx.se/announce",
                            "http://opentracker.acgnx.com:6869/announce",
                            "http://nyaa.tracker.wf:7777/announce"
                        ]
                    },
                    {
                        "mtitle": "花園壓制組[Snow-Raws] 大叔与棉花糖/Ojisan to Marshmallow/おじさんとマシュマロ (BD 1920x1080 HEVC-YUV420P10 FLAC)",
                        "mdate": "2020-05-15 10:32",
                        "mpublisher": "chenai",
                        "msize": "2.0GB",
                        "morigin": "dmhy",
                        "murl": "https://share.dmhy.org/topics/view/540922_Snow-Raws_Ojisan_to_Marshmallow_BD_1920x1080_HEVC-YUV420P10_FLAC.html",
                        "magnet": "VF3D3YB2UO7X4IVZOAQHLMOSADXCLPBY",
                        "magnetSpare": "a9763de03aa3bf7e22b9702075b1d200ee25bc38",
                        "trackers": [
                            "http://104.238.198.186:8000/announce",
                            "udp://104.238.198.186:8000/announce",
                            "http://tracker.openbittorrent.com:80/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "http://tracker4.itzmx.com:2710/announce",
                            "http://tracker.publicbt.com:80/announce",
                            "http://tracker.prq.to/announce",
                            "http://open.acgtracker.com:1096/announce",
                            "https://t-115.rhcloud.com/only_for_ylbud",
                            "http://tracker1.itzmx.com:8080/announce",
                            "http://tracker2.itzmx.com:6961/announce",
                            "udp://tracker1.itzmx.com:8080/announce",
                            "udp://tracker2.itzmx.com:6961/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "udp://tracker4.itzmx.com:2710/announce",
                            "http://share.camoe.cn:8080/announce",
                            "http://t.nyaatracker.com/announce",
                            "http://opentracker.acgnx.se/announce",
                            "http://opentracker.acgnx.com:6869/announce",
                            "http://nyaa.tracker.wf:7777/announce"
                        ]
                    },
                    {
                        "mtitle": "花園壓制組[Snow-Raws] 大叔与棉花糖/Ojisan to Marshmallow/おじさんとマシュマロ (BD 1920x1080 HEVC-YUV420P10 FLAC)",
                        "mdate": "2020-05-15 10:32",
                        "mpublisher": "chenai",
                        "msize": "2.0GB",
                        "morigin": "dmhy",
                        "murl": "https://share.dmhy.org/topics/view/540922_Snow-Raws_Ojisan_to_Marshmallow_BD_1920x1080_HEVC-YUV420P10_FLAC.html",
                        "magnet": "VF3D3YB2UO7X4IVZOAQHLMOSADXCLPBY",
                        "magnetSpare": "a9763de03aa3bf7e22b9702075b1d200ee25bc38",
                        "trackers": [
                            "http://104.238.198.186:8000/announce",
                            "udp://104.238.198.186:8000/announce",
                            "http://tracker.openbittorrent.com:80/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "http://tracker4.itzmx.com:2710/announce",
                            "http://tracker.publicbt.com:80/announce",
                            "http://tracker.prq.to/announce",
                            "http://open.acgtracker.com:1096/announce",
                            "https://t-115.rhcloud.com/only_for_ylbud",
                            "http://tracker1.itzmx.com:8080/announce",
                            "http://tracker2.itzmx.com:6961/announce",
                            "udp://tracker1.itzmx.com:8080/announce",
                            "udp://tracker2.itzmx.com:6961/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "udp://tracker4.itzmx.com:2710/announce",
                            "http://share.camoe.cn:8080/announce",
                            "http://t.nyaatracker.com/announce",
                            "http://opentracker.acgnx.se/announce",
                            "http://opentracker.acgnx.com:6869/announce",
                            "http://nyaa.tracker.wf:7777/announce"
                        ]
                    },
                    {
                        "mtitle": "花園壓制組[Snow-Raws] 水母食堂/Kurage no Shokudou/クラゲの食堂(BD 1920x1080 HEVC-YUV420P10 FLAC)",
                        "mdate": "2020-05-15 10:32",
                        "mpublisher": "chenai",
                        "msize": "856MB",
                        "morigin": "dmhy",
                        "murl": "https://share.dmhy.org/topics/view/540921_Snow-Raws_Kurage_no_Shokudou_BD_1920x1080_HEVC-YUV420P10_FLAC.html",
                        "magnet": "BYC7GWI3XJCANPXLV4B3HOGKLKK4DR73",
                        "magnetSpare": "0e05f3591bba4406beebaf03b3b8ca5a95c1c7fb",
                        "trackers": [
                            "http://104.238.198.186:8000/announce",
                            "udp://104.238.198.186:8000/announce",
                            "http://tracker.openbittorrent.com:80/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "http://tracker4.itzmx.com:2710/announce",
                            "http://tracker.publicbt.com:80/announce",
                            "http://tracker.prq.to/announce",
                            "http://open.acgtracker.com:1096/announce",
                            "https://t-115.rhcloud.com/only_for_ylbud",
                            "http://tracker1.itzmx.com:8080/announce",
                            "http://tracker2.itzmx.com:6961/announce",
                            "udp://tracker1.itzmx.com:8080/announce",
                            "udp://tracker2.itzmx.com:6961/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "udp://tracker4.itzmx.com:2710/announce",
                            "http://share.camoe.cn:8080/announce",
                            "http://t.nyaatracker.com/announce",
                            "http://opentracker.acgnx.se/announce",
                            "http://opentracker.acgnx.com:6869/announce",
                            "http://nyaa.tracker.wf:7777/announce"
                        ]
                    },
                    {
                        "mtitle": "花園壓制組[Snow-Raws] 水母食堂/Kurage no Shokudou/クラゲの食堂(BD 1920x1080 HEVC-YUV420P10 FLAC)",
                        "mdate": "2020-05-15 10:32",
                        "mpublisher": "chenai",
                        "msize": "856MB",
                        "morigin": "dmhy",
                        "murl": "https://share.dmhy.org/topics/view/540921_Snow-Raws_Kurage_no_Shokudou_BD_1920x1080_HEVC-YUV420P10_FLAC.html",
                        "magnet": "BYC7GWI3XJCANPXLV4B3HOGKLKK4DR73",
                        "magnetSpare": "0e05f3591bba4406beebaf03b3b8ca5a95c1c7fb",
                        "trackers": [
                            "http://104.238.198.186:8000/announce",
                            "udp://104.238.198.186:8000/announce",
                            "http://tracker.openbittorrent.com:80/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "http://tracker4.itzmx.com:2710/announce",
                            "http://tracker.publicbt.com:80/announce",
                            "http://tracker.prq.to/announce",
                            "http://open.acgtracker.com:1096/announce",
                            "https://t-115.rhcloud.com/only_for_ylbud",
                            "http://tracker1.itzmx.com:8080/announce",
                            "http://tracker2.itzmx.com:6961/announce",
                            "udp://tracker1.itzmx.com:8080/announce",
                            "udp://tracker2.itzmx.com:6961/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "udp://tracker4.itzmx.com:2710/announce",
                            "http://share.camoe.cn:8080/announce",
                            "http://t.nyaatracker.com/announce",
                            "http://opentracker.acgnx.se/announce",
                            "http://opentracker.acgnx.com:6869/announce",
                            "http://nyaa.tracker.wf:7777/announce"
                        ]
                    },
                    {
                        "mtitle": "花園壓制組[Snow-Raws] 水母食堂/Kurage no Shokudou/クラゲの食堂(BD 1920x1080 HEVC-YUV420P10 FLAC)",
                        "mdate": "2020-05-15 10:32",
                        "mpublisher": "chenai",
                        "msize": "856MB",
                        "morigin": "dmhy",
                        "murl": "https://share.dmhy.org/topics/view/540921_Snow-Raws_Kurage_no_Shokudou_BD_1920x1080_HEVC-YUV420P10_FLAC.html",
                        "magnet": "BYC7GWI3XJCANPXLV4B3HOGKLKK4DR73",
                        "magnetSpare": "0e05f3591bba4406beebaf03b3b8ca5a95c1c7fb",
                        "trackers": [
                            "http://104.238.198.186:8000/announce",
                            "udp://104.238.198.186:8000/announce",
                            "http://tracker.openbittorrent.com:80/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "http://tracker4.itzmx.com:2710/announce",
                            "http://tracker.publicbt.com:80/announce",
                            "http://tracker.prq.to/announce",
                            "http://open.acgtracker.com:1096/announce",
                            "https://t-115.rhcloud.com/only_for_ylbud",
                            "http://tracker1.itzmx.com:8080/announce",
                            "http://tracker2.itzmx.com:6961/announce",
                            "udp://tracker1.itzmx.com:8080/announce",
                            "udp://tracker2.itzmx.com:6961/announce",
                            "udp://tracker3.itzmx.com:6961/announce",
                            "udp://tracker4.itzmx.com:2710/announce",
                            "http://share.camoe.cn:8080/announce",
                            "http://t.nyaatracker.com/announce",
                            "http://opentracker.acgnx.se/announce",
                            "http://opentracker.acgnx.com:6869/announce",
                            "http://nyaa.tracker.wf:7777/announce"
                        ]
                    },
                ],
                LoadingRes: {
                    table:false,
                },
                paginationInfo:{
                    page: 1,
                    limit: [100, 200],
                    total: 10000,
                },
            }
        },
        created(){
            // 打开页面就获取列表
            this.getList()
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
            // 磁性链接组装
            magnetSplice(hash,dn,trackers) {
                const A = Array(trackers)
                let magnet = "magnet:?xt=urn:btih:";
                magnet += hash;
                magnet += "&dn=" + dn + "&tr=";
                magnet += A.join("&tr=");
                return magnet
            },
            // 分页控制
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.formInline.p = val;
                this.getList()
            }
        }

    }
</script>

<style scoped>
    .table-datas{
        width: 100%;
        max-width: 2400px;
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

    /*  下载按钮样式  */
    .butt {
        text-align: center;
    }
    .butt > button{
        margin-left: 5%;
        margin-right: 5%;
    }

    /*  分页样式  */
    .el-pagination {
        white-space: nowrap;
        padding: 2px 5px;
        color: #303133;
        font-weight: 700;
        text-align: center;
    }
</style>