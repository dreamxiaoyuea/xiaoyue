<template>
  <div class="container">
    <div class="content">
      <Header/>
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item, index) of bannerDate" :key="index">
            <img :src="item.imgs" alt="">
          </mt-swipe-item>
        </mt-swipe>
        <Nav/>
        <div class="parthd">
          <h2>热门活动</h2>
          <span>POPULAR&nbsp;ACTIVITY</span>
        </div>
        <ul class="sale_list">
          <router-link tag="li" to="/cart" v-for="(item, index) of sale" :key="index" class="sale_box">
            <img :src="item.imgs" alt="" class="sale_img"/>
          </router-link>
        </ul>
        <div class="parthd">
          <h2>人气单品</h2>
          <span>HOT&nbsp;PRODUCT</span>
        </div>
        <List :list = 'list'/>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import List from '@/components/home/List'
import Header from '@/components/home/Header'
import Nav from '@/components/home/Nav'
import api from '@/api/home'
import { Swipe, SwipeItem, Loadmore } from 'mint-ui'

Vue.use(Swipe, SwipeItem, Loadmore)

export default {
  name: 'home',
  data () {
    return {
      list: [],
      bannerDate: [],
      sale: [],
      allLoaded: false, // 默认false表示满意加载完，ture加载完毕
      pageCode: 2
    }
  },
  components: {
    List,
    Header,
    Nav
  },
  created () {
    api.requestList().then(data => {
      this.list = data.data
    }).catch(err => console.log(err))
    api.requestBanner().then(data => {
      this.bannerDate = data.data.slice(0, 4)
      this.sale = data.data.slice(4, 9)
    }).catch(err => console.log(err))
  },
  methods: {
    loadTop () { // 下拉刷新函数 --- 实际上请求的是第一页数据
      api.requestList().then(data => {
        this.list = data.data
        this.$refs.loadmore.onTopLoaded() // 更新列表的高度
      }).catch(err => console.log(err))
    },
    loadBottom () { // 上拉加载的函数 --- 分页
      api.loadmore(this.pageCode).then(data => {
        if (data.length === 0) {
          this.allLoaded = true
        } else {
          this.list = [...this.list, ...data.data]
          this.pageCode += 1
        }
        this.$refs.loadmore.onBottomLoaded() // 更新列表高度
      }).catch(err => console.log(err))
    }
  }
}
</script>

<style lang="scss">
@import '@/qunar/reset.scss';

.mint-swipe {
  @include rect(100%, 2.35rem);
  img {
    @include rect(100%, auto);
  }
}
.parthd {
  @include rect(100%, .32rem);
  @include line-height(.32rem);
  @include flexbox();
  @include flex-direction();
  @include justify-content();
  h2{
    margin-right: .1rem;
  }
  span {
    font-size: .12rem;
  }
}

.sale_list {
  @include rect(100%, auto);
  .sale_box{
  margin:.1rem .1rem;
    .sale_img{
      @include rect(100%, 2.46rem);
    }
  }
}

</style>
