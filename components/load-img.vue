<template>
	<view class="width-000 height-000">
		<image v-show="!isLoad"  :src="_loadSrc" class="width-000 height-000" @load="load($event)" mode="" @error="error"></image>
		<image v-if="isLoad" class="width-000 height-000" src="../static/loading.gif" mode="aspectFill"></image>
	</view>
</template>

<script>
	export default {
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
