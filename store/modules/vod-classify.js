export default {
	state:{
		vodClassifyList:[],
		isShow:false
	},
	mutations:{
		setVodClassifyList(state,data){
			state.vodClassifyList = data.result
			state.isShow = data.isShow
		}
	
	},
	actions:{
		
	}
}