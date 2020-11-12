<template>
	<!-- 视频列表公用部分 -->
	<view class="">
		<!-- 导航栏 -->
		<view class="width-000 ">
			<commonTitle :defaultSty="false"  :isShowIcon="true" :right="true" :title="item.type"></commonTitle>
		</view>
		<!-- 导航栏 -->
		<view class="mt-2 px-2">
			<commonListFill></commonListFill>
		</view>
	</view>
</template>

<script>
	import commonListFill from "@/components/common/common-list-fill.vue";
	export default {
		components:{
			commonListFill
		},
		data(){
			return {
				item:{}
			}
		},
		onLoad(e) {
			this.item = JSON.parse(e.item)
			console.log(this.item)
		},
		methods:{
			
		}
	}
</script>

<style>
</style>
