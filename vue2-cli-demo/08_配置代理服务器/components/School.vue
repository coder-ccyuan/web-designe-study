<template>
  <div>
    <h1>{{name}}</h1>
    <button @click="getName">点击获取</button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: 'School',
  data() {
    return {
      name: 'xyc'
    }
  },
  methods: {
    getName() {
      axios.get('http://localhost:8080').then(
          response => {
            console.log(response)
          },
          error => {
            console.log(error)
          }
      )
    }
  }
}

</script>
<style>

</style>