<template>
	<!-- 分类 -->
	<view class="content" :style="'height:'+ Contheight + 'rpx'">
		<!-- 导航栏 -->
		<view class="width-000 ">
			<!-- <commonTitle :defaultSty="false"  :isShowIcon="false" :right="true" title="微小视"></commonTitle> -->
			<commonTitle :defaultSty="false" :isShowIcon="false" :center="true" title="频道分类"></commonTitle>
		</view>
		<!-- 导航栏 -->
		<view class="height-000">
			<view class="d-flex bg-white a-center font-md text-muted border-top border-bottom border-light-secondary" style="position: fixed;z-index: 9999999999999999999999999999999;width: 100%;">
				<view style="width: 25%;height: 100rpx;" class="flex-1 d-flex a-center j-center text-dark "  v-for="(item,index) in tabList"
				 :key="index" @tap="tabarTab(index)">
					<view class="py-1  d-flex a-center j-center" :style="tabIndex == index ? theme.color : ''">{{item.name}}</view>
				</view>
			</view>
			<view class="" style="height: 100rpx;">

			</view>

			<view class=" mt-2">
				<!-- 视频类型 -->
				<view class="vod-type">
					<view class="vod-type-item" @tap="curTabClassIndex(item,index,'currentIndex1')" :style="tabClassIndex.currentIndex1==index?theme.color:''"
					 v-for="(item,index) in tabClassList[tabIndex].class" :key="index">
						{{item}}
					</view>
				</view>
				<!-- 视频类型 -->
				<!-- 视频地区 -->
				<view class="vod-type">
					<view class="vod-type-item" @tap="curTabClassIndex(item,index,'currentIndex2')" :style="tabClassIndex.currentIndex2==index?theme.color:''"
					 v-for="(item,index) in tabClassList[tabIndex].area" :key="index">
						{{item}}
					</view>
				</view>
				<!-- 视频地区 -->
				<!-- 视频时间 -->
				<view class="vod-type">
					<view class="vod-type-item" @tap="curTabClassIndex(item,index,'currentIndex3')" :style="tabClassIndex.currentIndex3==index?theme.color:''"
					 v-for="(item,index) in tabClassList[tabIndex].year" :key="index">
						{{item}}
					</view>
				</view>
				<!-- 视频时间 -->
			</view>

			<!-- <view v-if="tabList[tabIndex].list.length <= 0" class="py-3 d-flex a-center j-center">
					暂无数据
				<no-thing :msg="tabItem.msg" />
			</view> -->
			<!-- <view v-for="(item,index) in tabList[tabIndex].list" :key="index">
				<view class="px-2 mt-2" >
					<commonListFill ></commonListFill>
					<commonListFill ></commonListFill>
				</view>
			</view> -->
			
			<swiper :current="tabIndex" class="height-000 mb-5"  duration="300" @change="changeTab">
				<swiper-item v-for="(tabItem,tabIndex) in tabList" :key="tabIndex" style="height: 100%;">
					<view v-if="videoList.length <= 0" class="py-3 d-flex a-center j-center">
						{{tabItem.msg}}
					</view>
					<view v-else >
						<view class="px-2 mt-2">
							<commonListFill :videoList="videoList"></commonListFill>
						</view>
					</view>

				</swiper-item>
			</swiper>


		</view>
	
		<load></load>
	
	</view>


</template>

<script>
	import commonListFill from "@/components/common/common-list-fill.vue";
	export default {
		components: {
			commonListFill,
			
		},
		data() {
			return {
				textLoad :'',
				videoList: [],
				page: 1,
				tabClassIndex: {
					currentIndex1: 0,
					currentIndex2: 0,
					currentIndex3: 0,
				},
				tabIndex: 0,
				tabList: [{
						name: "电影",
						no_thing: "no_pay",
						msg: "暂无数据",
						list: [{
							order_no: 111,
							status_name: 'asdfasd',
							status: 0
						}, ],
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
						list: [{
							order_no: 111,
							status_name: 'asdfasd',
							status: 0
						}, ]
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
		onLoad() {
			var vod_class = '';
			var vod_area = '';
			var vod_year = '';
			this.getvodClassifyList(false,"电影", vod_class, vod_area, vod_year,this.page);

		},
		computed: {
			tabClassList() {
				return this.$store.state.vodClassify.vodClassifyList
			},
			theme(){
					return this.$store.state.theme
			},
			Contheight() {
				if(this.videoList.length <= 0){
					return 500
				}
				return 125 * this.videoList.length
			},
			type_id(){
				console.log(this.tabClassList)
				return this.tabClassList[this.tabIndex].type_vod_id;
			},
			txtLoad(){
				return this.$store.state.txtLoad
			}
		},
		mounted() {
			console.log(this.Contheight)
		},
		onReachBottom(){
			if(this.textLoad == this.txtLoad){
				return
			}
			var page = ++this.page
			var vod_class = this.tabClassList[this.tabIndex].class[this.tabClassIndex.currentIndex1] || ''
			var vod_area = this.tabClassList[this.tabIndex].area[this.tabClassIndex.currentIndex2] || ''
			var vod_year = this.tabClassList[this.tabIndex].year[this.tabClassIndex.currentIndex3] || ''
			var type = ''
			if(this.type_id == 1){
				type = '电影'
			}else if(this.type_id == 2){
				type = '电视剧'
			}else if(this.type_id == 3){
				type = '综艺'
			}else if(this.type_id == 4){
				type = '动漫'
			}
			this.getvodClassifyList(true,type, vod_class, vod_area, vod_year,page,15,true)
		},
		methods: {
			// 视频类型筛选查询
			async getvodClassifyList(isMorel,type_id, vod_class, vod_area, vod_year,cur_page,page_size=15,isJia) {
				console.log(vod_area)
				var data = await this.$api.getvodClassifyList({
					sort:"U",
					range:'0,10',
					tags:type_id,
					start:cur_page - 1,
					countries:vod_class == '全部'?'':vod_class,
					genres:vod_area == '全部'?'':vod_area,
					year_range:vod_year == '全部'?'':vod_year+','+vod_year
					
				},{
					isJia
				})
				
				var mapdata =  data.data.map(item=>{
					return {
						vod_pic:item.cover,
						vod_name:item.title,
						vod_area:item.rate,
						id:item.id
					}
				})
				this.$U.moreLoad.call(this, mapdata) ? this.videoList = mapdata : ''
				if(!isMorel){
					if(mapdata.length <= 0){
						this.videoList = []
					}
				}
			},
			// 切换视频类型
			curTabClassIndex(item, index, type) {
				this.page = 1
				this.textLoad = ''
				this.tabClassIndex[type] = index
				var vod_class = this.tabClassList[this.tabIndex].class[this.tabClassIndex.currentIndex1] || ''
				var vod_area = this.tabClassList[this.tabIndex].area[this.tabClassIndex.currentIndex2] || ''
				var vod_year = this.tabClassList[this.tabIndex].year[this.tabClassIndex.currentIndex3] || ''
				console.log('asdfsdf',vod_class,vod_area,vod_year)
				var type = ''
				if(this.type_id == 1){
					type = '电影'
				}else if(this.type_id == 2){
					type = '电视剧'
				}else if(this.type_id == 3){
					type = '综艺'
				}else if(this.type_id == 4){
					type = '动漫'
				}
				this.getvodClassifyList(false,type, vod_class, vod_area, vod_year,this.page)
			},
			tabarTab(index) {
				this.tabIndex = index;
			},
			//swiper 切换
			changeTab(e) {
				this.page = 1
				this.textLoad = ''
				this.tabIndex = e.target.current;
				for (let key in this.tabClassIndex) {
					this.tabClassIndex[key] = 0
				}
				var type = ''
				if(this.type_id == 1){
					type = '电影'
				}else if(this.type_id == 2){
					type = '电视剧'
				}else if(this.type_id == 3){
					type = '综艺'
				}else if(this.type_id == 4){
					type = '动漫'
				}
				this.getvodClassifyList(false,type, '', '', '',this.page)

			},
		}
	}
</script>

<style>
	.swiper-box {
		height: calc(100% - 40px);
	}

	.vod-type {
		overflow: auto;
		white-space: nowrap;
	}

	.vod-type-item {
		width: 107rpx;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		display: inline-block;
	}

	.current {
		color: rgb(25, 170, 253);
	}
</style>
