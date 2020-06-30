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
    </div>
</template>

<script>
    let sha1 = require('js-sha1');
    // let fs = require("fs");
    // let bencode = require('bencode');
    export default {
        name: 'magnet2Torrent',
        data() {
            return {
            };
        },
        methods: {
            readFile(event) {
                let reader = new FileReader();
                reader.readAsArrayBuffer(event.target.files[0]);
                reader.onload = function(ev) {
                    try {
                        let file = ev.target.result;
                        let str = sha1(file);
                        // outMagnets(getMagnets(arguments), arguments);

                        console.log(file);
                        console.log(str);
                        this.getMagnets(file)

                    } catch (e) {
                        console.log(e);
                    }
                };
            },

            // 获取磁链链接，arguments为文件夹路径
            getMagnets(file) {
                // var fileslist = fs.readdirSync(this.arguments.toString());
                let fileslist = file
                let magnetlist = new Array();

                console.log(fileslist);
                console.log(magnetlist);

                // for (var f in fileslist) {
                //     // var torrentfile = null;
                //     var filename = fileslist[f].toString();
                //     if (filename.includes(".torrent")) {
                //         var filepath = arguments.toString() + '/' + filename;
                //         var magnet = getInfoHash(filepath);
                //         if (magnet) {
                //             magnetlist.push(magnet);
                //         }
                //         //console.log(magnet);
                //     }
                // }
                // return magnetlist;
            },

            // 将结果输出为txt
            // outMagnets(magnets, path) {
            //     if (magnets.length > 0) {
            //         let writebuffer = Buffer.from(arrayToString(magnets, '\n'));
            //         let savepath = path.toString() + '/' + "magnets.txt";
            //         let writesteam = fs.createWriteStream(savepath);
            //         writesteam.write(writebuffer, 'utf-8');
            //         writesteam.end();
            //         writesteam.on('finish', function () {
            //             console.log("写入完成");
            //         });
            //         writesteam.on('error', function (err) {
            //             console.log(err);
            //         });
            //     }
            // },

            // buffer只能输出字符，所以必须将字符数组转换为字符形式，seq为分隔符
            // arrayToString(arr, seq) {
            //     var str_value = null;
            //     for (a of arr) {
            //         var astr = a.toString();
            //         if (str_value) {
            //             str_value = str_value + seq + astr;
            //         } else {
            //             str_value = astr;
            //         }
            //     }
            //     return str_value;
            // },

            // 获取种子文件的info_hash值，有一个解密，再加密的过程
            // getInfoHash(torrentfile) {
            //     let result = bencode.decode(fs.readFileSync(torrentfile));
            //     if (result) {
            //         let info = result['info']; //info 字典
            //         let info_hash = sha1(bencode.encode(info));
            //         let magnet = "magnet:?xt=urn:btih:" + info_hash.toString();
            //         return magnet;
            //     } else {
            //         return null;
            //     }
            // }
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