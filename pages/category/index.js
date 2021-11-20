// pages/category/index.js
Page({
    data: {
        //左侧列表数据
        LeftmenuList: [{
            "cate_id": 1,
            "cate_name": '大家电'
        }],
        //右侧数据
        RightmenuList: [{
            "cate_id": 1,
            "cate_name": '电视',
            "children": [{
                "cate_id": 1,
                "cate_name": '曲面电视',
                "cate_icon": ''
            }]
        }]
    },
})