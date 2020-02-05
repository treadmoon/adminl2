<template>
    <div class="head">
        <div class="info-box">
            <span class="info-item">
                账户名称：<span>雨小了</span>
            </span>
            <span class="info-item">
                公司名称：<span>长安消防</span>
            </span>
            <span class="info-item">
                <a>修改密码</a>
            </span>
            <span class="info-item" @click="logout">
                <a>退出</a>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        logout(){
            this.$router.push('/login')
        }
    }
};
</script>

<style scoped lang="less">
.head{
    .info-box{
        text-align: right;
        line-height: 60px;
        font-size: 12px;
        color: #d43030;
        padding: 0 100px 20px;
        .info-item{
            margin-left: 24px;
        }
    }
}
</style>
