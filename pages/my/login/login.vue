<template>
	<!-- 登录 -->
	<view class="position-relative">
		<!-- 导航栏 -->
		<!-- <view class="width-000 ">
			<commonTitle :defaultSty="false" :isShowIcon="true" :right="true" title="111"></commonTitle>
		</view> -->
		<!-- 导航栏 -->
		<!-- 头部标题 -->
		<view class="position-absolute width-000 height-400 d-flex j-center flex-column" style="background-image: linear-gradient(rgb(66, 93, 255),rgb(255, 255, 255));">
			<view class="ml-3 color-fff" style="font-size: 66rpx;font-family: PingFang SC;font-weight: 400;line-height: 44rpx;">
				登录
			</view>
			<view class="ml-3 mt-3 color-fff" style=" font-size: 50rpx;font-family: PingFang SC;font-weight: 400;line-height: 44rpx;">
				Weixiaoying Login
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

	
		<view class="d-flex j-center a-center mt-5">
			<view class="position-relative" style="box-sizing: border-box; border-radius: 50rpx; width: 651rpx;height: 98rpx;">
				<input type="password" class="pl-5" style=" font-size: 35rpx;box-sizing: border-box; border-radius: 50rpx; width: 651rpx;height: 98rpx;border: 1rpx solid #B0AFB5;"
				 v-model="user.password" placeholder="请输入密码" />
				<view class="position-absolute" style="top: -20rpx;left: 50rpx;">
					<view class="bgffff text-center" style="width: 80rpx;height: 30rpx;font-size: 28rpx;font-family: PingFang SC;font-weight: 400;color: #89878D;">
						密码
					</view>
				</view>
			</view>
		
		
		
		</view>

		<view class="d-flex j-sb a-center" style="margin-top: 200rpx;">
			<view class="pl-2"  @tap="toUserLogin('wang')">
				忘记密码
			</view>
			<view class=" btn-login d-flex a-center j-center"  @tap="HLogin">
				登录
			</view>
			<view class="pr-4" @tap="toUserLogin('zhu')">
				注册
			</view>
		</view>
			<view class="d-flex j-center a-center mt-3">
			<view class="" style="width: 145rpx;height: 3rpx;background: #CCCCCC;">
				
			</view>
			<view class="mx-5" style="font-size: 28rpx;font-family: PingFang SC;color: #333333;">
				其他方式登录
			</view>
			<view class="" style="width: 144rpx;height: 3rpx;background: #CCCCCC;">
				
			</view>
		</view>
		<view class="d-flex j-center j-center mt-3">
			<view class="" style="width: 61rpx;height: 61rpx;">
				<image class="width-000 height-000" src="/static/common/wxfx.png" mode=""></image>
			</view>
		</view>
	

	</view>
</template>

<script>
	import * as api from "@/common/lib/api.js"
	export default {
		data() {
			return {
				user: {
					mail: "",
					password:""
				},
			}
		},
		computed: {
			
		},
		methods: {
			toUserLogin(type){
				if(type == 'wang'){
					uni.showToast({
						title:"待开发",
						icon:"none"
					})
					// uni.navigateTo({
					// 	url:""
					// })
				}else{
					uni.navigateTo({
						url:"/pages/my/register/register"
					})
				}
			},
			// h5登录
			async HLogin() {
				var isMobile = this.$U.reg.isEmail(this.user.mail)
				if (isMobile) {
					return
				}
				var passowrd = this.$U.reg.isEmpty(this.user.passowrd,'密码不能为空')
				if (passowrd) {
					return
				}
			

			
				var data = await this.$api.h5login({
					...this.user
				})
				if(data.code == 1){
					uni.setStorageSync('userInfo',JSON.stringify(data.result))
					uni.setStorageSync('token',JSON.stringify(data.token))
					this.$store.dispatch('wxLogin')
					// console.log(plus.navigator.setCookie("http://192.168.1.100:3000"))
					uni.showToast({
						title:"登录成功",
						icon:"none"
					})
					setTimeout(()=>{
						uni.switchTab({
							url:"/pages/my/my"
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
