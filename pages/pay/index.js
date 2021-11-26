Page({
    data: {
        address: {},
        cart: [],
        //总价格
        totalprice: 0,
        //总数量
        totalnum: 0
    },
    onShow() {
        //将本地存储地址赋值到data数据
        let address = wx.getStorageSync('address');
        address.all = address.provinceName + address.cityName + address.countyName;
        let cart = wx.getStorageSync('cart') || [];
        cart = cart.filter(v => v.checked);
        let totalnum = 0;
        let totalprice = 0;
        cart.forEach((v) => {
            totalnum += v.num;
            totalprice += v.num * v.goods_price;
        })
        this.setData({
            cart,
            address,
            totalnum,
            totalprice
        })

    },
    handleOrderPay() {
        //1.获取用户token
        let token = wx.getStorageSync('token');
        //2.判断token是否存在，不存在则获取
        if (!token) {
            wx.navigateTo({
                url: '../auth/index',
            })
            return;
        }
        //3.创建订单，准备请求头和请求体参数；
        //4.发送请求 创建订单 获取订单号;
        //5.发起预支付接口
        //6.发起微信支付 wx.requestPayment
        //7.查询后台订单状态
        //8.成功后,将购物车已购买数据删除，跳转到订单页面
        let cart = wx.getStorageSync('cart') || [];
        cart = cart.filter(v => !v.checked);
        wx.setStorageSync('cart', cart);
        wx.navigateTo({
            url: '../order/index',
        })
    }
})