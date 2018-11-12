//导入http内置模块
const http = require('http')
//这个核心模块 帮我们解析URL地址 拿到pathname query
const urlModel = require('url')

//创建一个http服务器
const server = http.createServer()

//监听http服务器的request请求
server.on('request',function(req,res){

    //const url = req.url
    const {pathname: url, query} = urlModel.parse(req.url,true)

    if(url == '/getscript'){


        var data = {
            name:'hzq',
            age:22,
            gender: '男',
        }


        //拼接一个合法的js脚本  这里拼接的是一个方法的调用
        //var scriptStr = 'show()';
        //var scriptStr =`${ query.callback}()`;
        var scriptStr =`${ query.callback}(${JSON.stringify(data)})`;
        //res.end 发送给客户端 客户端 把这个字符串 当做js 代码去解析执行
        res.end(scriptStr);
    }else{
        res.end('404');
    }


})
//指定端口号并启动服务器监听
server.listen(3000,function(){
    console.log('server listen at http://127.0.0.1');
})