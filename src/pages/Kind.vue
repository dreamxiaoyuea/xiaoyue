<template>
  <div class="container">
    <Headers :tit="tit"/>
    <div class="content">
      <div class="kindbox">
        <div class="leftbox">
          <ul class=kindleft>
            <li v-for="(item, index) of this.kindlist" :key="index" @click="btnkind($event)">
              {{ item.tit }}
            </li>
          </ul>
        </div>
        <ul class="kindright">
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
import Back from '@/components/common/Back'
import Headers from '@/components/common/Headers'
import api from '@/api/kind'

export default {
  name: 'kind',
  data () {
    return {
      tit: '分类',
      val: '补水',
      list: [],
      msg () {
        return 'test'
      },
      kindlist: [{'tit': '补水'}, {'tit': '清洁'}, {'tit': '美丽工匠'}, {'tit': '提拉紧致'}, {'tit': '套盒'}, {'tit': '精油'}, {'tit': '毛孔收缩'}, {'tit': '爽肤水'}, {'tit': '卸妆'}, {'tit': '遮瑕'}]
    }
  },
  methods: {
    btnkind (e) {
      this.val = e.target.innerText
      api.requestdata('/api/product/keyword?title=' + this.val).then(data => {
        this.list = data.data
      })
    }
  },
  created () {
    api.requestdata('/api/product/keyword?title=' + this.val).then(data => {
      this.list = data.data
    })
  },
  components: {
    Back,
    Headers
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/qunar/reset.scss';
.container {
  .kindbox {
    @include flexbox();
    .leftbox {
      position: relative;
      @include rect(1rem, .100%);
      .kindleft {
        position: fixed;
        @include rect(1rem, .100%);
        li {
          padding:0 .1rem;
          @include rect(100%, .55rem);
          font-size: .16rem;
          line-height: .55rem;
          background: #eee;
          &:hover {
          background: #fff;
          }
        }
      }
    }
    .kindright {
      @include flex(1);
      li {
        @include flexbox();
        @include flex-direction(column);
        @include background-color(#fff);
        text-align: center;
        h3 {
          padding: 0 .1rem;
        }
        .price{
          margin-top:.2rem;
          @include flexbox();
          @include flex-direction();
          @include justify-content();
          span{
            line-height: .22rem;
          }
          .price_red{
            color:#ff666b;
            font-size: .14rem;
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
}
</style>
