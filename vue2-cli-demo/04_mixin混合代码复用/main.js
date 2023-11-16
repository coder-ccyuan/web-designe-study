import Vue from 'vue'
import App from './App.vue'
import {hunhe} from "@/mixin";

Vue.config.productionTip = false
//全局混合,vm 下的所有vc都可以使用
Vue.mixin(hunhe)
new Vue({
  render: h => h(App),//等效于template:'<App></App>'
}).$mount('#app')

