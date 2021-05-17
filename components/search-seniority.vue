<template>
	<!-- 搜索排行组件 -->
	<view class="search-seniority">
		<view class="">
			<view class="top">
				<view class="top-title a-center d-flex j-sb px-2" :style="bg" style="box-sizing: border-box;">
					<view class="" style="">
						{{seniorityList.title}}
					</view>
					<view class="iconfont icon-arrow-right" style="font-size: 60rpx;">
					</view>
				</view>
			</view>
			<view class="bottom">
				<view style="height:350rpx;overflow: auto;" class="px-2 py-3">
					<view @tap="toDetails(item,index)" class="d-flex mb-2 a-center" v-for="(item,index) in seniorityList.list" :key="index">
						<view class="bottomIndex d-flex a-center j-center mr-2" :style="color[index]">
							{{index+1}}
						</view>
						<view class="" style="font-size: 25rpx;">
							{{item}}
						</view>
					</view>
				</view>
				<view class="text-center d-flex a-center j-center position-relative"  style="top: 20rpx; font-size: 21rpx;font-family: PingFang SC;font-weight: 400;color: #333333;">
					查看全部
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			bg:{
				
			},
			seniorityList:{
				type:Object,
				default:()=>{}
			}
		},
		data(){
			return {
				color:[
					'background: #FF0000;color:#fff',
					'background: #FF9C00;color:#fff',
					'background: #FFD800;color:#fff',
				]
			}
			
		},
		methods:{
			toDetails(item,index){
				console.log(item.only_id)
				uni.navigateTo({
					url:"/pages/product-details/product-details?only_id="+item.only_id
				})
			}
		}
	}
</script>

<style>
	.search-seniority{
		width: 360rpx;
		height: 600rpx;
		background: #FFFFFF;
		box-shadow: 0px 7rpx 12rpx 1rpx rgba(0, 0, 0, 0.15);
		border-radius: 30rpx;
	}
	.search-seniority .top .top-title{
		border-radius: 30rpx 30rpx 0 0;
		height: 150rpx;
		width: 100%;
		/* background-color: rgb(221, 115, 130); */
		 background-image: linear-gradient(to right, red , yellow);
	}
	.search-seniority .top .top-title > view{
		font-size: 37rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
	}
	.search-seniority .bottom{
		position: relative;
		border-radius: 30rpx 30rpx 0 0;
		top: -30rpx;
		background: #ffff;
		font-size: 21rpx;
		/* box-shadow: 0px 7rpx 12rpx 1rpx rgba(0, 0, 0, 0.15); */
	}
	.search-seniority .bottom .bottomIndex{
		width: 30rpx;
		height: 30rpx;
		background: #F2F2F2;
		font-size: 21rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #000;
	}
</style>
