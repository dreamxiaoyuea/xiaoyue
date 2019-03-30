<template>
  <div class="nav">
    <ul class="navlist">
      <router-link tag="li" to="/kind">
        <span>
          <img src="http://img.lizi.com/lizi/user/559b9bb7e4b0bc9214ff2610/340054d3d12ce.png">
        </span>
        <p>60S</p>
      </router-link>
      <router-link tag="li" to="/kind">
        <span>
          <img src="http://img.lizi.com/lizi/user/559b9bb7e4b0bc9214ff2610/2e5123cc8b801.png">
        </span>
        <p>每日福利</p>
      </router-link>
      <router-link tag="li" to="/kind">
        <span>
          <img src="http://img.lizi.com/lizi/user/559b9bb7e4b0bc9214ff2610/28a1f2c556d2a.png">
        </span>
        <p>折扣商品</p>
      </router-link>
      <router-link tag="li" to="/kind">
        <span>
          <img src="http://img.lizi.com/lizi/user/559b9bb7e4b0bc9214ff2610/11e52ea7047ff.png">
        </span>
        <p>新人礼包</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss">
@import '@/qunar/reset.scss';
.nav{
  @include rect(100%, .9rem);
  @include background-color(#fff);
  border-top:.05rem solid #eee;
  border-bottom:.05rem solid #eee;
  .navlist{
    @include rect(100%, .9rem);
    @include flexbox();
    @include justify-content(space-around);
    @include align-items();
  }
  li{
    @include rect(.6rem, .6rem);
    font-size: 12px;
    text-align: center;
    span{
      display: block;
      @include rect(.4rem, .4rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      margin:0 0 .05rem .1rem;
      img{
        @include rect(.35rem, .35rem);
      }
    }
  }
}
</style>
