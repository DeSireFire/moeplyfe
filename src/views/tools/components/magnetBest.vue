<template>
    <div class="magnetBest">
        {{ demo }}
    </div>
</template>

<script>
    export default {
        name: "magnetBest",
        computed: {
            demo(){
                const temp = this.$route.params
                console.log(temp);
                return this.$route.params.meta
            }
        }
    }
</script>

<style scoped>

</style>