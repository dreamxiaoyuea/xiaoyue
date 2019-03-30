<template>
    <span @click="back" class="iconfont icon-xiangzuo"></span>
</template>

<script>
export default {
  name: 'back',
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
@import '@/qunar/reset.scss';
</style>
