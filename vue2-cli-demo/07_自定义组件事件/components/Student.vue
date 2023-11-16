<script>
export default {
  name: 'Student',
  data() {
    return {
      name: 'cpy'
    }
  },
  methods:{
    sendFatherName(){
      this.$emit('selfEvent',this.name)//触发自定义事件
    },
    unbind(){
      //解绑自定义事件
      this.$off("selfEvent");
    }
  }
}
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <button @click="sendFatherName">给父组件传名字</button>
    <button @click="unbind">解绑自定义事件</button>
  </div>
</template>

<style>

</style>