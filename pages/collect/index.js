// pages/collect/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [{
            "id": 0,
            "name": "商品收藏",
            "isActive": true
        }, {
            "id": 1,
            "name": "店铺收藏",
            "isActive": false
        }, {
            "id": 2,
            "name": "品牌收藏",
            "isActive": false
        }],
        collect: []
    },
    onShow() {
        let collect = wx.getStorageSync('collect');
        console.log(collect)
        this.setData({
            collect
        })
    },
    changeItem(index) {
        let { tabs } = this.data;
        tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false)
        this.setData({
            tabs
        })
    },
    handleItemchange(e) {
        let { index } = e.detail;
        this.changeItem(index);
    },
})