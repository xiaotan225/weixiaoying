import Vue from 'vue'
import App from './App'
import store from "./store"

Vue.prototype.$store = store

Vue.config.productionTip = false


// 引入全局组件
import divider from "@/components/common/divider.vue"
import commonTitle from "@/components/common/common-title.vue"
import noneText from "@/components/common/none-text.vue"
Vue.component('commonTitle',commonTitle)
Vue.component('divider',divider)
Vue.component('noneText',noneText)



// 引入API接口
import * as api  from "@/common/lib/api.js"
Vue.prototype.$api = api

// 引入request库
import $H from '@/common/lib/request.js';
Vue.prototype.$H = $H 


// // 引入通讯库
// import $W from '@/common/lib/socket.js';
// Vue.prototype.$W = $W 

// 助手函数
 import $U from './common/lib/util.js';
Vue.prototype.$U = $U

// 时间函数
import $T from './common/lib/time.js';
Vue.prototype.$T = $T

// //生成二维码
// import $Q from './common/lib/qrcode.js'
// Vue.prototype.$Q = $Q


// 权限跳转
Vue.prototype.navigateTo = (options)=>{
	// 判断用户是否登录
	
	if (!store.state.user.userInfo || !store.state.user.userInfo.mobile) {
		uni.showToast({
			title: '请绑定手机号',
			icon: 'none'
		});
		setTimeout(()=>{
			return uni.navigateTo({
				url: '/pages/login/login'
			});
		},500)
		return
	}
	uni.navigateTo(options);

	
	
	

	
}


App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
