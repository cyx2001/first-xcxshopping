// pages/search/index.js
Page({
    data: {
        //存储跟据搜索值返回的数据
        search: [],
        //控制取消按钮显示和隐藏
        isFoucs: true,
        inputvalue: ""
    },
    //防抖
    timeer: -1,
    handleinput(e) {
        const { value } = e.detail;
        //检查值是否合法
        if (!value.trim()) {
            this.setData({
                isFoucs: true,
                search: []
            })
            return;
        }
        this.setData({
                isFoucs: false
            })
            //防抖函数，n秒之后在执行回调函数
        clearTimeout(this.timeer);
        this.timeer = setTimeout(() => {
            this.searchresult(value);
        }, 1000);
    },
    searchresult(value) {
        let search = [];
        search.push({ id: 1, value });
        this.setData({
            search
        })
    },
    handleCancle() {
        this.setData({
            isFoucs: true,
            search: [],
            inputvalue: ""
        })
    }

})