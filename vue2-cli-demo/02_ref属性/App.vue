<script>
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    School
  },
  data() { 
    return {
      text: 'text'
    }
  },
  methods: {
    click() {
      console.log(this.$refs.h1)//返回h1 dom
      console.log(this.$refs.school)//返回 School VC实例对象
      console.log(document.getElementById('sch'))//返回 School VC实例对象
    }
  }
}
</script>

<template>
  <!--  ref和id类似更方便使用dom元素-->
  <div>
    <h1 v-text="text" ref="h1"></h1>
    <School ref="school"/>
    <School id="sch"/>
    <button @click="click">点击</button>
  </div>
</template>

<style scoped>

</style>