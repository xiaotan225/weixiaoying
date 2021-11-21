import $store from '@/store/index.js'
import Vue from 'vue'




//promise调用方式
export default {

	// 全局配置
	common: {
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
		}

		// 请求
		return new Promise((res, rej) => {
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
