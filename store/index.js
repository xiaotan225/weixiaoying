import Vue from "vue"
import Vuex from "vuex"


import user from "@/store/modules/user.js"
import vodClassify from "@/store/modules/vod-classify.js"

Vue.use(Vuex)



export default new Vuex.Store({
	state:{
		txtLoad:'没有数据了',
		navHeight:0
	},
	mutations:{
		// 初始化登录状态
		setNavHeight(state,data){
			console.log(data)
			state.navHeight = data
			console.log(state.navHeight)
		
		},
	
	},
	modules:{
		user,
		vodClassify
	}
})