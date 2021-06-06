import Vue from "vue"
import Vuex from "vuex"


import user from "@/store/modules/user.js"
import vodClassify from "@/store/modules/vod-classify.js"

Vue.use(Vuex)



export default new Vuex.Store({
	state:{
		txtLoad:'没有数据了',
		navHeight:0,
		isShowLoad:false,
		isShowLoad1:false,
		theme:{
			bgColor:'background: rgb(104, 132, 253);',
			currentIndex:0,
			color:'color: rgb(104, 132, 253);',
		},
		timerDJ:"",
		wxTitleHe:0,
		
	},
	mutations:{
		setWxTitleHe(state,data){
			state.wxTitleHe = data
		},
		setNavHeight(state,data){
			state.navHeight = data
		
		},
		setThemeBg(state,data){
			state.theme.bgColor = data.bgColor
			state.theme.currentIndex = data.currentIndex
			state.theme.color = data.color
		},
		setTimerDJ(state,data,isclear){
			if(isclear){
				clearInterval(state.timerDJ)
				state.timerDJ = ''
				return
			}
			state.timerDJ = data
		}
	},
	modules:{
		user,
		vodClassify
	}
})