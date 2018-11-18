<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容(最多BB 250字)" maxlength="250"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>

        <!-- 评论展示区域 -->
         <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.user_name+i">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat }}
                </div>
                <div class="cmt-body">
                    {{(item.content == '' ||item.content == 'undefined' || item.content == '\n') ?'此用户很懒~':item.content}}
                </div>
            </div>
        </div>
 

        <mt-button type="danger" size="large" @click="getMore" plain>加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageindex: 1, //默认展示第一页数据
      comments: [] //所有的评论数据
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      //获取评论
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex)
        .then(result => {
          if (result.body.status == 0) {
            // this.comments = result.body.message;//直接覆盖掉了
            console.log(result.body)
            if(result.body.message.length==0){
                Toast("暂无更多评论了");
            }else{
                this.comments = this.comments.concat(result.body.message); //数组拼接
            }
          } else {
            Toast("获取评论失败了...");
          }
        });
    },
    getMore() {
      //加载更多
      this.pageindex++;
      this.getComments();
    }
  },
  props: ["id"]
};
</script>

<style scoped>
.cmt-container h3 {
  font-size: 18px;
}
textarea {
  font-size: 14px;
  height: 85px;
  /* 文本框和按钮间距离 */
  margin: 0;
}
.cmt-list {
  margin: 5px 0;
}
.cmt-item {
  font-size: 13px;
}
.cmt-title {
  line-height: 30px;
  background-color: #ccc;
}
.cmt-body {
  line-height: 35px;
  text-indent: 2em;
}

</style>
