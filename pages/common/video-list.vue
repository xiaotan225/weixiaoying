<template>
	<!-- 视频列表公用部分 -->
	<view class="">
		<!-- 导航栏 -->
		<view class="width-000 ">
			<!-- <commonTitle :defaultSty="false"  :isShowIcon="false" :center="true" title="微小视"></commonTitle> -->
			<commonTitle :defaultSty="false"  :isShowIcon="true" :right="true" :title="item.type || item.searchVal"></commonTitle>
		</view>
		<!-- 导航栏 -->
		<view class="mt-2 px-2">
			<commonListFill :videoList="videoList"></commonListFill>
		</view>
		<noneText :textLoad="textLoad"></noneText>
	</view>
</template>

<script>
	import commonListFill from "@/components/common/common-list-fill.vue";
	import helangCardSwiper from "@/components/helang-cardSwiper/helang-cardSwiper.vue";
	export default {
		components:{
			commonListFill,
			helangCardSwiper
		},
		data(){
			return {
				item:{},
				videoList:[],
				page:1,
				textLoad :'',
			}
		},
		onLoad(e) {
			this.item = JSON.parse(e.item)
			if(this.item.searchVal){
				this.searchOvd()
			}else{
				this.getHotListOvd()
			}
		},
		computed:{
			txtLoad(){
				return this.$store.state.txtLoad
			}
		},
		onShow() {
			
		},
		onReachBottom(){
			if(this.textLoad == this.txtLoad){
				return
			}
			var page = ++this.page
			if(this.item.searchVal){
				this.searchOvd(page)
			}else{
				this.getHotListOvd(page)
			}
		},
		methods:{
			// 获取搜索视频列表
			async searchOvd(curPage = 1,pageSize = 15){
				var data = await this.$api.getSearch({
					keyword:this.item.searchVal,
					curPage:curPage,
					pageSize:pageSize
				})
				// 加载更多
				this.$U.moreLoad.call(this,data.result)?this.videoList = data.result:''
			},
			// 获取热门视频列表
			async getHotListOvd(startPage = 1,endPage = 15){
				var data = await this.$api.indexClassify({
					vod_level:this.item.type_id,
					startPage:(startPage-1)*endPage,
					endPage:endPage,
					more:1
				})
				// 加载更多
				this.$U.moreLoad.call(this,data.data)?this.videoList = data.data:''
				
			},
		}
	}
</script>

<style>
</style>
