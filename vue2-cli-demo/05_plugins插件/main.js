import Vue from 'vue'
import App from './App.vue'
import plugins from "@/plugins";
//应用插件
Vue.use(plugins)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),//等效于template:'<App></App>'
}).$mount('#app')
