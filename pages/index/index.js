// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {
        //轮播图数组
        swiperList: [{
            id: 1,
            imageurl: "https://img2.baidu.com/it/u=874509955,178155001&fm=26&fmt=auto "
        }, {
            id: 2,
            imageurl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.aiimg.com%2Fuploads%2Fallimg%2F151027%2F1-15102H14320.jpg&refer=http%3A%2F%2Fimg.aiimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639902506&t=d8c343d856be84d26ce341d8e3200fab"
        }, {
            id: 3,
            imageurl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftrademark-pics-search.oss-cn-shanghai.aliyuncs.com%2Fsmall%2Fh4534363009074176.jpg&refer=http%3A%2F%2Ftrademark-pics-search.oss-cn-shanghai.aliyuncs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639901702&t=806d2d5d882d8d67616d53668d67ee45 "
        }],
        //导航栏数组
        cateList: [{
            name: '分类',
            cateUrl: "../../image/index_cat/分类.png"
        }, {
            name: '秒杀',
            cateUrl: "../../image/index_cat/秒杀.png"
        }, {
            name: '店铺',
            cateUrl: "../../image/index_cat/店铺.png"
        }, {
            name: '母婴',
            cateUrl: "../../image/index_cat/奶瓶.png"
        }],
        //楼层数组
        foolList: [{
            floor_title: {
                name: '时尚女装',
                imageurl: '../../image/index_floor/font1.png'
            },
            produce_list: [{
                name: '1',
                imageUrl: '../../image/index_floor/floor_01.jpg'
            }, {
                name: '2',
                imageUrl: '../../image/index_floor/floor_01.jpg'
            }, {
                name: '3',
                imageUrl: '../../image/index_floor/floor_01.jpg'
            }, {
                name: '4',
                imageUrl: '../../image/index_floor/floor_01.jpg'
            }, {
                name: '5',
                imageUrl: '../../image/index_floor/floor_01.jpg'
            }]
        }, {
            floor_title: {
                name: '时尚女装',
                imageurl: '../../image/index_floor/font1.png'
            },
            produce_list: [{
                name: '1',
                imageUrl: '../../image/index_floor/floor_01.jpg'
            }, {
                name: '2',
                imageUrl: '../../image/index_floor/floor_01.jpg'
            }, {
                name: '3',
                imageUrl: '../../image/index_floor/floor_01.jpg'
            }, {
                name: '4',
                imageUrl: '../../image/index_floor/floor_01.jpg'
            }, {
                name: '5',
                imageUrl: '../../image/index_floor/floor_01.jpg'
            }]
        }, {
            floor_title: {
                name: '时尚女装',
                imageurl: '../../image/index_floor/font1.png'
            },
            produce_list: [{
                name: '1',
                imageUrl: '../../image/index_floor/floor_01.jpg'
            }, {
                name: '2',
                imageUrl: '../../image/index_floor/floor_01.jpg'
            }, {
                name: '3',
                imageUrl: '../../image/index_floor/floor_01.jpg'
            }, {
                name: '4',
                imageUrl: '../../image/index_floor/floor_01.jpg'
            }, {
                name: '5',
                imageUrl: '../../image/index_floor/floor_01.jpg'
            }]
        }]
    },
    onLoad() {

    },
})