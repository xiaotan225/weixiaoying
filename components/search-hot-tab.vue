<template>
	<!-- 搜索热门和历史搜索组件 -->
	<view class="list-cont d-flex flex-wrap">
		<view class="item mr-2 mt-2 mb-1" v-for="(item,index) in list" :key="index">
			{{item}}
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				list:[
					'余罪',
					'向往的生活',
					'萌萌早纳米',
					'乘风破浪',
					'定义浏览',
					'联盟',
				]
			}
		}
	}
</script>

<style>
	.list-cont .item{
		font-size: 30rpx;
		background: rgb(116, 144, 208);
		border-radius: 50rpx;
		padding: 10rpx 20rpx;
		color: #fff;
		
	}
</style>
