<template>
	<view class="">
		<load></load>
		<!-- 导航栏 -->
		<view class="width-000 ">
			<!-- <commonTitle :defaultSty="false"  :isShowIcon="false" :right="true" title="微小视"></commonTitle> -->
			<commonTitle :defaultSty="false" :isShowIcon="false" :center="true" title="微小影"></commonTitle>
		</view>
		<!-- 导航栏 -->

		<!-- 轮播图 -->
		<view class="">
			<helangCardSwiper :list="listImg" :vodList="vodList"></helangCardSwiper>
			<!-- <carousel :listImg="listImg" :configCarousel="configCarousel1"></carousel> -->
		</view>
		<!-- 轮播图 -->

		<!-- 头条开始 -->
		<!-- box-shadow: 0 2rpx 4rpx rgba(255, 252, 232, 0.); -->
		<view style="background: rgb(255, 252, 232);" class="  d-flex a-center pt-2 pb-2 px-4  width-000">
			<view class="d-flex a-center width-000 height-000">
				<text class="iconfont icontongzhi" style="color: rgb(226, 138, 23);"></text>
				<text class="ml-1 " style="color: rgb(226, 138, 23);">•</text>
				<view class="width-000 height-50 d-flex a-center">
					<swiper indicator-active-color="white" :vertical="true" autoplay circular class="swiper width-000 height-50" style="line-height: 50rpx;"
					 :indicator-dots="configCarousel.indicatorDots" :autoplay="configCarousel.autoplay || true" :interval="configCarousel.interval || 2000"
					 :duration="configCarousel.duration || 500">
						<swiper-item v-for="(item,index) in noticeList"  :key="index">
							<text class="color-hui ml-1" style="color: rgb(226, 138, 23);">{{item.text}}</text>
						</swiper-item>
					</swiper>

					<!-- {{headlineList[headlineIndex]}} -->
					<!-- <text v-for="item in headlineList" >
						{{item}}
					</text> -->
				</view>
			</view>
		</view>
		<!-- 头条结束 -->

		<view class="px-2" v-for="(item,index) in videoList" :key="index">
			<view class="mt-2">
				<card :headTitle="item.type_name" :headTitleWeight="true">
					<view @click="likeTap(item)" slot="right" class="font-md text-muted pr-1 d-flex a-center">
						<view class="load-video-text">
							查看更多
						</view>
						<view class="iconfont iconyoujiantou load-video-text"></view>
					</view>
				</card>
			</view>
			<view class="mt-2">
				<commonListFill :videoList="item.list"></commonListFill>
			</view>
		</view>

		<view class="" style="height: 100rpx;">

		</view>


		<!-- <view class="px-2">
			<card class="mx-3" headTitle="热门电视剧" :headTitleWeight="true">
				<view @click="likeTap('热门电视剧')" slot="right" class="font-md text-muted pr-1 d-flex a-center">
					<view class="">
						查看更多
					</view>
					<view class="iconfont iconyoujiantou"></view>
				</view>
			</card>
			<commonListFill></commonListFill>
		</view>
	 -->
	</view>
</template>

<script>
	import carousel from '@/components/common/carousel.vue'
	import card from "@/components/common/card.vue";
	import commonListFill from "@/components/common/common-list-fill.vue";
	import helangCardSwiper from "@/components/helang-cardSwiper/helang-cardSwiper.vue";
	const app = getApp()
	export default {
		components: {
			carousel,
			card,
			commonListFill,
			helangCardSwiper
		},
		data() {
			return {
				configCarousel: {},
				videoList: [],
				//轮播图配置
				configCarousel1: {
					indicatorDots: true,
					height: 'height: 379rpx',
					autoplay: true
				},
				listImg: [

				],
				vodList: [],
				noticeList: [],
			}
		},
		onLoad() {
			this.getSlideshow()
			this.init()
		},
		mounted() {
			this.notice()
		},
		methods: {
			async init(){
				let data1 = await this.$api.getVodList({
					tag: "电影"
				})
				let data2 = await this.$api.getVodList({
					type:'tv',
					tag: "热门"
				})
				let data3 = await this.$api.getVodList({
					tag: "综艺"
				})
				let data4 = await this.$api.getVodList({
					tag: "动漫"
				})
				let temp = [
					{
						type_name:"热门电影",
						type:'电影',
						list:[]
					},
					{
						type_name:"热门电视剧",
						type:'电视剧',
						list:[]
					},
					{
						type_name:"热门综艺",
						type:'综艺',
						list:[]
					},
					{
						type_name:"热门动漫",
						type:'动漫',
						list:[]
					}
					
				]
				data1.subjects.forEach(item=>{
					temp[0].list.push({
						vod_pic:item.cover,
						vod_name:item.title,
						vod_area:item.rate,
						id:item.id
					})
				})
				data2.subjects.forEach(item=>{
					temp[1].list.push({
						vod_pic:item.cover,
						vod_name:item.title,
						vod_area:item.rate,
						id:item.id
					})
				})
				data3.subjects.forEach(item=>{
					temp[2].list.push({
						vod_pic:item.cover,
						vod_name:item.title,
						vod_area:item.rate
					})
				})
				data4.subjects.forEach(item=>{
					temp[3].list.push({
						vod_pic:item.cover,
						vod_name:item.title,
						vod_area:item.rate,
						id:item.id
					})
				})
				this.videoList = temp
			},
			
			// 轮播图
			async getSlideshow() {
				let data = await this.$api.getVodList({
					tag: "热门"
				})
				var tempImgArr = []
				data.subjects.forEach(item=>{
						tempImgArr.push({
							isLoad: true,
							src: item.cover
						})
				})
				this.vodList = data.subjects
				this.listImg = tempImgArr
			},
			async notice() {
				var db = app.globalData.db
				db.collection('annunciate').get().then(res => {
				  // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
				  this.noticeList = res.data
				})
				
				// var data = await this.$api.notice()
				// this.noticeList = data.data
			},
			// to更多页面视频列表
			likeTap(item) {
				var newItem = {
					type: item.type
				}
				this.$U.navTo('/pages/common/video-list?item=' + JSON.stringify(newItem))
			},
			// 首页分类
			async indexClassify() {
				var data = await this.$api.indexClassify()
				this.videoList = data.data
			},
		}
	}
</script>

<style>
	page {
		/* background-color: rgb(121, 146, 252); */
	}

	.load-video-text {
		color: #fff;
		background-image: -webkit-linear-gradient(left, #ff0, #dd524d 25%, #bdcd34 50%, #dd524d 75%, #ff0);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		-webkit-background-size: 200% 100%;
		-webkit-animation: masked-animation 3s infinite linear;
		border: 0;
		font-size: 30rpx;

	}

	@-webkit-keyframes masked-animation {
		0% {
			background-position: 0 0
		}

		to {
			background-position: -100% 0
		}
	}
</style>
