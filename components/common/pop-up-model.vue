<template>
	<!-- 弹窗消息 -->
	<view class="pop-up-container " :class="isShow?'show':''">
		<view class="d-flex a-center j-center height-000" @tap.stop="close">

		</view>
		<view class="pop-up-cont" :style="customStyle">
			<slot></slot>
			
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			// todo
			customStyle:{
				type:String,
				default:''
			},
			isClose:{
				type:Boolean,
				default:true
			}
		},
		data() {
			return {
				isShow: false
			}
		},
		mounted() {},
		methods: {
			close() {
				if(this.isClose){
					this.isShow = false
				}
			},
			open() {
				this.isShow = true
			}
		}
	}
</script>

<style>


	.pop-up-container {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1110;
		opacity: 0;
		text-align: center;
		transform: scale(1.185);
		background: rgba(0, 0, 0, 0.5);
		transition: all 0.3s ease-in-out 0s;
		pointer-events: none;

	}

	.pop-up-container.show {
		opacity: 1;
		transition: all 0.3s ease-in-out 0s;
		transform: scale(1);
		pointer-events: auto;
	}

	.pop-up-cont {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #fff;
		width: 90%;
		height: 850rpx;
		border-radius: 10rpx;
	}
</style>
