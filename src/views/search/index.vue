<template>
    <div class="search">
        <Stitle/>
        <Keyword/>
        <DataList/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Stitle from "./components/stitle";
    import Keyword from "./components/keyword";
    import DataList from "./components/dataList";

    export default {
        name: 'Search',
        components: {
            Stitle,
            Keyword,
            DataList,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 添加“作用域”属性以将CSS仅限于此组件 -->
<style scoped>
    /* 搜索首页，定义背景和flex布局撑满 */
    .search {
        display: flex;
        /*height: 100vh;*/
        flex-direction: column;
    }
</style>
