<script>
import School from "@/components/School.vue";
export default {
  name: "App",
  components:{
    School
  },
  data(){
    return{
      text: 'text'
    }
  },
  methods: {
    click() {

    }
  }
}
</script>

<template>
  <div>
    <h1 v-text="text" ref="h1"></h1>
<!--    使用 :(v-bind)可以执行js 代码，可以传除String以外的类型-->
    <School :age="99" headmaster="张三"/>

  </div>
</template>

<style scoped>

</style>