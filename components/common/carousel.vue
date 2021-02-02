<template>
	<!-- mt-2 -->
	<view class="">
		<view class="page-section swiper" >
			<view class="page-section-spacing">
				<swiper indicator-active-color="white" :vertical="false" autoplay circular :style="configCarousel.height" class="swiper " :indicator-dots="configCarousel.indicatorDots" :autoplay="configCarousel.autoplay" :interval="configCarousel.interval || 2000" :duration="configCarousel.duration || 500">
					<swiper-item v-for="(item,index) in listImg" @tap="event(item,index)" :key="index">
						<image :src="item.vod_pic" mode="" class="width-000 height-000"  ></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			listImg:{
				type:Array,
				default:()=>[]
			},
			configCarousel:{
				type:Object,
				default:()=>{
					return {
						indicatorDots: true,
						autoplay: true,
						interval: 2000,
						duration: 500
					}
				}
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			event(item,index){
				uni.navigateTo({
					url:"/pagesA/product-details/product-details?only_id="+item.id
				})
			}
		}
	}
</script>

<style>
	.swiper{
		/* height: 267rpx; */
		border-radius: 5rpx;
	}
</style>
