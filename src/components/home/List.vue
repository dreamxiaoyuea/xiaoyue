<template>
  <ul class="movielist">
    <router-link tag="li" :to = "{name: 'detail', query: {id: item.num}}" v-for="item of list" :key="item.num">
      <div class="movieimg">
        <img :src="item.myimg" :alt="item.alt">
      </div>
      <h3>{{ item.title }}</h3>
      <div class="price">
        <span class="price_red">￥{{ item.orange }}.00</span>
        <span class="fr">已经售出：{{ item.fr }}</span>
        <span class="gocart" @click.stop>加入购物车</span>
      </div>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'homelist',
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '@/qunar/reset.scss';

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
</style>
