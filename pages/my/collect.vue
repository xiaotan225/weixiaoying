<template>
	<view class="">
		<view class="">
			<commonTitle :defaultSty="false" :isShowIcon="true" :right="true" title="我的收藏"></commonTitle>
		</view>
		<view class="" :style="theme.bgColor" style="height: 35rpx;">

		</view>
		<view class="position-relative" style="top: -15rpx;">
			<view class="top-nav d-flex pt-2 a-center j-center">
				<view class="top-nav-cont  d-flex a-center j-center">
					<view @tap="cutTab(1)" :class="isCollect == 1?'active':''" class="d-flex a-center width-300  j-center" style="height: 70rpx;">
						<view class="iconfont iconshijian">

						</view>
						<view class="font-36">
							历史
						</view>
					</view>
					<view @tap="cutTab(2)" :class="isCollect == 2?'active1':''" class="d-flex a-center width-300 j-center" style="height: 70rpx;">
						<view class="iconfont iconwujiaoxing2">

						</view>
						<view class="font-36">
							收藏
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="">
			<commonList :list="list" @del="del" :type="isCollect"></commonList>
		</view>
		<view class="text-center font-30" v-if="list.length <= 0">
			暂无{{isCollect == 1?'历史':'收藏'}}
		</view>
		<load></load>
	</view>
</template>

<script>
	import commonList from "@/components/common/common-list.vue";
	var app = getApp()
	export default {
		components: {
			commonList
		},
		data() {
			return {
				isCollect: 2,
				list: [

				]
			}
		},
		computed: {
			theme() {
				return this.$store.state.theme
			}
		},
		onLoad() {},
		mounted() {
			if (this.isCollect == 1) {
				this.getCollectVod()
			}
		},

		methods: {
			del(item, index) {
				this.list.splice(index, 1)
			},
			// 获取用户收藏影片和播放记录
			async getCollectVod() {
				var db = app.globalData.db
				db.collection('userHistoryVodList').get().then(res => {
					this.list = res.data
				})
				// var data = await this.$api.getCollectVod({
				// 	type:this.isCollect
				// })
				// this.list = data.result
			},
			// tab切换
			cutTab(type) {
				this.list = []
				this.isCollect = type
				if (this.isCollect == 1) {
					this.getCollectVod()
				}
			}
		}
	}
</script>

<style>
	.top-nav-cont {
		width: 400rpx;
		border-radius: 50rpx;
		border: 1rpx solid #ccc;

	}

	.active {
		background: rgb(244, 157, 54);
		border-radius: 50rpx 0 0 50rpx;
		color: #fff;
	}

	.active1 {
		background: rgb(244, 157, 54);
		border-radius: 0 50rpx 50rpx 0;
		color: #fff;
	}

	.top-nav {
		background-color: #fff;
		height: 100rpx;
		border-radius: 15rpx 15rpx 0 0;
	}
</style>
