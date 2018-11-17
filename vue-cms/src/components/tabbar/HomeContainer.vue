<template>
    <div>
        <!-- HomeContainer组件 -->
        <!-- 轮播图区域 -->
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.img"><img :src="item.img" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
</template>


<script>

    import { Toast } from 'mint-ui';

    export default {
        data(){
            return{
                lunbotuList:[],//保存轮播图的数组
            }
        },
        created() {
            this.getLunbotu();
        },
        methods:{
            getLunbotu(){ //获取轮播图数据的方法
                this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result =>{
                    if(result.body.status == 0 ){
                        //获取数据成功 //console.log(result.body);
                        this.lunbotuList = result.body.message;
                         Toast('加载轮播图成功...');
                    }else{
                        //获取数据失败 // alert('获取失败');
                        Toast('加载轮播图失败...');
                    }
                })
            },


            

        },




    }

</script>

<style scoped>
    .mint-swipe{
        height: 200px;
    }
    img{
        width: 100%;
        height: 100%;
    }
    /* .mint-swipe-item:nth-child(1){
        background-color: red;
    }
    .mint-swipe-item:nth-child(2){
        background-color: blue;
    }
    .mint-swipe-item:nth-child(3){
        background-color: yellow;
    } */
</style>
