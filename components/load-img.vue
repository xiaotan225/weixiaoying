<template>
	<view class="width-000 height-000">
		<image style="border-radius: 10rpx" v-show="!isLoad"  :src="_loadSrc" class="width-000 height-000" @load="load($event)" mode="" @error="error"></image>
		<view class="d-flex a-center j-center" v-show="isLoad"  style="border-radius: 10rpx; width: 100%;height: 100%;border: 1px solid rgb(229 229 229)">
			<image  style="width: 120rpx;height: 120rpx;"  src="../static/loading.gif" mode="aspectFill"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name:"loadImg",
		props:{
			loadSrc:{
				type:String,
				default:''
			}
		},
		data(){
			return {
				isLoad:true,
				errorImgSrc:'/static/loadfail.png',
				_loadSrc:''
			}
		},
		watch:{
			loadSrc(newVal,oldVal){
				this.isLoad = true
				this._loadSrc = newVal
				// console.log(newVal,oldVal)
			}
		},
		created() {
				this._loadSrc = this.loadSrc
		},
	
		methods:{
			load(e) {
				this.isLoad = false
			},
			error(e) {
				this.isLoad = false
				this._loadSrc = this.errorImgSrc
			},
		}
	}
</script>

<style>
</style>
