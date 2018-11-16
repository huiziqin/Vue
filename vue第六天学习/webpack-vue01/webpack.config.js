//webpack 是基于node进行构建  所有   webpack配置文件中  任何合法的Node代码都是支持的
var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

//向外暴露一个配置对象
//当以命令行形式运行webpack 或者 webpack-dev-server 的时候 ，工具会发现 我们没有提供 要打包 的文件
//的 入口 和 出口 文件   此时，它会检查项目根目录中的配置文件  读取这个文件  就拿到了导出的这个配置对象 
//然后根据这个对象 进行打包构建
module.exports = {
    entry: path.join(__dirname, '/src/main.js'),//入口文件  表示要打包哪个文件
    output: {//输出文件配置
        path: path.join(__dirname, './dist'),//指定 打包好的文件 输出到哪个目录中去
        filename: 'bundle.js',//指定输出文件名称
    },
    plugins:[ //所有webpack 插件的配置节点
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),//指定模板文件路径
            filename:'index.html',//设置生成的内存页面名称
        })
    ],
    module:{//配置所有第三方loader模块
        rules:[//第三方模块的配置规则
            {test:/\.css$/, use:['style-loader','css-loader']},//处理css文件的loader
            {test:/\.jpg|png|bmp|gif|jpeg$/, use:['url-loader?limit=7631&name=[hash:8]-[name].[ext]']},//处理css文件中图片的URL路径
            //limit   是否会转为base64格式字符串      小于则会
            //name=[name].[ext]  使用原名
            //[hash:8]-[name].[ext] 原名前加8位hash
            {test:/\.(ttf|eot|svg|woff|woff2)$/, use:['url-loader']},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
        ]
    },
    resolve:{
        alias:{ //修改vue 被导入时候的包的路径
            'vue$':'vue/dist/vue.js'
        }
    },
}