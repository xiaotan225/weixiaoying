<template>
	<view>
		<view class="top-swiper">
			 <view class="bg">
				 <view class="placeholder"></view>
				 <view class="image">
					 <image :src="list[swiper.index]" mode="aspectFill"></image>
				 </view>
			 </view>
			 <view class="box">
				<view :style="'height:'+navHeight+'px; '"></view>
			 	<swiper autoplay class="swiper" :previous-margin="swiper.margin" :next-margin='swiper.margin' :circular="true" @change="swiperChange">
			 		<swiper-item v-for="(item,index) in list" :key="index">
			 			<image @tap="toDetails(item,index)" class='le-img' :src='item' :class="{'le-active':swiper.index == index}"></image>
			 		</swiper-item>
			 	</swiper> 
			 </view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default:()=>[]
			},
			vodList:{
				type:Array,
				default:()=>[]
			},
		},
		data() {
			return {
				swiper: {
					margin: "150rpx",
					index: 0,
					list: [
						
					]
				}
			}
		},
		components: {
		
		},
		computed:{
			// #ifdef H5 
			navHeight(){
				return this.$store.state.navHeight + 70
			}
			// #endif
			// #ifdef APP-PLUS
			navHeight(){
				return this.$store.state.navHeight + 70
			}
			// #endif
			
			// #ifdef MP-WEIXIN 
				navHeight(){
					return this.$store.state.navHeight - 10
				}
			// #endif
		
		},
		mounted() {
			
		},
		methods: {
			toDetails(item,index){
				console.log(this.vodList[index])
				this.$U.navTo('/pages/common/video-details?item='+JSON.stringify(this.vodList[index]))
			},
			//swiper滑动事件
			swiperChange: function(e) {
				this.swiper.index = e.detail.current;
			},
		}
	}
</script>

<style lang="scss">
	.top-swiper{
		margin-bottom: 50rpx;
		.bg{
			box-sizing: content-box;
			width: 100%;
			position: relative;
			
			.placeholder{
				box-sizing: content-box;
				padding-top: 530rpx;
				height: 44px;
			}
			
			.image{
				box-sizing: content-box;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				overflow: hidden;
				
				&::after{
					content: '';
					position: absolute;
					width: 100%;
					height: 100%;
					bottom: 0;
					left: 0;
					height: 65%;
					background-image: linear-gradient(to bottom ,transparent, #FFF);
				}
				
				> image{
					position: absolute;
					box-sizing: content-box;
					padding: 60px;
					top: 0;
					left: 0;
					width: 100%;
					height: 80%;
					top: -60px;
					left: -60px;
					filter: blur(50px);
				}
			}
		}
		
		.box{
			padding-top: var(--status-bar-height);
			box-sizing: content-box;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: auto;
		}
		
		.swiper {
			height: 600rpx;
			margin: 0 20rpx;
		
			.le-img {
				width: 100%;
				height: 100%;
				display: block;
				transform: scale(0.9);
				transition: transform 0.3s ease-in-out 0s;
				border-radius: 4px;
		
				&.le-active {
					transform: scale(1);
				}
			}
		
		}
	}
	
</style>