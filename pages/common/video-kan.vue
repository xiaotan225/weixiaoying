<template>
	<!-- 视频详情 -->
	<view class="">
		<!-- #ifdef MP-WEIXIN -->
			<view class="" v-if="item.type_id && videoDatails.vod_tag == 'zhangxiaoxiao' && videoDatails.vod_sub != 1">
				<load></load>
				<!-- 导航栏 -->
				<view class="width-000 " v-if="isShowVideo">
					<commonTitle :defaultSty="false" :isShowIcon="true" :right="true" :title="item.vod_name"></commonTitle>
				</view>
				<!-- 导航栏 -->
				<!-- 视频 -->
				<view class="" v-if="isShowVideo">
					<videoElement @playbackRateVod="playbackRateVod" ref="videoElement" :playbackRateList="playbackRateList" :src="playOrigin[collectCurrent].src"></videoElement>
				</view>
				<!-- 视频 -->
			
				<!-- 视频标题内容 -->
				<view class="px-3 mt-2">
					<view class="d-flex a-center j-sb">
						<view class="d-flex">
							<view class="d-flex a-center">
								<view class="iconfont iconyingban mr-1">
								</view>
								<view class="font-weight-700 font-30">
									{{item.vod_name}}
								</view>
							</view>
							<view class="color-red font-22 ml-2">
								{{item.vod_remarks}}
							</view>
						</view>
						<view class="" @tap="collect">
							<view class="iconfont " :class="isCollect?'iconshoucang color-red':'iconshoucang1'">
			
							</view>
						</view>
					</view>
				</view>
				<!-- 视频标题内容 -->
			
				<!--  -->
				<view class="px-3 my-5">
					<view class="d-flex a-center j-sb">
						<view @tap="opt(item,index)" class="d-flex flex-column a-center" v-for="(item,index) in optList" :key="index">
							<view v-if="index == 1">
								<view @tap="playbackRate" class="d-flex a-center">
									<view style="opacity: 0.8;font-size: 52rpx;color: #000000;" class="position-relative iconfont iconbeisu mr-1 ">
										<view class="position-absolute " style="font-size: 16rpx; right: -3rpx;top: 50%;transform: translate(-50%,-50%);">
											{{playbackRateList[playbackRateIndex]}}x
										</view>
									</view>
			
								</view>
							</view>
			
							<view class="iconfont " style="font-size: 52rpx;" v-if="index != 1" :class="item.src">
			
							</view>
							<!-- 	<view class="width-100 height-100">
								<image style="border-radius: 50%; width: 100%;height: 100%;" :src="item.src" mode=""></image>
							</view> -->
							<view class="color-hui font-27 mt-1" v-if="index !=3">
								{{item.name}}
							</view>
							<view v-if="index == 3" class="d-flex a-center flex-column j-center">
								<button open-type='contact' session-from="true" class="color-hui " id="button" style="width: 100%;text-align: left; padding: 0px;position: none;font-size: 27rpx;background: #fff;">
									反馈客服
								</button>
							</view>
						</view>
			
					</view>
			
				</view>
			
			
				<!-- 选集 -->
				<view class="px-3 d-flex a-center my-2">
					<view class="d-flex a-center">
						<view class="iconfont iconmianbaoxie color-red">
			
						</view>
						<view class="color-red font-27">
							选集
						</view>
					</view>
					<view class="d-flex a-center ml-3">
						<view @tap="playSourceTap(item,index)" :class="playSourceCurrent==index?'playSourceCurrent':''" class="px-5 py-1 mr-2 theme-border-r10"
						 v-for="(item,index) in playSource" :key="index">
							{{item}}
						</view>
					</view>
				</view>
			
			
				<view class="px-3">
			
					<view class="d-flex a-center" style="overflow: auto;">
						<view v-if="item.title" @tap="anthology(item,index)" :class="collectCurrent==index?'playSourceCurrentYes':'playSourceCurrentNo'"
						 class=" py-1 mr-2 theme-border-r10 playSourceCurrent1" v-for="(item,index) in playOrigin" :key="index">
							<view class="">
								{{item.title}}
							</view>
			
						</view>
					</view>
				</view>
				<!-- 选集 -->
			
			
			
				<!-- 影视介绍 -->
			
				<view class="mx-2 mt-3">
					<view class="d-flex a-center">
						<view class="iconfont iconjieshao font-30 mr-1">
			
						</view>
						<view class="font-30 font-weight-600">
							影片介绍
						</view>
					</view>
					<!-- 	<view v-show="!isShow" class="mt-2" style="color: rgb(153, 153, 153);">
					{{videoDatails.vod_blurb}}...
				</view> -->
					<view class="mt-2 " style="color: rgb(153, 153, 153);">
						{{videoDatails.vod_cont.length == 100?videoDatails.vod_cont+'...':videoDatails.vod_cont}}
					</view>
					<!-- <rich-text :nodes="videoDatails.vod_content"></rich-text> -->
					<view class="d-flex j-center mt-1" v-if="videoDatails.vod_content.length > 100" @tap="isShowEvent">
						<view class="d-flex a-center d-flex a-center">
							<view class="font-30" style="color: rgb(153, 153, 153);">
								{{isShow?'收起':'展开'}}
							</view>
							<view class="iconfont " :class="isShow?'iconshangjiantou':'iconxiajiantou1'" style="color: rgb(153, 153, 153);">
			
							</view>
						</view>
					</view>
				</view>
				
				<!-- 影视介绍 -->
			
			
			
			
			
			
			
			
			
			</view>
			
		<!-- #endif -->
		
		<!-- #ifdef APP-PLUS -->
			<view class="" >
				<load></load>
				<!-- 导航栏 -->
				<view class="width-000 " v-if="isShowVideo">
					<commonTitle :defaultSty="false" :isShowIcon="true" :right="true" :title="item.vod_name"></commonTitle>
				</view>
				<!-- 导航栏 -->
				<!-- 视频 -->
				<view class="" v-if="isShowVideo">
					<videoElement @playbackRateVod="playbackRateVod" ref="videoElement" :playbackRateList="playbackRateList" :src="playOrigin[collectCurrent].src"></videoElement>
				</view>
				<!-- 视频 -->
			
				<!-- 视频标题内容 -->
				<view class="px-3 mt-2">
					<view class="d-flex a-center j-sb">
						<view class="d-flex">
							<view class="d-flex a-center">
								<view class="iconfont iconyingban mr-1">
								</view>
								<view class="font-weight-700 font-30">
									{{item.vod_name}}
								</view>
							</view>
							<view class="color-red font-22 ml-2">
								{{item.vod_remarks}}
							</view>
						</view>
						<view class="" @tap="collect">
							<view class="iconfont " :class="isCollect?'iconshoucang color-red':'iconshoucang1'">
			
							</view>
						</view>
					</view>
				</view>
				<!-- 视频标题内容 -->
			
				<!--  -->
				<view class="px-3 my-5">
					<view class="d-flex a-center j-sb">
						<view @tap="opt(item,index)" class="d-flex flex-column a-center" v-for="(item,index) in optList" :key="index">
							<view v-if="index == 1">
								<view @tap="playbackRate" class="d-flex a-center">
									<view style="opacity: 0.8;font-size: 52rpx;color: #000000;" class="position-relative iconfont iconbeisu mr-1 ">
										<view class="position-absolute " style="font-size: 16rpx; right: -3rpx;top: 50%;transform: translate(-50%,-50%);">
											{{playbackRateList[playbackRateIndex]}}x
										</view>
									</view>
			
								</view>
							</view>
			
							<view class="iconfont " style="font-size: 52rpx;" v-if="index != 1" :class="item.src">
			
							</view>
							<!-- 	<view class="width-100 height-100">
								<image style="border-radius: 50%; width: 100%;height: 100%;" :src="item.src" mode=""></image>
							</view> -->
							<view class="color-hui font-27 mt-1" v-if="index !=3">
								{{item.name}}
							</view>
							<view v-if="index == 3" class="d-flex a-center flex-column j-center">
								<button open-type='contact' session-from="true" class="color-hui " id="button" style="width: 100%;text-align: left; padding: 0px;position: none;font-size: 27rpx;background: #fff;">
									反馈客服
								</button>
							</view>
						</view>
			
					</view>
			
				</view>
			
			
				<!-- 选集 -->
				<view class="px-3 d-flex a-center my-2">
					<view class="d-flex a-center">
						<view class="iconfont iconmianbaoxie color-red">
			
						</view>
						<view class="color-red font-27">
							选集
						</view>
					</view>
					<view class="d-flex a-center ml-3">
						<view @tap="playSourceTap(item,index)" :class="playSourceCurrent==index?'playSourceCurrent':''" class="px-5 py-1 mr-2 theme-border-r10"
						 v-for="(item,index) in playSource" :key="index">
							{{item}}
						</view>
					</view>
				</view>
			
			
				<view class="px-3">
			
					<view class="d-flex a-center" style="overflow: auto;">
						<view v-if="item.title" @tap="anthology(item,index)" :class="collectCurrent==index?'playSourceCurrentYes':'playSourceCurrentNo'"
						 class=" py-1 mr-2 theme-border-r10 playSourceCurrent1" v-for="(item,index) in playOrigin" :key="index">
							<view class="">
								{{item.title}}
							</view>
			
						</view>
					</view>
				</view>
				<!-- 选集 -->
			
			
			
				<!-- 影视介绍 -->
			
				<view class="mx-2 mt-3">
					<view class="d-flex a-center">
						<view class="iconfont iconjieshao font-30 mr-1">
			
						</view>
						<view class="font-30 font-weight-600">
							影片介绍
						</view>
					</view>
					<!-- 	<view v-show="!isShow" class="mt-2" style="color: rgb(153, 153, 153);">
					{{videoDatails.vod_blurb}}...
				</view> -->
					<view class="mt-2 " style="color: rgb(153, 153, 153);">
						{{videoDatails.vod_cont.length == 100?videoDatails.vod_cont+'...':videoDatails.vod_cont}}
					</view>
					<!-- <rich-text :nodes="videoDatails.vod_content"></rich-text> -->
					<view class="d-flex j-center mt-1" v-if="videoDatails.vod_content.length > 100" @tap="isShowEvent">
						<view class="d-flex a-center d-flex a-center">
							<view class="font-30" style="color: rgb(153, 153, 153);">
								{{isShow?'收起':'展开'}}
							</view>
							<view class="iconfont " :class="isShow?'iconshangjiantou':'iconxiajiantou1'" style="color: rgb(153, 153, 153);">
			
							</view>
						</view>
					</view>
				</view>
				
				<!-- 影视介绍 -->
			
			
			
			
			
			
			
			
			
			</view>
			
		<!-- #endif -->
		
		<!-- #ifdef H5 -->
			<view class="" >
				<load></load>
				<!-- 导航栏 -->
				<view class="width-000 " v-if="isShowVideo">
					<commonTitle :defaultSty="false" :isShowIcon="true" :right="true" :title="item.vod_name"></commonTitle>
				</view>
				<!-- 导航栏 -->
				<!-- 视频 -->
				<view class="" v-if="isShowVideo">
					<videoElement @playbackRateVod="playbackRateVod" ref="videoElement" :playbackRateList="playbackRateList" :src="playOrigin[collectCurrent].src"></videoElement>
				</view>
				<!-- 视频 -->
			
				<!-- 视频标题内容 -->
				<view class="px-3 mt-2">
					<view class="d-flex a-center j-sb">
						<view class="d-flex">
							<view class="d-flex a-center">
								<view class="iconfont iconyingban mr-1">
								</view>
								<view class="font-weight-700 font-30">
									{{item.vod_name}}
								</view>
							</view>
							<view class="color-red font-22 ml-2">
								{{item.vod_remarks}}
							</view>
						</view>
						<view class="" @tap="collect">
							<view class="iconfont " :class="isCollect?'iconshoucang color-red':'iconshoucang1'">
			
							</view>
						</view>
					</view>
				</view>
				<!-- 视频标题内容 -->
			
				<!--  -->
				<view class="px-3 my-5">
					<view class="d-flex a-center j-sb">
						<view @tap="opt(item,index)" class="d-flex flex-column a-center" v-for="(item,index) in optList" :key="index">
							<view v-if="index == 1">
								<view @tap="playbackRate" class="d-flex a-center">
									<view style="opacity: 0.8;font-size: 52rpx;color: #000000;" class="position-relative iconfont iconbeisu mr-1 ">
										<view class="position-absolute " style="font-size: 16rpx; right: -3rpx;top: 50%;transform: translate(-50%,-50%);">
											{{playbackRateList[playbackRateIndex]}}x
										</view>
									</view>
			
								</view>
							</view>
			
							<view class="iconfont " style="font-size: 52rpx;" v-if="index != 1" :class="item.src">
			
							</view>
							<!-- 	<view class="width-100 height-100">
								<image style="border-radius: 50%; width: 100%;height: 100%;" :src="item.src" mode=""></image>
							</view> -->
							<view class="color-hui font-27 mt-1" v-if="index !=3">
								{{item.name}}
							</view>
							<view v-if="index == 3" class="d-flex a-center flex-column j-center">
								<button open-type='contact' session-from="true" class="color-hui " id="button" style="width: 100%;text-align: left; padding: 0px;position: none;font-size: 27rpx;background: #fff;">
									反馈客服
								</button>
							</view>
						</view>
			
					</view>
			
				</view>
			
			
				<!-- 选集 -->
				<view class="px-3 d-flex a-center my-2">
					<view class="d-flex a-center">
						<view class="iconfont iconmianbaoxie color-red">
			
						</view>
						<view class="color-red font-27">
							选集
						</view>
					</view>
					<view class="d-flex a-center ml-3">
						<view @tap="playSourceTap(item,index)" :class="playSourceCurrent==index?'playSourceCurrent':''" class="px-5 py-1 mr-2 theme-border-r10"
						 v-for="(item,index) in playSource" :key="index">
							{{item}}
						</view>
					</view>
				</view>
			
			
				<view class="px-3">
			
					<view class="d-flex a-center" style="overflow: auto;">
						<view v-if="item.title" @tap="anthology(item,index)" :class="collectCurrent==index?'playSourceCurrentYes':'playSourceCurrentNo'"
						 class=" py-1 mr-2 theme-border-r10 playSourceCurrent1" v-for="(item,index) in playOrigin" :key="index">
							<view class="">
								{{item.title}}
							</view>
			
						</view>
					</view>
				</view>
				<!-- 选集 -->
			
			
			
				<!-- 影视介绍 -->
			
				<view class="mx-2 mt-3">
					<view class="d-flex a-center">
						<view class="iconfont iconjieshao font-30 mr-1">
			
						</view>
						<view class="font-30 font-weight-600">
							影片介绍
						</view>
					</view>
					<!-- 	<view v-show="!isShow" class="mt-2" style="color: rgb(153, 153, 153);">
					{{videoDatails.vod_blurb}}...
				</view> -->
					<view class="mt-2 " style="color: rgb(153, 153, 153);">
						{{videoDatails.vod_cont.length == 100?videoDatails.vod_cont+'...':videoDatails.vod_cont}}
					</view>
					<!-- <rich-text :nodes="videoDatails.vod_content"></rich-text> -->
					<view class="d-flex j-center mt-1" v-if="videoDatails.vod_content.length > 100" @tap="isShowEvent">
						<view class="d-flex a-center d-flex a-center">
							<view class="font-30" style="color: rgb(153, 153, 153);">
								{{isShow?'收起':'展开'}}
							</view>
							<view class="iconfont " :class="isShow?'iconshangjiantou':'iconxiajiantou1'" style="color: rgb(153, 153, 153);">
			
							</view>
						</view>
					</view>
				</view>
				
				<!-- 影视介绍 -->
			
			
			
			
			
			
			
			
			
			</view>
			
		<!-- #endif -->
		
		
			<popUpModel ref="popUpModel" :customStyle="'top:80%;width:100%'">
		
					<view class="p-3">
		
						<view class="d-flex a-center flex-wrap" style="">
							<view @tap="anthology(item,index)" style="width: 22.7%;margin: 0 15rpx 15rpx 0;" :class="collectCurrent==index?'playSourceCurrentYes':'playSourceCurrentNo'"
							 class="theme-border-r10 playSourceCurrent2" v-for="(item,index) in playOrigin" :key="index">
								{{item.title}}
							</view>
						</view>
					</view>
				</popUpModel>
	</view>
	
	
	



</template>

<script>
	import commonListFill from "@/components/common/common-list-fill.vue";
	import popUpModel from "@/components/common/pop-up-model.vue";
	import videoElement from "@/components/video-element.vue";
	import h5Copy from "@/js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js";
	export default {
		components: {
			commonListFill,
			popUpModel,
			videoElement
		},
		data() {
			return {
				playbackRateList: ['0.5', '0.8', '1.0', '1.2', '1.5', '2.0'],
				playbackRateIndex: 0,
				// 操作选项列表
				optList: [
					// {
					// 	name: '分享提速',
					// 	src: '/static/demo.jpg'
					// },
					{
						name: '选集列表',
						src: 'iconziyuan'
					},
					{
						name: '倍速播放',
						src: 'iconbeisu'
					},
					{
						name: '链接播放',
						src: 'iconshare_link'
					},
					{
						name: '客服反馈',
						src: 'iconkefu1'
					}
				],
				item: "",
				playSourceCurrent: 0,
				// 线路
				playSource: [

				],
				collectCurrent: 0,
				optCollect: {

				},
				// 播放来源
				playOrigin: [],
				videoDatails: {
					vod_cont: [],
					vod_content: []
				},
				tempVodCont: '',
				isShow: false,
				isCollect: false,
				videoContext: {},
				videoSrc: '',
				isShowVideo: false,

				index: ""

			}
		},

		computed: {
			isShowKan() {
				// return this.$store.state.vodClassify.isShow
				return false
			},
			userInfo() {
				return {
					info: this.$store.state.user.userInfo,
					token: this.$store.state.user.token,
					isWx: this.$store.state.user.isWx
				}
			},
		},
		onLoad(e) {
			// item={"type_id":1,"vod_actor":"塞思·麦克法兰,马克·沃尔伯格,阿曼达·塞弗里德,杰西卡·巴斯","vod_hits":1,"vod_id":26378,"vod_level":1,"vod_name":"泰迪熊2","vod_pic":"https://img.yongjiu7.com/upload/vod/2019-01-17/15477307180.jpg","vod_remarks":"BD高清","vod_score":0,"vod_year":"2015"}&__id__=2
			let item = e.item
			this.item = JSON.parse(item)
			// 获取视频详情资源
			this.getVideoDatails()
			this.isCollectVod()
			
			// // 通过 id 获取 nvue 子窗体  
			// const subNVue = uni.getSubNVueById('concat')  
			// // 打开 nvue 子窗体  
			// subNVue.show('slide-in-left', 300, function(){  
			//     // 打开后进行一些操作...  
			//     //   
			// });  
			// 关闭 nvue 子窗体  
			// subNVue.hide('fade-out', 300)
			
		},
		mounted() {
			// var videoContext = uni.createVideoContext('myvideo', this);
			// console.log(videoContext)
			//  videoContext.play();

			// var video = document.createElement('myVideo')
			// this.playbackRateIndex = this.$refs.videoElement.$data.playbackRateIndex
			// console.log(this)

		},
		methods: {
			hint() {
				this.fuzhi()
				// uni.setClipboardData({
				// 	data: this.playOrigin[this.collectCurrent].src,
				// 	success(res) {
				// 		wx.getClipboardData({
				// 			success(res) {}
				// 		})
				// 	}
				// })
			},
			playbackRateVod(index) {
				this.playbackRateIndex = index
			},
			playbackRate() {
				this.$refs.videoElement.playbackRate()
				this.playbackRateIndex = this.$refs.videoElement.$data.playbackRateIndex
			},
			opt(item, index) {
				if (index == 0) {
					// 选集列表
					this.$refs.popUpModel.open()

				} else if (index == 1) {
					// 倍速播放
				} else if (index == 2) {
					this.fuzhi()

				}
			},
			fuzhi() {
				if (this.userInfo.isWx || !window) {
					// 微信环境
					uni.setClipboardData({
						data: this.playOrigin[this.collectCurrent].src,
						success(res) {
							console.log(res)
							wx.showToast({
								title: "复制成功 请到浏览器播放",
								icon: 'none',
								duration: 4000
							})
						}
					})
					return
				}


				let content = this.playOrigin[this.collectCurrent].src // 复制内容，必须字符串，数字需要转换为字符串
				const result = h5Copy(content)
				if (result === false) {
					uni.showToast({
						title: '不支持',
					})
				} else {
					uni.showToast({
						title: '复制成功',
						icon: 'none'
					})
				}
			},
			// 点击播放
			play(e) {},
			async isCollectVod() {
				var data = await this.$api.isCollectVod({
					vod_id: this.item.vod_id,
				})
				this.isCollect = data.result
			},
			// 收藏
			async collect() {
				if (!this.userInfo.token) {
					uni.showModal({
						title: '提示',
						content: '没有登录，是否请授权登录',
						success: (res) => {
							if (res.confirm) {
								// 获取用户信息
								// this.$U.navTo('/pages/my/my')
								uni.switchTab({
									url: '/pages/my/my'
								})

							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
					return
				}
				this.isCollect = !this.isCollect
				var data = await this.$api.collectVod({
					vod_id: this.item.vod_id,
					isCollect: this.isCollect,
					type: 1
				})
			},
			// 影片介绍文字是否展示全部
			isShowEvent() {
				this.isShow = !this.isShow
				if (this.isShow) {
					this.videoDatails.vod_cont = this.videoDatails.vod_content
				} else {
					this.videoDatails.vod_cont = this.tempVodCont
				}
				// this.videoDatails = Object.assign({},this.videoDatails)
			},
			// 选集
			async anthology(item, index) {
				this.collectCurrent = index
				let houzhui = this.playOrigin[this.collectCurrent].src.split('.')
				if (houzhui[houzhui.length - 1].indexOf('3u8') == -1) {
					// url 特殊处理 返回 m3u8格式视频
					this.getURL(this.playOrigin[this.collectCurrent])
				}


			},
			// 特殊视频播放地址（后缀名）
			async getURL(item) {
				var res = await this.$api.getURL({
					url: item.src
				})
				this.playOrigin[this.collectCurrent].src = res.url
				this.playOrigin = Object.assign({}, this.playOrigin)

			},
			// 切换播放源
			playSourceTap(item, index) {
				// 无线路防止报错
				if(!this.optCollect[index]){
					uni.showToast({
					    title: '暂无资源',
					    duration: 2000,
						icon:"none"
					});
					return
				}
				this.playSourceCurrent = index
				this.playOrigin = this.optCollect['playOrigin' + index]
				// console.log(item,index)
			},
			// 分解URL播放地址
			resolveURL(type) {
				// 获取URL
				var tempDataVodTypeURL = this.videoDatails.vod_play_url.split('$$$')
				// 根据视频类型做 不同的 切割 URL
				tempDataVodTypeURL.forEach((item, index) => {
					if (type == 1) {
						// 电影
						var sourceItem = item.split('$')
					} else if (type == 2 || type == 3 || type == 4) {
						// 电视剧 // 综艺  // 动漫 
						var sourceItem1 = item.split('#')
						var sourceItemJoin = sourceItem1.join('$')
						var sourceItem = sourceItemJoin.split('$')
					}
					var urls = sourceItem.filter(item1 => {
						if (item1.indexOf('http') != -1) {
							return item
						}
					})
					var names = sourceItem.filter(item1 => {
						if (item1.indexOf('http') == -1) {
							return item
						}
					})
					// 创建选集数据列表
					this.optCollect["playOrigin" + index] = []
					// url和name全部push到 选集数据列表
					urls.forEach((item2, index2) => {
						this.optCollect["playOrigin" + index].push({
							title: names[index2],
							src: urls[index2]
						})
					})

				})
				this.playOrigin = this.optCollect['playOrigin' + this.playSourceCurrent]
				// setInterval(()=>{
				// 	var test =  this.videoContext.play()
				// 	console.log(test)
				// },500)

			},
			// 获取视频详情
			async getVideoDatails() {
				var data = await this.$api.getVideoDatails({
					vodid: this.item.vod_id
				})
				this.videoDatails = data.data[0]
				this.videoDatails.vod_cont = this.tempVodCont = data.data[0].vod_content.slice(0, 100)
				// 播放源（解析线路）
				this.playSource = this.videoDatails.vod_play_from.split('$$$')

				/* 0: "kuyun"
1: 					1:"ckm3u8" */
				var videoTypeId = this.videoDatails.type_id

				if (videoTypeId == 1) {
					// 电影
					this.resolveURL(1)

				} else if (videoTypeId == 2) {
					// 电视剧
					this.resolveURL(2)

				} else if (videoTypeId == 3) {
					// 综艺 
					this.resolveURL(3)

				} else if (videoTypeId == 4) {
					// 动漫
					this.resolveURL(4)
				}
				let houzhui = this.playOrigin[this.collectCurrent].src.split('.')
				if (houzhui[houzhui.length - 1].indexOf('3u8') == -1) {
					// url 特殊处理 返回 m3u8格式视频
					this.getURL(this.playOrigin[this.collectCurrent])
				}
				// 防止H5+ 视频播放地址拿不到报错
				setTimeout(() => {
					this.isShowVideo = true
				}, 300)

				// var playSourceStr = this.playSource.join(',')
				// for(var i=0; i<this.playSource.length; i++){
				// 	if(this.playSource[i].indexOf('3u8') == -1){
				// 		console.log(this.playSource[i])
				// 		
				// 		return
				// 	}
				// }

				// if (this.playSourceCurrent > 0) {
				// 	this.getURL(this.playOrigin[this.collectCurrent])
				// }


			}


		}
	}
</script>

<style>
	.xianzhi1 {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		word-break: break-all;
	}

	.xianzhi {
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 5;
		line-clamp: 5;
		-webkit-box-orient: vertical;

	}


	.vod-box-deom {
		width: 100%;
		height: 150px;
		background: #000000;
	}

	.vod-box-deom>view {
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		font-size: 30px;

	}

	#button {
		display: inline-block;
	}

	button::after {
		border: none !important;
	}

	.playSourceCurrent {
		color: rgb(246, 187, 49);
		font-size: 30rpx;
		/* 	background: rgb(69, 80, 106);
		color: #fff;
		font-size: 27rpx; */
	}

	.playSourceCurrent1 {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000;

		padding: 20rpx 30rpx;
		white-space: nowrap;
	}

	.playSourceCurrent2 {
		width: 25%;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.playSourceCurrentYes {
		background: rgb(255, 204, 64);

	}

	.playSourceCurrentNo {
		background: rgb(222, 222, 222);

	}

	button::after {
		border: none !important;
	}
	
</style>
