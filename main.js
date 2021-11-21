import Vue from 'vue'
import App from './App'
import store from "./store"
Vue.prototype.$store = store

Vue.config.productionTip = false
import sub from "vue"
Vue.prototype.sub = sub

// 引入全局组件
import commonTitle from "@/components/common/common-title.vue"
import noneText from "@/components/common/none-text.vue"
import load from "@/components/load.vue";
Vue.component('commonTitle', commonTitle)
Vue.component('noneText', noneText)
Vue.component('load', load)
Vue.prototype.isShowLoad = false



// 引入API接口
import * as api from "@/common/lib/api.js"
Vue.prototype.$api = api

// 引入request库
import $H from '@/common/lib/request.js';
Vue.prototype.$H = $H




// 助手函数
import $U from './common/lib/util.js';
Vue.prototype.$U = $U

// 时间函数
import $T from './common/lib/time.js';
Vue.prototype.$T = $T




App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
