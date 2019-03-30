<template>
  <div class="container">
    <mt-header title="登录">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-field placeholder="请输入手机号" type="tel" :state="phoneState" v-model="phone"></mt-field>
    <mt-field placeholder="请输入密码" type="password" :state="passwordState" v-model="password"></mt-field>
    <mt-button type="danger" :disabled="flag" @click.native="register">登录</mt-button>

    <mt-button type="primary" :disabled="flag" @click.native="login">注册</mt-button>
    <div class="login_third">
      <p>第三方账号登录</p>
        <div class="login_db">
          <a href="">
            <i class="iconfont icon-qie"></i>
          </a>
          <a href="">
            <i class="iconfont icon-weibo"></i>
          </a>
          <a href="">
            <i class="iconfont icon-zhifubaocopy"></i>
          </a>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
// import axios from 'axios'
import { Header, Field, Button, Toast } from 'mint-ui'
Vue.use(Header, Field, Button, Toast)

export default {
  name: 'register',
  data () {
    return {
      phone: '17701616986',
      password: '123456'
    }
  },
  methods: {
    register () {
      Toast({
        message: '登录成功',
        position: 'bottom',
        duration: 400
      })
      setTimeout(() => {
        this.$router.push('/')
      }, 400)
    }
  }
}
</script>

<style lang="scss">
@import '@/qunar/reset.scss';
.container {
  background: #fff;
}
.mint-header {
  background-color:#ff666b;
  .mint-header-button {
    margin-left: -.15rem;
  }
}
.mint-cell {
  padding:.15rem .2rem;
  .mint-cell-wrapper {
    border:.01rem #999 solid;
  }
}
.mint-button {
  margin:.1rem .2rem;
  // background-color:#ff666b;
  color:#fff;
}
.login_third {
  text-align: center;
  margin-top: 20px;
  .login_db {
    @include rect(100%, 0.7rem);
    @include flexbox();
    @include justify-content(space-between);
    a {
      @include rect(.52rem, .52rem);
      border:.01rem #999 solid;
      border-radius: 50%;
      display:inline-block;
      margin:.1rem .3rem;
      text-align: center;
      line-height: .52rem;
      i {
        display: inline-block;
        font-size: .3rem;
        color:#999;
        @include rect(.3rem, .3rem);
      }
    }
  }
}
</style>
