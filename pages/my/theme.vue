<template>
	<view class="">
		<!-- 导航栏 -->
		<view class="width-000 ">
			<commonTitle :defaultSty="false" :isShowIcon="true" :right="true" title="我的主题"></commonTitle>
		</view>
		<!-- 导航栏 -->
		<!--  -->
		<view class="theme-cont-box">
			<view class="theme-cont-item px-2 py-3" v-for="(item,index) in themeList" :key="index">
				<view class="theme-cont-left">
					<view class="theme-cont-demo" :style="item.name == 'DJ颜色'?'  background: linear-gradient(to bottom, rgb(25, 118, 210) 0%,rgb(250, 192, 46) 100%);':'background: rgb('+item.color+');'">
						
					</view>
					<view class="theme-cont-name">
						{{item.name}}
					</view>
				</view>
				<view :style="theme.currentIndex == index ? 'border:1rpx solid rgb('+item.color+');color:rgb('+item.color+')':''"
				 style="" class="theme-cont-rigth" @click="setThemeClick(item,index)">
					{{theme.currentIndex == index ? '使用中':'使用'}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import vue from 'vue'
	export default {
		data() {
			return {
				currentItem: {},
				themeList: [{
						name: '默认色',
						color: '104, 132, 253'
					},
					{
						name: '酷安绿',
						color: '44, 176, 67'
					},
					{
						name: '姨妈红',
						color: '255, 69, 0'
					},
					{
						name: '哔哩粉',
						color: '250, 114, 152'
					},
					{
						name: '知乎蓝',
						color: '101, 183, 221'
					},
					{
						name: '橙子黄',
						color: '250, 192, 46'
					},
					{
						name: '基佬紫',
						color: '81, 45, 167'
					},
					{
						name: '草原绿',
						color: '57, 142, 61'
					},
					{
						name: '水鸭青',
						color: '0, 152, 166'
					},
					{
						name: 'DJ颜色',
						color: '101, 183, 221',

					}
				]
			}
		},
		computed: {
			theme() {
				return this.$store.state.theme
			},
			timerDJ(){
				return this.$store.state.timerDJ
			}
		},
		methods: {
			setDJColor() {
				this.setTheme(this.currentItem, this.themeList.length-1)
				vue.timerDJ =  setInterval(() => {
					var randomNum = Math.floor(Math.random() * this.themeList.length)
					this.setTheme(this.currentItem, randomNum)
				}, 800)
				// this.$store.commit('setTimerDJ',timerDJ)
			},
			setThemeClick(item, index) {
				this.currentItem = item
				if (item.name == 'DJ颜色') {
					if(!vue.timerDJ){
						this.setDJColor()
					}
					return
				}
				// this.$store.commit('setTimerDJ',this.timerDJ,true)
				clearInterval(vue.timerDJ)
				vue.timerDJ = ''
				console.log(vue.timerDJ)
				this.setTheme(item, index)
			},
			setTheme(item, index) {
				let item1 = this.themeList[index]
				let bgColor = `background-color: rgb(${item1.color});`
				let color = `color: rgb(${item1.color});`
				let data = {
					bgColor,
					currentIndex: index,
					color
				}
				uni.setStorageSync('setThemeBg', JSON.stringify(data));
				this.$store.commit('setThemeBg', data)
			}
		}
	}
</script>


<style lang="scss">
	.theme-cont-box {
		.theme-cont-item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1rpx solid #f0f0f0;
		}

		.theme-cont-left {
			display: flex;
			align-items: center;

			.theme-cont-demo {
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
				margin-right: 15rpx;
			}
		}

		.theme-cont-rigth {
			border: 1rpx solid #ccc;
			border-radius: 10rpx;
			width: 150rpx;
			height: 60rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			color: rgb(145, 145, 145);

		}
	}
</style>
