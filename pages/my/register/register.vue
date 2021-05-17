<template>
	<!-- 注册 -->
	<view class="position-relative">
		<!-- 头部标题 -->
		<view class="position-absolute width-000 height-400 d-flex j-center flex-column" style="background-image: linear-gradient(rgb(66, 93, 255),rgb(255, 255, 255));">
			<view class="ml-3 color-fff" style="font-size: 66rpx;font-family: PingFang SC;font-weight: 400;line-height: 44rpx;">
				注册
			</view>
			<view class="ml-3 mt-3 color-fff" style=" font-size: 50rpx;font-family: PingFang SC;font-weight: 400;line-height: 44rpx;">
				Weixiaoying Register
			</view>
		</view>

		<!-- <view class=" position-absolute width-000 height-100" style="top: 330rpx; background-image: linear-gradient(rgb(104, 132, 253),rgb(255, 255, 255));">
			
		</view> -->
		<!-- <view class="position-relative z-index-1" style="">
			<commonTitle :isImg="true" styleBoxTitle="background: none;color:#fff; padding: 0;margin: 0;height: 70px;line-height: 85px;"
			 myStyle="color:#fff; background: none; padding-left: 4rpx;font-size: 37rpx;font-family: PingFang SC;font-weight: 400;justify-content: center;"
			 title=" 欢迎回来"></commonTitle>
		</view> -->
		<!-- 头部标题 -->

		<!-- 		<view class="width-000 height-100" style="top: 360rpx; position: absolute;">
			<image class="width-000 height-000" src="/static/my/wave1.gif" mode=""></image>
		</view>
 -->
		<!-- <view class="position-absolute" style="top: 0;left: -10rpx; width: 604rpx; height: 466rpx;">
			<image class="width-000 height-000" src="/static/my/login.png" mode=""></image>
		</view>
 -->

		<view class="" style="height: 500rpx; width: 100%;">

		</view>
		<view class="d-flex j-center a-center mt-5">
			<view class="position-relative" style="box-sizing: border-box; border-radius: 50rpx; width: 651rpx;height: 98rpx;">
				<input type="text" class="pl-5" style=" font-size: 35rpx;box-sizing: border-box; border-radius: 50rpx; width: 651rpx;height: 98rpx;border: 1rpx solid #B0AFB5;"
				 v-model="user.mail" placeholder="请输入邮箱" />
				<view class="position-absolute" style="top: -20rpx;left: 50rpx;">
					<view class="bgffff text-center" style="width: 80rpx;height: 30rpx;font-size: 28rpx;font-family: PingFang SC;font-weight: 400;color: #89878D;">
						账号
					</view>
				</view>
			</view>



		</view>

		<view class="d-flex j-center a-center mt-8 ">
			<view class="position-relative" style="box-sizing: border-box; border-radius: 50rpx; width: 651rpx;height: 98rpx;">
				<input type="number" class="pl-5" style="font-size: 35rpx;box-sizing: border-box; border-radius: 50rpx; width: 651rpx;height: 98rpx;border: 1rpx solid #B0AFB5;"
				 v-model="user.verifyCode" placeholder="请输入验证码" />
				<view class="position-absolute" style="top: -20rpx;left: 50rpx;">
					<view class="bgffff text-center" style="width: 100rpx;height: 30rpx;font-size: 28rpx;font-family: PingFang SC;font-weight: 400;color: #89878D;">
						验证码
					</view>
				</view>
				<view @tap="getCode" class="position-absolute" style="z-index: 999; font-size: 28rpx;font-family: PingFang SC;font-weight: 400;color: #2E3CE2;top: 50%;transform: translateY(-50%);right: 30rpx;">
					{{verifyTime == 60 ?'获取验证码':"发送中"+verifyTime}}
				</view>
			</view>



		</view>

	
	
		<view class="d-flex j-center a-center mt-5">
			<view class="position-relative" style="box-sizing: border-box; border-radius: 50rpx; width: 651rpx;height: 98rpx;">
				<input type="password" class="pl-5" style=" font-size: 35rpx;box-sizing: border-box; border-radius: 50rpx; width: 651rpx;height: 98rpx;border: 1rpx solid #B0AFB5;"
				 v-model="user.passowrd" placeholder="请输入密码" />
				<view class="position-absolute" style="top: -20rpx;left: 50rpx;">
					<view class="bgffff text-center" style="width: 80rpx;height: 30rpx;font-size: 28rpx;font-family: PingFang SC;font-weight: 400;color: #89878D;">
						密码
					</view>
				</view>
			</view>
		
		
		
		</view>
	
		<view class="d-flex j-center" style="margin-top: 200rpx;" @tap="HLogin">
			<view class="btn-login d-flex a-center j-center">
				注册
			</view>
		</view>
		<!-- <view class="d-flex j-center a-center mt-3">
			<view class="" style="width: 145rpx;height: 3rpx;background: #CCCCCC;">

			</view>
			<view class="mx-5" style="font-size: 28rpx;font-family: PingFang SC;color: #333333;">
				其他方式登录
			</view>
			<view class="" style="width: 144rpx;height: 3rpx;background: #CCCCCC;">

			</view>
		</view>
		 -->
		
		<!-- 	<view class="d-flex j-center j-center mt-3">
			<view class="" style="width: 61rpx;height: 61rpx;">
				<image class="width-000 height-000" src="/static/common/wxfx.png" mode=""></image>
			</view>
		</view>
	 -->
	<load></load>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 验证码获取倒计时60秒
				verifyTime: 60,
				// 用户表单
				user: {
					mail: "",
					verifyCode: "",
					passowrd:""
				},
				// 是否是获取验证码状态
				isEendCode: false
			}
		},
		computed: {
			userInfo() {
				return this.$store.state.user.userInfo
			}
		},
		mounted() {
			
		},
		methods: {
			// 获取验证码
			async getCode() {
				var isMobile = this.$U.reg.isEmail(this.user.mail)
				if (isMobile) {
					return
				}
				if (!this.isEendCode) {
					var data = await this.$api.h5AuthCode({
						mail:this.user.mail
					})
					console.log(data)
					if (data.code == 1) {
						this.isEendCode = true
						var time = setInterval(() => {
							if (this.verifyTime == 0) {
								this.verifyTime = 60
								this.isEendCode = false
								clearInterval(time)
								return
							}
							this.verifyTime--
						}, 1000)

					} else {
						uni.showToast({
							title: '验证码发送失败',
							icon: "none"
						})
					}

				}

			},
			// h5注册
			async HLogin() {
				var systemInfo =  uni.getSystemInfoSync()
				var isMobile = this.$U.reg.isEmail(this.user.mail)
				if (isMobile) {
					return
				}
				var isEmpty = this.$U.reg.isEmpty(this.user.verifyCode, '验证码为空')

				if (isEmpty) {
					return
				}
				
				if(this.user.passowrd.length < 3){
					return uni.showToast({
						title:"密码不能小于3位",
						icon:"none"
					})
				}



				var data = await this.$api.Hregister({
					...this.user,
					mobile:systemInfo.model +' - ' + systemInfo.system
				})
				if(data.code == 1){
					uni.showToast({
						title:"注册成功",
						icon:"none"
					})
					setTimeout(()=>{
						uni.navigateTo({
							url:"/pages/my/login/login"
						})
					},300)
				}







			}
		}
	}
</script>

<style>
	.btn-login {
		width: 394rpx;
		height: 90rpx;
		background: linear-gradient(80deg, rgb(60, 86, 232), rgb(66, 94, 255));
		box-shadow: 0px 5rpx 9rpx 0px rgba(0, 0, 0, 0.2);
		border-radius: 41rpx;



		font-size: 36rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;

	}
</style>
