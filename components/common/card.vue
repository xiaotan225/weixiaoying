<template>
	<view class="card" :style="cardStyle">
		<!-- head -->
		<view v-if="showhead" class="main-border-color d-flex a-center j-sb"
		:class="getHeadClass">
			<slot name="title">
				<text v-if="headTitle" class="font-md text-dark default load-video-text"
				:class="headTitleWeight?'headTitleWeight':''" >{{headTitle}}</text>
			</slot>
			<slot name="right" ></slot>
		</view>
		<!-- body -->
		<view :class="getBodyClass" :style="bodyStyle">
			<image v-if="bodyCover" :src="bodyCover" 
			mode="widthFix"></image>
			<slot />
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			bodyStyle:String,
			// 头部标题
			headTitle:String,
			// 封面图
			bodyCover:String,
			// 是否显示头部
			showhead:{
				type:Boolean,
				default:true
			},
			// 是否显示下边线
			headBorderBottom:{
				type:Boolean,
				default:false
			},
			// 标题是否加粗
			headTitleWeight:{
				type:Boolean,
				default:true
			},
			// 是否给body加padding
			bodyPadding:{
				type:Boolean,
				default:false
			},
			cardStyle:{
				type:String,
				default:""
			}
		},
		onShow(){
			console.log(this.headTitle)
		},
		computed: {
			getHeadClass() {
				let BorderBottom = this.headBorderBottom ? 'border-bottom':''
				return `${BorderBottom}`
			},
			getBodyClass(){
				let padding = this.bodyPadding ? 'p-2' : ''
				return `${padding}`
			}
		},
	}
</script>

<style>
	
	.headTitleWeight{
		
		font-size: 37rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
	}
	.default{
		
	}
	.load-video-text {
		color: #fff;
		background-image: -webkit-linear-gradient(left, #ff0, #dd524d 25%, #bdcd34 50%, #dd524d 75%, #ff0);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		-webkit-background-size: 200% 100%;
		-webkit-animation: masked-animation 3s infinite linear;
		border: 0;
	
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
