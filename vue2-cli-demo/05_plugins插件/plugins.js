//可以定义全局过滤器，指令，混合...
export default {
    install(Vue) {
        console.log('@@install', Vue)
        //定义全局过滤器
        Vue.filter()
        //定义全局指令
        Vue.directive()
        //定义全局混合
        Vue.mixin()
    }
}