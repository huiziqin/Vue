<template>
    <div id="box">
        <h1>登录组件这是使用vue文件定义出来的---{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                msg:'123',
            }
        },
        methods:{
            show(){
                console.log('调用了 login.vue 中的show() 方法');
            }
        },
    };


</script>

<style>
    #box{
        padding: 0px;
        margin: 0px;
        width: 400px;
        height: 400px;
        background-color: rgb(37, 101, 153);
    }
</style>
