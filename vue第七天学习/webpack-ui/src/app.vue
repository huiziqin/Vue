<template>
    <div>
        <!-- <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search> -->
        <mt-button type="primary" size="large"  icon="back" @click="show">获取</mt-button>
        <button type="button" class="mui-btn mui-btn-royal">紫色</button>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      toastInstance: null
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      //模拟获取列表的一个ajax方法   在获取数据之前 弹出 Toast 提示用户  正在加载数据
      this.show();
      setTimeout(() => {
        //当3秒过后，数据获取回来 要把toast移除
        this.toastInstance.close();
      }, 3000);
    },

    show() {
      this.toastInstance = Toast({
        message: "正在加载，请稍后...",
        iconClass: "glyphicon glyphicon-time",
        duration: -1 //-1 则弹出后不消失
        //className:"mytoast", //自定义 Toast样式
      });
    }
  }
};
</script>
<style scoped>

</style>

