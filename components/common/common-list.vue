<template>
<view class="">
	<view style="overflow: auto;" class="d-flex a-center" @touchstart="touchstart($event,item,index)" @touchmove="touchmove($event,item,index)" @touchend="touchend($event,item,index)"   v-for="(item,index) in list" :key="index" >
		<view class="my-2 mx-2" style="width: 715rpx; box-sizing: border-box; border-radius: 15rpx; background: rgb(245, 245, 245);">
			<view class="d-flex p-2" style="width: 100%;">
				<view  style="height: 300rpx;width: 100px;margin-right: 75rpx;" class="">
					<loadImg :loadSrc="item.vod_pic"></loadImg>
					<!-- <image @load="load" class="width-000 height-000 theme-border-r10"  :src="item.vod_pic" mode=""></image> -->
				</view>
				<view class="" style="width: 60%; box-sizing: border-box;">
					<view class="font-36 py-2" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: rgb(129, 129, 129);">
						{{item.vod_name}} 
					</view>
					<view class="font-27 py-1" style="width: 560rpx;color: rgb(134, 134, 134);overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
						{{item.vod_year}}  / {{item.vod_area}}
					</view>
					<view class="font-27 py-1" style="color: rgb(134, 134, 134);overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
						{{item.vod_actor}}
					</view>
					
					<view class="py-3" v-if="isShowKan">
						<view @tap="toDetails(item,index)" class=" d-flex a-center j-center"
						style="border-radius: 15rpx;background: rgb(244, 208, 58); width: 300rpx;height: 70rpx;">
							<view class="mr-1 iconfont iconbofang font-27" style="color: rgb(68, 60, 27);">
								
							</view>
							<view class="font-30" style="color: rgb(68, 60, 27);">
								开始播放
							</view>
							
						</view>
					</view>
				</view>
			</view>
		</view>
		<view @tap="del(item,index)" class="color-fff d-flex a-center j-center px-3 theme-border-r10" style="height: 360rpx; background: red;white-space: nowrap;">
			删除
		</view>
	</view>
	
	

</view>

</template>

<script>
	import loadImg from '@/components/load-img.vue'
	var app = getApp()
	export default {
		components:{
			loadImg
		},
		props:{
			list:{
				type:Array,
				default:()=>[]
			},
			type:{
				
			}
		},
		data(){
			return {
				startPageX:0,
				sendPageX:0,
			}
		},
		mounted() {
			
		},
		computed:{
			isShowKan(){
				return this.$store.state.vodClassify.isShow
			}
		},
		methods:{
			load(e){
				console.log(e)
			},
			// 删除
			del(item,index){
				var db = app.globalData.db
				var _this = this
				if(this.type == 2){
					// db.collection('todos').doc('todo-identifiant-aleatoire').remove({
					//   success: function(res) {
					//     console.log(res.data)
					//   }
					// })
					// this.delItem(1,item,index)
				}else{
					// this.delItem(2,item,index)
					db.collection('userHistoryVodList').doc(item._id).remove({
					  success: function(res) {
					    _this.$emit('del',item,index)
					  }
					})
					
				}
			},
			async delItem(type,item,index){
				var data = await this.$api.collectVod({
					vod_id:item.vod_id,
					isCollect:false,
					type:type
				})
				this.$emit('del',item,index)
			},
			touchstart(e){
				// this.startPageX = e.touches[0].pageX
			},
			touchmove(e){
				// console.log(e,'手指在屏幕上滑动式触发')
			},
			touchend(e,item,index){
				// this.sendPageX = e.changedTouches[0].pageX
				// console.log(parseInt(this.sendPageX) - parseInt(this.startPageX))
				// if(parseInt(this.sendPageX) - parseInt(this.startPageX) <= -60){
					
				// 	item.isDel = true
					
				// }
				// console.log(item)
			},
			toDetails(item,index){
				this.$U.navTo('/pages/common/video-kan?item='+JSON.stringify(item))
			},
		}
	}
</script>

<style>
</style>
