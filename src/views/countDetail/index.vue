<template>
    <div class="cd-wp">
        <div class="fl-box">
            <span class="title">账户：</span>
            <span class="info">湖南长泉消防科技有限公司</span>
        </div>
        <div class="fl-box">
            <span class="title">账户资金信息：</span>
            <div class="tableinfo">
                <el-row class="head">
                    <el-col :span="8">可用余额（元）</el-col>
                    <el-col :span="8">入账总金额（元）</el-col>
                    <el-col :span="8">消费（元）</el-col>
                </el-row>
                <el-row class="info">
                    <el-col :span="8">1000.00</el-col>
                    <el-col :span="8">12000.00</el-col>
                    <el-col :span="8">10300.00</el-col>
                </el-row>
            </div>
        </div>
        <div class="foot">
            您如需入资，请联系服务商。
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

    }
};
</script>

<style scoped lang="less">
.cd-wp{
    .fl-box{
        margin: 50px auto;
        .title{
            font-size: 15px;
            margin-right: 20px;
        }
        .info{
            font-size: 15px;
        }
        .tableinfo{
            padding: 0 50px;
            .head{
                margin: 30px auto;
                line-height: 30px;
            }
            .info{
                line-height: 50px;
                font-size: 24px;
            }
        }
    }
    .foot{
        margin: 50px 0 20px 0;
        color: #ff0000;
        font-size: 12px;
    }
}
</style>
