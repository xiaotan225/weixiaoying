import $store from '@/store/index.js'
import Vue from 'vue'
//promise调用方式
export default {
	
	// 全局配置
	common:{
		// baseUrl:"http://42.192.125.82:8081",
		baseUrl:"https://xiaotan123.xyz",
		// baseUrl:"http://127.0.0.1:8081",
		// baseUrl:"http://192.168.0.110:8081",
		
		header:{
			// 'Content-Type':'application/json;charset=UTF-8',
			'content-type': 'application/json' 
			// 'Content-Type':'application/x-www-form-urlencoded',
		},
		data:{},
		method:'GET',
		dataType:'json'
	},

	
	
	
	// 请求 返回promise
	request(options = {}){
		// 组织参数
		options.url = this.common.baseUrl + options.url
		options.header = options.header || this.common.header
		options.data = options.data || this.common.data
		options.method = options.method || this.common.method
		options.dataType = options.dataType || this.common.dataType
	
		
		// token,需要上传token
		if (options.token) {
			options.header.token =$store.state.user.token
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
		return new Promise((res,rej)=>{
			// 请求之前... todo
			// uni.showLoading({
			// 	title:'加载中...',
			// 	mask:true,
			// })
			// 请求中...
			// Vue.prototype.isShowLoad = true
			if(!options.isJia){
				$store.state.isShowLoad = true
			}else{
				$store.state.isShowLoad1 = true
			}
			uni.request({
				...options,
				withCredentials:true,
				success: (result) => {
					$store.state.isShowLoad = false
					$store.state.isShowLoad1 = false
					// uni.hideLoading()
					// Vue.prototype.isShowLoad = false
					// 返回原始数据
					if(options.native){
						return res(result)
					}
					// 服务端失败
					if(result.statusCode != "200"){		
						//console.log(result);
						if (options.toast !== false) {
							uni.showToast({
								title: result.data.msg || '服务端失败',
								icon: 'none'
							});
						}
					}else{
						if(result.data.code != 1){
							uni.showToast({
								title:result.data.msg,
								icon:"none"
							})
							res(result.data)
							return
						}
					}
					res(result.data)
				},
				fail: (error) => {
					// uni.hideLoading()
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
	get(url,data = {},options = {}){
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	},
	// post请求
	post(url,data = {},options = {}){
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	},
	// put请求
	put(url,data = {},options = {}){
		options.url = url
		options.data = data
		options.method = 'put'
		return this.request(options)
	},
	// delete请求
	del(url,data = {},options = {}){
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	},
}