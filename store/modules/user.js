export default {
	state:{
		// 登录状态
		loginStatus:true,
		userInfo:''
	},
	mutations:{
		// 初始化登录状态
		initUser(state){
			// uni.setStorageSync('userInfo',JSON.stringify(state.userInfo))
			let userInfo = uni.getStorageSync('userInfo')
			if (userInfo) {
				userInfo = JSON.parse(userInfo)	
				state.userInfo = userInfo
				// state.loginStatus = true
			}
		
		},
	
	},
	actions:{
	
	}
}