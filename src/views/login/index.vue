<template>
  <div class="login-wp">
    <div class="head">
      <i class="el-icon-picture"></i>
      精准广告投放
    </div>
    <div class="body">
      <div class="form-box">
        <div class="title">用户登录</div>
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-input placeholder="账户" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" placeholder="密码" v-model="form.pass"></el-input>
          </el-form-item>
          <el-form-item class="imgcode-box">
            <el-col :span="9">
              <el-input placeholder="验证码" v-model="form.imgcode"></el-input>
            </el-col>
            <el-col :span="9">
              <div class="imgbox"></div>
            </el-col>
            <el-col :span="6">
              <a>换一张</a>
            </el-col>
          </el-form-item>
          <el-form-item class="btn-box">
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="foot">www.asding.vom</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        pass: "",
        imgcode: ""
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    login() {
      localStorage.setItem("activeIndex", "tgjh");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped lang="less">
.login-wp {
  min-height: 100%;
  background: #222;
  .head {
    line-height: 50px;
    padding: 0 28px;
    color: #fff;
  }
  .body {
    padding: 30px 0;
    .form-box {
      background: #fff;
      width: 360px;
      margin-left: 100%;
      transform: translateX(-580px);
      padding: 20px;
      margin-top: 50px;
      border-radius: 4px;
      .title {
        font-size: 18px;
        text-align: center;
        margin: 10px auto;
      }
      .el-form {
        margin-top: 15px;
      }
      .imgcode-box {
        .imgbox {
          width: 80%;
          height: 40px;
          background: #aaa;
          margin: auto;
          border-radius: 4px;
        }
        a {
          color: #38f;
        }
      }
      .btn-box {
        button {
          width: 100%;
        }
      }
    }
  }
  .foot {
    width: 100%;
    position: fixed;
    text-align: center;
    color: #fff;
    bottom: 20px;
  }
}
</style>
