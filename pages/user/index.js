// pages/user/index.js
Page({
    data: {
        userinfo: {},
        collectNum: 0
    },
    onShow() {
        let userinfo = wx.getStorageSync('userinfo');
        let collcet = wx.getStorageSync('collect');
        let collectNum = collcet.length;
        this.setData({
            userinfo,
            collectNum
        })
    }

})