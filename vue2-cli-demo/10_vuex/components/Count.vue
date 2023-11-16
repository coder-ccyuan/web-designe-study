<script>
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";

export default {
  name: "Count",
  data() {
    return {
      num: 1,
      // sum:0 被store接管
    }
  },
  methods: {
    increment1() {
      this.$store.commit('JIA', this.num)
    },
    increment2() {
      this.$store.dispatch('jia', this.num)
    },
    //借用mapMutations，mapActions生成对应的方法
    /*    ...mapMutations({JIA: 'JIA'}),
        ...mapActions({jia: 'jia'})*/
    //命名空间
    ...mapActions('countAbout', ['jia']),
    ...mapMutations('countAbout', ['JIA'])
  },
  computed: {
    //借用mapState,mapGetters生成对应的计算属性
    // 对象式
    /*...mapState({sum: 'sum'}),
    ...mapGetters({bigSum:'bigSum'})*/
    //数组式
    /*    ...mapState(['sum']),
        ...mapGetters(['bigSum'])*/

    //命名空间
    ...mapState('countAbout', ['sum']),
    ...mapGetters('countAbout', ['bigSum'])
  }
}
</script>

<template>
  <div>
    <!--      <input type="number" v-model.number="num"><button @click="$store.dispatch('jia',num)">添加</button>-->
    <!--  如果在action中没有使用到业务逻辑可以直接$store.commit('JIA',num),不需要$store.dispatch('jia',num)-->
    <input type="number" v-model.number="num">
    <!--    <button @click="increment1">添加</button>-->
    <!--    使用mapMutations缩写 -->
    <button @click="JIA(num)">添加</button>
    <!--     使用mapActions缩写 -->
    <button @click="jia(num)">添加</button>

    <!--    $store.state.sum 可以借助mapState简写-->
    <h1>{{ sum }}</h1>
    <!--    <h1>{{ $store.state.sum }}</h1>-->

    <!--    $store.getters.bigSum 可以借助mapGetters简写-->
    <h1>变大十倍{{ bigSum }}</h1>
    <!--    <h1>变大十倍{{ $store.getters.bigSum }}</h1>-->
    <section>

    </section>
  </div>
</template>

<style scoped>

</style>
