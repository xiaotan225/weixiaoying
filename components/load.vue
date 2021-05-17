<template>
	<!-- 加载动画 -->
	<view class="load-cont-box" v-if="isShow">
		<view class="load-cont">
			<view class="load">
				<view class="">
					<image style="width: 140rpx;height: 120rpx;" src="../static/images/lod.gif" mode=""></image>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
			}
		},
		computed:{
			isShow(){
				return this.$store.state.isShowLoad
			}
		},
		created() {
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.load-cont-box{
		.load-cont{
			position: fixed;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			z-index: 99999999;
			.load{
				z-index: 999999;
				position: fixed;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
				border-radius: 10rpx;
				width: 260rpx;
				height: 150rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				background: rgba(0,0,0,10);
				color: #fff;
			}
		}
	}
</style>
