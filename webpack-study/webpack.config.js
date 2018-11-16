const path = require('path')
// const webpack = require('webpack')  //导入模块  启用热更新 第二步
const htmlWebpackPlugin = require('html-webpack-plugin') 
//导入在内存中生成HTML页面的插件
//只有是插件 就要放到plugins节点中去
//这个插件的作用：
    // 1.自动在内存根据指定页面生成内存的页面
    // 2.自动 把打包好的bundle.js追加到页面中


//这个配置文件  就是一个js文件  通过node中的模块操作  向外暴露一个配置对象
module.exports = {
    entry:path.join(__dirname,'/src/main.js'),//入口  表示要打包哪个文件
    output:{//输出文件配置
        path:path.join(__dirname,'./dist'),//指定 打包好的文件 输出到哪个目录中去
        filename:'bundle.js',//指定输出文件名称
    },
    // devServer:{//配置 dev-server命令参数的第二种形式 相对来说麻烦一些
    //     //--open --port 3000 --contentBase src --hot
    //     open: true,//自动打开浏览器
    //     port: 3000,//设置端口
    //     contentBase: 'src',//指定根目录
    //     hot: true //启用热更新  第一步
    // },
    plugins:[//配置插件的节点
        //new webpack.HotModuleReplacementPlugin()//new 一个热更新的模块对象  第三步
        new htmlWebpackPlugin({//创建一个在内存中生成HTML页面的插件
            template: path.join(__dirname,'./src/index.html'),//指定模板页面  根据它生成内存中的页面
            filename:'index.html',//指定生成页面的名称
        })
    ],
    module:{// 此节点 配置 第三方 模块加载器
        rules: [ //第三方模块 处理规则
            {test: /\.css$/, use:['style-loader','css-loader']},//配置处理.css文件的第三方loader规则
            {test: /\.less$/, use:['style-loader','css-loader','less-loader']},//配置处理.less文件的第三方loader规则
            {test: /\.scss$/, use:['style-loader','css-loader','sass-loader']},//配置处理.scss文件的第三方loader规则
        ]

    }

}

// 当我们直接在控制台 输入webpack  执行命令的时候，做了以下几步：
// 1、首先 webpack 发现 我们通过命令形式  并没有指定入口和出口配置文件
// 2、webpack 会去项目根目录  查找 webpack.config.js 配置文件
// 3、找到配置文件后 webpack解析执行配置文件  得到配置文件中 导出的配置对象
// 4、就拿到了配置对象中指定的入口和出口  然后进行打包构建
//