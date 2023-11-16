<template>
  <div>
    {{ name }}
    <button @click="sendFather">给父组件传名字</button>
  </div>
</template>
<script>

export default {
  name: 'School',
  data() {
    return {
      name: 'xyc'
    }
  },
  props: ['getSchoolName'],
  methods: {
    sendFather() {
      this.getSchoolName(this.name)
    }
  }
}
</script>
<style>

</style>
