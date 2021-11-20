// componets/tabs/Tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        aaa:{
            type:String,
            value:'',
        },tabs:{
            type:Array,
            value:[]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleclick(e){
            let {index}=e.currentTarget.dataset
            this.triggerEvent('itemchange',{index})}
           
    }
})