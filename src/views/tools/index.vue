<template>
    <div class="tools">
        <div class="toolsTitle">
            <p>{{toolsName}}</p>
        </div>
        <div class="toolsMain">
            <router-view/>
        </div>
        <div class="toolsInfo">
            <p>信息内容</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tools",
        computed : {
            toolsName () {
                return this.$route.name
            }
        }
    }
</script>

<style scoped>

</style>