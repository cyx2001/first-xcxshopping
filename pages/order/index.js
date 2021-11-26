// pages/order/index.js
var data = require('../../data/index')
Page({
    data: {
        tabs: [{
                "id": 0,
                "name": "全部",
                "isActive": true
            }, {
                "id": 1,
                "name": "待付款",
                "isActive": false
            }, {
                "id": 2,
                "name": "待收货",
                "isActive": false
            },
            {
                "id": 3,
                "name": "退换货",
                "isActive": false
            }
        ],
        orderlist: []
    },
    onShow() {
        let token = wx.getStorageSync('token');
        if (!token) {
            wx.navigateTo({
                url: '../auth/index',
            })
            return;
        }
        let pages = getCurrentPages();
        let { type } = pages[pages.length - 1].options;
        this.changeItem(type - 1);
        this.getOderlist(type);
    },
    getOderlist(type) {
        let orderlist = data.order.message[type];
        this.setData({
            orderlist
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
        this.getOderlist(index + 1);
    },
})