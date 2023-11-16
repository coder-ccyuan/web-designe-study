<script>

export default {
  name: "Detail",
  props: ['id', 'value']
}
</script>

<template>
  <div>
    <!--      <h3>message NO. {{$route.query.id}}</h3>-->
    <!--      <h3>message Value: {{$route.query.value}}</h3>-->

    <!--    //使用props-->
    <h3>message NO. {{ id }}</h3>
    <h3>message Value: {{ value }}</h3>
  </div>
</template>

<style scoped>

</style>