// 向外暴露一个对象
//export default 向外暴露的成员可以使用任意的变量来接收
//在一个模块中, 只允许export default 向外暴露一次
//在一个模块中，可以同时使用export default 和 export 向外暴露成员
//使用export向外暴露的成员（可以多个） 只能使用{}接收，这种形式 叫做 按需导出

// var info = {
//     name:'zs',
//     age:20
// }
// export default info

export default{
    name:'zs',
    age:20
}

export var title = 'hahaha'