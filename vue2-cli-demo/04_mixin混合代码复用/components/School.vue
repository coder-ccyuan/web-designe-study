<template>
  <div @click="alertMes">
    <h1>{{name}}</h1>
  </div>
</template>
<script>
export default {
  name:'School',
  data(){
    return{
      name:'xyc'
    }
  },
  methods:{
    alertMes(){
      alert(this.name)
    }
  }
}
</script>
<style>

</style>