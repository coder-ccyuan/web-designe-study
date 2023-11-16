<template>
  <div>
    学校：{{name}}
    <br>
    校长：{{headmaster}}
    <br>
    校龄：{{myAge}}
    <button @click="myAge++">点击校龄+1</button>
  </div>
</template>
<script>
export default {
  name:'School',
  data() {
    return {
      name: 'xyc',
      myAge: this.age //props中的属性优先加载
    }
  },
  //props接受父组件传来的数据

  //简单声明接受数据
  /* props:['headmaster','age']*/

  //接受时设定接收类型
  /*  props: {
      headmaster: String,
      age: Number
    }*/
  //最完整写法
  props: {
    headmaster: {
      type: String,
      required: true,//必须传的数据
    },
    age: {
      type: Number,
      default: 100//默认
    }
  }
}
</script>
<style>

</style>