<template>
	<div class="app-container">
		<!-- 顶部Header区域 -->
		<!-- 使用MintUI 的组件 -->
		<mt-header fixed title="VueCMS"></mt-header>


		<!-- 中间的 路由 router-view 区域 -->
		<transition>
			<router-view></router-view>
		</transition>
		



		<!-- 底部Tabber区域 -->
		<!-- 使用MUI的tabber -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="memver">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

	</div>
</template>




<script>
</script>




<style scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}

.v-enter,.v-leave-to{
	opacity: 0;
	transform: translateX(100%);
	position: absolute;
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter.active,.v-leave-active{
	transition: all 1s ease;
}


</style>

