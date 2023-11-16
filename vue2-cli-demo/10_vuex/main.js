import Vue from 'vue'
import App from './App.vue'
import vuex from "vuex";//引入vuex插件
import store from "@/store";//引入store
Vue.config.productionTip = false
// Vue.use(vuex)//使用vuex插件，但会报错要在store index.js中使用

new Vue({
  store:store,//store属性vuex提供的属性
  render: h => h(App),//等效于template:'<App></App>'
}).$mount('#app')
