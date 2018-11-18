<template>
    <div>
       <!-- MUI中的media-list代码片段 -->
       <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.title">
				<router-link :to="'/home/newsinfo/'+item.id">
					<img class="mui-media-object mui-pull-left" src="http://qzapp.qlogo.cn/qzapp/100414805/1BB60C3351140AE21EEB4854BE388E77/100">
							<div class="mui-media-body">
						<h1>{{item.title}}</h1>
                        <!-- <p>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p> -->
						<p class='mui-ellipsis'>
                            <span>发表时间：{{item.add_time | dateFormat('YYYY-MM-DD HH:mm:ss') }}</span>
                            <span>点击量：{{item.click}}</span>
                        </p>
					</div>
				</router-link>
			</li>
		</ul>
        
    </div>
</template>


<script>
    import { Toast } from "mint-ui";
    export default {
        data(){
            return{
                new:{
                    title :'幸福',
                    add_time: '2018-11-18 19:21:00',
                    click: 99,
                    zhaiyao:'能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？',
                },
                newsList:[],
            }
        },
        created(){
            this.getNewsList();
        },
        methods:{
            getNewsList(){//获取新闻列表
                this.$http .get("api/getnewslist").then(result =>{
                    if(result.body.status == 0){
                        // Toast("获取资讯成功...");
                        //把数据保存到data中 用于v-for渲染
                        // console.log(result.body.message)
                        this.newsList = result.body.message;
                    }else{
                        Toast("获取资讯失败...");
                    }
                })
            },

        },

    }
</script>

<style scoped>
.mui-table-view li h1{
   font-size:14px;
}
.mui-ellipsis{
     font-size: 12px;
     color: #226aff;
     /* 两端对齐 */
     display: flex;
     justify-content: space-between;

}
</style>
