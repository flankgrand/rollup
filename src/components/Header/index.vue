<template>
    <div class="head">
        {{ title }}
    </div>
</template>
<script>
export default {
    name:"mySelfComponent",
    props: {
        title: {
            type: String,
            default: '标题'
        }
    },
    data() {
        return {}
    }
}
</script>
<style scoped lang="less">
.head {
    font-size: 40px;
    font-weight: bold;
}
</style>