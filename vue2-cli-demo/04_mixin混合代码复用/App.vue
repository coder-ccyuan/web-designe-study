<template>
  <div id="app">
    <img alt="Vue logo" src="assetsogo.png">
    <School/>
    <Student/>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
import {hunhe} from "@/mixin";

export default {
  name: 'App',
  components: {
    School,
    Student
  },
  //局部混合
  mixins:[hunhe]
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
