<template>
	<!-- 搜索热门和历史搜索组件 -->
	<view class="list-cont d-flex flex-wrap">
		<view :style="theme.bgColor" @tap="tapsearchHistory(item,index)" class="item mr-2 mt-2 mb-1" v-for="(item,index) in list" :key="index">
			{{item.title || item}}
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default:()=>[]
			}
		},
		data(){
			return {
				
			}
		},
		computed:{
			theme(){
				return this.$store.state.theme
			}
		},
		methods:{
			tapsearchHistory(item,index){
				this.$emit('tapsearchHistory',item,index)
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
