<template>
	<!-- 个人中心-反馈问题 -->
	<view class="">
		<!-- 头部标题 -->
		<view class="" style="border-bottom: 1rpx solid #ececec;">
			<commonTitle :defaultSty="false" :isShowIcon="true" :right="true" title="反馈问题"></commonTitle>
		</view>
		<!-- 头部标题 -->

		<view class="px-2 pt-2">
			<view :style="theme.color" class="" style="font-size: 32rpx;font-family: PingFang SC;font-weight: bold;color: #2E7DFF;">
				反馈类型
			</view>
			<view class="d-flex flex-wrap mt-2">
				<view class="d-flex a-center j-center mr-5 mb-3 fankType currentNo" @tap="currTab(item,index)" :style="current == index?theme.bgColor+';color:#fff':''"
				 v-for="(item,index) in tabList" :key="index">
					{{item}}
				</view>
			</view>
		</view>

		<divider></divider>

		<view class="px-2 mb-4 mt-4">
			<view class="d-flex a-center mt-2">
				<text class="mr-2" style="font-size: 32rpx;font-family: PingFang SC;font-weight: bold;" :style="theme.color">
					请提供相关问题图片</text>
				<!-- <text class="font-25 theme-color-hui">(最多6张图不超过20m)</text> -->
			</view>
			<!-- 请提供相关问题图片 -->
			<view class="px-3 uploading-img">

				<view class="d-flex mt-2">
					<view class="mr-5" @tap="openTempImg">
						<view class="wx" v-if="!tempImg">
							+
						</view>
						<view class="width-000 height-000" style="width: 180rpx;height: 160rpx;" v-if="tempImg">
							<image class="width-000 height-000" :src="tempImg" mode=""></image>
						</view>
					</view>
					<view class="ml-5" @tap="openTempImg1">
						<view class="work" v-if="!tempImg1">
							+
						</view>
						<view class="width-000 height-000" style="width: 180rpx;height: 160rpx;" v-if="tempImg1">
							<image class="width-000 height-000" :src="tempImg1" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<!-- 请提供相关问题图片 -->


		</view>

		<divider></divider>
		<view class="px-2 mb-4">
			<view class="commTitle mt-2" :style="theme.color">
				问题描述
			</view>
			<view class="position-relative">
				<textarea v-model="data.content" class="p-2" placeholder="请输入您的问题" style="width: 100%; box-sizing: border-box; height: 300rpx;background: #F2F2F2;" />
				<!-- <view class="position-absolute"  style="font-size: 27rpx;font-family: PingFang SC;font-weight: 400;color: #999999;right: 50rpx; bottom: 10rpx;">
					0/300
				</view> -->
			</view>
		</view>
		
		<divider></divider>
		<view class="px-2">
			<view class="commTitle mt-2" :style="theme.color">
				联系方式
			</view>
			<view class="position-relative" >
				<input type="text"  v-model="data.phone" class="pl-3 mt-2" placeholder="请输入您的联系方式" style="height: 80rpx;background: #F2F2F2;"/>
			</view>
		</view>
		<!-- background: linear-gradient(180deg, rgb(104, 132, 253), rgb(89, 115, 217)) -->
		<view  class="d-flex a-center j-center mt-3" @tap="authau_fk">
			<view :style="theme.bgColor" class="d-flex a-center j-center mb-3" style="font-size: 32rpx;font-family: PingFang SC;font-weight: bold;color: #FFFFFF;width: 690rpx;height: 80rpx;border-radius: 40px;">
				提交
			</view>
		</view>
			<load></load>
	</view>



</template>

<script>
	import * as api  from "@/common/lib/api.js"
	var app = getApp()
	export default {
		data() {
			return {
				current: 0,
				tabList: [
					'程序错误',
					'优化建议',
					'数据错误',
					'其他'
				],
				data:{
					choice:'程序错误',
					img:'',
					img1:'',
					content:'',
					phone:''
				},
				tempImg:'',
				tempImg1:''
			}
		},
		computed:{
			userInfo() {
				return {
					user:this.$store.state.user.userInfo,
					token:this.$store.state.user.token,
				}
			},
			theme(){
				return this.$store.state.theme
			}
		},
		methods:{
			openTempImg(){
				var _this = this
				uni.chooseImage({
					count: 1, 
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
						this.tempImg = tempFilePaths[0]
						 let filePath = chooseImageRes.tempFilePaths[0];
						 const name = Math.random() * 1000000;
						 const cloudPath = name + filePath.match(/\.[^.]+?$/)[0];
						 wx.cloud.uploadFile({
						          cloudPath:  cloudPath,
						          filePath: tempFilePaths[0], // 文件路径
						        }).then(res => {
						          // get resource ID
						          this.data.img = res.fileID
						        }).catch(error => {
						          console.log(error)
						        })
						
						
						
						
				   //      uni.uploadFile({
				   //          url: _this.$H.common.baseUrl+'/api/wxuser/up/img', 
							// header:{"token":+this.userInfo.token},
				   //          filePath: tempFilePaths[0],
				   //          name: 'file',
				   //          formData: {
							// 	name:'tset'
				   //          },
				   //          success: (uploadFileRes) => {
							// 	console.log(uploadFileRes)
							// 	var {result} = JSON.parse(uploadFileRes.data)
							// 	this.data.img = result
				   //          }
				   //      });
				    }
				});
			},
			openTempImg1(){
				var _this = this
				uni.chooseImage({
					count: 1, 
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
						this.tempImg1 = tempFilePaths[0]
					let filePath = chooseImageRes.tempFilePaths[0];
					const name = Math.random() * 1000000;
					const cloudPath = name + filePath.match(/\.[^.]+?$/)[0];
					wx.cloud.uploadFile({
					         cloudPath:  cloudPath,
					         filePath: tempFilePaths[0], // 文件路径
					       }).then(res => {
					         // get resource ID
					         this.data.img1 = res.fileID
					       }).catch(error => {
					         console.log(error)
					       })	
						
						
				        // uni.uploadFile({
				        //    url: _this.$H.common.baseUrl+'/api/wxuser/up/img',
				        //    header:{"token":+this.userInfo.token},
				        //    filePath: tempFilePaths[0],
				        //    name: 'file',
				        //     formData: {
				        		
				        //     },
				        //     success: (uploadFileRes) => {
				        // 		var {result} = JSON.parse(uploadFileRes.data)
				        // 		this.data.img1 = result
				        //     }
				        // });
				    }
				});
			},
			
			currTab(item,index){
				this.data.choice = item
				this.current = index
			},
			async authau_fk(){
				var img = this.$U.reg.isEmpty(this.data.img, '图片不能为空')
				if (img) {
					return
				}
				var img1 = this.$U.reg.isEmpty(this.data.img1, '图片不能为空')
				if (img) {
					return
				}
				var content = this.$U.reg.isEmpty(this.data.content, '问题描述不能为空')
				if (content) {
					return
				}
				var phone = this.$U.reg.isEmpty(this.data.phone, '联系方式')
				if (phone) {
					return
				}
				var db = app.globalData.db
				db.collection('feedbackList').add({
					data:this.data
				}).then(res=>{
						uni.showToast({
							title:"反馈成功",
							icon:"none",
						})
						setTimeout(()=>{
							uni.switchTab({
								url:"/pages/my/my"
							})
						},500)
				})
				// var data = await api.feedbackIssue({
				// 	...this.data,
				// })
				// if(data.code == 1){
				// 	uni.showToast({
				// 		title:"反馈成功",
				// 		icon:"none",
				// 	})
				// 	setTimeout(()=>{
				// 		uni.switchTab({
				// 			url:"/pages/my/my"
				// 		})
				// 	},500)
				// }else{
				// 	uni.showToast({
				// 		title:"提交失败",
				// 		icon:"none",
				// 	})
				// }
			},
		
		
		}
	}
</script>

<style>
	.commTitle {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #2E7DFF;
	}

	.uploading-img .wxText,
	.uploading-img .workText {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #666666;
		text-align: center;
	}

	.uploading-img .wx,
	.uploading-img .work {
		width: 180rpx;
		height: 160rpx;
		border: 4rpx dashed #999999;

		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 53rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #666666;
	}

	.current {
		width: 160rpx;
		height: 60rpx;

		background: linear-gradient(180deg, rgb(104, 132, 253), rgb(89, 115, 217));
		border-radius: 10rpx;


		font-size: 27rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
	}

	.currentNo {
		width: 160rpx;height: 60rpx;background: #F2F2F2;border-radius: 10rpx;font-size: 27rpx;font-family: PingFang SC;font-weight: 400;color: #666666;
	}
</style>
