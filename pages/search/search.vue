<template>
	<!-- 搜索 -->
	<view class="">
		<!-- 导航栏 -->
		<view class="width-000 ">
			<!-- <commonTitle :defaultSty="false"  :isShowIcon="false" :right="true" title="微小视"></commonTitle> -->
			<commonTitle :defaultSty="false"  :isShowIcon="false" :center="true" title="搜索"></commonTitle>
		</view>
		<!-- 导航栏 -->
		
		<!-- 搜索框 -->
		<view class="search-cont px-3" >
			<view class="position-relative">
				<input @confirm="search(searchVal)" style="padding-left: 66rpx;box-sizing: border-box;" confirm-type="search" v-model="searchVal" placeholder="请输入关键字"/>
				<text @tap="search(searchVal)" style="top: 50%;transform: translateY(-50%);left: 20rpx"  class="position-absolute iconfont iconsousuo1"></text>
			</view>
			
		</view>
		<!-- 搜索框 -->
		<view class="bgffff position-relative  width-000 " style="top: -30rpx; border-radius: 10rpx 10rpx 0 0;">
			<!-- 搜索历史 -->
			<view class="px-2 mt-4" v-if="historySearchArr.length > 0">
				<view class="d-flex a-center j-sb">
					<view class="color-hui font-27">
						历史搜索
					</view>
					<view @tap="delHistorySearch" class="d-flex a-center j-center iconfont icondelete color-hui font-27 width-50 height-50">
						
					</view>
				</view>
				<view class="">
					<searchHotTab @tapsearchHistory="tapsearchHistory" :list="historySearchArr"></searchHotTab>
				</view>
			</view>
			<!-- 搜索历史 -->
			
			<!-- 搜索历史 -->
			<view class="px-2 mt-4">
				<view class="d-flex a-center j-sb">
					<view class="color-hui font-27">
						热门搜索
					</view>
					<view @tap="isShowHot" :class="isShowHotData?'iconyanjing':'iconkanguo'" class="d-flex a-center j-center iconfont  color-hui font-27 width-50 height-50">
						
					</view>
				</view>
				<view class="" v-if="!isShowHotData">
					<searchHotTab :list="hotWordList" @tapsearchHistory="tapsearchHistory1"></searchHotTab>
				</view>
				<view class="text-center font-30 color-hui mt-2" v-if="isShowHotData">
					当前热门搜索已隐藏
				</view>
			</view>
			<!-- 搜索历史 -->
			
		</view>
	</view>
</template>

<script>
	import searchHotTab from '@/components/search-hot-tab.vue'
	export default {
		components:{
			searchHotTab
		},
		data(){
			return {
				isShowHotData:false,
				searchVal:'',
				historySearchArr:[],
				hotWordList:[]
			}
		},
		onShow() {
			var historySearchVal = uni.getStorageSync('searchArr')
			if(historySearchVal){
				this.historySearchArr = JSON.parse(historySearchVal)
			}
		},
		onLoad() {
			this.hotSearch()
		},
		methods:{
			tapsearchHistory1(item,index){
				this.search(item.title)
			},
			// 热门搜索
			async hotSearch(){
				var data = await this.$api.hotSearch()
				var sliceStr = data.result.slice('32')
				var JSONStr =  JSON.parse(sliceStr)
				this.hotWordList =  JSONStr.data.data.word
			},
			//清除搜索记录
			delHistorySearch(){
				var _this = this
				uni.showModal({
				    title: '提示',
				    content: '是否清除搜索历史',
				    success: function (res) {
				        if (res.confirm) {
				            uni.setStorageSync('searchArr',"[]")
							_this.historySearchArr = []
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			// 点击搜索记录搜索
			tapsearchHistory(item,index){
				this.search(item)
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
				var item = {
					searchVal:val
				}
				this.$U.navTo('/pages/common/video-list?item='+JSON.stringify(item))
				
			},
			isShowHot(){
				this.isShowHotData = !this.isShowHotData
			}
		}
	}
</script>

<style>
	.search-cont{
		background: rgb(104, 132, 253);
		height: 110rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.search-cont view input,.search-cont view{
		height: 70rpx;
		width: 100%;
		
		border-radius: 50rpx;
		background: #fff;
	}
</style>
