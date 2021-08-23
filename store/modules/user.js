import * as api from "@/common/lib/api.js"
import vue from 'vue'
var app = getApp()
export default {
	state: {
		// 登录状态
		userInfo: '',
		token: '',
		isWx: false
	},
	mutations: {
		// 初始化登录状态
		initUser(state) {
			let db = vue.prototype.sub.db
		
			let userInfo = uni.getStorageSync('userInfo')
			let token = uni.getStorageSync('token')
			if (userInfo) {
				userInfo = JSON.parse(userInfo)
				state.userInfo = userInfo
				state.token = token
			} else {
				state.userInfo = ""
				state.token = ""
			}

		},

	},
	actions: {
		// 微信授权登陆
		// #ifdef MP-WEIXIN
		wxLogin({
			commit,
			state
		}, callack) {
			state.isWx = true
			var systemInfo = uni.getSystemInfoSync()
			commit('initUser')
			// 获取用户信息
			wx.getUserProfile({
				desc: '用户授权',
				success: (infoRes) => {
					uni.login({
						provider: 'weixin',
						success: async (loginRes) => {
							let db = vue.prototype.sub.db
							let info = infoRes.userInfo
							let userInfo = {
								nick_name: info.nickName,
								avatar_url: info.avatarUrl,
								province: info.province,
								language: info.language,
								country: info.country,
							}

							db.collection('userList').get().then(res => {
								let userList = res.data
								if (userList.length <= 0) {
									//  没有用户
									userInfo.create_date = new Date().toLocaleString()
									db.collection('userList').add({
											// data 字段表示需新增的 JSON 数据
											data: userInfo
										})
										.then(res => {
											let _id = res._id
											db.collection('userList').doc(_id).get().then(res => {
												// res.data 包含该记录的数据
												uni.setStorageSync('userInfo', JSON.stringify(res.data))
												uni.setStorageSync('token', JSON.stringify(res.data.openid))
												commit('initUser')
												callack && callack()
											})
										})
								} else {
									// 有用户
									db.collection('userList').get().then(res => {
										let userRes = res.data
										db.collection('userList').doc(userRes[0]._id).update({
											// data 传入需要局部更新的数据
											data: userInfo,
											success: function(res) {
												userInfo._id = userRes[0]._id
												userInfo.openid = userRes[0]._openid
												uni.setStorageSync('userInfo', JSON.stringify(userInfo))
												uni.setStorageSync('token', JSON.stringify(userInfo.openid))
												commit('initUser')
												callack && callack()
											}
										})

									})
								}

							})







							// var data = await api.wxUserLogin({
							// 	code: loginRes.code,
							// 	userInfo: infoRes.userInfo,
							// 	mobile: systemInfo.model + ' - ' + systemInfo.system
							// })
							// if (data.code == 1) {
							// 	uni.setStorageSync('userInfo', JSON.stringify(data.result))
							// 	uni.setStorageSync('token', JSON.stringify(data.token))
							// 	commit('initUser')
							// 	callack && callack()
							// } else {
							// 	state.userInfo = ''
							// 	uni.setStorageSync('userInfo', '')
							// 	uni.setStorageSync('token', '')
							// }


						}
					});


				}
			});




		}

		// #endif


		// #ifdef H5
		async wxLogin({
			commit,
			state
		}, callack) {
			var currentHashPath = window.location.hash
			var hashPathList = [{
					url: '#/pages/my/login/login',
					type: "tab"
				},
				{
					url: '#/pages/my/register/register',
				}
			]
			state.isWx = false
			commit('initUser')
			// 获取用户信息
			var data = await api.geth5User({
				id: state.userInfo.Id
			})
			if (data.code == 1) {
				uni.setStorageSync('userInfo', JSON.stringify(data.result))
				uni.setStorageSync('token', JSON.stringify(data.token))
				commit('initUser')
			} else {
				state.userInfo = ''
				state.token = ''
				uni.setStorageSync('userInfo', '')
				uni.setStorageSync('token', '')
				hashPathList.forEach(item => {
					if (item.url == currentHashPath) {
						let currentPath = item.url.slice(1)
						if (item.type) {
							uni.switchTab({
								url: currentPath
							})
						} else {
							uni.navigateTo({
								url: currentPath
							})
						}

					}
				})

			}

		}

		// #endif

		// #ifdef APP-PLUS
		async wxLogin({
			commit,
			state
		}, callack) {
			var hashPathList = [{
					url: '#/pages/my/login/login',
					type: "tab"
				},
				{
					url: '#/pages/my/register/register',
				}
			]
			state.isWx = false
			commit('initUser')
			// 获取用户信息
			var data = await api.geth5User({
				id: state.userInfo.Id
			})
			if (data.code == 1) {
				uni.setStorageSync('userInfo', JSON.stringify(data.result))
				uni.setStorageSync('token', JSON.stringify(data.token))
				commit('initUser')
			} else {
				state.userInfo = ''
				state.token = ''
				uni.setStorageSync('userInfo', '')
				uni.setStorageSync('token', '')

			}

		}

		// #endif
	}
}
