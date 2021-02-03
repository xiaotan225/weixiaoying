<script>
	export default {
		
		onLaunch: function() {
			console.log('App Launch')
			
			
			
			
		
			
			
			
			// 获取视频分类选项
			this.getvodClassify()
			this.$store.dispatch('wxLogin')
			// 获取用户信息
			// var systemInfo =  uni.getSystemInfoSync()
			// console.log(systemInfo)
			// uni.login({
			// 	provider: 'weixin',
			// 	success: async (loginRes) => {
			// 		var code = loginRes.code
			// 		uni.getUserInfo({
			// 			provider: 'weixin',
			// 			lang:"zh_CN",
			// 			success: async (infoRes)=> {
			// 				var data = await this.$api.wxUserLogin({
			// 					code: loginRes.code,
			// 					userInfo:infoRes.userInfo,
			// 					mobile:systemInfo.model +' - ' + systemInfo.system
			// 				})
			// 				if(data.code == 1){
			// 					uni.setStorageSync('userInfo',JSON.stringify(data.result))
			// 					uni.setStorageSync('token',JSON.stringify(data.token))
			// 					this.$store.commit('initUser')
			// 				}else{
			// 					uni.setStorageSync('userInfo','')
			// 					uni.setStorageSync('token','')
			// 				}
			// 			}
			// 		});
						
					
				
			// 	}
			// });
				
			
			
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			async getvodClassify(){
				var data = await this.$api.getvodClassify()
				this.$store.commit('setVodClassifyList',data)
			},
			
		}
	}
</script>

<style>
	
	/*每个页面公共css */
	@import "/static/alfont/iconfont.css";
	/* 官方ui库 */
	@import "/common/uni.css";
	
	/* UI基础库 */
	@import "/common/zcm-main.css";
	/* 公共样式 */
	@import "/common/common.css";
</style>
