// pages/category/index.js
var data = require('../../data/index')
Page({
    data: {
        //左侧列表数据
        LeftmenuList: [],
        //右侧数据
        RightmenuList: [],
        currentIndex: 0,
        scollTop: 0,
    },
    onLoad: function(options) {
        this.getData();
    },
    //获取数据
    getData() {
        data.a()
        let datalist = data.cate.message;
        let LeftmenuList = datalist.map(v => v.cate_name);
        let RightmenuList = datalist[0].children;
        this.setData({
            LeftmenuList,
            RightmenuList
        })
        setTimeout(() => {
            wx.hideLoading();
        }, 500);
    },

    haddleItemTap(e) {
        let index = e.target.dataset.index;
        let RightmenuList = data.cate.message[index].children;
        //设置右侧滚动条为顶部
        this.setData({
            currentIndex: index,
            RightmenuList,
            scollTop: 0
        })
    }
})