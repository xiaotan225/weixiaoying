<template>
	<!-- 分类 -->
	<view class="content">
		<!-- 导航栏 -->
		<view class="width-000 ">
			<!-- <commonTitle :defaultSty="false"  :isShowIcon="false" :right="true" title="微小视"></commonTitle> -->
			<commonTitle :defaultSty="false" :isShowIcon="false" :center="true" title="频道分类"></commonTitle>
		</view>
		<!-- 导航栏 -->
		<view class="height-000">
			<view class="shadow d-flex bg-white a-center font-md text-muted border-top border-bottom border-light-secondary" style="position: fixed;z-index: 9999999999999999999999999999999;width: 100%;">
				<view style="width: 25%;height: 100rpx;" class="flex-1 d-flex a-center j-center text-dark " v-for="(item,index) in tabList" :key="index" @tap="tabarTab(index)">
					<view class="py-1  d-flex a-center j-center" :class="tabIndex == index ? 'border-bottom-primary-5 text-primary' : ''">{{item.name}}</view>
				</view>
			</view>
			<view class="" style="height: 100rpx;">
				
			</view>
			<view v-if="tabList[tabIndex].list.length <= 0" class="py-3 d-flex a-center j-center">
					暂无数据
				<!-- <no-thing :msg="tabItem.msg" /> -->
			</view>
			<view v-for="(item,index) in tabList[tabIndex].list" :key="index">
				<view class="px-2 mt-2" >
					<commonListFill ></commonListFill>
					<commonListFill ></commonListFill>
				</view>
			</view>
		<!-- 	
			<swiper :current="tabIndex" class=" mb-5 height-000" duration="300" @change="changeTab">
				<swiper-item v-for="(tabItem,tabIndex) in tabList" :key="tabIndex" style="height: 100%;">
				
						<view v-if="tabItem.list.length <= 0" class="py-3 d-flex a-center j-center">
							{{tabItem.msg}}
						</view>
						<view v-for="(item,index) in tabList[tabIndex].list" :key="index">
							<view class="px-2 mt-2" >
								<commonListFill ></commonListFill>
							</view>
						</view>

				</swiper-item>
			</swiper> -->


		</view>
	</view>
</template>

<script>
	import commonListFill from "@/components/common/common-list-fill.vue";
	export default {
		components:{
			commonListFill
		},
		data() {
			return {
				tabIndex: 0,
				tabList: [{
						name: "电影",
						no_thing: "no_pay",
						msg: "暂无数据",
						list: [
							{order_no:111,status_name:'asdfasd',status:0},
						], 
					},
					{
						name: "连续剧",
						no_thing: "no_pay",
						msg: "暂无数据",
						list: []
					},
					{
						name: "综艺",
						no_thing: "no_receiving",
						msg: "暂无数据",
						list: [
							{order_no:111,status_name:'asdfasd',status:0},
						]
					},
					{
						name: "动漫",
						no_thing: "no_comment",
						msg: "暂无数据",
						list: []
					},

				],
			}
		},
		methods: {
			tabarTab(index) {
				this.tabIndex = index;
			},
			//swiper 切换
			changeTab(e) {
				console.log(e)
				this.tabIndex = e.target.current;

			},
		}
	}
</script>

<style>

</style>
