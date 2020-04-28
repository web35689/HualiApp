import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopcarList: [
      // {
      //   id: "1",
      //   img: "/img/home/product1.jpg",
      //   name: "一往情深",
      //   desc: "精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎",
      //   promo: "经典爆款，年销售冠军！",
      //   newPrice: "249",
      //   oldPrice: "315",
      //   num: "12.0万",
      //   thisNum: 1,
      //   reduceFlag: false
      // }, {
      //   id: "2",
      //   img: "/img/home/product2.jpg",
      //   name: "一心一意",
      //   desc: "玫瑰11枝，粉色勿忘我0.3扎",
      //   promo: "经典款式 精选爆款",
      //   newPrice: "139",
      //   oldPrice: "189",
      //   num: "11.7万",
      //   thisNum: 1,
      //   reduceFlag: false
      // },
      // {
      //   id: "3",
      //   img: "/img/home/product3.jpg",
      //   name: "忘情巴黎",
      //   desc: "33枝红玫瑰",
      //   promo: "浪漫唯美 女神挚爱",
      //   newPrice: "298",
      //   oldPrice: "382",
      //   num: "6.7万",
      //   thisNum: 1,
      //   reduceFlag: false
      // },
      // {
      //   id: "4",
      //   img: "/img/home/product4.jpg",
      //   name: "韩式系列/亲爱的你",
      //   desc: "粉佳人玫瑰16枝、白和粉色洋桔梗各5枝、尤加利10枝、浅紫色小菊3枝、深粉色绣球1枝",
      //   promo: "花艺师打造 韩式花束系列",
      //   newPrice: "368",
      //   oldPrice: "469",
      //   num: "734",
      //   thisNum: 1,
      //   reduceFlag: false
      // },
    ]
  },
  mutations: {
    changeList: (state, oldList) => { //替换整个shopcarList
      state.shopcarList = oldList;
      window.localStorage.setItem("productArr",JSON.stringify(state.shopcarList));
    }
  },
  actions: {},
  modules: {}
})