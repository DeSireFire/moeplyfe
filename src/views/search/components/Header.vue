<template>
    <div class="Header">
        <el-menu
                :default-active="activeIndex"
                class=""
                mode="horizontal"
                @select="handleSelect"
                background-color="#606266"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="0">Logo</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                activeIndex: '0'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .el-menu {
        background-color:transparent !important;
    }
</style>
