<template>
  <div class="_headerbox">
    <header class="_header">
        <back/>
        <span>{{ tit }}</span>
        <router-link tag="span" to ="/home" class="iconfont icon-shouye"></router-link>
      </header>
  </div>
</template>

<script>
import Back from '@/components/common/Back'

export default {
  name: 'headers',
  props: ['tit'],
  components: {
    Back
  }
}
</script>

<style lang="scss">
@import '@/qunar/reset.scss';
  ._headerbox{
    position: relative;
    @include rect(100%, .45rem);
    ._header {
      padding:.15rem;
      z-index: 9;
      @include flexbox();
      @include justify-content(space-between);
      @include align-items();
      @include rect(100%, .45rem);
      @include background-color(#ff666b);
      color:#fff;
      font-size: .2rem;
      position: fixed;
    }
  }
</style>
