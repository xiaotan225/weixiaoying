import $store from '@/store/index.js'
import Vue from 'vue'
import X2JS from './x2js/we-x2js.js'




//promise调用方式
export default {

	// 全局配置
	common: {
		// baseUrl:"http://42.192.125.82:8081",
		// baseUrl: "https://caiji.tiankongapi.com/inc/api.php",
		baseUrl: "https://movie.douban.com",


		header: {
			// 'Content-Type':'application/json;charset=UTF-8',
			'content-type': 'application/texts'
			// 'Content-Type':'application/x-www-form-urlencoded',
		},
		data: {},
		method: 'GET',
	},




	// 请求 返回promise
	request(options = {}) {
		// 组织参数
		options.url = this.common.baseUrl + options.url
		// options.url = options.url
		options.header = options.header || this.common.header
		options.data = options.data || this.common.data
		options.method = options.method || this.common.method
		options.dataType = options.dataType || this.common.dataType


		// token,需要上传token
		if (options.token) {
			options.header.token = $store.state.user.token
			// 二次验证是否登录
			if (options.checkToken && !options.header.token) {
				uni.showToast({
					title: '请先登录',
					icon: 'none'
				});
				return uni.navigateTo({
					url: '/pages/login/login',
				});
			}
		}

		// 请求
		return new Promise((res, rej) => {
			// 请求之前... todo
			// uni.showLoading({
			// 	title:'加载中...',
			// 	mask:true,
			// })
			// 请求中...
			// Vue.prototype.isShowLoad = true
			if (!options.isJia) {
				$store.state.isShowLoad = true
			} else {
				$store.state.isShowLoad1 = true
			}
			uni.request({
				...options,
				withCredentials: true,
				success: (result) => {
					$store.state.isShowLoad = false
					$store.state.isShowLoad1 = false
					return res(result.data)
					
				
				},
				fail: (error) => {
					$store.state.isShowLoad = false
					$store.state.isShowLoad1 = false
					uni.showToast({
						title: error.errMsg || '请求失败',
						icon: 'none'
					});
					return rej()
				}
			});
		})
	},
	// get请求
	get(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	},
	// post请求
	post(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	},
	// put请求
	put(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = 'put'
		return this.request(options)
	},
	// delete请求
	del(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	},
}
