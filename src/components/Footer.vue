<template>
  <footer class="footer">
    <ul>
      <router-link to="/home" tag="li">
        <i class="iconfont icon-shouye"></i>
        <p>首页</p>
      </router-link>
      <router-link to="/kind" tag="li">
        <i class="iconfont icon-fenlei1"></i>
        <p>分类</p>
      </router-link>
      <router-link to="/search" tag="li">
        <i class="iconfont icon-search"></i>
        <p>搜索</p>
      </router-link>
      <router-link to="/cart" tag="li">
        <i class="iconfont icon-gouwuche"></i>
        <p>购物车</p>
      </router-link>
      <router-link to="/user" tag="li">
        <router-link tag="i" to="/User" class="iconfont icon-wodedangxuan1"></router-link>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'footers'
}
</script>
