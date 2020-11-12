import  Config  from './request.js';
export default {
    common:{
        verifyUrl : Config.common.baseUrl + 'token/verify',
        tokenUrl : Config.common.baseUrl + 'token/user'
    },
	
    verify() {
        var token = wx.getStorageSync('token');
        if (!token) {
            this.getTokenFromServer();
        }
        else {
            this._veirfyFromServer(token);
        } 
    },

    _veirfyFromServer(token) {
        var that = this;
        uni.request({
            url: that.common.verifyUrl,
            method: 'POST',
            data: {
                token: token
            },
            success: function (res) {
                var valid = res.data.isValid;
                if(!valid){
                    that.getTokenFromServer();
                }
            }
        })
    },

    getTokenFromServer(callBack) {
        var that  = this;
        uni.login({
            success: function (res) {
                wx.request({
                    url: that.common.tokenUrl,
                    method:'POST',
                    data:{
                        code:res.code
                    },
                    success:function(res){
                        //同步保存totken
                        wx.setStorageSync('token', res.data.token);
                        callBack&&callBack(res.data.token);
                    }
                })
            }
        })
    }
}