<template>
	<!-- 视频列表 -->
	<view class="video-box">
		<view class="d-flex  flex-wrap video-list">

			<view class="video-item d-flex flex-column" @tap="toDetails(item,index)" v-for="(item,index) in tempVideoList" :key="index">
				<view class="width-000 position-relative" style="height: 90%;">

					<!-- <easy-loadimage mode="" :imageSrc="item.vod_pic"></easy-loadimage> -->
					<image @load="load($event,item)" @error="error" class="width-000 height-000" :src="item.isShowImg?item.vod_pic:'../../static/loading.gif'"
					 mode="aspectFit"></image>
					<!-- <image  @load="load($event,item)" @error="error" class="width-000 height-000" :src="item.vod_pic" mode=""></image> -->
					<!-- <image v-else  src="../../static/demo.jpg" class="width-000 height-000" mode=""></image> -->
					<view class="position-absolute score d-flex a-center j-center" style="">
						{{item.vod_year}}
					</view>
				</view>
				<view class="text-center width-000" style="margin-top: 5rpx;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
					{{item.vod_name}}
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import easyLoadimage from '@/components/easy-loadimage/easy-loadimage.vue'
	export default {
		components: {
			easyLoadimage
		},
		props: {
			// 视频列表数据
			videoList: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				temparr: [],
				tempVideoList: [],
				scrollTop: 0
			}
		},
		watch: {
			videoList(newVal,olaVal){
				this.tempVideoList =  JSON.parse(JSON.stringify(newVal))
			},
			immediate: true,
			deep: true

		},
		computed:{
			
		},
		onPageScroll({
			scrollTop
		}) {
			// 传入scrollTop值并触发所有easy-loadimage组件下的滚动监听事件
			this.scrollTop = scrollTop;
		},
		created() {
			this.tempVideoList =  JSON.parse(JSON.stringify(this.videoList))
			this.videoList.forEach((item, index) => {
				this.tempVideoList[index].isShowImg = false
				this.temparr.push(parseInt(index) + 2)
			})
			
		},
		mounted() {

			// setTimeout(()=>{

			// },)
		},
		methods: {
			load(e, item) {
				item.isShowImg = true
				this.tempVideoList = Object.assign({},this.tempVideoList)
				// console.log(e, 'load')
			},
			error(e) {
				// console.log(e,'error')
			},
			toDetails(item, index) {
				this.$U.navTo('/pages/common/video-details?item=' + JSON.stringify(item))
			},
			toMake() {
				uni.navigateTo({
					url: "/pages/common/promptly-make"
				})
			}
		}
	}
</script>

<style>
	.video-list>view:nth-child(3n) {
		margin-right: 0rpx !important;
	}

	.video-list .video-item {
		margin-right: 20rpx;
		margin-bottom: 20rpx;
		height: 350rpx;
		width: calc((100% - 40rpx)/3);
	}

	.score {
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
