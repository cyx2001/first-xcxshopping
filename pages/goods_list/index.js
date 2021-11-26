var data = require('../../data/index')
Page({
    data: {
        tabs: [{
            "id": 0,
            "name": "综合",
            "isActive": true
        }, {
            "id": 1,
            "name": "销量",
            "isActive": false
        }, {
            "id": 2,
            "name": "价格",
            "isActive": false
        }],
        goodslist: [],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log(options)
        this.getdata()
    },
    getdata() {
        let goodslist = data.goods.message;
        this.setData({
            goodslist
        });
        //关闭下拉刷新
        wx.stopPullDownRefresh();
    },
    handleItemchange(e) {
        let { index } = e.detail;
        let { tabs } = this.data;
        tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false)
        this.setData({
            tabs
        })
    },
    // 下拉刷新
    onPullDownRefresh() {
        //数组置空
        this.setData({
                goodslist: []
            })
            //重新获取数据
        this.getdata()
    },
    //页面触底加载下一页
    onReachBottom() {
        console.log(111)
    }
})