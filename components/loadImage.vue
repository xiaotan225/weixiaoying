<template>
	<view class="lazy-image width-000 height-000" >
		<image class="real-image width-000 height-000" @load="onLoaded" :src="realSrc" :mode="mode" @error="handleImgError"></image>
		<view :class="loaded?'loaded':''" class="width-000 height-000" v-if="!isLoadError">
			<image :src="placeholdSrc" class="width-000 height-000" mode="aspectFit"></image>
		</view>
		<!-- <view :class="loaded?'loaded':''" v-if="isLoadError">
			<image :src="failSrc" mode="aspectFit"></image>
		</view> -->
	</view>
</template>

<script>
	export default {
		props: {
			placeholdSrc: {
				type: String,
				default: "../static/demo.jpg" //loading.gif loadfail.png
			},
			failSrc: {
				type: String,
				default: "../static/demo.jpg" //
			},
			realSrc: {
				type: String,
				default: ""
			},
			mode: {
				type: String,
				default: "widthFix"
			},
			width: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				loaded: false,
				isLoadError: false,
				showImg: false,
			}
		},
		methods: {
			onLoaded(e) {
				this.loaded = true;
				this.showImg = true
			},
			// 加载错误
			handleImgError(e) {
				//console.log(e)
				this.isLoadError = true;
			}
		},
		beforeDestroy() {
			console.log('销毁')
			this.loaded = false;
			this.isLoadError = false;
		}
	}
</script>

<style>
</style>
