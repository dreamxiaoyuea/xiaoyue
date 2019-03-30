<template>
  <div class="comment">
    <Headers :tit="tit"/>
    <!-- <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore"> -->
      <div class="detail_img">
        <div class="_img">
          <img :src="pro.myimg">
        </div>
        <div class="product_name">
          <p>{{ pro.title }}</p>
          <a href="">
            <i class="iconfont icon-xingxing"></i>
            <span>收藏</span>
          </a>
        </div>
      </div>
      <div class="item_info_box">
        <b>￥{{ pro.orange }}.00</b>
        <span>
          <em>{{ pro.fr }}</em>
          人已购买
        </span>
      </div>
      <div class="item_dec">
        <p>合法开始返回数据阿卡话费卡会计法是否可合法黄金卡发货看阖家安康发挥科技阿卡</p>
      </div>
      <div class="detail_box">
        <div class="hd">
          <i class="iconfont icon-shugang"></i>
          <b>商品详情</b>
        </div>
        <div class="bd">
          <ul class="item_intro">
            <li>
              <em>商品名称：</em>
              <p>{{ pro.title }}</p>
            </li>
            <li v-for="(item, index) of this.arr" :key="index">
              <em>{{ item.tit }}：</em>
              <p>{{ item.com }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="detail_box">
        <div class="hd">
          <i class="iconfont icon-shugang"></i>
          <b>用户评价</b>
        </div>
        <div class="bd">
          <ul class="comment_list">
            <li>
              <a href="">
                <div class="comm_hd">
                  <img src="http://img.lizi.com/lizi/user/554dd993e4b073956638e4a9/2e503a4e64df9.jpg!wh150" alt="">
                  <span class="username">123456789</span>
                  <span class="xin">
                    <i class="iconfont icon-pinglunxing"></i>
                    <i class="iconfont icon-pinglunxing"></i>
                    <i class="iconfont icon-pinglunxing"></i>
                    <i class="iconfont icon-pinglunxing"></i>
                    <i class="iconfont icon-pinglunxing"></i>
                  </span>
                </div>
                <div class="comm_bd">
                  <p>很不错</p>
                </div>
                <div class="comm_fd">
                  <span>规格：无&nbsp;&nbsp;&nbsp;&nbsp;无</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="detail_box">
        <div class="shop_info">
          <div class="logo">
            <img src="http://img.lizi.com/lizi/store/554b07acf31ef04978652554/289bb58a48a1f.jpg!wh100">
          </div>
          <div class="info">
            <p class="name">丽子自营</p>
            <p class="xinxin">
              <i class="iconfont icon-weibiaoti-"></i>
              <i class="iconfont icon-weibiaoti-"></i>
              <i class="iconfont icon-weibiaoti-"></i>
              <i class="iconfont icon-weibiaoti-"></i>
              <i class="iconfont icon-weibiaoti-"></i>
            </p>
            <p class="service">
              <span>100%正品</span>
              <span>48小时发货</span>
              <span>30天退换货</span>
              <span>提供发票</span>
            </p>
          </div>
        </div>
      </div>
      <div class="otherDetailBox">
        <div class="hd">
          <i class="iconfont icon-shugang"></i>
          <b>相似单品推荐</b>
          <a href="">查看更多></a>
        </div>
        <div class="scroll_items">
          <ul>
            <li>
              <img src="http://img.lizi.com/lizi/store/554b07acf31ef04978652554/340490d751ec7.jpg!wh150" alt="">
              <h4>法国BIODERMA贝德玛舒妍卸妆水干性（粉色）500ml 温和卸妆</h4>
              <em>￥139</em>
            </li>
          </ul>
        </div>
      </div>
    <!-- </mt-loadmore> -->
    <div class="footer">
      <footer>
        <em>￥{{ pro.orange }}.00</em>
        <a class="service">
          <i class="iconfont icon-xiaoxi"></i>
          <span>客服</span>
        </a>
        <strong @click="goCart(pro.num)">加入购物车</strong>
        <!-- <router-link tag="strong" :to = "{name: 'cart', query: {id: pro.num}}">加入购物车</router-link> -->
      </footer>
    </div>
  </div>
</template>

<script>
import Back from '@/components/common/Back'
import Headers from '@/components/common/Headers'
import api from '@/api/detail'

export default {
  props: ['id'],
  name: 'detail',
  data () {
    return {
      tit: '商品详情',
      ImagesList: [],
      pro: {},
      price: '',
      arr: [{'tit': '所属品牌', 'com': '芭妮兰'}, {'tit': '产地', 'com': '韩国'}, {'tit': '适合肤质', 'com': '适合肤质'}, {'tit': '生产日期', 'com': '生产日期'}, {'tit': '保质期', 'com': '三年'}, {'tit': '包装方式', 'com': '有盒无塑封'}]
    }
  },
  components: {
    Back,
    Headers
  },
  created () {
    const id = this.$route.query.id
    api.requestData(id).then(data => {
      this.pro = data.data[0]
      console.log(this.pro)
      this.price = this.pro.orange
    }).catch(err => console.log(err))
  },
  methods: {
    goCart (id) {
      if (localStorage.getItem('cart')) {
        let cart = JSON.parse(localStorage.getItem('cart'))
        let flag = false
        cart.forEach(item => {
          if (item.id === id) {
            item.index++
            flag = true
          }
        })
        if (flag) {
          localStorage.setItem('cart', JSON.stringify(cart))
        } else {
          cart.push({
            id,
            index: 1,
            price: this.pro.orange,
            myimg: this.pro.myimg,
            title: this.pro.title
          })
          localStorage.setItem('cart', JSON.stringify(cart))
        }
      } else {
        let cart = {
          id,
          index: 1,
          price: this.pro.orange,
          myimg: this.pro.myimg,
          title: this.pro.title
        }
        let arr = '[' + JSON.stringify(cart) + ']'
        localStorage.setItem('cart', arr)
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/qunar/reset.scss';

  .comment {
    @include rect(100%, 100%);
    @include overflow();
    .detail_img {
      @include rect(100%, 2rem);
      position: relative;
      text-align: center;
      color:#fff;
      @include background-color(#fff);
      ._img {
        @include rect(100%, 2rem);
        img {
          @include rect(auto, 2rem);
        }
      }
      .product_name {
        @include rect(100%, .58rem);
        position: absolute;
        bottom: 0;
        right:0;
        left: 0;
        z-index: 6;
        background: rgba(0,0,0,.3);
        padding:.05rem 0;
        p {
          @include rect(3rem, .58rem);
          padding-left: .1rem;
        }
        a {
          display: block;
          position: absolute;
          right: .2rem;
          bottom: .03rem;
          color: #fff;
          text-align: center;
          i {
            display: block;
            height: .3rem;
            font-size: 26px;
          }
          span {
            display: block;
            font-size: 12px;
          }
        }
      }
    }
    .item_info_box{
      @include rect(100%, .46rem);
      @include flexbox();
      @include justify-content(space-between);
      @include align-items();
      line-height: .46rem;
      padding: 0 .1rem 0 .2rem;
      @include background-color(#fff);
      b {
        font-size: .2rem;
        @include color(#ff666b);
      }
      span {
      @include color(#999);
      font-size: .12rem;
        em {
        @include color(#ff666b);
        }
      }
    }
    .item_dec {
      @include rect(100%, .58rem);
      padding:.1rem;
      @include background-color(#fff);
      margin-top: .02rem;
      @include color(#999);
    }
    .detail_box {
      @include background-color(#fff);
      padding:.1rem;
      font-size: .16rem;
      margin-top: .1rem;
      .hd {
        i {
        @include color(#ff666b);
        }
      }
      .bd {
        .item_intro {
          li {
            @include flexbox();
            font-size: .12rem;
            margin-top: .06rem;
            em {
              width:.74rem;
              text-align: right;
            }
          }
        }
      }
    }
    .comment_list {
      li {
        a {
          @include color(#666);
          .comm_hd {
            position: relative;
            img {
              @include rect(.3rem, .3rem);
            }
            .username {
              font-size: .12rem;
            }
            .xin {
              position: absolute;
              right: 0;
              i {
                font-size: .12rem;
                @include color(#ff666b);
              }
            }
          }
          .comm_bd {
            padding: .05rem 0;
            color:#666;
          }
          .comm_fd {
            span {
              color:#999;
              font-size: .12rem;
            }
          }
        }
      }
    }
    .shop_info {
      @include flexbox();
      padding: .05rem;
      .logo {
        img {
          @include rect(.6rem, .6rem);
          margin-right:.1rem;
        }
      }
      .info {
        font-size: .12rem;
        .xinxin {
          @include color(#ff666b);
          i {
          font-size: .12rem;
          }
        }
        .service {
          @include color(#ffb72c);
          span {
          @include border(.01rem, #ffb72c, solid);
          border-radius: .02rem;
          margin-right: .1rem;
          display: inline-block;
          padding:.02rem .03rem;
          }
        }
      }
    }
    .otherDetailBox {
      @include background-color(#fff);
      padding:.1rem;
      font-size: .16rem;
      margin-top: .1rem;
      .hd {
        position: relative;
        i {
        @include color(#ff666b);
        }
        a {
          color: #666;
          position:absolute;
          right: 0;
          font-size: .12rem;
        }
      }
      .scroll_items {
        @include flexbox();
        ul {
          @include rect(100%, 100%);
          li {
            @include rect(1.3rem, 100%);
            margin-right: 20px;
            img {
              width: .8rem;
              margin-left: .25rem;
            }
            h4 {
              white-space:nowrap;
              overflow:hidden;
              text-overflow:ellipsis;
              color:#333;
            }
            em {
              color: #ff666b;
              font-weight: 700;
            }
          }
        }
      }
    }
    .footer {
      @include rect(100%, .45rem);
      position: relative;
      footer {
        @include rect(100%, .45rem);
        @include flexbox();
        position:fixed;
        bottom: 0;
        @include background-color(#fff);
        @include align-items();
        font-size: .2rem;
        em {
          color:#ff666b;
          margin-left: .1rem;
        }
        .service {
          position: absolute;
          right:1.4rem;
          display: block;
          color:#666;
          @include rect(.3rem, .45rem);
          text-align: center;
          i {
          font-size: .16rem;
          display: block;
          color:#ff666b;
          }
          span {
          display: block;
          font-size: .12rem;
          }
        }
        strong {
          position: absolute;
          right:0;
          @include rect(1rem, .45rem);
          display: block;
          box-sizing: content-box;
          min-width: 1rem;
          @include background-color(#ff666b);
          padding: 0 .12rem;
          line-height: .45rem;
          color:#fff;
        }
      }
    }
  }
</style>
