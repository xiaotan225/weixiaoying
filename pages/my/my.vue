 <template>
	<!-- 个人中心-我的 -->
	<view class="">
		<view class="position-relative" style="width: 100%;height: 430rpx;z-index: 9999;">
			<image class="width-000 height-000 position-absolute" style="z-index: 1;" src="../../static/my/gzh.jpg" mode=""></image>
			<view class="d-flex a-center j-center flex-column position-absolute mt-2" style="z-index: 2; top: 50%;left: 50%; transform: translate(-50%,-50%);">
				<view class=" " style="width: 130rpx;height: 130rpx;">
					<image class="width-000 height-000" style="border-radius: 50%;" src="../../static/demo.jpg" mode=""></image>
				</view>
				<view class="color-fff font-30 mt-1">
					啊白
				</view>
			<!-- 	<view class="color-fff font-30 mt-2">
					等级：Lv1
				</view> -->
			</view>
			<view class="width-000 height-100 position-absolute" style="bottom: -30rpx;">
				<image class="width-000 height-000" src="../../static/my/wave1.gif" mode=""></image>
			</view>
		</view>
		<view class="bgffff" style="height: 100rpx;">
			
		</view>
		<!-- 最近浏览 -->
		<view class="browse-box px-2" style="box-sizing: border-box;">
			<view class="d-flex a-center">
				<view style="color: rgb(244, 146, 70);" class="iconfont iconkanguo mr-2 font-30" >
					
				</view>
				<view class="font-30" style="color: rgb(244, 146, 70);">
					最近浏览
				</view>
			</view>
			<scroll-view scroll-x="true" style="height:100px;display: flex;">
				<view class="video-box">
					<view class="d-flex  video-list pt-2 pb-2">
						<view class="video-item d-flex flex-column" @tap="toDetails(item,index)"  v-for="(item,index) in videoList" :key="index">
							<view class="width-000 position-relative"  style="height: 90%;">
								<image class="width-000 height-000" style="width: 55px;" :src="item.src" mode=""></image>
								<view class="position-absolute score d-flex a-center j-center" style="">
									{{item.score.toFixed(1)}}
								</view>
							</view>
							<view class="text-center width-000" style="margin-top: 5rpx;">
								{{item.name}}
							</view>
						</view>
					</view>
				</view>
				</scroll-view>

		</view>
		<!-- 最近浏览 -->
		<view class=" mt-4  bgffff">
			<view class="d-flex a-center j-sb px-2 height-100 " style="border-bottom: 1rpx solid #ebebeb;">
				<view class="d-flex a-center">
					<view class="iconfont iconkefu mr-2 font-30">
						
					</view>
					<button open-type='contact' session-from="true" class="color-hui " id="button" style="padding: 0px;position: none;font-size: 32rpx;">
						客服
					</button>
				</view>
				<view class="iconfont iconyoujiantou font-30">
					
				</view>
			</view>
			<view class="d-flex a-center j-sb px-2 height-100 " style="border-bottom: 1rpx solid #ebebeb;">
				<view class="d-flex a-center">
					<view class="iconfont iconguanyu mr-2 font-30">
						
					</view>
					<view class="color-hui " style="font-size: 32rpx;">
						防走丢
					</view>
				</view>
				<view class="iconfont iconyoujiantou font-30">
					
				</view>
			</view>
			<view class="d-flex a-center j-sb px-2 height-100 " style="border-bottom: 1rpx solid #ebebeb;">
				<view class="d-flex a-center">
					<view class="iconfont iconfankuiyijian mr-2 font-30">
						
					</view>
					<view class="color-hui " style="font-size: 32rpx;">
						意见反馈
					</view>
				</view>
				<view class="iconfont iconyoujiantou font-30">
					
				</view>
			</view>
			
			<view class="d-flex a-center j-sb px-2 height-100 " style="border-bottom: 1rpx solid #ebebeb;">
				<view class="d-flex a-center">
					<view class="iconfont iconguanyu mr-2 font-30">
						
					</view>
					<view class="color-hui " style="font-size: 32rpx;">
						关于我们
					</view>
				</view>
				<view class="iconfont iconyoujiantou font-30">
					
				</view>
			</view>
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
				videoList:[
					{
						src:'/static/demo.jpg',
						name:'花木兰',
						score:9.0
					},
					{
						src:'/static/demo.jpg',
						name:'花木兰',
						score:9.0
					},
					{
						src:'/static/demo.jpg',
						name:'花木兰',
						score:9.5
					},
					{
						src:'/static/demo.jpg',
						name:'花木兰',
						score:9.0
					},
					{
						src:'/static/demo.jpg',
						name:'花木兰',
						score:9.0
					},
					{
						src:'/static/demo.jpg',
						name:'花木兰',
						score:9.0
					}
				]
			}
		}
	}
</script>

<style>
	page{
		background: #efefef;
	}
	#button{


	}
	.browse-box {
		width: 100%;
		background: #fff;
		box-shadow: 0 10rpx 10rpx rgba(0, 0, 0, 0.2);
		padding-bottom: 20rpx;
	}
	
	
	.video-list .video-item{
		margin-right: 20rpx;
		margin-bottom: 20rpx;
		height: 190rpx;
		width: calc((100% - 40rpx)/3);
	}
	.score{
		top: 0;
		left: 0;
		z-index: 0;
		width: 56rpx;
		height: 32rpx;
		font-size: 20rpx;
		-webkit-border-radius: 0 10rpx 0 10rpx;
		border-radius: 0 0rpx 10rpx 0rpx;
		background: rgb(105, 133, 253);
		color: #fff;
	
	}
</style>
