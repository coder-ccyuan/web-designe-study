import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),//等效于template:'<App></App>'
}).$mount('#app')
d