<template>
  <div>
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
  mounted() {
    this.$bus.$on('nameToSchool',(name)=>{//绑定事件
      console.log('student',name)
    })
  },
  beforeDestroy() {
    this.$bus.$off('nameToSchool')//销毁前解绑事件
  }
}
</script>
<style>

</style>