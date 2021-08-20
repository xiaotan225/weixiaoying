<template>
	<view>
		<view class="top-swiper">
			 <view class="bg">
				 <view class="placeholder"></view>
				 <view class="image">
					 <!-- <loadImg :loadSrc="list[swiper.index]"></loadImg> -->
					 <image :src="list[swiper.index] && list[swiper.index].src" mode="aspectFill"></image>
					 <!-- <loadImg :loadSrc="item.vod_pic"></loadImg> -->
				 </view>
			 </view>
			 <view class="box">
				<view :style="'height:'+navHeight+'px; '"></view>
			 	<swiper autoplay class="swiper" :previous-margin="swiper.margin" :next-margin='swiper.margin' :circular="true" @change="swiperChange">
			 		<swiper-item v-for="(item,index) in list" :key="index">
			 			<image @tap="toDetails(item,index)" v-show="!item.isLoad" class='le-img' @load="load($event,item)" @error="error" :src='item.src' :class="{'le-active':swiper.index == index}"></image>
						<view class="d-flex a-center j-center" v-show="item.isLoad"  style="border-radius: 10rpx; width: 100%;height: 100%;border: 1px solid rgb(229 229 229)">
							<image  style="width: 120rpx;height: 120rpx;"  src="/static/loading.gif" class='le-img' mode="aspectFill" :class="{'le-active':swiper.index == index}"></image>
						</view>
			 		</swiper-item>
			 	</swiper> 
			 </view>
		</view>
	</view>
</template>

<script>
	import loadImg from '@/components/load-img.vue'
	export default {
		components:{
			loadImg
		},
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
				isLoad:true,
				errorImgSrc:'/static/loadfail.png',
				_loadSrc:'',
				imgList:[],
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
		created() {
		
		},
		methods: {
			load(e,item) {
				item.isLoad = false
				// this.isLoad = false
				// item.isLoad = true
				// console.log(this.list)
				// this.list = Object.assign([],this.list)
			},
			error(e) {
				// this.isLoad = false
				// this._loadSrc = this.errorImgSrc
			},
			toDetails(item1,index){
				let item = this.vodList[index]
				let data = {
					id:item.id,
					vod_pic:item.cover,
					vod_name:item.title
				}
				console.log(data)
				this.$U.navTo('/pages/common/video-details?item='+JSON.stringify(data))
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