<template>
	<!-- 搜索 -->
	<view class="">
		<!-- 导航栏 -->
		<view class="width-000 ">
			<!-- <commonTitle :defaultSty="false"  :isShowIcon="false" :right="true" title="微小视"></commonTitle> -->
			<commonTitle :defaultSty="false"  :isShowIcon="false" :center="true" title="搜索"></commonTitle>
		</view>
		<!-- 导航栏 -->
		
		<!-- 搜索框 -->
		<view class="search-cont px-3" >
			<view class="position-relative">
				<input style="padding-left: 66rpx;box-sizing: border-box;" type="text" value="" placeholder="请输入关键字"/>
				<text style="top: 50%;transform: translateY(-50%);left: 20rpx"  class="position-absolute iconfont iconsousuo1"></text>
			</view>
		</view>
		<!-- 搜索框 -->
		<view class="bgffff position-relative  width-000 " style="top: -30rpx; border-radius: 10rpx 10rpx 0 0;">
			<!-- 搜索历史 -->
			<view class="px-2 mt-4">
				<view class="d-flex a-center j-sb">
					<view class="color-hui font-27">
						历史搜索
					</view>
					<view class="d-flex a-center j-center iconfont icondelete color-hui font-27 width-50 height-50">
						
					</view>
				</view>
				<view class="">
					<searchHotTab></searchHotTab>
				</view>
			</view>
			<!-- 搜索历史 -->
			
			<!-- 搜索历史 -->
			<view class="px-2 mt-4">
				<view class="d-flex a-center j-sb">
					<view class="color-hui font-27">
						热门搜索
					</view>
					<view @tap="isShowHot" :class="isShowHotData?'iconyanjing':'iconkanguo'" class="d-flex a-center j-center iconfont  color-hui font-27 width-50 height-50">
						
					</view>
				</view>
				<view class="" v-if="!isShowHotData">
					<searchHotTab></searchHotTab>
				</view>
				<view class="text-center font-30 color-hui mt-2" v-if="isShowHotData">
					当前热门搜索已隐藏
				</view>
			</view>
			<!-- 搜索历史 -->
			
		</view>
	</view>
</template>

<script>
	import searchHotTab from '@/components/search-hot-tab.vue'
	export default {
		components:{
			searchHotTab
		},
		data(){
			return {
				isShowHotData:false
			}
		},
		methods:{
			isShowHot(){
				this.isShowHotData = !this.isShowHotData
			}
		}
	}
</script>

<style>
	.search-cont{
		background: rgb(104, 132, 253);
		height: 110rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.search-cont view input,.search-cont view{
		height: 70rpx;
		width: 100%;
		
		border-radius: 50rpx;
		background: #fff;
	}
</style>
