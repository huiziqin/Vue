<template>
    <div>
        <!-- HomeContainer组件 -->
        <!-- 轮播图区域 -->
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.img"><img :src="item.img" alt=""></mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格 -->
        
		<ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
		            <span class="mui-icon mui-icon-home"></span>
		            <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>

		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <span class="mui-icon mui-icon-chatbubble"></span>
		        <div class="mui-media-body">图片分享</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <span class="mui-icon mui-icon-search"></span>
		        <div class="mui-media-body">商品购买</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <span class="mui-icon mui-icon-phone"></span>
		        <div class="mui-media-body">留言反馈</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <span class="mui-icon mui-icon-gear"></span>
		        <div class="mui-media-body">视频专区</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <span class="mui-icon mui-icon-info"></span>
		        <div class="mui-media-body">联系我们</div></a></li>
		</ul> 

    </div>
</template>


<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      lunbotuList: [] //保存轮播图的数组
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      //获取轮播图数据的方法
      this.$http.get("api/getlunbo").then(result => {
        if (result.body.status == 0) {
          //获取数据成功 //console.log(result.body);
          this.lunbotuList = result.body.message;
          // Toast("加载成功");
        } else {
          //获取数据失败 // alert('获取失败');
          Toast("加载轮播图失败...");
        }
      });
    }
  },
  components: {
    //用来注册子组件
  }
};
</script>

<style scoped>
.mint-swipe {
  height: 200px;
}
img {
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

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>
