<script>
	export default {
		globalData: {
			db:{}
		},
		onLaunch: function() {



			// 获取视频分类选项
			// this.getvodClassify()
			// this.$store.dispatch('wxLogin')
			let token = uni.getStorageSync('token')
			let setThemeBg = uni.getStorageSync('setThemeBg')
			if (setThemeBg) {
				this.$store.commit('setThemeBg', JSON.parse(setThemeBg))
			}
			// if (token) {
			// 	this.getwxuser(token)
			// }



		},
		mounted() {
			this.initYundb()
		},
		onShow: function(e) {},
		onHide: function() {},
		methods: {
			initYundb() {
				wx.cloud.init({
					env: "weixiaoying-1g9izdvv21e2ea8b",
					traceUser: true,
				})
				// console.log(getApp().globalData)
				this.globalData.db = wx.cloud.database()
				this.sub.db = this.globalData.db
				this.$store.commit('initUser')
				this.getvodClassify()
				
				// getApp().globalData.db = wx.cloud.database()
				
			},
			async getvodClassify() {
				let db =  this.globalData.db
				db.collection('vodClassifyList').get().then(res=>{
					this.$store.commit('setVodClassifyList', res.data)
				})
				// var data = await this.$api.getvodClassify()
				// 
			},

			async getwxuser(token) {
				var data = await this.$api.getwxuser({
					token: token.replace(/\"/g, '')
				})
				if (data.code == 1) {
					uni.setStorageSync('userInfo', JSON.stringify(data.result))
					uni.setStorageSync('token', JSON.stringify(data.token))
					
				} else {
					uni.setStorageSync('userInfo', '')
					uni.setStorageSync('token', '')
				}
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "/static/alfont/iconfont.css";
	/* 官方ui库 */
	@import "/common/uni.css";

	/* UI基础库 */
	@import "/common/zcm-main.css";
	/* 公共样式 */
	/* @import "/common/common.css"; */
</style>

<style lang="scss">
	@import "/common/theme.scss";
</style>
