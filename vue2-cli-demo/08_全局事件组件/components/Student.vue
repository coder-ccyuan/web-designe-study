<script>
export default {
  name: 'Student',
  data() {
    return {
      name: 'cpy'
    }
  },
  methods:{
    busTest(){
      this.$bus.$emit('nameToSchool',this.name)
    }
  },

}
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <button @click="busTest">把学生名给school组件</button>
  </div>
</template>

<style>

</style>