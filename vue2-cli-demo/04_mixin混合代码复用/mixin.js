//mixin 作用是复用组件使用的方法
//如果组件有相同方法名，以组件为准
//mixin可以有钩子函数，如果组件中有钩子函数，mixin 和组件中的钩子函数都会调用，先执行mixin中的钩子函数
export const hunhe={
    methods:{
        alterMes(){
            alert(this.name)
        }
    },
    mounted() {
        console.log('mounted()')
    }
}