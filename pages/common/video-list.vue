<template>
	<!-- 视频列表公用部分 -->
	<view class="">
		<load></load>
		
		<!-- 导航栏 -->
		<view class="width-000 " v-if="!item.searchVal">
			<commonTitle :defaultSty="false"  :isShowIcon="true" :right="true" :title="item.type || item.searchVal"></commonTitle>
		</view>
		<!-- 导航栏 -->
		<!-- 搜索框 -->
		
		<view v-else class="header-nav-box"  style="position: relative;"   :style="'height:'+navHeight+'px; line-height: '+navHeightLine+'px'">
			<view @tap="backTap" class=" iconfont iconyoujiantou1 font-weight-700 position-absolute" style="left: 10rpx; font-size: 45rpx;color: #fff;">
			
			</view>
			<view class="search-cont px-3 ml-3"  >
				
				<view class="position-relative">
					<input @confirm="search(searchVal)" style="height: ; padding-left: 66rpx;box-sizing: border-box; background: #FFFFFF; border-radius: 50rpx;" confirm-type="search" v-model="searchVal" placeholder="请输入关键字"/>
					<text @tap="search(searchVal)" style="top: 50%;transform: translateY(-50%);left: 20rpx"  class="position-absolute iconfont iconsousuo1"></text>
				</view>
				
			</view>
		</view>
	
		<!-- 搜索框 -->
		<view class="mt-2 px-2">
			<commonListFill :videoList="videoList" ></commonListFill>
			
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
				searchVal:"",
				navHeight:"",
				navHeightLine:""
			}
		},
		onLoad(e) {
			this.item = JSON.parse(e.item)
			if(this.item.searchVal){
				this.searchVal = this.item.searchVal
				this.searchOvd(this.page,15,this.item.searchVal)
			}else{
				this.getHotListOvd()
			}
		},
		computed:{
			txtLoad(){
				return this.$store.state.txtLoad
			},
			theme(){
				return this.$store.state.theme
			}
			
			
		},
		async mounted(){
			// #ifdef MP-WEIXIN
			// 标题和胶囊对齐在一个水平线上
			var menu = wx.getMenuButtonBoundingClientRect()
			var system = await wx.getSystemInfo()
			// console.log(menu,'胶囊')
			// console.log(system,'系统')
			this.navHeight = system.statusBarHeight + menu.height + (menu.top - system.statusBarHeight) * 1
			this.navHeightLine = this.navHeight - 100
			this.navHeight += 10
			this.$store.commit('setNavHeight', this.navHeight)
			// console.log(this.navHeight)
			// #endif
			// #ifdef H5
			this.navHeight = this.navHeightLine = 50
			// #endif
		},
		onReachBottom(){
			if(this.textLoad == this.txtLoad){
				return
			}
			var page = ++this.page
			if(this.item.searchVal){
				this.searchOvd(page,15,this.item.searchVal)
			}else{
				this.getHotListOvd(page,15,true)
			}
		},
		methods:{
			backTap() {
				this.$U.backTap()
			},
			// 搜索
			search(val){
				var isKong =  this.$U.reg.isEmpty(val,'内容不能为空')
				if(isKong) return 
				var getSearchVal = uni.getStorageSync('searchArr')
				var getSearchValArr = []
				if(getSearchVal){
					getSearchValArr = JSON.parse(getSearchVal)
				}
				var filterSearchVal = []
				getSearchValArr.forEach(item=>{
					if(String(item).indexOf(val) == -1){
						filterSearchVal.push(item)
					}
				})
				filterSearchVal.unshift(val)
				uni.setStorageSync('searchArr',JSON.stringify(filterSearchVal))
				
				this.searchOvd(this.page,15,val)
				
			},
			// 获取搜索视频列表
			async searchOvd(curPage = 1,pageSize = 15,searchVal){
				console.log(searchVal)
				var data = await this.$api.getSearch({
					keyword:searchVal,
					curPage:curPage,
					pageSize:pageSize
				})
				// 加载更多
				this.$U.moreLoad.call(this,data.result)?this.videoList = data.result:''
			},
			// 获取热门视频列表
			async getHotListOvd(startPage = 1,endPage = 15,isJia){
				var data = await this.$api.indexClassify({
					vod_level:this.item.type_id,
					startPage:(startPage-1)*endPage,
					endPage:endPage,
					more:1
				},{
					isJia
				})
				// 加载更多
				this.$U.moreLoad.call(this,data.data)?this.videoList = data.data:''
				
			},
		}
	}
</script>

<style>

	.search-cont view input,.search-cont view{
		width: 66vw;
		border-radius: 50rpx;
		background: #fff;
	}
	.header-nav-box{
		display: flex;
		align-items: center;
		background-color: rgb(104, 132, 253);
		height: 66px;
		line-height: -44px;
		justify-items: flex-end;
		align-items: flex-end;
		padding-bottom: 15px;
		box-sizing: border-box;
		
	}
</style>
