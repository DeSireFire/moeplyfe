<template>
    <div class="magnet2Torrent">
        <el-row align="middle">
            <el-col :span="12" class="content-row">
                磁力链接转种子
            </el-col>
            <el-col :span="12" class="content-row">
                种子转磁力链接
            </el-col>
        </el-row>
        <el-row align="middle">
            <el-col :span="12" class="content-row">
                <el-input placeholder="请输入内容" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search">转换</el-button>
                </el-input>
            </el-col>
            <el-col :span="12" class="content-row">
                <el-button class="file-button" type="primary" @click="$refs.inputFile.click()">点击选择种子文件</el-button>
                <input type="file" ref="inputFile" @change="readFile($event)" style="display:none"  multiple />
            </el-col>
        </el-row>
        <el-row align="middle">
            <el-col :span="12" class="content-row">
                <p></p>
            </el-col>
            <el-col :span="12" class="content-row">
                <p>{{ t2mHash }}</p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    let sha1 = require('js-sha1');
    let bencode = require('bencode');
    export default {
        name: 'magnet2Torrent',
        data() {
            return {
                torrentList:{},
                t2mHash:"",
                torrentInfo:{
                    fileName:"",
                    fileLength:"",
                    creationDate:"",
                    comment:"",
                    Name:"",
                    pieces:"",
                    btHash:"",
                    publisher:"",
                    magnet:"",
                    announceList:null,
                },
            };
        },
        methods: {
            // 读取文件流(方法一)
            // readFile(event) {
            //     let that = this
            //     let file = event.target.files[0];
            //     let reader = new FileReader();
            //     reader.readAsArrayBuffer(file)
            //
            //
            //     reader.onload = function(){ //文件读取成功回调
            //         let torrentArrayBuffer = reader.result;  //result属性为data:URL格式,与读取方式有关
            //         let temp = that.getInfoHash(torrentArrayBuffer)
            //         console.log(temp);
            //     };
            // },

            // 读取文件流(方法二)
            readFile(event) {
                let file = event.target.files[0];
                let reader = new FileReader();
                reader.readAsArrayBuffer(file)
                // 因为reader.onload不能直接作为函数执行所以不能使用reader.onload(function(){})和reader.onload(()=>{});
                reader.onload = () =>{
                    let torrentArrayBuffer = reader.result;  //result属性为data:URL格式,与读取方式有关
                    this.t2mHash = this.getInfoHash(torrentArrayBuffer)
                }
            },

            //Uint8Array转字符串
            Uint8ArrayToString(fileData){
                let dataString = "";
                for (let i = 0; i < fileData.length; i++) {
                    dataString += String.fromCharCode(fileData[i]);
                }

                return dataString

            },

            //种子文件提取tracker列表,需传入Uint8Array数据
            torrentGetTrackers(trackerUint8Array){
                let dataArray = [];
                for (let i of trackerUint8Array)  {
                    let t = this.Uint8ArrayToString(bencode.encode(i));
                    // 清洗掉tracker地址前不用字符串，如：l44:udp://tracker.openbittorrent.com:80/announcee 去掉l44
                    t = t.replace(/l\d{0,2}:/,"");
                    dataArray.push(t)
                }

                return dataArray

            },

            // 获取种子文件的info_hash值，有一个解密，再加密的过程
            getInfoHash(torrentfile) {
                let result = bencode.decode(torrentfile);
                console.log(result);
                if (result) {
                    // 获取磁性链接
                    let info = result['info']; //info 字典
                    let info_hash = sha1(bencode.encode(info));
                    let magnet = "magnet:?xt=urn:btih:" + info_hash.toString();

                    // 获取种子文件中的tracker
                    let trackerUint8Array = result['announce-list'];
                    let trackerlist = this.torrentGetTrackers(trackerUint8Array);
                    console.log(trackerlist);
                    return magnet;
                } else {
                    return null;
                }
            }
        },
        created() {},
    };
</script>

<style scoped>
    .magnet2Torrent {
        line-height: 50px;
        min-height: 10vh;
    }
    /*.el-upload-dragger {*/
    .file-button {
        color: #fff;
        width: 80%;
        font-size: 15px;
        background-color: rgba(153,204,255,0.5);
        border: 1px solid #99CCFF;
        transition: all 0.8s;
        -moz-transition: all 0.8s;
        -webkit-transition: all 0.8s;
        -o-transition: all 0.8s;
    }
    .uploadFile {
        background-color: #fff;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        box-sizing: border-box;
        width: 360px;
        height: auto;
        text-align: center;
        position: relative;
        overflow: hidden;
    }
    .el-input-group {
        line-height: normal;
        display: inline-table;
        width: 70%;
        border-collapse: separate;
        border-spacing: 0;
    }

</style>