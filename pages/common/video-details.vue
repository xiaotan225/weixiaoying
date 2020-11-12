<template>
	<!-- 视频详情 -->
	<view class="">
		<!-- 导航栏 -->
		<view class="width-000 ">
			<commonTitle :defaultSty="false"  :isShowIcon="true" :right="true" :title="item.name"></commonTitle>
		</view>
		<!-- 导航栏 -->
		<!-- 视频 -->
		<view class="">
			<video  style="height: 353rpx;width: 100%;" src="https://youku.cdn7-okzy.com/20200918/20794_bfb2d8fe/index.m3u8" controls="true"/>
		</view>
		<!-- 视频 -->
		<!-- 发布弹幕 -->
		<view class="d-flex a-center px-2 width-000 position-relative" style="top: -20rpx; background: rgb(212, 212, 212); height: 80rpx;">
			<view style="width: 83%;">
				<input class="width-000" type="text" value="" placeholder="发个弹幕聊一聊"/>
			</view>
			<view class="py-1 px-2 font-27 bg-19A0F0 color-fff theme-border-r10">
				发送
			</view>
		</view>
		<!-- 发布弹幕 -->
		<!-- 播放源 -->
		<view class="mt-5 mx-2">
			<view class="my-2 font-27" style="color: rgb(255, 87, 34);">
				播放源
			</view>
			<view class="d-flex a-center">
				<view :class="playSourceCurrent==index?'playSourceCurrent':''" class="px-5 py-1 mr-2 theme-border-r10" v-for="(item,index) in playSource" :key="index">
					{{item}}
				</view>
			</view>
		</view>
		<!-- 播放源 -->
		
		
		<!-- 选集 -->
		<view class="mt-5 mx-2">
			<view class="d-flex a-center j-sb">
				<view class="my-2 font-27" style="color: rgb(255, 87, 34);">
					选集
				</view>
				<view class="d-flex a-center">
					<view class="font-27 color-hui">
						共12集
					</view>
					<view class="iconfont iconyoujiantou ml-1" style="color: rgb(255, 113, 68);">
						
					</view>
				</view>
			</view>
			<view class="d-flex a-center">
				<view :class="collectCurrent==index?'playSourceCurrent':''" class="px-5 py-1 mr-2 theme-border-r10" v-for="(item,index) in optCollect" :key="index">
					{{item}}
				</view>
			</view>
		</view>
		<!-- 选集 -->
		
		<!-- 简介 -->
		<view class="mt-3" >
			<view class="d-flex a-center j-sb px-2" style="background: rgb(212, 212, 212); height: 80rpx;">
				<view class="font-33" style="color: rgb(102, 102, 102);">
					{{item.name}}
				</view>
				<view class="font-30" style="color: rgb(102, 102, 102);">
					评分：{{item.score}}
				</view>
			</view>
			<view class="px-2">
				<view class="height-200 font-27" style="overflow: auto;color: rgb(112, 112, 112);">
					熬枯受节点克隆房间爱丽丝肯德基罚款是劳动节疯狂拉
					设计费考拉世纪东方卡拉胶SDK浪费解吗是考虑到放假吗开始角度付款啦
					设计费考拉世纪东方卡拉胶SDK浪费解吗是考虑到放假吗开始角度付款啦
					设计费考拉世纪东方卡拉胶SDK浪费解吗是考虑到放假吗开始角度付款啦
					设计费考拉世纪东方卡拉胶SDK浪费解吗是考虑到放假吗开始角度付款啦
				</view>
			</view>
		</view>
		<!-- 简介 -->
		
		<!-- 为你推荐 -->
		<view class="px-2 mt-3">
			<view  class="font-33 mb-2" style="color: rgb(102, 102, 102);">
				为你推荐
			</view>
			<view class="">
				<commonListFill></commonListFill>
			</view>
		</view>
		<!-- 为你推荐 -->
		
	</view>
</template>

<script>
	import commonListFill from "@/components/common/common-list-fill.vue";
	export default {
		components:{
			commonListFill
		},
		data(){
			return {
				item:{},
				playSourceCurrent:0,
				playSource:[
					'线路1',
					'线路2',
					'线路3',
				],
				collectCurrent:0,
				optCollect:[
					'第01集',
					'第02集',
					'第03集',
				]
			}
		},
		onLoad(e) {
			this.item = JSON.parse(e.item)
		}
	}
</script>

<style>
	.playSourceCurrent{
		background: rgb(69, 80, 106);
		color: #fff;
		font-size: 27rpx;
	}
</style>
