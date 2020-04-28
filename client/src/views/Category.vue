<template>
  <div id="mycategory">
    <!-- head -->
    <div id="header">
      <div class="headerbox">
        <i class="iconfont icon-sousuo"></i>
        <a href="#">搜索鲜花、蛋糕、礼品</a>
      </div>
    </div>
    <!--left content -->
    <div id="content">
      <!-- content menu-->
      <div class="catebox-menu">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <a
              :href="item.path"
              :class="{active:num===index}"
              @click="addActive(index)"
            >{{item.name}}</a>
          </li>
        </ul>
      </div>
      <!-- right content -->
      <div class="catebox-cont">
        <!-- hot -->
        <div id="hot" name="hot" v-if="num==0">
          <img-header>
            <img :src="contentList.hot.headerImg" alt />
          </img-header>

          <circular-option>
            <template v-slot:title v-if="contentList.hot.title">{{contentList.hot.title}}</template>
            <template v-slot:RankingList v-if="contentList.hot.RankingList"></template>
            <template v-slot:ImgLoop>
              <li v-for="(item, index) in contentList.hot.List" :key="index">
                <a :href="item.path">
                  <img :src="item.img" :alt="item.name" />
                  <p>{{item.name}}</p>
                </a>
              </li>
            </template>
          </circular-option>
        </div>
        <!--  flower-->
        <div id="flower" name="flower" v-if="num==1">
          <img-header>
            <img :src="contentList.flower.headerImg" alt />
          </img-header>

          <div class="flowerItem" v-for="(item, index) in contentList.flower.object" :key="index">
            <circular-option>
              <template v-slot:title>{{item.title}}</template>
              <template v-slot:RankingList v-if="item.RankingList">
                <i class="iconfont icon-shaixuan"></i>
                <a href>鲜花排行榜</a>
              </template>
              <template v-slot:ImgLoop>
                <li v-for="(value, i) in item.List" :key="i">
                  <a :href="value.path">
                    <img :src="value.img" :alt="value.name" />
                    <p>{{value.name}}</p>
                  </a>
                </li>
              </template>
            </circular-option>
          </div>
        </div>
        <!-- ppf -->
        <div id="ppf" name="ppf" v-if="num==2">
          <img-header>
            <img :src="contentList.ppf.headerImg" alt />
          </img-header>

          <div class="ppfItem" v-for="(item, index) in contentList.ppf.object" :key="index">
            <circular-option>
              <template v-slot:title>{{item.title}}</template>
              <template v-slot:RankingList v-if="item.RankingList">
                <i class="iconfont icon-shaixuan"></i>
                <a href>鲜花排行榜</a>
              </template>
              <template v-slot:ImgLoop>
                <li v-for="(value, i) in item.List" :key="i">
                  <a :href="value.path">
                    <img :src="value.img" :alt="value.name" />
                    <p>{{value.name}}</p>
                  </a>
                </li>
              </template>
            </circular-option>
          </div>
        </div>
        <!--cake  -->
        <div id="cake" name="cake" v-if="num==3">
          <img-header>
            <img :src="contentList.cake.headerImg" alt />
          </img-header>
          <square-option>
            <li v-for="(item, index) in contentList.cake.brand.List" :key="index">
              <a :href="item.path">
                <img :src="item.img" alt />
              </a>
            </li>
          </square-option>
        </div>
        <!-- gift -->
        <div id="gift" name="gift" v-if="num==4">
          <img-header>
            <img :src="contentList.gift.headerImg" alt />
          </img-header>

          <square-option>
            <li v-for="(item, index) in contentList.gift.brand.List" :key="index">
              <a :href="item.path">
                <img :src="item.img" alt />
              </a>
            </li>
          </square-option>

          <div class="giftItem" v-for="(item, index) in contentList.gift.object" :key="index">
            <circular-option>
              <template v-slot:title>{{item.title}}</template>
              <template v-slot:RankingList v-if="item.RankingList">
                <i class="iconfont icon-shaixuan"></i>
                <a href>鲜花排行榜</a>
              </template>
              <template v-slot:ImgLoop>
                <li v-for="(value, i) in item.List" :key="i">
                  <a :href="value.path">
                    <img :src="value.img" :alt="value.name" />
                    <p>{{value.name}}</p>
                  </a>
                </li>
              </template>
            </circular-option>
          </div>
        </div>
        <!-- flowerbasket -->
        <div id="flowerbasket" name="flowerbasket" v-if="num==5">
          <img-header>
            <img :src="contentList.flowerbasket.headerImg" alt />
          </img-header>

          <div
            class="flowerbasketItem"
            v-for="(item, index) in contentList.flowerbasket.object"
            :key="index"
          >
            <circular-option>
              <template v-slot:title>{{item.title}}</template>
              <template v-slot:RankingList v-if="item.RankingList">
                <i class="iconfont icon-shaixuan"></i>
                <a href>鲜花排行榜</a>
              </template>
              <template v-slot:ImgLoop>
                <li v-for="(value, i) in item.List" :key="i">
                  <a :href="value.path">
                    <img :src="value.img" :alt="value.name" />
                    <p>{{value.name}}</p>
                  </a>
                </li>
              </template>
            </circular-option>
          </div>
        </div>
        <!-- plant -->
        <div id="plant" name="plant" v-if="num==6">
          <img-header>
            <img :src="contentList.plant.headerImg" alt />
          </img-header>

          <div class="plantItem" v-for="(item, index) in contentList.plant.object" :key="index">
            <circular-option>
              <template v-slot:title>{{item.title}}</template>
              <template v-slot:RankingList v-if="item.RankingList">
                <i class="iconfont icon-shaixuan"></i>
                <a href>鲜花排行榜</a>
              </template>
              <template v-slot:ImgLoop>
                <li v-for="(value, i) in item.List" :key="i">
                  <a :href="value.path">
                    <img :src="value.img" :alt="value.name" />
                    <p>{{value.name}}</p>
                  </a>
                </li>
              </template>
            </circular-option>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgHeader from "../components/category/header.vue";
//引入方形块组件
import squareOption from "../components/category/squareOption.vue";
//引入圆形快组件
import circularOption from "../components/category/circularOption.vue";
export default {
  data() {
    return {
      num: 0,
      list: [
        { path: "#hot", name: "热门推荐" },
        { path: "#flower", name: "鲜花" },
        { path: "#ppf", name: "永生花" },
        { path: "#cake", name: "蛋糕" },
        { path: "#gift", name: "特色礼品" },
        { path: "#flowerbasket", name: "礼篮" },
        { path: "#plant", name: "绿植花卉" }
      ],
      contentList: {
        hot: {
          headerImg: "img/category/hotheader.jpg",
          title: "",
          RankingList: false,
          List: [
            {
              path: "#",
              img: "img/category/hot1.png",
              name: "送恋人鲜花"
            },
            {
              path: "#",
              img: "img/category/hot2.png",
              name: "送长辈鲜花"
            },
            {
              path: "#",
              img: "img/category/hot3.png",
              name: "生日鲜花"
            },
            {
              path: "#",
              img: "img/category/hot4.png",
              name: "礼盒鲜花"
            },
            {
              path: "#",
              img: "img/category/hot5.png",
              name: "永生花"
            },
            {
              path: "#",
              img: "img/category/hot6.png",
              name: "蛋糕"
            },
            {
              path: "#",
              img: "img/category/hot7.png",
              name: "元祖蛋糕"
            },
            {
              path: "#",
              img: "img/category/hot8.png",
              name: "金箔花"
            },
            {
              path: "#",
              img: "img/category/hot9.png",
              name: "首饰"
            },
            {
              path: "#",
              img: "img/category/hot10.png",
              name: "巧罗巧克力"
            },
            {
              path: "#",
              img: "img/category/hot11.png",
              name: "创意礼品"
            },
            {
              path: "#",
              img: "img/category/hot12.png",
              name: "企业团购"
            }
          ]
        },
        flower: {
          headerImg: "img/category/flowerheader.png",
          object: [
            //对象
            {
              title: "对象",
              RankingList: true,
              List: [
                {
                  path: "#",
                  img: "img/category/flower1.png",
                  name: "全部"
                },
                {
                  path: "#",
                  img: "img/category/flower2.png",
                  name: "送女友鲜花"
                },
                {
                  path: "#",
                  img: "img/category/flower3.png",
                  name: "送女友鲜花"
                },
                {
                  path: "#",
                  img: "img/category/flower4.png",
                  name: "送长辈鲜花"
                },
                {
                  path: "#",
                  img: "img/category/flower5.png",
                  name: "送朋友鲜花"
                }
              ]
            },
            //场合
            {
              title: "场合",
              RankingList: false,
              List: [
                {
                  path: "#",
                  img: "img/category/flower6.png",
                  name: "爱情鲜花"
                },
                {
                  path: "#",
                  img: "img/category/flower7.png",
                  name: "生日鲜花"
                },
                {
                  path: "#",
                  img: "img/category/flower8.png",
                  name: "探望慰问"
                },
                {
                  path: "#",
                  img: "img/category/flower9.png",
                  name: "商务鲜花"
                },
                {
                  path: "#",
                  img: "img/category/flower10.png",
                  name: "祝福庆贺"
                },
                {
                  path: "#",
                  img: "img/category/flower11.png",
                  name: "婚庆鲜花"
                },
                {
                  path: "#",
                  img: "img/category/flower12.png",
                  name: "道歉鲜花"
                },
                {
                  path: "#",
                  img: "img/category/flower13.png",
                  name: "哀思鲜花"
                },
                {
                  path: "#",
                  img: "img/category/flower14.png",
                  name: "港澳台鲜花"
                }
              ]
            },
            //花材
            {
              title: "花材",
              RankingList: false,
              List: [
                {
                  path: "#",
                  img: "img/category/flower15.png",
                  name: "玫瑰"
                },
                {
                  path: "#",
                  img: "img/category/flower16.png",
                  name: "康乃馨"
                },
                {
                  path: "#",
                  img: "img/category/flower17.png",
                  name: "向日葵"
                },
                {
                  path: "#",
                  img: "img/category/flower18.png",
                  name: "百合"
                },
                {
                  path: "#",
                  img: "img/category/flower19.png",
                  name: "绣球"
                },
                {
                  path: "#",
                  img: "img/category/flower20.png",
                  name: "郁金香"
                },
                {
                  path: "#",
                  img: "img/category/flower21.png",
                  name: "扶郎/太阳花"
                },
                {
                  path: "#",
                  img: "img/category/flower22.png",
                  name: "马蹄莲"
                }
              ]
            },
            //玫瑰颜色
            {
              title: "玫瑰颜色",
              RankingList: false,
              List: [
                {
                  path: "#",
                  img: "img/category/flower23.png",
                  name: "红玫瑰"
                },
                {
                  path: "#",
                  img: "img/category/flower24.png",
                  name: "粉玫瑰"
                },
                {
                  path: "#",
                  img: "img/category/flower25.png",
                  name: "白玫瑰"
                },
                {
                  path: "#",
                  img: "img/category/flower26.png",
                  name: "紫玫瑰"
                },
                {
                  path: "#",
                  img: "img/category/flower27.png",
                  name: "黄玫瑰"
                },
                {
                  path: "#",
                  img: "img/category/flower28.png",
                  name: "香槟色"
                }
              ]
            },
            //类别
            {
              title: "类别",
              RankingList: false,
              List: [
                {
                  path: "#",
                  img: "img/category/flower29.png",
                  name: "花束"
                },
                {
                  path: "#",
                  img: "img/category/flower30.png",
                  name: "花盒"
                },
                {
                  path: "#",
                  img: "img/category/flower31.png",
                  name: "桌面花篮"
                },
                {
                  path: "#",
                  img: "img/category/flower32.png",
                  name: "瓶插花"
                },
                {
                  path: "#",
                  img: "img/category/flower33.png",
                  name: "果篮"
                },
                {
                  path: "#",
                  img: "img/category/flower34.png",
                  name: "开业花篮"
                }
              ]
            }
          ]
        },
        ppf: {
          headerImg: "img/category/ppfheader.png",
          object: [
            //对象
            {
              title: "对象",
              RankingList: true,
              List: [
                {
                  path: "#",
                  img: "img/category/ppf1.png",
                  name: "全部"
                },
                {
                  path: "#",
                  img: "img/category/ppf2.png",
                  name: "送女友"
                },
                {
                  path: "#",
                  img: "img/category/ppf3.png",
                  name: "送男性"
                },
                {
                  path: "#",
                  img: "img/category/ppf4.png",
                  name: "送长辈"
                },
                {
                  path: "#",
                  img: "img/category/ppf5.png",
                  name: "送朋友"
                }
              ]
            },
            //分类
            {
              title: "分类",
              RankingList: false,
              List: [
                {
                  path: "#",
                  img: "img/category/ppf6.png",
                  name: "永生瓶花"
                },
                {
                  path: "#",
                  img: "img/category/ppf7.png",
                  name: "经典花盒"
                },
                {
                  path: "#",
                  img: "img/category/ppf8.png",
                  name: "特色永生花"
                },
                {
                  path: "#",
                  img: "img/category/ppf9.png",
                  name: "巨型玫瑰"
                }
              ]
            }
          ]
        },
        cake: {
          headerImg: "img/category/cakeheader.png",
          brand:
            //品牌
            {
              title: "品牌",
              RankingList: false,
              List: [
                {
                  path: "#",
                  img: "img/category/cake1.png"
                },
                {
                  path: "#",
                  img: "img/category/cake2.png"
                },
                {
                  path: "#",
                  img: "img/category/cake3.png"
                },
                {
                  path: "#",
                  img: "img/category/cake4.png"
                },
                {
                  path: "#",
                  img: "img/category/cake5.png"
                },
                {
                  path: "#",
                  img: "img/category/cake6.png"
                },
                {
                  path: "#",
                  img: "img/category/cake7.png"
                },
                {
                  path: "#",
                  img: "img/category/cake8.png"
                },
                {
                  path: "#",
                  img: "img/category/cake9.png"
                },
                {
                  path: "#",
                  img: "img/category/cake10.png"
                },
                {
                  path: "#",
                  img: "img/category/cake11.png"
                },
                {
                  path: "#",
                  img: "img/category/cake12.png"
                },
                {
                  path: "#",
                  img: "img/category/cake13.png"
                },
                {
                  path: "#",
                  img: "img/category/cake14.png"
                }
              ]
            }
        },
        gift: {
          headerImg: "img/category/giftheader.png",
          //品牌
          brand: {
            title: "品牌",
            RankingList: false,
            List: [
              {
                path: "#",
                img: "img/category/gift1.png"
              },
              {
                path: "#",
                img: "img/category/gift2.png"
              },
              {
                path: "#",
                img: "img/category/gift3.png"
              },
              {
                path: "#",
                img: "img/category/gift4.png"
              },
              {
                path: "#",
                img: "img/category/gift5.png"
              },
              {
                path: "#",
                img: "img/category/gift6.png"
              }
            ]
          },
          object: [
            //对象
            {
              title: "对象",
              RankingList: false,
              List: [
                {
                  path: "#",
                  img: "img/category/gift7.png",
                  name: "送女友"
                },
                {
                  path: "#",
                  img: "img/category/gift8.png",
                  name: "送男性"
                },
                {
                  path: "#",
                  img: "img/category/gift9.png",
                  name: "送长辈"
                },
                {
                  path: "#",
                  img: "img/category/gift10.png",
                  name: "送朋友"
                },
                {
                  path: "#",
                  img: "img/category/gift11.png",
                  name: "送客户"
                },
                {
                  path: "#",
                  img: "img/category/gift12.png",
                  name: "送老师"
                },
                {
                  path: "#",
                  img: "img/category/gift13.png",
                  name: "送小孩"
                },
                {
                  path: "#",
                  img: "img/category/gift14.png",
                  name: "送领导"
                }
              ]
            },
            //分类
            {
              title: "分类",
              RankingList: false,
              List: [
                {
                  path: "#",
                  img: "img/category/gift15.png",
                  name: "音乐盒"
                },
                {
                  path: "#",
                  img: "img/category/gift16.png",
                  name: "金箔花"
                },
                {
                  path: "#",
                  img: "img/category/gift17.png",
                  name: "3D水晶内雕"
                },
                {
                  path: "#",
                  img: "img/category/gift18.png",
                  name: "首饰/美妆"
                },
                {
                  path: "#",
                  img: "img/category/gift19.png",
                  name: "巧克力"
                },
                {
                  path: "#",
                  img: "img/category/gift20.png",
                  name: "公仔/睡枕"
                },
                {
                  path: "#",
                  img: "img/category/gift21.png",
                  name: "家居生活"
                },
                {
                  path: "#",
                  img: "img/category/gift22.png",
                  name: "摆件/其他"
                }
              ]
            }
          ]
        },
        flowerbasket: {
          headerImg: "img/category/flowerbasketheader.png",

          object: [
            //礼篮
            {
              title: "礼篮",
              RankingList: false,
              List: [
                {
                  path: "#",
                  img: "img/category/flowerbasket1.png",
                  name: "送女友"
                }
              ]
            }
          ]
        },
        plant: {
          headerImg: "img/category/plantheader.png",

          object: [
            //绿植花卉
            {
              title: "绿植花卉",
              RankingList: false,
              List: [
                {
                  path: "#",
                  img: "img/category/plant1.png",
                  name: "全部"
                },
                {
                  path: "#",
                  img: "img/category/plant2.png",
                  name: "率的植物"
                },
                {
                  path: "#",
                  img: "img/category/plant3.png",
                  name: "盆栽花卉"
                },
                {
                  path: "#",
                  img: "img/category/plant4.png",
                  name: "多肉盆栽"
                }
              ]
            }
          ]
        }
      }
    };
  },
  methods: {
    //点击高亮
    addActive(index) {
      this.num = index;
    }
  },
  components: {
    imgHeader,
    squareOption,
    circularOption
  }
};
</script>

<style lang="less" scoped>
#mycategory {
  max-width: 800px;
  margin: 0 auto;
  font-size: 0.373333rem;
  background-color: #fff;
}

#header {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  height: 1.333333rem;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 99;
  height: 1.333333rem;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  background: #fff;
  overflow: hidden;
  border-bottom: 2px solid #f1f3f6;

  .headerbox {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    height: 1.066667rem;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 0.133333rem 0.266667rem;
    padding-left: 0.266667rem;
    background-color: #f3f5f7;
    border-radius: 0.533333rem;

    i {
      width: 1.066667rem;
      height: 1.066667rem;
      line-height: 1.066667rem;
      text-align: center;
      font-size: 0.533333rem;
      color: #b0b3b6;
    }

    a {
      display: inline-block;
      width: 100%;
      line-height: 1.066667rem;
      font-size: 0.4rem;
      text-align: left;
      color: #71797f;
    }
  }
}

#content {
  position: relative;
  width: 100%;
  padding-top: 1.333333rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 100vh;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  .catebox-menu {
    top: 1.333333rem;
    z-index: 2;
    width: 23%;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    border-right: 1px solid #e9ecf0;

    li {
      width: 100%;
      height: 1.066667rem;
      line-height: 1.066667rem;
      text-align: center;
      overflow: hidden;
      font-size: 0.426667rem;
      margin: 0.266667rem 0;

      a {
        color: #000;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-left: 2px solid #fff;
      }
    }

    .active {
      color: #ff734c;
      border-left: 2px solid #ff734c;
    }
  }
}

.catebox-cont {
  text-align: center;
  padding: 0.346667rem 0.346667rem 1.333333rem;
  top: 1.333333rem;
  z-index: 2;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  width: 77%;
}
</style>
