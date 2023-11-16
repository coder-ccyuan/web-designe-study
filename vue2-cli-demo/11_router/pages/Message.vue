<script>
export default {
  name: "message",
  data() {
    return {
      mess: [
        {id: '001', title: '001Message', content: 'sadfklj'},
        {id: '002', title: '002Message', content: 'dfg'},
        {id: '003', title: '003Message', content: 'sadgfdfklj'}]
    }
  },
  methods: {
    replace(mes) {
      this.$router.replace({
        path: '/about/message/detail',
        query: {
          id: mes.id,
          value: mes.content
        }
      })
    },
    push(mes){
      this.$router.push({
        path: '/about/message/detail',
        query: {
          id: mes.id,
          value: mes.content
        }
      })
    }
  }
}
</script>

<template>
  <div class="twoLevel">
    <h1>Message</h1>
    <ul>
      <li v-for="mes in mess" :key="mes.id">
        <!--        调转路由并携带query参数，to的字符串写法-->
        <!--        <router-link :to="`/about/message/detail?id=${mes.id}&value=${mes.content}`">{{ mes.title }}</router-link>-->
        <!--        调转路由并携带query参数，to的对象写法-->
        <router-link
            :to="{
               path:'/about/message/detail',
               query:{
              id: mes.id,
              value: mes.content
          }
        }">{{ mes.title }}</router-link><button @click="push(mes)">push路由</button><button @click="replace(mes)">replace 路由</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.twoLevel {
  height: 300px;
  width: 300px;
  border: 1px skyblue solid;
  margin: auto;
}

</style>
