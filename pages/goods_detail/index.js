/* 1.获取数据
2.点击轮播图图片放大
3.加入购物车功能
  绑定事件，读取购物车缓存，不存在则添加；存在则修改缓存数据，重新添加到缓存中；
*/
var data = require('../../data/index')
Page({
    data: {
        goodsObj: {},
        //商品是否被收藏
        iscollect: false
    },
    //商品对象
    goodsInfo: {},
    /**
     * 生命周期函数--监听页面加载
     */
    onShow: function() {
        let pages = getCurrentPages();
        let options = pages[pages.length - 1].options;
        this.getData(options);
    },
    //获取数据
    getData(options) {
        let goodsObj = data.goodsdetail.message.filter(v => { return v.goods_id == options.goods_id })[0];
        this.goodsInfo = goodsObj;
        let collect = wx.getStorageSync('collect') || [];
        let iscollect = collect.some(v => v.goods_id === this.goodsInfo.goods_id);
        this.setData({
            goodsObj,
            iscollect
        })
    },
    //点击轮播图图片放大
    handlePreviewImage(e) {
        //构造预览的图片
        let urls = this.goodsInfo.pic.map(v => v.pic_url)
        wx.previewImage({
            urls
        })
    },
    //加入购物车选项
    handleAddCart() {
        // 1.获取购物车缓存
        let cart = wx.getStorageSync('cart') || [];
        //2.查询该缓存是否有改商品信息
        let index = cart.findIndex(v => v.goods_id == this.goodsInfo.goods_id);
        if (index === -1) {
            //3.如果不存在，将该商品信息加入购物车数组
            this.goodsInfo.num = 1;
            this.goodsInfo.checked = true;
            cart.push(this.goodsInfo);
        } else {
            //4.已经存在，数目增加
            cart[index].num++;
        };
        //5.将数据更新到缓存
        wx.setStorageSync('cart', cart)
            //6.弹窗提示
        wx.showToast({
            title: '加入成功',
            icon: 'success',
            mask: 'true'
        })
    },
    //收藏功能
    handleCollect() {
        //取出缓存中的collect数组
        let collect = wx.getStorageSync('collect') || [];
        //判断是否有改商品
        let index = collect.findIndex(v => v.goods_id === this.goodsInfo.goods_id);
        let iscollect = false;
        //然后不存在，加入缓存,否则在缓存中删除改商品
        if (index == -1) {
            collect.push(this.goodsInfo);
            iscollect = true;
            wx.showToast({
                title: '收藏成功',
                icon: 'success',
                mask: 'true'
            })
        } else {
            collect.splice(index, 1);
            ischeck = false;
            wx.showToast({
                title: '取消收藏',
                icon: 'none',
                mask: 'true'
            })
        }
        wx.setStorageSync('collect', collect);
        this.setData({
            iscollect
        })
    }
})