<script>
export default {
  name: "About",
  //通过路由规则，进入该组件前调用
  beforeRouteEnter(to,from,next){
  next()
  },
  //通过路由规则，离开该组件时调用
  beforeRouteLeave(to,from,next){
    next()
  }
}
</script>

<template>
  <div class="oneLevel">
    <h1>About</h1>
    <router-link to="/about/message">Message</router-link>
    <br>
    <router-link to="/about/news">News</router-link>
    <!--  //将要缓存的组件缓存，不在切换时销毁,不写include 默认都缓存-->
    <keep-alive include="News">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<style scoped>
.oneLevel {
  height: 500px;
  width: 500px;
  border: 1px black solid;
  margin: auto;
}
</style>