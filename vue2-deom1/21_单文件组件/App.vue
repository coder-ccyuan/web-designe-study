<template>
  <div>
    {{name}}
    <School/>
    <student></student>
  </div>
</template>
<script>
import School from "./School.vue";
import Student from "./Student.vue";
export default {
  name:'App',
  data(){
    return{
      name:'vue'
    }
  },
  components:{
    School,
    Student
  }
}
</script>
<style>

</style>