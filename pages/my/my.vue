<template>
	<!-- 个人中心-我的 -->
	<view class="">
		<view class="position-relative" style="width: 100%;height: 430rpx;z-index: 9999;">
			<image class="width-000 height-000 position-absolute " style="z-index: 1;" src="../../static/images/bg.jpg" mode=""></image>
			<view v-if="userInfo.info.nick_name" class="" style="position: absolute; transform: translate(-50%,-50%);left: 52%;top: 84%;z-index: 999;color: #fff;">
				越努力，越幸运~
			</view>
			<view v-if="userInfo.token" class="d-flex a-center j-center flex-column position-absolute mt-2 site">
				<view class=" " style="width: 130rpx;height: 130rpx;">
					<image class="width-000 height-000" style="border-radius: 50%;" :src="userInfo.info.avatar_url" mode=""></image>
				</view>
				<view class="color-fff font-30 mt-1">
					{{userInfo.info.nick_name}}
				</view>
				<!-- 	<view class="color-fff font-30 mt-2">
					等级：Lv1
				</view> -->
			</view>

			<button v-if="!userInfo.token" @tap="login" class="login-btn ma-t30 site test" openType="getUserInfo" lang="zh_CN"
			 bindgetuserinfo="authorLogin">
				点击授权，登录
			</button>
			<view class="width-000 height-100 position-absolute" style="bottom: -30rpx;">
				<image class="width-000 height-000" src="../../static/my/wave1.gif" mode=""></image>
			</view>
		</view>
		<view class="bgffff" style="height: 100rpx;">

		</view>
		<!-- 最近浏览 -->
		<view class="browse-box px-2" style="box-sizing: border-box;">
			<view class="d-flex a-center">
				<view style="color: rgb(244, 146, 70);" class="iconfont iconkanguo mr-2 font-30">

				</view>
				<view class="font-30" style="color: rgb(244, 146, 70);">
					最近浏览
				</view>
			</view>
			<view class="text-center py-3" v-if="videoList.length <= 0">
				暂无浏览
			</view>
			<scroll-view v-else scroll-x="true" style="height:210rpx;display: flex;">
				<view class="video-box">
					<view class="d-flex  video-list pt-2 pb-2">
						<view class="video-item d-flex flex-column" @tap="toDetails(item,index)" v-for="(item,index) in videoList" :key="index">
							<view class="width-000 position-relative" style="height: 160rpx">
								<loadImg :loadSrc="item.vod_pic"></loadImg>
								<!-- <image class="width-000 height-000" style="width: 110rpx;" :src="item.vod_pic" mode=""></image> -->
								<view :style="theme.bgColor" class="position-absolute score d-flex a-center j-center" style="">
									<!-- {{item.vod_score.toFixed(1)}} -->
									{{item.vod_score}}
								</view>
							</view>
							<view class="text-center width-000 font-22" style="width: 110rpx;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;margin-top: 5rpx;">
								{{item.vod_name}}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>

		</view>
		<!-- 最近浏览 -->
		<view class=" mt-4  bgffff">
			<view class="d-flex a-center j-sb px-2 height-100 " style="border-bottom: 1rpx solid #ebebeb;">
				<view class="d-flex a-center" style="width: 100%;">
					<view class="iconfont iconkefu mr-2 font-30">

					</view>
					<button open-type='contact' session-from="true" class="color-hui " id="button" style="width: 100%;text-align: left; padding: 0px;position: none;font-size: 32rpx;background: #fff;">
						客服
					</button>
				</view>
				<view class="iconfont iconyoujiantou font-30">

				</view>
			</view>
			<view @tap="toCollect" class="d-flex a-center j-sb px-2 height-100 " style="border-bottom: 1rpx solid #ebebeb;">
				<view class="d-flex a-center">
					<view class="iconfont iconshoucang mr-2 font-30">

					</view>
					<view class="color-hui " style="font-size: 32rpx;">
						我的收藏
					</view>
				</view>
				<view class="iconfont iconyoujiantou font-30">

				</view>
			</view>
			<view @tap="toZhuti" class="d-flex a-center j-sb px-2 height-100 " style="border-bottom: 1rpx solid #ebebeb;">
				<view class="d-flex a-center">
					<view class="iconfont iconzhuti mr-2 font-30">
			
					</view>
					<view class="color-hui " style="font-size: 32rpx;">
						我的主题
					</view>
				</view>
				<view class="iconfont iconyoujiantou font-30">
			
				</view>
			</view>
			<view @tap="toFeedbackIssue" class="d-flex a-center j-sb px-2 height-100 " style="border-bottom: 1rpx solid #ebebeb;">
				<view class="d-flex a-center">
					<view class="iconfont iconfankuiyijian mr-2 font-30">

					</view>
					<view class="color-hui " style="font-size: 32rpx;">
						意见反馈
					</view>
				</view>
				<view class="iconfont iconyoujiantou font-30">

				</view>
			</view>

			<view class="d-flex a-center j-sb px-2 height-100 " style="border-bottom: 1rpx solid #ebebeb;">
				<view class="d-flex a-center">
					<view class="iconfont iconguanyu mr-2 font-30">

					</view>
					<view class="color-hui " style="font-size: 32rpx;">
						关于我们
					</view>
				</view>
				<view class="iconfont iconyoujiantou font-30">

				</view>
			</view>
		</view>
		<load></load>
	</view>
</template>

<script>
	import commonListFill from "@/components/common/common-list-fill.vue";
	import loadImg from '@/components/load-img.vue'
	const app = getApp();
	export default {
		components: {
			commonListFill,
			loadImg
		},
		data() {
			return {
				videoList: [],
				num: 1
			}
		},
		computed: {
			theme(){
					return this.$store.state.theme
			},
			userInfo() {
				return {
					info: this.$store.state.user.userInfo,
					token: this.$store.state.user.token,
					isWx: this.$store.state.user.isWx
				}
			}
		},
		mounted() {
			// setTimeout(()=>{
			// 	this.getCollectVod()
			// },500)
		},
		onShow() {
			// 微信环境
			var tempTime = setInterval(() => {
				if (this.userInfo.token || this.num >= 6) {
					this.getCollectVod()
					clearInterval(tempTime)
				}
				this.num++
			}, 500)
			
			// H5环境
			// #ifdef H5
			console.log(this.userInfo.token)
			if (!this.userInfo.token) {
				uni.navigateTo({
					url: "/pages/my/login/login"
				})
			}
			// #endif
			
			// #ifdef APP-PLUS
			if (!this.userInfo.token) {
				uni.navigateTo({
					url: "/pages/my/login/login"
				})
			}
			// #endif



		},
		methods: {
			toZhuti(){
				this.$U.navTo('/pages/my/theme')
			},
			// 视频详情
			toDetails(item, index) {
				this.$U.navTo('/pages/common/video-details?item=' + JSON.stringify(item))
			},
			// 获取用户收藏影片和播放记录
			async getCollectVod() {
				var db = app.globalData.db
				db.collection('userHistoryVodList').get().then(res=>{
					console.log(res)
					this.videoList = res.data
				})
				// var data = await this.$api.getCollectVod({
				// 	type: 1
				// })
			},
			// 问题反馈
			toFeedbackIssue() {
				this.$U.navTo('/pages/my/feedback-issue')
			},
			// 我的收藏
			toCollect() {
				this.$U.navTo('/pages/my/collect')
			},
			authorLogin(e) {},
			login() {
				
		
			
				this.$store.dispatch('wxLogin')
			
				// 获取用户信息
				// wx.getUserProfile({
				// 	desc: '用户授权',
				// 	success:  (infoRes) => {
				// 		console.log(infoRes)
						
				// 		db.collection('annunciate').add({
				// 		  // data 字段表示需新增的 JSON 数据
				// 		  data: infoRes.userInfo
				// 		})
				// 		.then(res => {
				// 		  console.log(res)
				// 		})
						
				
				// 	}
				// });
				
			
			
				
				
				
				// 获取用户信息
				// uni.login({
				// 	provider: 'weixin',
				// 	scopes: 'auth_base',
				// 	success: async (loginRes) => {
				// 		var code = loginRes.code

				// 		uni.getUserInfo({
				// 			withCredentials: true,
				// 			success: async (res) => {
				// 				var data = await this.$api.test({
				// 					encryptedData: res.encryptedData,
				// 					iv: res.iv,
				// 					code: code
				// 				})
				// 			}
				// 		})

				// 	}
				// });



				// 	uni.login({
				// 		provider: 'weixin',
				// 		success: async (loginRes) => {
				// 			var code = loginRes.code
				// 			uni.getUserInfo({
				// 				provider: 'weixin',
				// 				lang:"zh_CN",
				// 				success: async (infoRes)=> {
				// 					var data = await this.$api.wxUserLogin({
				// 						code: loginRes.code,
				// 						userInfo:infoRes.userInfo,
				// 					})
				// 					if(data.code == 1){
				// 						uni.setStorageSync('userInfo',JSON.stringify(data.result))
				// 						uni.setStorageSync('token',JSON.stringify(data.token))
				// 						this.$store.commit('initUser')
				// 						this.getCollectVod()
				// 					}else{
				// 						uni.setStorageSync('userInfo','')
				// 						uni.setStorageSync('token','')
				// 					}
				// 				}
				// 			});



				// 		}
				// 	});


			}


		}

	}
</script>

<style>
	page {
		background: #efefef;
	}

	#button {
		display: inline-block;
	}

	button:after {
		border: none !important;
	}

	.site {
		z-index: 2;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.browse-box {
		width: 100%;
		background: #fff;
		box-shadow: 0 10rpx 10rpx rgba(0, 0, 0, 0.2);
		padding-bottom: 20rpx;
	}


	.video-list .video-item {
		margin-right: 20rpx;
		margin-bottom: 20rpx;
		height: 250rpx;
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

	.test {
		background-image: -webkit-linear-gradient(left, #ff0, #dd524d 25%, #bdcd34 50%, #dd524d 75%, #ff0);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		-webkit-background-size: 200% 100%;
		-webkit-animation: masked-animation 3s infinite linear;
		border: 0;
		font-size: 33rpx;

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
