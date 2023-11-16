<script>
export default {
  name: "Category",
  data(){
    return {
      movies: ['教父', '断背山', '海边的曼彻斯特'],
    }
  },
  props:['items','title']

}
</script>

<template>
<div class="a">
<!--  默认插槽-->
<!--  <slot>我是一些默认值，当没有结构传来是我出现</slot>-->

<!--  具名插槽-->
<!--  <slot name="one"></slot>-->
<!--  <slot name="two"></slot>-->
<!--  <slot name="three"></slot>-->

<!--  <h3>{{title}}</h3>-->
<!--  <ul>-->
<!--    <li v-for="(item,index) in items" :key="index">{{item}}</li>>-->
<!--  </ul>-->

<!--  作用域插槽-->
  <slot :movies="movies"/>

</div>
</template>

<style scoped>
.a{
  background-color: #42b983;
  display: inline-block;
  width: 300px;
  margin: 20px;
}
</style>