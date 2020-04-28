<template>
  <div id="productbox">
    <div id="product" v-for="(item, index) in productTwoList" :key="index">
      <h3 class="product-title">{{item.title}}</h3>
      <div class="contentbox">
        <div class="productTwo-content" v-for="(value, index) in item.data" :key="index">
          <a href class="product-a">
            <div class="product-content-top">
              <img :src="value.imgSrc" />
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
                <div class="product-pricebox-right">
                  <i class="iconfont icon-gouwuche"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <p class="product-footer">已经到底了....</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productTwoList: [
        {
          title: "猜你喜欢",
          data: [
            {
              id: "15",
              imgSrc: "img/home/product15.jpg",
              label: "畅销",
              name: "我如此爱你",
              desc: "口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒",
              newPrice: "598",
              oldPrice: "698",
              num: "6785"
            },
            {
              id: "16",
              imgSrc: "img/home/product16.jpg",
              label: "创意新品",
              name: "一鹿(路)有你永生花小夜灯",
              desc: "永生花礼盒",
              newPrice: "298",
              oldPrice: "398",
              num: "429"
            },
            {
              id: "17",
              imgSrc: "img/home/product17.jpg",
              label: "热销单品",
              name: "花好月圆永生花台灯",
              desc: "精选进口奥斯汀永生玫瑰台灯",
              newPrice: "298",
              oldPrice: "398",
              num: "1062"
            },
            {
              id: "18",
              imgSrc: "img/home/product18.jpg",
              label: "爱的承诺",
              name: "一生一世",
              desc: "厄瓜多尔进口永生红玫1朵，双色永生绣球",
              newPrice: "198",
              oldPrice: "259",
              num: "1.2万"
            },
            {
              id: "19",
              imgSrc: "img/home/product19.jpg",
              label: "",
              name: "蓝色星球(6寸)",
              desc: "",
              newPrice: "298",
              oldPrice: "398",
              num: "122"
            },
            {
              id: "20",
              imgSrc: "img/home/product20.jpg",
              label: "",
              name: "蒙布朗栗蓉奶油蛋糕（6寸）",
              desc: "奶油蛋糕",
              newPrice: "249",
              oldPrice: "349",
              num: "5"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
#productbox {
  // min-height: 3000px;
  #product {
    font-size: 16px;
    background: #fff;
    margin-top: 8px;
    padding-bottom: 50px;

    h3 {
      font-size: 18px;
      padding: 20px;
      text-align: left;
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
        margin-bottom: 10px;
        padding: 5px;
        width: 50%;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-color: #fff;
        box-shadow: 0 5px 10px 0 #e9ecf0;
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
            padding: 10px 5px;
            height: 115px;
            overflow: hidden;
            position: relative;
            text-align: left;

            .product-label {
              margin-bottom: 8.5px;

              span {
                display: -webkit-inline-box;
                display: -webkit-inline-flex;
                display: -moz-inline-box;
                display: -ms-inline-flexbox;
                display: inline-flex;
                border-radius: 20px;
                border: 1px solid #ff734c;
                color: #ff734c;
                font-size: 12px;
                padding: 0 4px;
              }
            }

            .product-desc {
              color: #000;
              font-size: 16px;
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
              font-size: 12px;
              padding: 10px 0;
              margin-top: 12px;
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
              left: 10px;
              right: 8px;
              bottom: 20px;
              z-index: 1;

              .product-pricebox-left {
                width: 70%;
                -moz-box-sizing: border-box;
                box-sizing: border-box;

                p {
                  &:nth-child(1) {
                    span {
                      font-size: 18px;
                      color: #ff734c;
                      font-weight: 500;
                    }

                    s {
                      font-size: 12px;
                      color: #71797f;
                      margin-left: 7px;
                    }
                  }

                  &:nth-child(2) {
                    font-size: 012px;
                    color: #71797f;
                  }
                }
              }

              .product-pricebox-right {
                margin: auto;

                .iconfont {
                  font-size: 20px;
                  color: #232628;
                }
              }
            }
          }
        }
      }
    }

    .product-footer {
      height: 40px;
      margin-top: 5px;
      text-align: center;
      font-size: 012px;
      line-height: 40px;
      color: #71797f;
    }
  }
}
</style>