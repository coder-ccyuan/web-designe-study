<template>
  <div id="app">
    <Category title="电影" :items="movies">
      <!--      默认插槽使用-->
      <!--      <h1>收钱了</h1>-->

      <!--      具名插槽使用 通过slot属性确认插槽名-->
      <h1 slot="one">one插槽使用了</h1>
      <h1 slot="two">two插槽使用了</h1>
      <!--      v-slot 最新写法，但只能写在template上-->
<!--      <template v-slot:three>-->
<!--        <h3>three</h3>-->
<!--        <h3>three</h3>-->
<!--        <h3>three</h3>-->
<!--      </template>-->
      <template scope={movies}>
        <ol>
          <li v-for="movie in movies">{{movie}}</li>
        </ol>
      </template>
    </Category>
    <Category title="书籍" :items="books"></Category>
    <Category title="音乐" :items="musics"></Category>

  </div>
</template>

<script>
import Category from "@/components/Category.vue";

export default {
  name: 'App',
  components: {
    Category
  },
  data() {
    return {
      // movies: ['教父', '断背山', '海边的曼彻斯特'],
      books: ['magic tree house', '百年孤独', '边城'],
      musics: ['aa', 'bb', 'cc']
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
