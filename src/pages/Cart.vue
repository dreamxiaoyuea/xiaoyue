<template>
  <div class="container">
    <Headers :tit="tit"/>
    <div class="content">
      <div class="cartbox">
        <div class="cart-zero" v-show = "flag">
          <i class="iconfont icon-gouwuchekong"></i>
          <p>您的购物车暂无商品</p>
          <mt-button type="default">随便逛逛</mt-button>
        </div>
        <div class="cart-have">
          <ul>
            <li v-for="(item, index) of cartlist" :key="index">
              <div class="mycheckbox">
                <input type="checkbox">
              </div>
              <img :src="item.myimg">
              <div class="cart-h-tit">
                <p>{{ item.title }}</p>
                <em>￥{{item.price}}.00</em>
                <span class="goods_item_num">
                  <button class="btn-left" @click="reduceNum(index)">-</button>
                  <input type="number" readonly style="width:30px text-align:center;" :value="item.index">
                  <button class="btn-right" @click="addNum(index)">+</button>
                </span>
              </div>
              <em>
                ×{{item.index}}
                <i class="iconfont icon-shanchu" @click="remove(item.id)"></i>
              </em>
            </li>
          </ul>
        </div>
      </div>
      <div class="goods-container">
        <p>为你优选</p>
        <ul class="movielist">
          <router-link tag="li" :to = "{name: 'detail', query: {id: item.num}}" v-for="item of list" :key="item.num">
            <div class="movieimg">
              <img :src="item.myimg" :alt="item.alt">
            </div>
            <h3>{{ item.title }}</h3>
          </router-link>
        </ul>
      </div>
    </div>
    <van-submit-bar :price="9900" button-text="提交订单"/>
  </div>
</template>

<script>
import Vue from 'vue'
import Headers from '@/components/common/Headers'
import { SubmitBar } from 'vant'
import api from '@/api/cart'
Vue.use(SubmitBar)

export default {
  name: 'cart',
  props: ['id'],
  data () {
    return {
      tit: '购物车',
      list: [],
      flag: false,
      arr: [],
      cartlist: []
    }
  },
  components: {
    Headers
  },
  created () {
    if (localStorage.getItem('cart')) {
      this.cartlist = JSON.parse(localStorage.getItem('cart'))
    }
    api.requestList().then(data => {
      this.list = data.data
    }).catch(err => console.log(err))
  },
  mounted () {
    if (this.cartlist.length === 0) {
      this.flag = true
    }
    const id = this.$route.query.id
    api.requestData(id).then(data => {
      this.arr.push(data.data[0])
    }).catch(err => console.log(err))
  },
  methods: {
    remove (id) {
      console.log(this.cartlist)
      for (let i = 0; i < this.cartlist.length; i++) {
        if (this.cartlist[i].id === id) {
          this.cartlist.splice(i, 1)
          localStorage.setItem('cart', JSON.stringify(this.cartlist))
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/qunar/reset.scss';
.cartbox {
  width:100%;
  min-height:2.88rem;
  .cart-zero {
    @include rect(100%, 1.68rem);
    padding:.6rem 0;
    color: #999;
    i {
      display: block;
      font-size: 1rem;
      margin: 0 auto;
      text-align: center;
    }
    p {
      text-align: center;
    }
    .mint-button {
      background: #505050;
      color: #fff;
      margin-left: 1.7rem;
      font-size: .12rem;
      height: .28rem;
      margin-top:.1rem;
    }
  }
  .cart-have {
    ul {
      li {
        margin:0 .15rem;
        padding:.15rem 0;
        border-bottom: .02rem solid #fff;
        @include flexbox();
        @include flex-direction();
        @include justify-content(space-between);
        .mycheckbox {
          margin-right: .05rem;
        }
        img {
        @include rect(.8rem, .8rem);
        }
        .cart-h-tit {
          margin: 0 .1rem;
          @include flex(1);
          position: relative;
          em {
            position: absolute;
            left: 0;
            bottom: 0;
            color:#ff666b;
          }
          .goods_item_num {
            position: absolute;
            right: 0;
            bottom: 0;
            justify-content: center;
            font-size: .12rem;
            .btn-left {
              width: .2rem;
              background: #eeeeee;
              border-bottom-left-radius: 5px;
              border-top-left-radius: 5px;
            }
            .btn-right {
              width: 20px;
              background: #eeeeee;
              border-bottom-right-radius: 5px;
              border-top-right-radius: 5px;
            }
            input {
              width:.35rem;
              text-align: center;
            }
          }
        }
        em {
          position: relative;
          i {
            position: absolute;
            left:0;
            bottom:0;
            color: #ff666b;
          }
        }
      }
    }
  }
}
.goods-container {
  @include rect(100%, 100%);
  padding:.1rem;
  background: #fff;
  @include overflow();
  p {
  @include rect(100%, .5rem);
  text-align: center;
  font-size: .2rem;
  }
  .movielist {
    @include margin(.1rem);
    @include flexbox();
    @include flex-direction(space-around);
    @include justify-content(space-between);
    flex-wrap:wrap;
    li {
      @include flexbox();
      @include flex-direction(column);
      @include rect(1.4rem, 2rem);
      @include background-color(#fff);
      text-align: center;
      border:.01rem solid #999;
      margin:.1rem;
      .movieimg {
        img {
          @include rect(1.2rem, 1.2rem);
        }
      }
      h3 {
        margin:.1rem 0;
        font-size: .12rem;
      }
      .price{
        margin-top:.05rem;
        @include flexbox();
        @include flex-direction();
        @include justify-content();
        .price_red{
          color:#ff666b;
          font-size: .12rem;
        }
        .fr{
          margin:0 .1rem;
          color:#bbb;
        }
        .gocart{
          @include rect(.94rem, auto);
          @include background-color(#ff666b);
          border-radius: .15rem;
          color:#fff;
        }
      }
    }
  }
}
</style>
