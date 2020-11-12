<template>
	<!-- 视频列表 -->
	<view class="video-box">
		<view class="d-flex  flex-wrap video-list">
			
			<view class="video-item d-flex flex-column" @tap="toDetails(item,index)"  v-for="(item,index) in videoList" :key="index">
				<view class="width-000 position-relative"  style="height: 90%;">
					<image class="width-000 height-000" :src="item.src" mode=""></image>
					<view class="position-absolute score d-flex a-center j-center" style="">
						{{item.score.toFixed(1)}}
					</view>
				</view>
				<view class="text-center width-000" style="margin-top: 5rpx;">
					{{item.name}}
				</view>
			</view>
		
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				temparr:[],
				videoList:[
					{
						src:'/static/demo.jpg',
						name:'花木兰',
						score:9.0
					},
					{
						src:'/static/demo.jpg',
						name:'花木兰',
						score:9.0
					},
					{
						src:'/static/demo.jpg',
						name:'花木兰',
						score:9.5
					},
					{
						src:'/static/demo.jpg',
						name:'花木兰',
						score:9.0
					},
					{
						src:'/static/demo.jpg',
						name:'花木兰',
						score:9.0
					},
					{
						src:'/static/demo.jpg',
						name:'花木兰',
						score:9.0
					}
				]
			}
		},
		props:{
		
		
		},
		mounted() {
			this.videoList.forEach((item,index)=>{
				this.temparr.push(parseInt(index) + 2)
			})
			console.log(this.temparr)
		},
		methods:{
			toDetails(item,index){
				this.$U.navTo('/pages/common/video-details?item='+JSON.stringify(item))
			},
			toMake(){
			
			
				uni.navigateTo({
					url:"/pages/common/promptly-make"
				})
			}
		}
	}
</script>

<style>
	.video-list >view:nth-child(3n){
		margin-right: 0rpx !important;
	}
	.video-list .video-item{
		margin-right: 20rpx;
		margin-bottom: 20rpx;
		height: 350rpx;
		width: calc((100% - 40rpx)/3);
	}
	.score{
		top: 0;
		left: 0;
		z-index: 0;
		width: 56rpx;
		height: 32rpx;
		font-size: 20rpx;
		-webkit-border-radius: 0 10rpx 0 10rpx;
		border-radius: 0 0rpx 10rpx 0rpx;
		background: rgb(105, 133, 253);
		color: #fff;

	}
</style>
