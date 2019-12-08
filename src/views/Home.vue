<template>
    <div class="home">
      <div class="home-haed">
        <Head />
      </div>
      <div class="section">
        <div class="section-head">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item 
              v-for="item in menus"
              :key="item.id"
              :index="item.id"
              @click="tapnav(item)">
                {{item.title}}
            </el-menu-item>
          </el-menu>
        </div>
        <div class="section-body">
          <router-view />
        </div>
      </div>
    </div>
</template>

<script>
import { menuRoute } from "@/router/index"
import Head from './Head'

export default {
    components:{
      Head
    },
    data() {
        return {
          activeIndex:localStorage.getItem('activeIndex')||'tgjh',
          menus:menuRoute
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
      handleSelect(){

      },
      tapnav(item){
        localStorage.setItem('activeIndex',item.id)
        this.$router.push(item.path)
      }
    }
};
</script>

<style scoped lang="less">
.home{
  .home-haed{
    height: 60px;
  }
  .section{
    margin-top: 20px;
    .section-head{
      padding: 0 100px;
    }
    .section-body{
      padding: 15px 120px;
    }
  }
}
</style>

