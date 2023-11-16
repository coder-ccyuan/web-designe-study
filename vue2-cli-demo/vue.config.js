const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    //开启代理服务器(方式一）
    //缺点：会先请求本地文件，没有再请求服务器,不能配置多个服务器
    /*  devServer:{
        //'http://localhost:5000'是要请求的服务器，后面的如/user/getUserName 会拼接在后面
        proxy:'http://localhost:5000'
      }*/
    //开启代理服务器(方式二）
    devServer: {
        // port:10000,
        proxy: {
            '/api': {//请求地址带/api走代理服务器
                target: 'http://localhost:5000',
                pathRewrite: {'^/api': ''},//将拼接再url后面的/api去掉
                ws: true,//webSocket
                changeOrigin: true//用于控制请求头中host值，true是和服务端host相同，如localhost:5000，false 为请求端 host localhost:8080
            },
            '/api2': {//请求地址带/api走代理服务器
                target: 'http://localhost:5001',
                pathRewrite: {'^/api': ''},//将拼接再url后面的/api去掉
                ws: true,//webSocket
                changeOrigin: true//用于控制请求头中host值，true是和服务端host相同，如localhost:5000，false 为请求端 host localhost:8080
            },
        },

    }
})
