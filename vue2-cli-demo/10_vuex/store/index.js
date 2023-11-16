//该文件用于创建vuex中核心的store
//引入vuex
import Vuex from 'vuex'
import Vue from "vue";
import CountStore from "@/store/CountStore";
import countStore from "@/store/CountStore";
//使用vuex
Vue.use(Vuex)
Vue.config.devtools = true

/*const countOptions = {
    namespaced: true,//开启命名空间
    actions: {
        jia(context, value) {
            console.log(context, value)
            context.commit('JIA', value)
        }
    },
    mutations: {
        JIA(state, value) {
            console.log('mutations中的JIA被调用')
            state.sum += value
        }
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
    state: {
        sum: 0
    }
}*/
/*//actions用于响应组件的动作
const actions={
jia(context,value){
    console.log(context,value)
   context.commit('JIA',value)
}
}
//mutations用于操作数据
const mutations={
JIA(state,value){
    console.log('mutations中的JIA被调用')
    state.sum+=value
}
}
//state用于存储数据
const state={
sum:0
}
//对state里的数据操作
const getters={
    bigSum(state){
        return state.sum*10
    }
}*/
const store = new Vuex.Store({
    // actions:actions,
    // mutations:mutations,
    // state:state,
    // getters
    modules: {
        // countAbout: countOptions
        countAbout:countStore //外部引入
    }


})
export default store
