<template>
	<view class="">
		<!-- 导航栏 -->
		<view class="width-000 ">
			<!-- <commonTitle :defaultSty="false"  :isShowIcon="false" :right="true" title="微小视"></commonTitle> -->
			<commonTitle :defaultSty="false"  :isShowIcon="false" :center="true" title="微小视"></commonTitle>
		</view>
		<!-- 导航栏 -->
		<!-- 轮播图 -->
		<view class="">
			
			<carousel :listImg="listImg" :configCarousel="configCarousel1"></carousel>
		</view>
		<!-- 轮播图 -->
		
		<!-- 头条开始 -->
		<!-- box-shadow: 0 2rpx 4rpx rgba(255, 252, 232, 0.); -->
		<view style="background: rgb(255, 252, 232);" class="  d-flex a-center pt-2 pb-2 px-4  width-000">
			<view class="d-flex a-center width-000 height-000">
				<text class="iconfont icontongzhi" style="color: rgb(226, 138, 23);"></text>
				<!-- <image class="width-100 height-50" src="/static/index/tt.png" mode=""></image> -->
				<text class="ml-1 " style="color: rgb(226, 138, 23);">•</text>
				<view class="width-000 height-50 d-flex a-center">
					<swiper indicator-active-color="white" :vertical="true" autoplay circular class="swiper width-000 height-50"
					 style="line-height: 50rpx;" :indicator-dots="configCarousel.indicatorDots" :autoplay="configCarousel.autoplay || true"
					 :interval="configCarousel.interval || 2000" :duration="configCarousel.duration || 500">
						<swiper-item v-for="(item,index) in headlineList" @tap="event(item,index)" :key="index">
							<text class="color-hui ml-1" style="color: rgb(226, 138, 23);">{{item}}</text>
							<!-- <image :src="item" mode="" class="width-000 height-000" ></image> -->
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
		
		<view class="px-2">
			<card class="mx-3" headTitle="热播电影" :headTitleWeight="true">
				<view @click="likeTap('热播电影')" slot="right" class="font-md text-muted pr-1 d-flex a-center">
					<view class="">
						查看更多
					</view>
					<view class="iconfont iconyoujiantou"></view>
				</view>
			</card>
			<commonListFill></commonListFill>
		</view>
		
		
		<view class="px-2">
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
	
	</view>
</template>

<script>
	import carousel from '@/components/common/carousel.vue'
	import card from "@/components/common/card.vue";
	import commonListFill from "@/components/common/common-list-fill.vue";
	export default {
		components: {
			carousel,
			card,
			commonListFill
		},
		data() {
			return {
				headlineList:['影视','大雾'],
				//轮播图配置
				configCarousel1: {
					indicatorDots: true,
					height: 'height: 330rpx',
					autoplay:true
				},
				listImg:[
					{
						src:"https://m.iqiyipic.com/common/lego/20201108/adb974eadb9b4064ad80ad77a24c581a.jpg"
					},
					{
						src:"https://m.iqiyipic.com/common/lego/20201108/adb974eadb9b4064ad80ad77a24c581a.jpg"
					},
					{
						src:"https://m.iqiyipic.com/common/lego/20201108/adb974eadb9b4064ad80ad77a24c581a.jpg"
					},
				]
			}
		},
		onLoad() {
			// console.log(this.citySelect[this.citySelectCurrent].chid)
		},
		methods: {
			likeTap(type){
				var item = {
					type:type
				}
				this.$U.navTo('/pages/common/video-list?item='+JSON.stringify(item))
			},
			// 轮播图
			async ad(){
				var data = await api.ad()
				data.data.forEach((item,index)=>{
					this.listImg.push({
						id:item.id,
						src:item.photo_image.split(',')[0]
					})
					console.log(this.listImg)
				})
			},
		}
	}
</script>

<style>
	page {
		/* background-color: rgb(121, 146, 252); */
	}
</style>
