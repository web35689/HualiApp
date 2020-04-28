<template>
  <div id="productbox">
    <div id="product" v-for="(item, Listindex) in productList" :key="Listindex">
      <h3 class="product-title">{{item.title}}</h3>
      <div class="product-content" v-for="(value, index) in item.data" :key="index">
		<router-link :to="{path:'/index/details',query:{id:value.id}}" class="product-a">
          <div class="product-content-left">
            <img :src="value.img" />
          </div>
          <div class="product-content-right">
            <h4 class="product-name">{{value.name}}</h4>
            <p class="product-desc">{{value.Science}}</p>
            <p class="product-promo">{{value.promo}}</p>
            <div class="product-pricebox">
              <div class="product-pricebox-left">
                <p>
                  <span>¥{{value.newPrice}}</span>
                  <s>¥{{value.oldPrice}}</s>
                </p>
                <p>已销售{{value.num}}件</p>
              </div>
              <div class="product-pricebox-right" @click.prevent="addCar(value)">
                <i class="iconfont icon-gouwuche"></i>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <p class="product-footer">查看更多</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: [
        {
          title: "送恋人/爱情鲜花",
          data: [
            {
              id: "1",
              img: "img/home/product1.jpg",
              name: "一往情深",
              Science: "精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎",
              ScienceAll: "高档礼盒装鲜花:19枝红玫瑰，勿忘我0.1扎",
              flowerLanguage:
                "你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",
              promo: "经典爆款，年销售冠军！",
              newPrice: "249",
              oldPrice: "315",
              num: "12.0万",
              thisNum: 1,
              reduceFlag: false,
              bannerImg: [
                "img/home/details/ywqs1.jpg",
                "img/home/details/ywqs2.jpg",
                "img/home/details/ywqs3.jpg",
                "img/home/details/ywqs4.jpg"
              ],
              detailImg: [
                { img: "img/home/details/ywqs6.jpg", name: "产品详情图" },
                { img: "img/home/details/ywqs7.jpg", name: "产品详情图" },
                { img: "img/home/details/ywqs8.jpg", name: "产品详情图" },
                { img: "img/home/details/ywqs9.jpg", name: "产品详情图" },
                { img: "img/home/details/ywqs10.jpg", name: "产品详情图" },
                { img: "img/home/details/ywqs11.jpg", name: "产品详情图" },
                { img: "img/home/details/ywqs12.jpg", name: "产品详情图" },
                { img: "img/home/details/ywqs13.jpg", name: "产品详情图" },
                { img: "img/home/details/ywqs14.jpg", name: "产品详情图" },
                { img: "img/home/details/ywqs15.jpg", name: "产品详情图" },
                { img: "img/home/details/ywqs16.jpg", name: "产品详情图" }
              ]
            },
            {
              id: "2",
              img: "img/home/product2.jpg",
              name: "一心一意",
              Science: "玫瑰11枝，粉色勿忘我0.3扎",
              ScienceAll: "红玫瑰11枝，粉色(或者紫色）勿忘我0.3扎，栀子叶8枝",
              flowerLanguage:
                "11枝玫瑰，寓意一心一意！<br/>有情之人，天天是节。一句寒暖，一线相喧；一句叮咛，一笺相传；一份相思，一心相盼；一份爱意，一生相恋。",
              promo: "经典款式 精选爆款",
              newPrice: "139",
              oldPrice: "189",
              num: "11.7万",
              thisNum: 1,
              reduceFlag: false,
              bannerImg: [
                "img/home/details/yxyy1.jpg",
                "img/home/details/yxyy2.jpg",
                "img/home/details/yxyy3.jpg",
                "img/home/details/yxyy4.jpg"
              ],
              detailImg: [
                { img: "img/home/details/yxyy6.jpg", name: "产品详情图" },
                { img: "img/home/details/yxyy7.jpg", name: "产品详情图" },
                { img: "img/home/details/yxyy8.jpg", name: "产品详情图" },
                { img: "img/home/details/yxyy9.jpg", name: "产品详情图" },
                { img: "img/home/details/yxyy10.jpg", name: "产品详情图" },
                { img: "img/home/details/yxyy11.jpg", name: "产品详情图" },
                { img: "img/home/details/yxyy12.jpg", name: "产品详情图" },
                { img: "img/home/details/yxyy13.jpg", name: "产品详情图" },
                { img: "img/home/details/yxyy14.jpg", name: "产品详情图" },
                { img: "img/home/details/yxyy15.jpg", name: "产品详情图" },
                { img: "img/home/details/yxyy16.jpg", name: "产品详情图" },
                { img: "img/home/details/yxyy17.jpg", name: "产品详情图" },
                { img: "img/home/details/yxyy18.jpg", name: "产品详情图" }
              ]
            },
            {
              id: "3",
              img: "img/home/product3.jpg",
              name: "忘情巴黎",
              Science: "33枝红玫瑰",
              ScienceAll: "33枝红玫瑰，石竹梅20枝",
              flowerLanguage:
                "只想和你忘掉一切烦恼，尽情沉醉在最浪漫的气氛中。",
              promo: "浪漫唯美 女神挚爱",
              newPrice: "298",
              oldPrice: "382",
              num: "6.7万",
              thisNum: 1,
              reduceFlag: false,
              bannerImg: [
                "img/home/details/wqbl1.jpg",
                "img/home/details/wqbl2.jpg",
                "img/home/details/wqbl3.jpg",
                "img/home/details/wqbl4.jpg"
              ],
              detailImg: [
                { img: "img/home/details/wqbl6.jpg", name: "产品详情图" },
                { img: "img/home/details/wqbl7.jpg", name: "产品详情图" },
                { img: "img/home/details/wqbl8.jpg", name: "产品详情图" },
                { img: "img/home/details/wqbl9.jpg", name: "产品详情图" },
                { img: "img/home/details/wqbl10.jpg", name: "产品详情图" },
                { img: "img/home/details/wqbl11.jpg", name: "产品详情图" },
                { img: "img/home/details/wqbl12.jpg", name: "产品详情图" }
              ]
            },
            {
              id: "4",
              img: "img/home/product4.jpg",
              name: "韩式系列/亲爱的你",
              Science:
                "粉佳人玫瑰16枝、白和粉色洋桔梗各5枝、尤加利10枝、浅紫色小菊3枝、深粉色绣球1枝",
              ScienceAll:
                "韩式花束系列：粉佳人玫瑰16枝、3头或以上白色洋桔梗5枝、3头或以上粉色洋桔梗5枝、尤加利10枝、浅紫色小菊3枝、深粉色绣球1枝",
              flowerLanguage: "我喜欢的样子你都有",
              promo: "花艺师打造 韩式花束系列",
              newPrice: "368",
              oldPrice: "469",
              num: "734",
              thisNum: 1,
              reduceFlag: false,
              bannerImg: [
                "img/home/details/hsxlqadn1.jpg",
                "img/home/details/hsxlqadn2.jpg",
                "img/home/details/hsxlqadn3.jpg",
                "img/home/details/hsxlqadn4.jpg"
              ],
              detailImg: [
                { img: "img/home/details/hsxlqadn6.jpg", name: "产品详情图" },
                { img: "img/home/details/hsxlqadn7.jpg", name: "产品详情图" },
                { img: "img/home/details/hsxlqadn8.jpg", name: "产品详情图" },
                { img: "img/home/details/hsxlqadn9.jpg", name: "产品详情图" },
                { img: "img/home/details/hsxlqadn10.jpg", name: "产品详情图" },
                { img: "img/home/details/hsxlqadn11.jpg", name: "产品详情图" },
                { img: "img/home/details/hsxlqadn12.jpg", name: "产品详情图" },
                { img: "img/home/details/hsxlqadn13.jpg", name: "产品详情图" },
                { img: "img/home/details/hsxlqadn14.jpg", name: "产品详情图" }
              ]
            },
            {
              id: "5",
              img: "img/home/product5.jpg",
              name: "不变的承诺",
              Science: "99枝红玫瑰",
              ScienceAll: "99枝红玫瑰",
              flowerLanguage:
                "下雨的时候，给她撑一把雨伞；寒冷的时候，给她一个温暖的臂弯；天黑了，永远有一盏灯为她点亮；晨起时，给她一缕温暖的阳光。爱她，就送她一束99枝的玫瑰花！",
              promo: "经典99枝，鼎力推荐！",
              newPrice: "520",
              oldPrice: "869",
              num: "6.3万",
              thisNum: 1,
              reduceFlag: false,
              bannerImg: [
                "img/home/details/bbdcn1.jpg",
                "img/home/details/bbdcn2.jpg",
                "img/home/details/bbdcn3.jpg",
                "img/home/details/bbdcn4.jpg"
              ],
              detailImg: [
                { img: "img/home/details/bbdcn6.jpg", name: "产品详情图" },
                { img: "img/home/details/bbdcn7.jpg", name: "产品详情图" },
                { img: "img/home/details/bbdcn8.jpg", name: "产品详情图" },
                { img: "img/home/details/bbdcn9.jpg", name: "产品详情图" },
                { img: "img/home/details/bbdcn10.jpg", name: "产品详情图" },
                { img: "img/home/details/bbdcn11.jpg", name: "产品详情图" },
                { img: "img/home/details/bbdcn12.jpg", name: "产品详情图" },
                { img: "img/home/details/bbdcn13.jpg", name: "产品详情图" },
                { img: "img/home/details/bbdcn14.jpg", name: "产品详情图" },
                { img: "img/home/details/bbdcn15.jpg", name: "产品详情图" },
                { img: "img/home/details/bbdcn16.jpg", name: "产品详情图" }
              ]
            },
            {
              id: "6",
              img: "img/home/product6.jpg",
              name: "恋恋情深",
              Science: "11枝香槟玫瑰，白色多头百合2枝",
              ScienceAll: "11枝香槟玫瑰，多头白百合2枝，栀子叶8枝",
              flowerLanguage: "喜欢像是一阵风，而爱你是细水长流",
              promo: "经典款式 简约设计",
              newPrice: "198",
              oldPrice: "255",
              num: "7.5万",
              thisNum: 1,
              reduceFlag: false,
              bannerImg: [
                "img/home/details/llsq1.jpg",
                "img/home/details/llsq2.jpg",
                "img/home/details/llsq3.jpg",
                "img/home/details/llsq4.jpg"
              ],
              detailImg: [
                { img: "img/home/details/llsq6.jpg", name: "产品详情图" },
                { img: "img/home/details/llsq7.jpg", name: "产品详情图" },
                { img: "img/home/details/llsq8.jpg", name: "产品详情图" },
                { img: "img/home/details/llsq9.jpg", name: "产品详情图" },
                { img: "img/home/details/llsq10.jpg", name: "产品详情图" },
                { img: "img/home/details/llsq11.jpg", name: "产品详情图" },
                { img: "img/home/details/llsq12.jpg", name: "产品详情图" },
                { img: "img/home/details/llsq13.jpg", name: "产品详情图" },
                { img: "img/home/details/llsq14.jpg", name: "产品详情图" },
                { img: "img/home/details/llsq15.jpg", name: "产品详情图" },
                { img: "img/home/details/llsq16.jpg", name: "产品详情图" },
                { img: "img/home/details/llsq17.jpg", name: "产品详情图" },
                { img: "img/home/details/llsq18.jpg", name: "产品详情图" }
              ]
            },
            {
              id: "7",
              img: "img/home/product7.jpg",
              name: "韩式系列/初心不负",
              Science:
                " 韩式花束系列花艺师全新打造，卡罗拉玫瑰11枝、白底粉边洋桔梗5枝、大叶尤加利10枝",
              ScienceAll:
                "以热烈主题的红玫瑰及红色包装，搭配象征白色无暇的桔梗为设计主题，打造全新韩式系列。将这一簇美景包裹在一片雪白中，一条满载希望的丝带扎紧了无限的惊喜，只为将全世界的风景奉献于你怀里",
              flowerLanguage:
                "以热烈主题的红玫瑰及红色包装，搭配象征白色无暇的桔梗为设计主题，打造全新韩式系列。将这一簇美景包裹在一片雪白中，一条满载希望的丝带扎紧了无限的惊喜，只为将全世界的风景奉献于你怀里",
              promo: "花艺师打造 韩式花束系列",
              newPrice: "229",
              oldPrice: "298",
              num: "6.7万",
              thisNum: 1,
              reduceFlag: false,
              bannerImg: [
                "img/home/details/hsxlcxbf1.jpg",
                "img/home/details/hsxlcxbf2.jpg",
                "img/home/details/hsxlcxbf3.jpg",
                "img/home/details/hsxlcxbf4.jpg"
              ],
              detailImg: [
                { img: "img/home/details/hsxlcxbf6.jpg", name: "产品详情图" },
                { img: "img/home/details/hsxlcxbf7.jpg", name: "产品详情图" },
                { img: "img/home/details/hsxlcxbf8.jpg", name: "产品详情图" },
                { img: "img/home/details/hsxlcxbf9.jpg", name: "产品详情图" },
                { img: "img/home/details/hsxlcxbf10.jpg", name: "产品详情图" },
                { img: "img/home/details/hsxlcxbf11.jpg", name: "产品详情图" },
                { img: "img/home/details/hsxlcxbf12.jpg", name: "产品详情图" },
                { img: "img/home/details/hsxlcxbf13.jpg", name: "产品详情图" },
                { img: "img/home/details/hsxlcxbf14.jpg", name: "产品详情图" },
                { img: "img/home/details/hsxlcxbf15.jpg", name: "产品详情图" }
              ]
            },
            {
              id: "8",
              img: "img/home/product8.jpg",
              name: "爱在心头",
              Science: "玫瑰50枝：戴安娜粉玫瑰19枝，红玫瑰31枝",
              ScienceAll: "红玫瑰11枝，粉色(或者紫色）勿忘我0.3扎，栀子叶8枝",
              flowerLanguage:
                "你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",
              promo: "双色搭配 赏心悦目",
              newPrice: "398",
              oldPrice: "479",
              num: "2.0万",
              thisNum: 1,
              reduceFlag: false
            }
          ]
        },
        {
          title: "送长辈鲜花",
          data: [
            {
              id: "9",
              img: "img/home/product9.jpg",
              name: "母爱",
              Science: "紫红色康乃馨9枝，粉色多头康乃馨10枝",
              ScienceAll: "红玫瑰11枝，粉色(或者紫色）勿忘我0.3扎，栀子叶8枝",
              flowerLanguage:
                "你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",
              promo: "经典爆款，年销售冠军！",
              newPrice: "162",
              oldPrice: "228",
              num: "1.6万",
              thisNum: 1,
              reduceFlag: false
            },
            {
              id: "10",
              img: "img/home/product10.jpg",
              name: "留住好时光",
              Science: "粉绣球1枝，粉雪山玫瑰6枝",
              ScienceAll: "红玫瑰11枝，粉色(或者紫色）勿忘我0.3扎，栀子叶8枝",
              flowerLanguage:
                "你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",
              promo: "精选昆明A级花材",
              newPrice: "239",
              oldPrice: "306",
              num: "9705",
              thisNum: 1,
              reduceFlag: false
            },
            {
              id: "11",
              img: "img/home/product11.jpg",
              name: "幸福绽放",
              Science: "粉色康乃馨19枝",
              flowerLanguage:
                "你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",
              promo: "温暖之选 亮丽花色",
              newPrice: "172",
              oldPrice: "215",
              num: "1.3万",
              thisNum: 1,
              reduceFlag: false
            },
            {
              id: "12",
              img: "img/home/product12.jpg",
              name: "韩式系列/温柔以待",
              Science:
                "粉色康乃馨13枝，戴安娜玫瑰5枝、粉色洋桔梗5枝、浅紫紫罗兰5枝、尤加利10枝",
              flowerLanguage:
                "你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",
              promo: "韩式系列 母亲节新品",
              newPrice: "239",
              oldPrice: "299",
              num: "167",
              thisNum: 1,
              reduceFlag: false
            },
            {
              id: "13",
              img: "img/home/product13.jpg",
              name: "恩情无限",
              Science: "粉色康乃馨11枝，百合2枝",
              flowerLanguage:
                "你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",
              promo: "精选花材 精心设计",
              newPrice: "178",
              oldPrice: "232",
              num: "1.3万",
              thisNum: 1,
              reduceFlag: false
            },
            {
              id: "14",
              img: "img/home/product14.jpg",
              name: "幸福万年长",
              Science: "红色康乃馨66枝，白边紫色多头康乃馨15枝，栀子叶2扎",
              flowerLanguage:
                "你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",
              promo: "温暖花束 幸福万年长",
              newPrice: "338",
              oldPrice: "486",
              num: "3584件",
              thisNum: 1,
              reduceFlag: false
            }
          ]
        }
      ]
    };
  },
  methods: {
    addCar(arr) {
      let productArr = JSON.parse(window.localStorage.getItem("productArr")) || [];
      let num = 0;
      // 判断缓存中是否存在数据
      if(productArr){
        for (const i in productArr) {
          if (productArr[i].id != arr.id&&num <= productArr.length){
            num++;
          }
        }
        // 添加的和缓存的数据不相同
        if(num != productArr.length - 1){
          productArr.push(arr);
          this.$store.state.shopcarList.push(arr);
          window.localStorage.setItem("productArr",JSON.stringify(productArr));
        }
      }else{
        productArr.push(arr);
        this.$store.state.shopcarList.push(arr);
        window.localStorage.setItem("productArr",JSON.stringify(productArr));
      }
    }
  }
};
</script>


<style lang="less" scoped>
#productbox {
  #product {
    background: #fff;
    margin-top: 0.213333rem;
    padding-bottom: 0.533333rem;

    h3 {
      font-size: 0.426667rem;
      padding: 0.56rem 0;
      text-align: center;
      font-weight: normal;
    }

    .product-content {
      padding: 0.133333rem 0.213333rem;

      .product-a {
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        overflow: hidden;
        box-shadow: 0 0.133333rem 0.266667rem 0 #e9ecf0;
        border-radius: 0.133333rem;

        .product-content-left {
          width: 50%;

          img {
            width: 100%;
          }
        }

        .product-content-right {
          color: #000;
          padding: 0 0.533333rem;
          width: 50%;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          text-align: left;
          font-weight: 300;

          .product-name {
            font-size: 0.426667rem;
            padding-top: 0.4rem;
            font-weight: 200;
          }

          .product-desc {
            font-size: 0.346667rem;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          .product-promo {
            font-size: 0.32rem;
            padding: 0.266667rem 0;
            margin-top: 0.32rem;
            border-top: 1px solid #e9ecf0;
            border-bottom: 1px solid #e9ecf0;
          }

          .product-pricebox {
            margin-top: 0.8rem;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -moz-box-align: center;
            -ms-flex-align: center;
            align-items: center;

            .product-pricebox-left {
              width: 70%;
              -moz-box-sizing: border-box;
              box-sizing: border-box;

              p {
                &:nth-child(1) {
                  span {
                    font-size: 0.48rem;
                    color: #ff734c;
                    font-weight: 500;
                  }

                  s {
                    font-size: 0.32rem;
                    color: #71797f;
                    margin-left: 0.186667rem;
                  }
                }

                &:nth-child(2) {
                  font-size: 0.32rem;
                  color: #71797f;
                }
              }
            }

            .product-pricebox-right {
              margin: auto;

              .iconfont {
                font-size: 0.533333rem;
                color: #232628;
              }
            }
          }
        }
      }
    }

    .product-footer {
      width: 2.666667rem;
      margin: 0.533333rem auto 0;
      height: 0.8rem;
      line-height: 0.8rem;
      border: 1px solid #232628;
      border-radius: 0.133333rem;
      text-align: center;
    }
  }
}
</style>