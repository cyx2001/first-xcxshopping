// pages/login/index.js
Page({

    handleGetuserinfo(e) {
        let { userInfo } = e.detail;
        wx.setStorageSync('userinfo', userInfo);
        wx.navigateBack({
            detail: 1
        })
    }
})