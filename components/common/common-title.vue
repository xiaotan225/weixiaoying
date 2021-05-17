<template>
	<!-- 头部导航栏 -->
	<view class="aaaa">
		<!-- #ifdef MP-WEIXIN -->
		<view class="" :style="'height:'+navHeight+'px; line-height: '+navHeightLine+'px'">

		</view>
		<view @tap="backTap" class=" width-000 position-fixed top-0 z-index-1" :style="'height:'+navHeight+'px; line-height: '+navHeightLine+'px'">

			<view class="d-flex a-center header-nav-box " :style="themeBg?theme.bgColor:''">
				<view v-show="isShowIcon" class=" iconfont iconyoujiantou1 font-weight-700 position-absolute" style="left: 10rpx; font-size: 37rpx;color: #fff;">

				</view>
				<view class=" defaulTtitle " :class="titleClass" style="width: 100%;" :style="right?'text-align: left;width: 100%;margin-left:50rpx':center?'text-align: center;':''">
					{{title}}
				</view>
			</view>


		</view>

		<!-- #endif -->


		<!-- #ifdef H5 -->
		<view class="" :style="'height:'+navHeight+'px; line-height: '+navHeightLine+'px'">

		</view>
		<view @tap="backTap" :class="themeBg?'theme-bg':''" class="width-000 position-fixed top-0 z-index-1" :style="'height:'+navHeight+'px; line-height: '+navHeightLine+'px'">

			<view class="d-flex a-center header-nav-box1 " :style="themeBg?theme.bgColor:''">
				<view v-show="isShowIcon" class="iconfont iconyoujiantou1 font-weight-700 position-absolute" style="left: 10rpx; font-size: 37rpx;color: #fff;">

				</view>
				<view class=" defaulTtitle" :class="titleClass" style="width: 100%;" :style="right?'text-align: left;width: 100%;margin-left:50rpx':center?'text-align: center;':''">
					{{title}}
				</view>
			</view>
		</view>
		<!-- #endif -->

		<!-- #ifdef APP-PLUS -->
		<view class="" :style="'height:'+90+'px; line-height: '+120+'px'">

		</view>
		<view @tap="backTap" :class="themeBg?'theme-bg':''" class="width-000 position-fixed top-0 z-index-1" :style="'height:'+90+'px; line-height: '+120+'px'">

			<view class="d-flex a-center header-nav-box1 " :style="themeBg?theme.bgColor:''">
				<view v-show="isShowIcon" class="iconfont iconyoujiantou1 font-weight-700 position-absolute" style="height: 100%; left: 10rpx; font-size: 37rpx;color: #fff;">

				</view>

				<view  class=" defaulTtitle" :class="titleClass" style="width: 100%;height: 100%;" :style="right?'text-align: left;width: 100%;margin-left:50rpx':center?'text-align: center;':''">
					{{title}}
				</view>
			</view>
		</view>
		<!-- #endif -->





	</view>


</template>

<script>
	export default {

		props: {
			titleClass: {

			},
			// 默认背景
			themeBg: {
				type: Boolean,
				default: true
			},
			// 标题右居中
			right: {
				type: Boolean,
				default: false
			},
			// 标题居中
			center: {
				type: Boolean,
				default: false
			},
			// 是否有返回图标
			isShowIcon: {
				type: Boolean,
				default: true
			},
			// 标题内容
			title: {
				type: String,
				default: ''
			}

		},
		data() {
			return {
				navHeight: 0,
				navHeightLine: 0
			}
		},
		computed: {
			theme() {
				return this.$store.state.theme
			}
		},
		created() {


		},
		async mounted() {
			// #ifdef MP-WEIXIN 
			// 标题和胶囊对齐在一个水平线上
			var menu = wx.getMenuButtonBoundingClientRect()
			var system = await wx.getSystemInfo()
			// console.log(menu,'胶囊')
			// console.log(system,'系统')
			this.navHeight = system.statusBarHeight + menu.height + (menu.top - system.statusBarHeight) * 1
			this.navHeightLine = this.navHeight - 100
			this.navHeight += 10
			this.$store.commit('setNavHeight', this.navHeight)
			// console.log(this.navHeight)
			// #endif
			// #ifdef H5
			this.navHeight = this.navHeightLine = 50
			// #endif

		},
		methods: {
			backTap() {
				this.$U.backTap()
				this.$emit('backTap')
			}
		}
	}
</script>

<style>
	.header-nav-box {
		justify-items: flex-end;
		align-items: flex-end;
		padding-bottom: 15px;
		box-sizing: border-box;
		height: 100%;
		/* transition: background 0.8s ease-in 0.3s,color 0.6s ease-out 0.3s; */
		transition:all 0.5s ease-out;
	}
	.header-nav-box1 {
		
		box-sizing: border-box;
		height: 100%;
		/* transition: background 0.8s ease-in 0.3s,color 0.6s ease-out 0.3s; */
		transition:all 0.5s ease-out;
	}

/* 淡入-从上 */
@-webkit-keyframes fadeinT{
    0%{opacity:0;-webkit-transform:translateY(-100px);}
    100%{opacity:1;-webkit-transform:translateY(0);}
}
@-moz-keyframes fadeinT{
    0%{opacity:0;-moz-transform:translateY(-100px);}
    100%{opacity:1;-moz-transform:translateY(0);}
}
@-ms-keyframes fadeinT{
    0%{opacity:0;-ms-transform:translateY(-100px);}
    100%{opacity:1;-ms-transform:translateY(0);}
}
@keyframes fadeinT{
    0%{opacity:0;transform:translateY(-100px);}
    100%{opacity:1;transform:translateY(0);}
}

	.defaulTtitle {
		font-size: 37rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
	}

	.icon-backTap {
		font-size: 50rpx;
	}

	.top-title-h5 {
		padding: 20rpx 10rpx;
		background-color: #fff;
	}

	.top-title {
		background-color: #fff;
		line-height: 150rpx;
	}

	.top-title .title {
		position: relative;
	}
</style>
