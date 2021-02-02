<template>
	<!-- 底部消息 -->
	<view class="text-center py-2" v-show="textLoad == txtLoad">
		我也是有底线的
	</view>
</template>

<script>
	export default {
		props:{
			textLoad:{
				type:String,
				default:''
			}
		},
		computed:{
			txtLoad(){
				return this.$store.state.txtLoad
			}
		},
		watch:{
			textLoad(newVal,oldVal){
				if(newVal == this.txtLoad){
					this.$U.showToast(this.txtLoad)
				}
			}
		}
	}
</script>

<style>
</style>
