import App from "./App.vue";

//因为es6语法浏览器无法直接解析，要在脚手架环境才能使用，页面无法展示
new Vue({
    template:'<App/>',
    el:'#root',
    data:{

    },
    components:{
        App
    }
})