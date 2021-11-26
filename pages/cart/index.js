/*选择择收货地址
    1.绑定事件
    2.调用微信api chooseAddress添加收货地址
    3.获取用户授权访问地址的信息，并储存在本地
    4.页面加载完毕，读取本地数据，显示在页面
商品的选中
1.绑定change事件，将物品id传进函数
2.获取被修改的对象
3.商品的选中状态取反
4.重新添加到data和缓存中
5.重新计算总价格和总数目
    */
Page({
    data: {
        address: {},
        cart: [],
        //全选值
        checkedAll: false,
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
        this.setCart(cart);
        this.setData({
            address
        })

    },
    //选择地址
    handleChooseAddress() {
        // 获取收货地址,并存储到本地
        wx.chooseAddress({
            success: (result) => {
                wx.setStorageSync('address', result);
            },
        })

    },
    //取消选择、选择
    handleItemChange(e) {
        let id = e.currentTarget.dataset.index;
        let {
            cart
        } = this.data;
        let index = cart.findIndex(v => v.goods_id == id);
        cart[index].checked = !cart[index].checked;
        this.setCart(cart);
        wx.setStorageSync('cart', cart)

    },
    //计算全选、总价格、总数目
    setCart(cart) {
        let checkedAll = true;
        let totalnum = 0;
        let totalprice = 0;
        cart.forEach((v) => {
            if (v.checked) {
                totalnum += v.num;
                totalprice += v.num * v.goods_price;
            } else {
                checkedAll = false;
            }
        })
        checkedAll = cart.length ? checkedAll : false;
        this.setData({
            cart,
            checkedAll,
            totalnum,
            totalprice
        })
    },
    //全选和反选
    handleChangeAll() {
        let {
            cart,
            checkedAll
        } = this.data;
        //将数据checked全部设为true
        checkedAll = !checkedAll;
        cart.forEach(v => v.checked = checkedAll);
        this.setCart(cart);
        wx.setStorageSync('cart', cart);
    },
    //商品数量编辑功能
    handleEditNum(e) {
        let {
            id,
            operation
        } = e.currentTarget.dataset;
        let {
            cart
        } = this.data;
        let index = cart.findIndex(v => v.goods_id == id);
        if (cart[index].num == 1 && operation == -1) {
            wx.showModal({
                title: '提示',
                content: '是否删除该商品?',
                success: (res) => {
                    if (res.confirm) {
                        cart.splice(index, 1);
                        this.setCart(cart);
                        wx.setStorageSync('cart', cart);
                    } else if (res.cancel) {
                        console.log('用户点击取消')
                    }
                }
            })
        } else {
            cart[index].num += operation;
            this.setCart(cart);
            wx.setStorageSync('cart', cart);
        }
    },
    //立即结算功能
    handlePay() {
        let {
            totalnum,
            address
        } = this.data;
        if (!address.userName) {
            wx.showToast({
                title: '没有添加地址',
                icon: 'none',
            })
            return;
        }
        if (totalnum == 0) {
            wx.showToast({
                title: '没有选择商品',
                icon: 'none',
            })
            return;
        } 
            wx.navigateTo({
                url: '../pay/index',
            })
        }

})