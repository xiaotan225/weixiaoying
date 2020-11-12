import Vue from "vue"
import Vuex from "vuex"


import user from "@/store/modules/user.js"

Vue.use(Vuex)



export default new Vuex.Store({
	state:{
	},
	modules:{
		user
	}
})