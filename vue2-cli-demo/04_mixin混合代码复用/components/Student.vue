<script >
export default {
  name:'Student',
  data(){
    return {
    name:'cpy'
    }
  },
  methods:{
    alterMes(){
      alert(this.name)
    }
  }
}
</script>

<template>
<div @click="alterMes">
  <h1>{{name}}</h1>
</div>
</template>

<style >

</style>