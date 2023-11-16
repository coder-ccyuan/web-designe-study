export default {
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
}