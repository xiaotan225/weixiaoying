import * as api  from "@/common/lib/api.js"
export default {
	state:{
		// 登录状态
		userInfo:'',
		token:''
	},
	mutations:{
		// 初始化登录状态
		initUser(state){
			let userInfo = uni.getStorageSync('userInfo')
			let token = uni.getStorageSync('token')
			if (userInfo) {
				userInfo = JSON.parse(userInfo)	
				state.userInfo = userInfo
				state.token = JSON.parse(token)	
			}
		
		},
	
	},
	actions:{
		// 微信授权登陆
		wxLogin({commit},callack) {
			var systemInfo =  uni.getSystemInfoSync()
			// 获取用户信息
			uni.login({
				provider: 'weixin',
				success: async (loginRes) => {
					var code = loginRes.code
					uni.getUserInfo({
						provider: 'weixin',
						lang:"zh_CN",
						success: async (infoRes)=> {
							var data = await api.wxUserLogin({
								code: loginRes.code,
								userInfo:infoRes.userInfo,
								mobile:systemInfo.model +' - ' + systemInfo.system
							})
							if(data.code == 1){
								uni.setStorageSync('userInfo',JSON.stringify(data.result))
								uni.setStorageSync('token',JSON.stringify(data.token))
								// this.$store.commit('initUser')
								commit('initUser')
								callack && callack()
								
								// this.getCollectVod()
							}else{
								uni.setStorageSync('userInfo','')
								uni.setStorageSync('token','')
							}
						}
					});
						
					
				
				}
			});
		
		
		}
				
	}
}