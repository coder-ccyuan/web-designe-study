<template>
  <div id="app">
    <!--    通过父给子传函数实现子给父传数据-->
    <School :getSchoolName="getSchoolName"/>
    <!--    通过给子绑定自定义事件实现子给父传数据-->
    <!--    第一种写法-->
    <!--    <Student v-on:selfEvent="getStudentName"/>-->
    <!--    第二种写法-->
    <Student ref="student"/>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: 'App',
  components: {
    School,
    Student
  },
  methods: {
    getSchoolName(name) {
      console.log('schoolName', name)
    },
    getStudentName(name) {
      console.log('studentName', name)
    }
  },
  mounted() {
    // 通过给子绑定自定义事件实现子给父传数据
    //第二种写法
    this.$refs.student.$on('selfEvent', this.getStudentName);
  }
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
