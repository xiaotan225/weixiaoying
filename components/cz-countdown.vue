<template>
	<view class="time-cont d-flex a-center">
		<view class="">
			剩余：
		</view>
		
		<view class="tian time mr-1" v-if="d!=0">{{d}}</view> 
		<view class="mr-1">
			天
		</view>
		<view class="shi time mr-1" >{{h<10?'0'+h:h}}</view>
		<text class="mr-1">
			时
		</text>
		<view class="fen time mr-1">{{m<10?'0'+m:m}}</view>
		<text class="mr-1">
			分
		</text>
		<view class="time">{{s<10?'0'+s:s}}</view>
	</view>
</template>

<script>
	export default{
		props:{
			startTime: {
				type: String,
			},
			endTime:{
				type: String,
			},
		},
		data(){
			return{
				timer:null,
				d:0,
				h:0,
				m:0,
				s:0
			}
		},
		mounted() {
			this.time()
		},
		beforeDestroy(){
			clearInterval(this.timer);
			this.timer = null;
		},
		computed:{
			sTime(){return this.startTime},
			eTime(){return this.endTime}
		},
		watch:{
			endTime(){
				clearInterval(this.timer);
				this.time()
			}
		},
		methods:{ 
			time(){
				let leftTime = this.GetDateDiff(this.sTime,this.eTime)
				this.getCountdownTime(leftTime)
			},
			//计算两个时间差
			GetDateDiff(startTime, endTime) {
			    //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
			    startTime = startTime.replace(/\-/g, "/");
			    endTime = endTime.replace(/\-/g, "/");
			    //将计算间隔类性字符转换为小写
			    var sTime = new Date(startTime); 
			    var eTime = new Date(endTime); 
			    return parseInt((eTime.getTime() - sTime.getTime()) / 1000);
			},
			//计算活动结束时间
			getCountdownTime(leftTime){
				let time = leftTime
				if (time>0) {
					this.timer = setInterval(() => {
						if(time == 0){
							clearInterval(this.timer)
							this.h = 0
							this.m = 0
							this.s = 0
						}else{
							this.d = parseInt(leftTime/3600/24);
							this.h = parseInt((time/3600)%24);
							this.m = parseInt((time/60)%60);
							this.s = parseInt(time%60);
							time --
						}
					},1000)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.time-cont view{
		font-size: 27rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
	}
	.time{
		text-align: center;
		width: 40rpx;
		height: 40rpx;
		background: #FF0000;
		border-radius: 4rpx;
	}
</style>
