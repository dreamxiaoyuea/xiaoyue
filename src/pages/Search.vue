<template>
  <div class="container">
    <Headers :tit="tit"/>
    <div class="content">
     <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="keyword"
      >
        <div slot="action" @click="keyword">搜索</div>
      </van-search>
      <div class="search_list">
         <ul class="movielist">
            <router-link tag="li" :to = "{name: 'detail', query: {id: item.num}}" v-for="item of list" :key="item.num">
              <div class="movieimg">
                <img :src="item.myimg" :alt="item.alt">
              </div>
              <h3>{{ item.title }}</h3>
              <div class="price">
                <span class="price_red">{{ item.orange }}</span>
                <span class="fr">已经售出：{{ item.fr }}</span>
                <span class="gocart">加入购物车</span>
              </div>
            </router-link>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Back from '@/components/common/Back'
import List from '@/components/home/List'
import api from '@/api/kind'
import { Search } from 'vant'
import Headers from '@/components/common/Headers'

Vue.use(Search)

export default {
  name: 'search',
  data () {
    return {
      tit: '搜索',
      value: '',
      list: []
    }
  },
  components: {
    Back,
    List,
    Headers
  },
  methods: {
    keyword () {
      console.log(this.value)
      api.requestdata('/api/product/keyword?title=' + this.value).then(data => {
        this.list = data.data
        console.log(this.list)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/qunar/reset.scss';

  .search_header {
    @include rect(100%, .45rem);
    @include flexbox();
    @include justify-content(space-between);
    @include align-items();
    font-size: .18rem;
    @include background-color(#ff666b);
    color:#fff;
    padding:0 .1rem;
  }
  .mint-search {
    @include rect(100%, .6rem);
  }
  .search_list{
    @include rect(100%, 100%);
    .movielist {
      @include margin(.1rem);
      li {
        @include flexbox();
        @include flex-direction(column);
        @include rect(100%, 3.8rem);
        @include background-color(#fff);
        text-align: center;
        h3 {
          margin:.1rem 0;
        }
        .price{
          margin-top:.2rem;
          @include flexbox();
          @include flex-direction();
          @include justify-content();
          span{
            line-height: .3rem;
          }
          .price_red{
            color:#ff666b;
            font-size: .2rem;
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
