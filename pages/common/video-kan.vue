<template>
	<!-- 视频详情 -->
	<view class="">
		<!-- 导航栏 -->
		<view class="width-000 ">
			<commonTitle :defaultSty="false" :isShowIcon="true" :right="true" :title="item.vod_name"></commonTitle>
		</view>
		<!-- 导航栏 -->
		<!-- 视频 -->
		<view class="position-relative" style="height: 353rpx;width: 100%;">

			<video id="myVideo" style="height: 353rpx;width: 100%;" controls="controls" show-casting-button="true" page-gesture
			 play-btn-position="center" enable-play-gesture :object-fit="fill" @play="play" @loadedmetadata="loadedmetadata"
			 @waiting="waiting" @error="error" @timeupdate="timeupdate" @controlstoggle="controlstoggle" @fullscreenclick="fullscreenclick"
			 @fullscreenchange="fullscreenchange" :title="item.vod_name" :src="playOrigin[collectCurrent].src">
				<cover-view>
					<view class="font-36 color-fff position-absolute test" style="z-index: 9999; top: 80%;left: 50%;transform: translate(-50%,-50%);">
						{{VodLoadText}}
					</view>
					<view v-show="isShowControl" class="position-absolute" style="right: 30rpx;top: 40%;transform: translateY(-50%);">
						<view @tap="fillTap" class="d-flex a-center">
							<view :style="fill == 'fill'?'':'transform: rotate(180deg);'" class="iconfont iconright color-fff mr-1 font-22">

							</view>
							<view :style="fill == 'fill'?'':'transform: rotate(-180deg);'" class="iconfont icondown-jiantou-right color-fff font-22">

							</view>
						</view>
					</view>
					<view v-show="isShowControl" class="position-absolute" style="right: 10rpx;top: 62%;transform: translateY(-50%);">
						<view @tap="playbackRate" class="d-flex a-center">
							<view style="opacity: 0.8;font-size: 70rpx;" class="position-relative iconfont iconbeisu color-fff mr-1 ">
								<view class="position-absolute font-22" style="right: -3rpx;top: 50%;transform: translate(-50%,-50%);">
									{{playbackRateList[playbackRateIndex]}}x
								</view>
							</view>

						</view>
					</view>
					<view v-show="isShowControl">
						<view class="d-flex a-center">

							<!-- :style="fill == 'fill'?'':'transform: rotate(180deg);'"  -->
							<view @tap="speed('jian')" class="position-absolute" style=" right: 60%;top: 50%;transform: translate(-50%,-50%);">
								<view class="iconfont iconkuaijin color-fff mr-1 " style="font-size: 70rpx;  transform: rotate(180deg);">

								</view>
							</view>
							<!-- :style="fill == 'fill'?'':'transform: rotate(-180deg);'" -->
							<view @tap="speed('jia')" class="iconfont iconkuaijin1 color-fff  position-absolute" style="font-size: 80rpx; left: 72%;top: 50%;transform: translate(-50%,-50%);">

							</view>
						</view>
					</view>
				</cover-view>

			</video>

			<view class="font-36 color-fff position-absolute test" style="z-index: 9999; top: 80%;left: 50%;transform: translate(-50%,-50%);">
				{{VodLoadText}}
			</view>
			<view v-show="isShowControl" class="position-absolute" style="right: 30rpx;top: 40%;transform: translateY(-50%);">
				<view @tap="fillTap" class="d-flex a-center">
					<view :style="fill == 'fill'?'':'transform: rotate(180deg);'" class="iconfont iconright color-fff mr-1 font-22">

					</view>
					<view :style="fill == 'fill'?'':'transform: rotate(-180deg);'" class="iconfont icondown-jiantou-right color-fff font-22">

					</view>
				</view>
			</view>

			<view v-show="isShowControl" class="position-absolute" style="right: 10rpx;top: 62%;transform: translateY(-50%);">
				<view @tap="playbackRate" class="d-flex a-center">
					<view style="opacity: 0.8;font-size: 70rpx;" class="position-relative iconfont iconbeisu color-fff mr-1 ">
						<view class="position-absolute font-22" style="right: -3rpx;top: 50%;transform: translate(-50%,-50%);">
							{{playbackRateList[playbackRateIndex]}}x
						</view>
					</view>

				</view>
			</view>


			<view v-show="isShowControl">
				<view class="d-flex a-center">

					<!-- :style="fill == 'fill'?'':'transform: rotate(180deg);'"  -->
					<view @tap="speed('jian')" class="position-absolute" style=" right: 60%;top: 50%;transform: translate(-50%,-50%);">
						<view class="iconfont iconkuaijin color-fff mr-1 " style="font-size: 70rpx;  transform: rotate(180deg);">

						</view>
					</view>
					<!-- :style="fill == 'fill'?'':'transform: rotate(-180deg);'" -->
					<view @tap="speed('jia')" class="iconfont iconkuaijin1 color-fff  position-absolute" style="font-size: 80rpx; left: 72%;top: 50%;transform: translate(-50%,-50%);">

					</view>
				</view>
			</view>




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
				<view @tap="anthology(item,index)" :class="collectCurrent==index?'playSourceCurrentYes':'playSourceCurrentNo'"
				 class=" py-1 mr-2 theme-border-r10 playSourceCurrent1" v-for="(item,index) in playOrigin" :key="index">
					{{item.title}}
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

		<view>

		</view>
		<!-- 影视介绍 -->

		<popUpModel ref="popUpModel" :customStyle="'top:80%;width:100%'">

			<view class="p-3">

				<view class="d-flex a-center flex-wrap" style="">
					<view @tap="anthology(item,index)" :class="collectCurrent==index?'playSourceCurrentYes':'playSourceCurrentNo'"
					 class="mb-2 py-1 mr-2 theme-border-r10 playSourceCurrent1" v-for="(item,index) in playOrigin" :key="index">
						{{item.title}}
					</view>
				</view>
			</view>
		</popUpModel>
		<!-- 下面暂时没有用 -->

		<!-- 发布弹幕 -->
		<!-- <view class="d-flex a-center px-2 width-000 position-relative" style="top: -20rpx; background: rgb(212, 212, 212); height: 80rpx;">
			<view style="width: 83%;">
				<input class="width-000" type="text" value="" placeholder="发个弹幕聊一聊" />
			</view>
			<view class="py-1 px-2 font-27 bg-19A0F0 color-fff theme-border-r10">
				发送
			</view>
		</view>
		 -->
		<!-- 发布弹幕 -->
		<!-- 播放源 -->
		<!-- <view class="mt-5 mx-2">
			<view class="my-2 font-27" style="color: rgb(255, 87, 34);">
				播放源
			</view>
			<view class="d-flex a-center">
				<view @tap="playSourceTap(item,index)" :class="playSourceCurrent==index?'playSourceCurrent':''" class="px-5 py-1 mr-2 theme-border-r10" v-for="(item,index) in playSource"
				 :key="index">
					{{item}}
				</view>
			</view>
		</view>
		 -->
		<!-- 播放源 -->


		<!-- 选集 -->
		<!-- 	<view class="mt-5 mx-2">
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
			<view >
			<scroll-view scroll-x="true" style="height:100px;display: flex;">
				<view class="">
					<view class="d-flex">
							<view @tap="anthology(item,index)" :class="collectCurrent==index?'playSourceCurrent1':''" class="mx-5 py-1 mr-2 theme-border-r10" v-for="(item,index) in playOrigin"
							 :key="index">
								{{item.title}}
							</view>
					</view>
				</view>
				</scroll-view>
			</view>
		</view>
		 -->
		<!-- 选集 -->

		<!-- 简介 -->
		<!-- <view class="mt-3">
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
		 -->

		<!-- 简介 -->

		<!-- 为你推荐 -->
		<!-- <view class="px-2 mt-3">
			<view class="font-33 mb-2" style="color: rgb(102, 102, 102);">
				为你推荐
			</view>
			<view class="">
				<commonListFill></commonListFill>
			</view>
		</view>
		 -->

		<!-- 为你推荐 -->


	</view>
</template>

<script>
	import commonListFill from "@/components/common/common-list-fill.vue";
	import popUpModel from "@/components/common/pop-up-model.vue";

	export default {
		components: {
			commonListFill,
			popUpModel
		},
		data() {
			return {
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
				item: {},
				playSourceCurrent: 0,
				playSource: [
					'线路1',
					'线路2',
					'线路3',
				],
				collectCurrent: 0,
				optCollect: {

				},
				playOrigin: [],
				videoDatails: {},
				tempVodCont: '',
				isShow: false,
				isCollect: false,
				videoContext: {},
				VodLoadText: '正在解析影片请稍等',
				isShowControl: false,
				fill: 'contain',
				playbackRateIndex: 2,
				playbackRateList: ['0.5', '0.8', '1.0', '1.2', '1.5', '2.0'],
				currentTimeVod: 0

			}
		},
		computed: {
			userInfo() {
				return {
					info: this.$store.state.user.userInfo,
					token: this.$store.state.user.token,
				}
			},
			
		},
		onReady: function(res) {
			this.videoContext = uni.createVideoContext('myVideo')

		},
		onLoad(e) {
			// item={"type_id":1,"vod_actor":"塞思·麦克法兰,马克·沃尔伯格,阿曼达·塞弗里德,杰西卡·巴斯","vod_hits":1,"vod_id":26378,"vod_level":1,"vod_name":"泰迪熊2","vod_pic":"https://img.yongjiu7.com/upload/vod/2019-01-17/15477307180.jpg","vod_remarks":"BD高清","vod_score":0,"vod_year":"2015"}&__id__=2
			this.item = JSON.parse(e.item)
			this.getVideoDatails()
			this.isCollectVod()

		},
		mounted() {
			// var videoContext = uni.createVideoContext('myvideo', this);
			// console.log(videoContext)
			//  videoContext.play();

		},
		methods: {
			opt(item, index) {
				if (index == 0) {
					this.$refs.popUpModel.open()

				} else if (index == 1) {

				} else if (index == 2) {
					wx.setClipboardData({
						data: this.playOrigin[this.collectCurrent].src,
						success(res) {
							wx.getClipboardData({
								success(res) {
								}
							})
						}
					})
				} else if (index == 3) {

				}
			},
			// 快进按钮
			speed(type) {
				if (type == 'jia') {
					this.videoContext.seek(this.currentTimeVod + 30)
				} else {
					this.videoContext.seek(this.currentTimeVod - 20)
				}
			},
			fullscreenchange(e) {
				console.log(e)
			},
			// 
			fullscreenclick(e) {
				console.log(e)
			},
			// 设置倍速播放
			playbackRate() {
				console.log(this.playbackRateIndex, this.playbackRateList.length)
				if (this.playbackRateIndex == this.playbackRateList.length - 1) {
					this.playbackRateIndex = 0
					this.videoContext.playbackRate(Number(this.playbackRateList[this.playbackRateIndex]))
					return
				}
				this.playbackRateIndex++
				console.log(this.playbackRateList[this.playbackRateIndex])
				this.videoContext.playbackRate(Number(this.playbackRateList[this.playbackRateIndex]))
			},
			// 视频是否填充
			fillTap() {
				if (this.fill == 'fill') {
					this.fill = 'contain'
				} else {
					this.fill = 'fill'
				}
			},
			// 是否显示控件
			controlstoggle(e) {
				if (!e.detail.show) {
					this.isShowControl = false
					return
				}
				this.isShowControl = true
			},
			timeupdate(e) {
				this.VodLoadText = ''
				this.currentTimeVod = e.detail.currentTime
			},
			// 播放出错
			// error(e){
			// 	this.VodLoadText = '播放出错，请切换解析模式'
			// },
			// 视频出现缓冲时触发
			waiting(e) {
				this.VodLoadText = '缓存中请稍等'
			},
			// 视频元数据加载完成时触发。event.detail = {width, height, duration}
			loadedmetadata(e) {
				this.videoContext.play()
				this.VodLoadText = ''
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
				if (this.playSourceCurrent > 0) return

				this.getURL(item)


			},
			// 特殊视频播放地址（后缀名）
			async getURL(item) {
				var res = await this.$api.getURL({
					url: item.src
				})
				this.playOrigin[this.collectCurrent].src = res.url

			},
			// 切换播放源
			playSourceTap(item, index) {
				this.playSourceCurrent = index
				this.playOrigin = this.optCollect['playOrigin' + index]
				// console.log(item,index)
			},
			// 分解URL播放地址
			resolveURL(type) {
				var tempDataVodType = this.videoDatails.vod_play_url.split('$$$')
				tempDataVodType.forEach((item, index) => {
					if (type == 1) {
						var sourceItem = item.split('$')
					} else if (type == 2 || type == 3 || type == 4) {
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
					this.optCollect["playOrigin" + index] = []
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
				this.playSource = this.videoDatails.vod_play_from.split('$$$')
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

				if (this.playSourceCurrent > 0) return
				this.getURL(this.playOrigin[this.collectCurrent])


			}


		}
	}
</script>

<style>
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

	.playSourceCurrentYes {
		background: rgb(255, 204, 64);

	}

	.playSourceCurrentNo {
		background: rgb(222, 222, 222);
		
	}

	button::after {
	    border: none !important;
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
