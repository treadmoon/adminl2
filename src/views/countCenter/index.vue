<template>
    <div class="cc-wp">
        <div class="info-box" v-for="(item,index) in infolist" :key="'li'+index">
            <h4 class="title">{{item.title}}</h4>
            <div class="info-item" v-for="(citem,cindex) in item.list" :key="'c'+cindex">
                <span class="label">{{citem.label}}</span>
                <span style="margin-right:20px;">：</span>
                <span class="info">{{citem.info}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            infolist:[
                {
                    title:'账户信息',
                    list:[
                        {
                            label:'账户名称',
                            info:'长泉消防'
                        },
                        {
                            label:'是否开启',
                            info:'开启'
                        },
                        {
                            label:'账户状态',
                            info:'正常生效'
                        },
                        {
                            label:'公司名称',
                            info:'湖南省长泉消防科技有限公司'
                        },
                        {
                            label:'行业',
                            info:'节能环保设备'
                        },
                        {
                            label:'开户链接',
                            info:'www.hncqxf.com'
                        },
                        {
                            label:'邮箱',
                            info:'115693110@qq.com'
                        }
                    ]
                },
                {
                    title:'联系人信息',
                    list:[
                        {
                            label:'联系人姓名',
                            info:'叶先生'
                        },
                        {
                            label:'联系人邮箱',
                            info:'115693110@qq.com'
                        },
                        {
                            label:'联系人电话',
                            info:'13631651091'
                        }
                    ]
                }
            ]
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
.cc-wp{
    padding: 0 100px;
    font-size: 15px;
    .info-box{
        margin-top: 50px;
        .title{
            font-weight: 600;
        }
        .info-item{
            line-height: 42px;
            font-size: 14px;
            .label{
                width: 80px;
                text-align: right;
                display: inline-block;
            }
        }
    }
}
</style>
