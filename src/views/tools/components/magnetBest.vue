<template>
    <div class="magnetBest">
        <el-row align="middle">
            <el-col :span="24" class="content-row">
                <el-input placeholder="请输入磁性链接！" v-model="magnetStr" class="moe-input"></el-input>
                <el-button type="primary" @click="onSubmit">磁链增强</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="content-row">
                <label>磁链优化方案：</label>
                <el-select v-model="selectTracks" placeholder="AnimeTrackers" clearable >
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="content-row">
                <el-input
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 15}"
                        placeholder="请输入内容"
                        v-if="newMagnet"
                        v-model="newMagnet">
                </el-input>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    // 获取tracker列表组件
    import {getTracker} from "@/api/trackerGet";
    export default {
        name: "magnetBest",
        data() {
            return {
                magnetStr: 'magnet:?xt=urn:btih:JFMZWEBLWITG5SVJJCHRH3ZC2LGPSQNY&dn=&tr=http%3A%2F%2F104.238.198.186%3A8000%2Fannounce&tr=udp%3A%2F%2F104.238.198.186%3A8000%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=http%3A%2F%2Ftracker4.itzmx.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.publicbt.com%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&tr=http%3A%2F%2Fopen.acgtracker.com%3A1096%2Fannounce&tr=https%3A%2F%2Ft-115.rhcloud.com%2Fonly_for_ylbud&tr=http%3A%2F%2Ftracker1.itzmx.com%3A8080%2Fannounce&tr=http%3A%2F%2Ftracker2.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Ftracker1.itzmx.com%3A8080%2Fannounce&tr=udp%3A%2F%2Ftracker2.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Ftracker4.itzmx.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.acgnx.se%2Fannounce',
                options: [{
                    value: 'ATaria2_best.txt',
                    label: '快速:Trackers'
                }, {
                    value: 'ATaria2_all.txt',
                    label: '全部:Trackers'
                }, {
                    value: 'ATaria2_all_https.txt',
                    label: 'HTTPS:Trackers'
                }, {
                    value: 'ATaria2_all_http.txt',
                    label: 'HTTP:Trackers'
                }, {
                    value: 'ATaria2_all_udp.txt',
                    label: 'udp:Trackers'
                }, {
                    value: 'ATaria2_all_ip.txt',
                    label: 'ip:Trackers'
                }
                ],
                selectTracks: 'ATaria2_best.txt',
                hashMagnet:"",       // 磁链hash
                dnMagnet:"",       // 磁链文件名称
                newMagnet:"",       // 优化后的磁性链接
                trackersList:[],    // 跟踪器列表
            }
        },
        methods: {
            // 磁性链接处理函数
            magnetHandle() {
                getTracker(this.selectTracks).then(response => {
                    // tacker列表
                    const A = this.trackersList.concat(response.split(','))
                    let magnet = "magnet:?xt=urn:btih:";
                    magnet += this.hashMagnet;
                    // 拼接资源名称
                    if (this.dnMagnet) {
                        magnet += "&dn="+this.dnMagnet+"&tr=";
                        // 拼接完成后初始化dn变量
                        this.dnMagnet = ""
                    } else {
                        magnet += "&dn="+"&tr=";
                    }
                    magnet += A.join("&tr=");
                    // 末尾空&tr=随便拼接个链接
                    magnet += "https://moeply.raxianch.moe/"
                    this.newMagnet = magnet
                })
            },
            // 磁链清洗成hash
            magnetClear() {
                const pattern = new RegExp("magnet:\\?xt=urn:btih:[a-zA-Z0-9]*");
                const dnpattern = new RegExp("&dn=([\\s\\S]*?)+(?=&tr)?");
                // 提取hash
                this.hashMagnet = this.magnetStr.match(pattern)[0].replace("magnet:?xt=urn:btih:","")
                // 提取dn
                this.dnMagnet = this.magnetStr.match(dnpattern)[0].replace("&dn=","").split("&tr")[0]
                console.log(this.dnMagnet)
                console.log(this.hashMagnet)
                // 提取原磁链的跟踪器
                this.trackersList = unescape(this.magnetStr).split('&tr=')
                // 删除第一个元素
                this.trackersList.shift()
                // 清洗空元素
                this.trackersList = this.trackersList.filter(function(e){ return e.replace(/(\r\n|\n|\r)/gm,"")});
                console.log(this.trackersList)
            },
            // 超时处理函数
            timeoutPromise(promise, ms){
                return Promise.race([promise, ms]);
            },
            onSubmit() {
                const pattern = new RegExp("magnet:\\?xt=urn:btih:[a-zA-Z0-9]{16,40}.*$");

                if (pattern.test(this.magnetStr)) {
                    // 清洗磁链
                    this.magnetClear()
                    // 创建新磁链生成 promise 对象
                    new Promise((resolve)  => {
                        resolve(this.magnetHandle())
                    }).then(() => {
                        if (this.magnetStr) {
                            this.$message.success('优化成功！');
                        }
                    }).catch(() => {
                        this.$message.error('磁性链接优化失败了！');
                    });
                } else {
                    this.$message.error('错了哦，不太认识这一条磁链，是写错了嘛？');
                }
            },
        }
    }
</script>

<style scoped>
    .magnetBest {
        line-height: 0;
    }

    .content-row > label{
        color: #fff;
        font-size: 15px;
    }

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
        /*margin: 0px;*/
    }
</style>