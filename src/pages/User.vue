<template>
  <div class="container">
    <Headers :tit="tit"/>
    <div class="content">
      <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
      <div class="info_container">
        <div class="info_box">
          <div class="info_center">
            <div class="info_img" @click="selectAvatar">
              <img src="http://img.lizi.com/lizi/commcon/face.png" alt="">
            </div>
            <span>123456789</span>
            <em>0/268</em>
          </div>
        </div>
      </div>
      <div class="order_list">
        <ul class="flex-list">
          <li>
            <i class="iconfont icon-fukuan"></i>
            <span>待付款</span>
          </li>
          <li>
            <i class="iconfont icon-fahuo"></i>
            <span>待发货</span>
          </li>
          <li>
            <i class="iconfont icon-Group"></i>
            <span>待收货</span>
          </li>
        </ul>
      </div>
      <div class="func_list">
        <ul>
          <li>
            <a href="">
              <i class="iconfont icon-icon-"></i>
              <span>我的订单</span>
            </a>
          <li>
            <a href="">
              <i class="iconfont icon-dizhi"></i>
              <span>我的地址</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="iconfont icon-xingxing"></i>
              <span>我的收藏</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="iconfont icon-xiaoxi1"></i>
              <span>我的消息</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="iconfont icon-wenti"></i>
              <span>常见购物问题</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="iconfont icon-lianxi"></i>
              <span>联系平台</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="outUser">
        <mt-button type="default">退出登录</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Actionsheet, Button } from 'mint-ui'
import Headers from '@/components/common/Headers'

Vue.use(Actionsheet, Button)

export default {
  name: 'user',
  data () {
    return {
      tit: '我的丽子',
      actions: [
        {
          name: '拍照',
          method: this.fn1
        },
        {
          name: '从相册选取',
          method: this.fn2
        }
      ],
      sheetVisible: false
    }
  },
  components: {
    Headers
  },
  methods: {
    fn1 () {
      console.log('paozao')
    },
    fn2 () {
      console.log('xiangce')
    },
    selectAvatar () {
      this.sheetVisible = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/qunar/reset.scss';

.info_container {
  @include rect(100%, 1.6rem);
  background: url(https://s02.lizi.com/images/wap/my-lizi/img.png) no-repeat center;
  background-size: cover;
  .info_box {
    background: #fff;
    @include flexbox();
    @include justify-content();
    @include rect(100%, auto);
    background: rgba(51,51,51,.36);
    .info_center {
      @include rect(34%, 1.6rem);
      @include flexbox();
      @include justify-content();
      @include flex-direction(column);
      @include align-items();
      color: #fff;
      img {
        @include rect(.8rem, .8rem);
      }
      span {
        font-size: .16rem;
        margin-top: .1rem;
      }
    }
  }
}
.order_list {
  background: #fff;
  @include rect(100%, .88rem);
  padding-top:.2rem;
  .flex-list {
    @include rect(100%, .88rem);
    @include flexbox();
    @include justify-content(space-between);
    @include align-items();
    padding: 0 .3rem;
  }
  li {
    @include flexbox();
    @include justify-content();
    @include flex-direction(column);
    @include align-items();
  }
}
.func_list {
  background: #fff;
  @include rect(100%, auto);
  ul {
    padding:.2rem;
  @include rect(100%, auto);
    li {
      @include rect(100%, .55rem);
      a {
        display: block;
        font-size: .16rem;
        color:#222;
        line-height: .55rem;
        i {
          display: inline-block;
          margin-right: 5%;
          text-align: center;
          width: 60px;
          font-size: 25px;
        }
      }
    }
  }
}
.outUser {
  @include rect(100%, .55rem);
  text-align: center;
  background: #fff;
  .mint-button{
    padding:.05rem .4rem;
    font-size: .14rem;
    background: #fff;
  }
}
</style>
