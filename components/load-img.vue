<template>
	<view class="width-000 height-000">
		<image v-show="!isLoad"  :src="loadSrc" class="width-000 height-000" @load="load($event)" mode="" @error="error"></image>
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
				isLoad:true
			}
		},
		mounted() {
			
		},
		methods:{
			load(e) {
				this.isLoad = false
			},
			error(e) {
				// console.log(e,'error')
			},
		}
	}
</script>

<style>
</style>
