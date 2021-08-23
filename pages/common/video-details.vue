<template>
	<!-- 视频详情 -->
	<view class="">
		<load></load>
		<!-- 导航栏 -->

		<view class="width-000 ">
			<commonTitle @backTap="backTap" :defaultSty="false" :isShowIcon="true" :themeBg="false" :right="true" :title="item.vod_name"></commonTitle>
		</view>
		<!-- 导航栏 -->
		<!-- background: -webkit-linear-gradient(top, #6882fd, rgba(104, 130, 253, .7), rgba(85, 170, 255, .05)); -->
		<!-- :style="'background: url('+videoDatails.vod_pic+');'" -->
		<view class="position-relative" style="color: #fff;">
			<image @error="imgerror" :src="videoDatails.vod_pic" style="height: 622rpx; top: -200rpx; position: absolute; width: 100%; filter: blur(30px) brightness(70%);color: #fff;"
			 mode=""></image>
			<view class="" style="position: absolute;left: 0; width: 100%;">
				<view class="d-flex a-center mx-4 ">
					<view class="mr-5" style="width: 35%;height: 350rpx;">
						<image style="width: 100%;height: 100%;" :src="videoDatails.vod_pic" mode=""></image>
					</view>
					<view class="" style="width: 60%;">
						<view class="font-weight-600 font-33 mb-3">
							{{videoDatails.vod_name || '未知'}}
						</view>
						<view class="color-red font-25 mb-1">
							{{videoDatails.vod_remarks || '未知'}}
						</view>
						<view class="font-27 mb-1 d-flex a-center">
							<view class="">
								类型：
							</view>
							<view class="" v-if="!filterVoList.genres">
								未知
							</view>
							<view class="" v-else v-for="(item,index) in filterVoList.genres" :key="index">
								{{item || '未知'}}{{index >= filterVoList.genres.length-1?'':','}}
							</view>
						</view>
						<view class="font-27 mb-1 vod_cont">
							演员：{{videoDatails.vod_actor || '未知'}}
						</view>
						<view class="font-27 mb-2">
							{{filterVoList.year || '未知'}} / {{videoDatails.vod_area || '未知'}} / {{filterVoList.directors[0].name || '未知' }}
							<!--  -->
							<!---->
						</view>
						<view class="d-flex a-center  operate">
							<view class="mr-2 d-flex a-center">

								<!-- #ifdef MP-WEIXIN -->
								<button data-name="shareBtn" class="d-flex a-center j-center" open-type="share" style="height: 60rpx; background: rgb(244, 156, 54); width: 100%;text-align: left; padding: 0px;position: none;font-size: 27rpx;">
									<view class="iconfont font-27 iconfenxiang mr-1" style="color: #fff;">

									</view>
									<view class="" style="color: #fff;">
										分享
									</view>
								</button>
								<!-- #endif -->
								<!-- #ifdef APP-PLUS -->
								<button @tap="invite" class="d-flex a-center j-center" style="height: 60rpx; background: rgb(244, 156, 54); width: 100%;text-align: left; padding: 0px;position: none;font-size: 27rpx;">
									<view class="iconfont font-27 iconfenxiang mr-1">

									</view>
									<view class="" @tap="invite">
										分享
									</view>
								</button>
								<!-- #endif -->
							</view>
							<view class="d-flex a-center" @tap="haibao">
								<view class="iconfont  font-27 iconguangquan mr-1">

								</view>
								<view class="">
									海报
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="mt-5 px-2 d-flex j-sb a-center mx-2 theme-border-r10" style="height: 150rpx;background: rgb(148, 169, 191);">
					<view v-show="filterVoList.rating.value" class="d-flex a-center font-weight-600 font-33 " style="color: rgb(244, 209, 119);">
						<view class="mr-2 font-weight-600 font-33 ">
							评分：{{filterVoList.rating.value}}
						</view>
						<view class="font-weight-600 font-33 d-flex a-center">
							<view :class="item == 3?'font-36 iconai65':item == 1?'font-40 iconwujiaoxing1':'iconwujiaoxing3'" class="font-33 iconfont "
							 v-for="(item,index) in newArr" :key="index">

							</view>
						</view>
					</view>
					<view v-show="!filterVoList.rating.value" class="d-flex a-center font-weight-600 font-33 " style="color: rgb(244, 209, 119);">
						暂无评分
					</view>

					<!-- #ifdef MP-WEIXIN -->
					<view class="d-flex a-center" @tap="toKan" v-if="this.item.type_id && !!this.videoDatails.vod_tab && this.videoDatails.vod_pu != 1">
						<view class="mr-2 iconfont iconbofang color-fff font-50">

						</view>
						<view class="font-40 font-weight-600 color-fff">
							开始播放
						</view>
					</view>

					<!-- #endif -->

					<!-- #ifdef APP-PLUS -->
					<view class="d-flex a-center" @tap="toKan">
						<view class="mr-2 iconfont iconbofang color-fff font-50">

						</view>
						<view class="font-40 font-weight-600 color-fff">
							开始播放
						</view>
					</view>
					<!-- #endif -->


					<!-- #ifdef H5 -->
					<view class="d-flex a-center" @tap="toKan">
						<view class="mr-2 iconfont iconbofang color-fff font-50">

						</view>
						<view class="font-40 font-weight-600 color-fff">
							开始播放
						</view>
					</view>
					<!-- #endif -->

				</view>

			</view>

		</view>
		<view class="" style="height: 550rpx;">

		</view>


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
			<view class="mt-2 " style="color: rgb(153, 153, 153);" v-if="videoDatails.vod_cont">
				{{videoDatails.vod_cont.length == 100?videoDatails.vod_cont+'...':videoDatails.vod_cont}}
			</view>
			<view class="mt-2 " style="color: rgb(153, 153, 153);" v-if="!videoDatails.vod_cont">
				暂无影片介绍
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


		<!-- 为你推荐 -->
		<view class="px-2 mt-3">
			<view class="d-flex a-center mr-1">
				<view class="iconfont iconhuo font-30 mr-1">

				</view>
				<view class="font-30 font-weight-600">
					为你推荐
				</view>
			</view>
			<view class="mt-2">
				<commonListFill :videoList="videoList"></commonListFill>
			</view>
		</view>
		<!-- 为你推荐 -->

		<popUpModel ref="popUpModel" :customStyle="'height:780rpx'">
			<view class="mt-2 ">
				<view class="d-flex">
					<view class="mx-2" style="width: 320rpx;height: 380rpx;">
						<image class="theme-border-r10 width-000 height-000" :src="videoDatails.vod_pic" mode=""></image>
					</view>
					<view class="text-left mr-2" style="width: 55%;">
						<view class="font-33 mb-3 mt-3">
							{{videoDatails.vod_name}}
						</view>
						<view class="mb-1 font-30">
							类型：{{filterVoList.genres || '未知'}}
						</view>
						<view class="mb-1 font-30 xianzhi1">
							演员：{{videoDatails.vod_actor || '未知'}}
						</view>
						<view class="mb-1 font-30 xianzhi">
							详情：{{videoDatails.vod_cont}}
						</view>
					</view>
				</view>

				<view class=" shadow-lg p-2 theme-border-r10 d-flex a-center j-sb text-left mx-2 mt-1">
					<view class="">
						<view class="font-33 mb-1 ">
							长按识别小程序
						</view>
						<view class="color-hui font-30">
							即可免费在线观看
						</view>
					</view>
					<view class="" style="width: 200rpx;height: 200rpx;">
						<image class="width-000 height-000 theme-border-r50" src="../../static/img1.jpg" mode=""></image>
					</view>
				</view>

				<view class="mt-3  d-flex a-center height-100" style="background: #FFFFFF;">
					<view @tap="haibao(1)" class="width-000 font-30 color-hui" style="width: 50%;">
						取消
					</view>
					<view @tap="baocun" class="width-000" style="width: 50%;color: rgb(15, 125, 206);">
						保存
					</view>
				</view>

			</view>

		</popUpModel>


		<canvas style="width: 375px;height: 430px;position:fixed;top:9999px" canvas-id="mycanvas" />



	</view>
</template>

<script>
	import commonListFill from "@/components/common/common-list-fill.vue";
	import popUpModel from "@/components/common/pop-up-model.vue";
	var app = getApp()
	export default {
		components: {
			commonListFill,
			popUpModel
		},
		data() {
			return {
				img: "",
				item: {},
				// 影片详情数据
				videoDatails: {
					vod_cont: [],
					vod_content: []
				},
				// 影片推荐列表
				videoList: [],
				// 是否展开和收起（影片介绍）
				isShow: false,
				// 零时 影片介绍
				tempVodCont: '',
				// 豆瓣评分数据
				filterVoList: {
					directors: [{}],
					rating: {
						value: 0
					}
				},
				// 评分处理数据
				newArr: [],
				imagePath: '',
				canvasHidden: '',
				tempImgVod: '',
			}
		},
		computed: {
			isShowKan() {
				return this.$store.state.vodClassify.isShow
			},
			token() {
				return this.$store.state.user.token
			}
		},
		onLoad(e) {
			// this.$refs.popUpModel.open()
			this.videoDatails.vod_pic = '../../static/loadfail.png'
			this.item = JSON.parse(e.item)
			this.videoDatails = this.item
			this.getVideoDatails()
			this.getVod()


		},
		async mounted() {

		},
		// 分享
		onShareAppMessage(e) {
			return {
				title: this.videoDatails.vod_name,
				path: '/pages/common/video-details?item=' + JSON.stringify(this.item),
				imageUrl: this.tempImgVod,
				content: this.videoDatails.vod_name,
				desc: '免费观看' + this.videoDatails.vod_name,
				success: res => {}
			}
		},
		methods: {
			// 设置用户记录
			setRecordVod(star_count,vod_area,vod_actor) {
				console.log(this.videoDatails,'asdfasdf',this.item)
				let db = app.globalData.db
				let vodData = {
					vod_pic: this.item.vod_pic,
					vod_score: star_count,
					vod_name: this.item.vod_name,
					id: this.item.id,
					vod_area:this.videoDatails.vod_area,
					vod_year:vod_area,
					vod_actor:vod_actor
				}

				if (this.token) {
					db.collection('userHistoryVodList').where({
							id: this.item.id,
							_openid: this.token
						})
						.get().then(res => {
							let vodList = res.data
							if (vodList.length <= 0) {
								db.collection('userHistoryVodList').add({
									data: vodData
								}).then(res => {
									console.log(res)
								})
							}

						})
				}


			},
			async getVod() {
				var data = await this.$api.getVodList({
					type: "movie",
					tag: "热门",
					page_limit: 3,
					page_start: parseInt(Math.random() * 10)
				})
				var temp = []
				data.subjects.forEach(item => {
					temp.push({
						vod_pic: item.cover,
						vod_name: item.title,
						vod_area: item.rate,
						id: item.id,
						// vod_area:this.videoDatails.vod_area
					})
				})
				this.videoList = temp
			},
			imgerror(e) {
				this.videoDatails.vod_pic = '../../static/loadfail.png'
			},
			// 获取视频详情
			async getVideoDatails() {
				var _this = this
				var data = await this.$api.getVideoDatails({
					subject_id: this.item.id
				})
				let subject = data.subject
				this.videoDatails.vod_remarks = subject.duration
				this.videoDatails.vod_actor = subject.actors
				this.videoDatails.vod_area = subject.region
				// this.videoDatails.vod_cont = subject.short_comment.content
				this.videoDatails.vod_content = subject.short_comment.content
				this.videoDatails.vod_cont = this.tempVodCont = subject.short_comment.content.slice(0, 100)
				var star_count = subject.rate



				let shuj = {
					count: 20,
					extra: {
						is_suicide: false
					},
					is_suicide: false,
					start: 0,
					subjects: [{
						title: subject.title,
						rating: {
							count: '',
							max: 0,
							star_count: star_count,
							value: star_count,

						},
						directors: [{
							name: subject.directors
						}],
						genres: subject.types,
						year: subject.release_year
					}, ],

					tags: [],
					total: 0
				}
				this.filterVoList = shuj.subjects[0]
				if (String(star_count).indexOf('.') != -1) {
					// 小数
					var intSatr = parseInt(star_count) / 2

					for (var i = 0; i < 5; i++) {
						if (i < intSatr) {
							_this.newArr.push(1)
						} else if (i <= intSatr) {
							_this.newArr.push(3)
						} else {
							_this.newArr.push(2)
						}

					}
				} else {
					// 整数
					var intSatr = parseInt(star_count) / 2
					for (var i = 0; i < 5; i++) {
						if (i < intSatr) {
							_this.newArr.push(1)
						} else {
							_this.newArr.push(2)
						}

					}

				}
				if ((this.item.type_id && !!this.videoDatails.vod_tab)) {
					uni.setClipboardData({
						data: this.path + '/#/pages/common/video-details?item=' + JSON.stringify(this.item),
						success(res) {
							wx.showToast({
								title: "复制成功 请到浏览器播放",
								icon: 'none',
								duration: 4000
							})
						}
					})
				}





				// 设置用户记录
				this.setRecordVod(star_count,subject.release_year,subject.directors)



			},

			// 分享邀请App
			invite() {
				var _this = this
				let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
				let curRoute = routes[routes.length - 1].route //获取当前页面路由
				let curParam = routes[routes.length - 1].options; //获取路由参数
				let url = this.path + '/#/' + curRoute + '?item=' + JSON.stringify(_this.item)
				uni.showActionSheet({
					itemList: ['分享好友', '分享朋友圈', '取消'],
					success: (res) => {
						if (res.tapIndex == 0) {
							uni.share({
								provider: "weixin",
								scene: "WXSceneSession",
								type: 0,
								href: url,
								title: `邀请您一起看“${_this.item.vod_name}”`,
								imageUrl: _this.videoDatails.vod_pic,
								summary: _this.videoDatails.vod_cont,
								// imageUrl: "/static/img1.jpg",
								success: function(res) {
									if (res.share == 'ok') {
										uni.showToast({
											title: "分享成功",
											icon: "none"
										})
									} else {
										uni.showToast({
											title: "分享失败",
											icon: "none"
										})
									}
								},
								fail: function(err) {
									uni.showToast({
										title: "分享失败",
										icon: "none"
									})
								}
							});


						} else if (res.tapIndex == 1) {
							uni.share({
								provider: "weixin",
								scene: "WXSceneSession",
								type: 0,
								href: url,
								title: `邀请您一起看“${_this.item.vod_name}”`,
								imageUrl: _this.videoDatails.vod_pic,
								summary: _this.videoDatails.vod_cont,
								// imageUrl: "/static/img1.jpg",
								success: function(res) {
									if (res.share == 'ok') {
										uni.showToast({
											title: "分享成功",
											icon: "none"
										})
									} else {
										uni.showToast({
											title: "分享失败",
											icon: "none"
										})
									}
								},
								fail: function(err) {
									uni.showToast({
										title: "分享失败",
										icon: "none"
									})
								}
							});


						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});


			},

			//将canvas转换为图片保存到本地，然后将图片路径传给image图片的src
			createNewImg() {
				var that = this;
				var context = wx.createCanvasContext('mycanvas');
				context.setFillStyle("#FFFFFF")
				context.fillRect(0, 0, 375, 430)
				// 图片

				context.drawImage(this.tempImgVod, 10, 10, 130, 200);
				// 名字
				context.setFontSize(20);
				context.setFillStyle('#000000');
				context.setTextAlign('left');
				context.fillText(this.videoDatails.vod_name, 162, 50);
				context.stroke();

				// 类型
				context.setFontSize(15);
				context.setFillStyle('#000000');
				context.setTextAlign('left');
				if (this.filterVoList) {
					context.fillText('类型：' + this.filterVoList.genres || '未知', 162, 95);
				} else {
					context.fillText('类型：' + '未知', 162, 95);
				}
				context.stroke();
				// 演员
				context.setFontSize(15);
				context.setFillStyle('#000000');
				context.setTextAlign('left');
				context.fillText('演员：' + this.videoDatails.vod_actor.slice(0, 12) + '...', 162, 120);
				context.stroke();
				// 详情
				context.setFontSize(15);
				context.setFillStyle('#000000');
				context.setTextAlign('left');
				context.fillText('详情：' + this.videoDatails.vod_cont.slice(0, 11), 162, 120 + 25);
				context.stroke();
				// 详情
				context.setFontSize(15);
				context.setFillStyle('#000000');
				context.setTextAlign('left');
				context.fillText(this.videoDatails.vod_cont.slice(11, 11 + 18), 162, 120 + 25 + 20);
				context.stroke();

				// 详情
				context.setFontSize(15);
				context.setFillStyle('#000000');
				context.setTextAlign('left');
				context.fillText(this.videoDatails.vod_cont.slice(11 + 18, 11 + 18 + 18), 162, 120 + 25 + 20 + 20);
				context.stroke();

				// 详情
				context.setFontSize(15);
				context.setFillStyle('#000000');
				context.setTextAlign('left');
				context.fillText(this.videoDatails.vod_cont.slice(11 + 18 + 18, 11 + 18 + 18 + 20) + '...', 162, 120 + 25 + 20 +
					20 + 20);
				context.stroke();

				// 阴影
				context.beginPath()
				context.setFillStyle("#fff");
				context.setShadow(0, 0, 10, "rgba(0, 0, 0, 0.2)");
				context.fillRect(10, 260, 350, 120)

				context.beginPath()
				const grd = context.createLinearGradient(0, 0, 200, 0)
				grd.addColorStop(0, 'white')
				grd.addColorStop(1, 'white')
				context.setFillStyle(grd)
				context.fillRect(10, 260, 350, 120)
				context.closePath()


				// 详情
				context.setFontSize(16);
				context.setFillStyle('#000000');
				context.setTextAlign('left');
				context.fillText('长按识别小程序视频', 20, 310);
				context.stroke();

				// 详情
				context.setFontSize(14);
				context.setFillStyle('#474747');
				context.setTextAlign('left');
				context.fillText('即可免费在线观看', 20, 340);
				context.stroke();
				// 
				//绘制小程序图片
				context.arc(280, 320, 50, 0, 2 * Math.PI) //画出圆
				context.strokeStyle = "#ffe200";
				context.clip(); //裁剪上面的圆形
				context.drawImage('../../static/img1.jpg', 230, 270, 100, 100); // 在刚刚裁剪的园上画图
				context.draw();
				//将生成好的图片保存到本地，需要延迟一会，绘制期间耗时
				setTimeout(function() {
					wx.canvasToTempFilePath({
						canvasId: 'mycanvas',
						success: function(res) {
							var tempFilePath = res.tempFilePath;
							that.imagePath = tempFilePath,
								that.canvasHidden = true
						},
						fail: function(res) {
							console.log(res);
						}
					}, that);
				}, 200);
			},
			//点击保存到相册
			baocun: function() {
				var that = this
				that.formSubmit()
				wx.saveImageToPhotosAlbum({
					filePath: that.imagePath,
					success(res) {
						wx.showModal({
							content: '图片已保存到相册，赶紧晒一下吧~',
							showCancel: false,
							confirmText: '好的',
							confirmColor: '#333',
							success: function(res) {
								if (res.confirm) {
									console.log('用户点击确定');
									/* 该隐藏的隐藏 */

								}
							},
							fail: function(res) {
								console.log(11111)
							}
						})
					}
				})
			},
			//点击生成
			formSubmit: function(e) {

				var that = this;
				// this.setData({
				// 	maskHidden: false
				// });
				// wx.showToast({
				// 	title: '绘制中...',
				// 	icon: 'loading',
				// 	duration: 1000
				// });
				setTimeout(function() {
					wx.hideToast()
					that.createNewImg();
					// that.setData({
					// 	maskHidden: true
					// });
				}, 1000)
			},
			// 打开海报 取消海报
			haibao(type) {
				if (type == 1) {
					this.$refs.popUpModel.close()
					return
				}
				this.$refs.popUpModel.open()
			},
			//返回 
			backTap() {
				uni.switchTab({
					url: "/pages/index/index"
				})
			},
			// to播放视频
			async toKan() {
				// #ifdef MP-WEIXIN

				if (!(this.item.type_id && !!this.videoDatails.vod_tab && this.videoDatails.vod_pu != 1)) {
					uni.setClipboardData({
						data: this.path + '/#/pages/common/video-details?item=' + JSON.stringify(this.item),
						success(res) {
							wx.showToast({
								title: "复制成功 请到浏览器播放",
								icon: 'none',
								duration: 4000
							})
						}
					})
					return
				}
				// #endif
				// var data = await this.$api.collectVod({
				// 	vod_id: this.item.vod_id,
				// 	isCollect: true,
				// 	type: 2
				// })
				// this.$U.navTo('./video-kan?item=' + JSON.stringify(this.item))
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

	.vod_cont {
		letter-spacing: 0;
		overflow: hidden;
		display: -webkit-box;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.playSourceCurrent {
		background: rgb(69, 80, 106);
		color: #fff;
		font-size: 27rpx;
	}

	.operate>view {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 160rpx;
		height: 60rpx;
		/* padding: 10rpx 50rpx; */
		/* width: 160rpx;
	height: 60rpx; */
		border-radius: 5rpx;
		background: rgb(244, 156, 54);

	}
</style>
