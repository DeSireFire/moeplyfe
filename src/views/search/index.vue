<template>
    <div class="search">
<!--        <Search/>-->
    </div>
</template>

<script>
    // @ is an alias to /src
    // import Search from "./components/search";

    export default {
        name: 'Search',
        components: {
            // Search,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 添加“作用域”属性以将CSS仅限于此组件 -->
<style scoped>
    /* 搜索首页，定义背景和flex布局撑满 */
    .search {
        display: flex;
        height: 100vh;
        flex-direction: column;
    }
</style>
