<template>
  <div id="app">
    <h1>Vue Router Demo</h1>
    <div id="nav">
      <router-link to="/about">About</router-link>
      <br>
      <router-link to="/home">Home</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
