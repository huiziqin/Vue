<template>
    <div class="newsinfo-container">
        <!-- 新闻头部 -->
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{newsinfo.add_time | dateFormat }}</span>
            <span>点击量：{{newsinfo.click}}</span>
        </p>
        <hr>
        <!-- 新闻主体 -->
        <div class="content">
            <p v-html="newsinfo.content"></p>
        </div>
        <!-- 评论组件 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>











<script>
import comment from '../subcomponents/comment.vue'  //导入 评论子组件
import { Toast } from "mint-ui";
export default {
  data() {
    return {
        id: this.$route.params.id,//将URL传递过来的id值挂载到data中，方便以后调用
        newsinfo: [],             //新闻对象
    };
  },
  created(){
      this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      //获取新闻详情
      this.$http.get('api/getnew/'+this.id).then(result => {
        if (result.body.status == 0) {
            this.newsinfo = result.body.message[0];
        } else {
          Toast("获取资讯失败...");
        }
      });
    }
  },
  components:{ //用来注册子组件
    'comment-box':comment,
  }
};
</script>

<style>
.newsinfo-container {
  /* 左右边距 */
  padding: 4px;
}
.title {
  font-size: 16px;
  text-align: center;
  margin: 4px 0;
  color: red;
}
.subtitle {
  font-size: 13px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
.content img{
    width: 100%;
}
</style>
