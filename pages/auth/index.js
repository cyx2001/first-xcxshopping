// pages/auth/index.js
Page({
    handleGetuserinfo(e) {
        //获取用户信息
        const {
            encryptedData,
            errMsg,
            iv,
            rawData
        } = e.detail;
        //获取用户登陆成功的code值
        let code = "";
        wx.login({
                success: (res) => {
                    code = res.code
                },
            })
            //发送请求，根据用户信息和code信息获取用户的token,暂时没有办法获取；
        let token = 1;
        //加入到缓存
        wx.setStorageSync('token', token);

        //返回支付页面
        wx.navigateBack({
            delta: 1
        })
    }
})