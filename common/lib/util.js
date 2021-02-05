import * as api from "@/common/lib/api.js"
export default {
	verify(token) {
		if (!token) {
			uni.showToast({
				title: "请绑定手机号",
				icon: "none"
			})
			setTimeout(() => {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}, 500)
			return false
		} else {
			return true
		}
	},
	// 数据加载更多
	moreLoad(data) {
		if (data.length <= 0) {
			this.textLoad = this.txtLoad
			return
		}
		if (this.page > 1) {
			this.videoList.push(...data)

			return false
		}
		return true

	},
	// 消息弹窗
	showToast(title, icon = 'none') {
		uni.showToast({
			title: title,
			icon: icon
		})
	},
	// 返回上一页
	backTap() {
		uni.navigateBack({
			delta: 1,
			animationType: 'pop-out',
			animationDuration: 200
		});
	},
	// 跳转
	navTo(url) {
		uni.navigateTo({
			url: url
		})
	},
	// 拨打电话
	openDian(opt, shouji) {
		uni.makePhoneCall({
			// 手机号
			phoneNumber: shouji,
			// 成功回调
			success: (res) => {
				api.atuhcall(opt).then(res1 => {
					console.log(res1)
				})
			},
			// 失败回调
			fail: (res) => {
				console.log('调用失败!')
				// this.call_phone(); //重复调用一次
			}
		});
	},
	// 正则匹配
	reg: {
		// 手机号
		checkPhone(phone) {
			if (!(/^1[3456789]\d{9}$/.test(phone))) {
				console.log(phone)
				console.log(/^1[3456789]\d{9}$/.test(phone))
				uni.showToast({
					title: "手机号有误",
					icon: "none"
				})
				return true;
			}
			return false
		},
		// 邮箱
		isEmail(emailInput) {
			var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
			if (!myreg.test(emailInput)) {
				console.log('asdf')
				uni.showToast({
					title: "请输入正确的邮箱地址",
					icon: "none"
				})
				return true;
			} else {
				return false;
			}
		},
		// 非空判断
		isEmpty(txt, alert) {
			if ((/^\s*$/g.test(txt))) {
				uni.showToast({
					title: alert,
					icon: "none"
				})
				return true;
			}
			return false
		},
		// 身份证
		isIdentity(code) {
			if (!(
					/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
					.test(code))) {
				uni.showToast({
					title: '请输入正确的身份证',
					icon: "none"
				})
				return true;
			}
			return false
		}
	}


}
