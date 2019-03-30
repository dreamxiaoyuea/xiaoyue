<template>
  <div class="header_box">
    <header class="header">
      <router-link tag="span" to="/register" class="iconfont icon-wodedangxuan1"></router-link>
      <span></span>
      <router-link tag="span" to="/Search" class="iconfont icon-search"></router-link>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
@import '@/qunar/reset.scss';
.header_box{
  @include rect(100%, 0.44rem);
  position: relative;
  .header {
    position: fixed;
    z-index: 99;
    @include rect(100%, 0.44rem);
    @include background-color(#ff666b);
    @include flexbox();
    @include justify-content(space-between);
    @include flex-direction();
    @include align-items();
    span{
    @include color(#fff);
    }
    :nth-child(2n+1){
      margin:0 .2rem;
      font-size: .18rem;
    }
    :nth-child(2){
      @include rect(.75rem, 0.45rem);
      background:url('https://s02.lizi.com/images/wap/logo.png') no-repeat center;
      background-size: 100%;
    }
  }
}
</style>
