<template>
	<view class="width-000 height-000">
		<image  :src="loadSrc" class="width-000 height-000" @load="load($event,item)" mode="" @error="error"></image>
		<image v-if="isLoad" class="width-000 height-000" src="../static/loading.gif" mode="widthFix"></image>
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
			console.log(this.loadSrc)
		},
		methods:{
			load(e, item) {
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
