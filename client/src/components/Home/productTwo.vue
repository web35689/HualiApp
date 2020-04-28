<template>
  <div id="productbox">
    <div id="product" v-for="(item, index) in productTwoList" :key="index">
      <h3 class="product-title">{{item.title}}</h3>
      <div class="contentbox">
        <div class="productTwo-content" v-for="(value, index) in item.data" :key="index">
          <router-link :to="{path:'/index/details',query:{id:value.id}}" class="product-a">
            <div class="product-content-top">
              <img :src="value.img" />
            </div>
            <div class="product-content-bottom">
              <p class="product-label">
                <span v-if="value.label">{{value.label}}</span>
              </p>
              <p
                class="product-desc"
                :class="{'product-descactive':!value.label}"
              >{{value.name}} - {{value.desc}}</p>
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
      </div>

      <p class="product-footer">查看更多</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productTwoList: [
        {
          title: "永生花推荐",
          data: [
            {
              id: "15",
              img: "img/home/product15.jpg",
              label: "畅销",
              name: "我如此爱你",
              desc: "口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒",
              newPrice: "598",
              oldPrice: "698",
              num: "6785",
              thisNum: 1,
              reduceFlag: false
            },
            {
              id: "16",
              img: "img/home/product16.jpg",
              label: "创意新品",
              name: "一鹿(路)有你永生花小夜灯",
              desc: "永生花礼盒",
              newPrice: "298",
              oldPrice: "398",
              num: "429",
              thisNum: 1,
              reduceFlag: false
            },
            {
              id: "17",
              img: "img/home/product17.jpg",
              label: "热销单品",
              name: "花好月圆永生花台灯",
              desc: "精选进口奥斯汀永生玫瑰台灯",
              newPrice: "298",
              oldPrice: "398",
              num: "1062",
              thisNum: 1,
              reduceFlag: false
            },
            {
              id: "18",
              img: "img/home/product18.jpg",
              label: "爱的承诺",
              name: "一生一世",
              desc: "厄瓜多尔进口永生红玫1朵，双色永生绣球",
              newPrice: "198",
              oldPrice: "259",
              num: "1.2万",
              thisNum: 1,
              reduceFlag: false
            }
          ]
        },
        {
          title: "蛋糕推荐",
          data: [
            {
              id: "19",
              img: "img/home/product19.jpg",
              label: "",
              name: "蓝色星球(6寸)",
              desc: "",
              newPrice: "298",
              oldPrice: "398",
              num: "122",
              thisNum: 1,
              reduceFlag: false
            },
            {
              id: "20",
              img: "img/home/product20.jpg",
              label: "",
              name: "蒙布朗栗蓉奶油蛋糕（6寸）",
              desc: "奶油蛋糕",
              newPrice: "249",
              oldPrice: "349",
              num: "5",
              thisNum: 1,
              reduceFlag: false
            },
            {
              id: "21",
              img: "img/home/product21.jpg",
              label: "",
              name: "蝶恋花景(8寸)",
              desc: "元祖鲜奶蛋糕，布丁加水果夹层",
              newPrice: "258",
              oldPrice: "358",
              num: "2562",
              thisNum: 1,
              reduceFlag: false
            },
            {
              id: "22",
              img: "img/home/product22.jpg",
              label: "",
              name: "水果盛宴·3磅(10寸)",
              desc: "水果蛋糕",
              newPrice: "239",
              oldPrice: "239",
              num: "2962",
              thisNum: 1,
              reduceFlag: false
            }
          ]
        },
        {
          title: "礼品推荐",
          data: [
            {
              id: "23",
              img: "img/home/product23.jpg",
              label: "礼盒装畅销款",
              name: "天使之恋",
              desc: "高档精品化妆镜,天然深海母贝，彩白色的奥地利水钻",
              newPrice: "159",
              oldPrice: "199",
              num: "1.8万",
              thisNum: 1,
              reduceFlag: false
            },
            {
              id: "24",
              img: "img/home/product24.jpg",
              label: "火热畅销款",
              name: "星期耳钉礼盒",
              desc: "s925银个性耳钉",
              newPrice: "198",
              oldPrice: "298",
              num: "1576",
              thisNum: 1,
              reduceFlag: false
            },
            {
              id: "25",
              img: "img/home/product25.jpg",
              label: "新品",
              name: "迪奥口红#999+迪奥花漾淡香水30ml",
              desc: "口红+香水礼盒套装",
              newPrice: "889",
              oldPrice: "900",
              num: "47",
              thisNum: 1,
              reduceFlag: false
            },
            {
              id: "26",
              img: "img/home/product26.jpg",
              label: "热销新品",
              name: "T400双C项链女锁骨链镶施华洛世奇锆电镀玫瑰金",
              desc: "双C系列新品，永生花礼盒，玫瑰金",
              newPrice: "299",
              oldPrice: "399",
              num: "20",
              thisNum: 1,
              reduceFlag: false
            }
          ]
        },
        {
          title: "巧克力推荐",
          data: [
            {
              id: "27",
              img: "img/home/product27.jpg",
              label: "",
              name: "奢悦之美巧克力礼盒",
              desc: "夹心巧克力",
              newPrice: "158",
              oldPrice: "358",
              num: "5062",
              thisNum: 1,
              reduceFlag: false
            },
            {
              id: "28",
              img: "img/home/product28.jpg",
              label: "",
              name: "Felchlin妃亭16粒装巧克力礼盒",
              desc: "德国进口夹心手工巧克力",
              newPrice: "298",
              oldPrice: "298",
              num: "3327",
              thisNum: 1,
              reduceFlag: false
            },
            {
              id: "29",
              img: "img/home/product29.jpg",
              label: "",
              name: "巧克巧蔻定制16粒装手工夹心巧克力",
              desc: "手工夹心巧克力",
              newPrice: "288",
              oldPrice: "388",
              num: "4621",
              thisNum: 1,
              reduceFlag: false
            },
            {
              id: "30",
              path: "/index/details?" + this.id,
              img: "img/home/product30.jpg",
              label: "",
              name: "德国进口LAUENSTEIN巧克力手工松露酒味夹心金装礼盒",
              desc: "德国进口酒心黑巧克力20粒",
              newPrice: "318",
              oldPrice: "418",
              num: "28",
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
  // min-height: 3000px;
  #product {
    background: #fff;
    margin-top: 0.213333rem;
    padding-bottom: 0.533333rem;

    h3 {
      font-size: 0.426667rem;
      padding: 0.533333rem 0;
      text-align: center;
      font-weight: normal;
    }

    .contentbox {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;

      .productTwo-content {
        margin-bottom: 0.266667rem;
        padding: 0.133333rem;
        width: 50%;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-color: #fff;
        box-shadow: 0 0.133333rem 0.266667rem 0 #e9ecf0;
        border-radius: 7px;

        .product-a {
          overflow: hidden;
          width: 100%;

          .product-content-top {
            width: 100%;

            img {
              width: 100%;
              vertical-align: middle;
            }
          }

          .product-content-bottom {
            padding: 0.266667rem 0.133333rem;
            height: 4.133333rem;
            overflow: hidden;
            position: relative;
            text-align: left;

            .product-label {
              margin-bottom: 0.226667rem;

              span {
                display: -webkit-inline-box;
                display: -webkit-inline-flex;
                display: -moz-inline-box;
                display: -ms-inline-flexbox;
                display: inline-flex;
                border-radius: 0.533333rem;
                border: 1px solid #ff734c;
                color: #ff734c;
                font-size: 0.32rem;
                padding: 0 0.106667rem;
              }
            }

            .product-desc {
              color: #000;
              font-size: 0.426667rem;
              font-weight: 200;
              overflow: hidden;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .product-descactive {
              overflow: hidden;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              white-space: normal;
            }

            .product-promo {
              font-size: 0.32rem;
              padding: 0.266667rem 0;
              margin-top: 0.32rem;
              border-top: 1px solid #e9ecf0;
              border-bottom: 1px solid #e9ecf0;
            }

            .product-pricebox {
              position: absolute;
              display: -webkit-box;
              display: -webkit-flex;
              display: -moz-box;
              display: -ms-flexbox;
              display: flex;
              left: 0.266667rem;
              right: 0.213333rem;
              bottom: 0.533333rem;
              z-index: 1;

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