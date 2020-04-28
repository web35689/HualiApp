<template>
  <div id="home">
    <!-- 头部 -->
    <div id="myheader">
      <ul>
        <Li>
          <router-link to="/category">
            <i class="iconfont icon-fenlei1"></i>
          </router-link>
        </Li>
        <Li>
          <img src="img/home/m_hualogo.png" alt />
        </Li>
        <Li>
          <router-link to>
            <i class="iconfont icon-kefu"></i>
          </router-link>
        </Li>
      </ul>
    </div>
    <!-- banner -->
    <div id="banner">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="swiper-slide" v-for="(item, index) in bannerImg" :key="index">
          <a href="#">
            <img :src="item" alt />
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 广告 -->
    <div id="bannerInfo">
      <span class="bannerInfo-item" v-for="(item, index) in bannerInfo" :key="index">
        <i class="iconfont icon-wancheng"></i>
        {{item}}
      </span>
    </div>
    <!-- 产品类别 -->
    <div id="productcategory">
      <ul>
        <Li v-for="(item, index) in productcategoryList" :key="index">
          <img :src="item.img" alt />
          <p>{{item.name}}</p>
        </Li>
      </ul>
    </div>
    <!-- 需求场景 -->
    <div id="scene">
      <p class="scene-title">一秒选花</p>
      <div class="scene-list">
        <div
          class="scene1-listItem scene-listItem"
          v-for="(item, index) in sceneArr.sceneArrList1"
          :key="index"
        >
          <a href>
            <img :src="item.imgSrc" alt />
            <span>{{item.name}}</span>
          </a>
        </div>
      </div>
      <div class="scene-list">
        <div
          class="scene2-listItem scene-listItem"
          v-for="(item, index) in sceneArr.sceneArrList2"
          :key="index"
        >
          <a href>
            <img :src="item.imgSrc" alt />
            <span>{{item.name}}</span>
          </a>
        </div>
      </div>
      <div class="scene-list">
        <div
          class="scene3-listItem scene-listItem"
          v-for="(item, index) in sceneArr.sceneArrList3"
          :key="index"
        >
          <a href :style="{backgroundImage: 'url('+ item.imgSrc +')'}">
            <p>{{item.option}}</p>
            <p>{{item.adver}}</p>
            <div class="thisbottom">
              <p>{{item.adver1}}</p>
              <p>{{item.num}}</p>
            </div>
          </a>
        </div>
      </div>
      <div class="scene-list">
        <div
          class="scene1-listItem scene-listItem"
          v-for="(item, index) in sceneArr.sceneArrList4"
          :key="index"
        >
          <a href>
            <img :src="item.imgSrc" alt />
            <span style="color:#000">{{item.name}}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- 产品组件一 -->
    <product-one></product-one>
    <!-- 产品组件二 -->
    <product-two></product-two>

    <!-- 产品优点 -->
    <div id="Advantage">
      <div class="Advantage-title">
        <a href>
          <img src="img/home/Advantage1.png" alt />
        </a>
      </div>
      <div class="Advantage-cont">
        <p class="Advantage-cont-title">为什么选择我们</p>
        <div class="Advantage-cont-items">
          <ul>
            <li class="Advantage-cont-item" v-for="(item, index) in AdvantageImg" :key="index">
              <img :src="item.img" :alt="item.name" />
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 页脚底部 -->
    <div id="footer">
      <div class="linkBox">
        <router-link v-for="(item, index) in footerLink" :key="index" :to="item.path">{{item.name}}</router-link>
      </div>
      <div class="footer-entry">
        <div>
          <p>
            <i class="iconfont icon-zhanghao"></i>
          </p>
          <p>客户端</p>
        </div>
        <div>
          <p>
            <i class="iconfont icon-kefu"></i>
          </p>
          <p>客服</p>
        </div>
      </div>
      <p class="footer-copyright">
        Copyright ©2020 Hhua版权所有.中国鲜花网领先品牌！
        <br />赣ICP备00000000号
      </p>
    </div>

    <!-- 返回顶部 -->
    <div class="goTop">
      <div v-show="gotop" @click="toTop">
        <i class="iconfont icon-xiangshang"></i>
      </div>
    </div>
  </div>
</template>

<script>
// 引入组件
import productOne from "../components/Home/productOne";
import productTwo from "../components/Home/productTwo";

export default {
  data() {
    return {
      bannerImg: [
        "img/home/lunbo01.jpg",
        "img/home/lunbo02.jpg",
        "img/home/lunbo03.jpg",
        "img/home/lunbo04.jpg"
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: true
      },
      bannerInfo: ["认证龙头企业", "15年品牌", "3小时送花", "最近35994条好评"],
      productcategoryList: [
        { img: "img/home/procate1.png", name: "鲜花" },
        { img: "img/home/procate2.png", name: "永生花" },
        { img: "img/home/procate3.png", name: "蛋糕" },
        { img: "img/home/procate4.png", name: "礼品" },
        { img: "img/home/procate5.png", name: "巧克力" }
      ],
      sceneArr: {
        sceneArrList1: [
          { imgSrc: "img/home/scene1-listItem1.png", name: "送恋人" },
          { imgSrc: "img/home/scene1-listItem2.png", name: "送长辈" },
          { imgSrc: "img/home/scene1-listItem3.png", name: "送朋友" }
        ],
        sceneArrList2: [
          { imgSrc: "img/home/scene2-listItem1.png", name: "生日祝福" },
          { imgSrc: "img/home/scene2-listItem2.png", name: "表白求婚" },
          { imgSrc: "img/home/scene2-listItem3.png", name: "开业商务" },
          { imgSrc: "img/home/scene2-listItem4.png", name: "周年纪念" }
        ],
        sceneArrList3: [
          {
            imgSrc: "img/home/scene3-listItem1.png",
            option: "热销榜",
            adver: "集万千宠爱",
            adver1: "大家都在买",
            num: "热销11.7万束"
          },
          {
            imgSrc: "img/home/scene3-listItem2.png",
            option: "特价专区",
            adver: "超值好货",
            adver1: "限时直降",
            num: "￥158"
          }
        ],
        sceneArrList4: [
          { imgSrc: "img/home/scene4-listItem1.png", name: "新品来袭" },
          { imgSrc: "img/home/scene4-listItem2.png", name: "品味之选" },
          { imgSrc: "img/home/scene4-listItem3.png", name: "设计师甄选" }
        ]
      },
      AdvantageImg: [
        { img: "img/home/Advantage2.png", name: "获评鲜花龙头企业" },
        { img: "img/home/Advantage3.png", name: "1~3小时送花上门" },
        { img: "img/home/Advantage4.png", name: "赛事冠军花艺师团队" },
        { img: "img/home/Advantage5.png", name: "严选花材" },
        { img: "img/home/Advantage6.png", name: "12道严苛品控标准" },
        { img: "img/home/Advantage7.png", name: "500万用户信赖好评" }
      ],
      footerLink: [
        { path: "", name: "企业团购" },
        { path: "", name: "设计师款" },
        { path: "", name: "同城鲜花" },
        { path: "", name: "花语大全" },
        { path: "", name: "花礼优势" },
        { path: "", name: "勇敢爱" },
        { path: "", name: "常见问题" },
        { path: "", name: "关于我们" }
      ],

      gotop: false
    };
  },
  // 注册组件
  components: {
    productOne,
    productTwo
  },
  mounted() {
    // 此处true需要加上，不加滚动事件可能绑定不成功
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    // 判断滚动高度,显示隐藏组件
    handleScroll() {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      scrolltop > 200 ? (this.gotop = true) : (this.gotop = false);
    },
    // 点击组件回到顶部
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 100;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    }
  }
};
</script>


<style lang="less" scoped>
#home {
  max-width: 800px;
  margin: 0 auto;
  font-size: 0.373333rem;
  padding-bottom: 1.333333rem;
}

#myheader {
  width: 100%;
  height: 1.333333rem;
  background-color: #435448;

  ul {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -moz-box;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    -moz-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    -moz-box-align: center;
    align-items: center;

    li {
      line-height: 1.226667rem;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      -moz-box-align: center;
      align-items: center;

      img {
        vertical-align: middle;
        width: 4.266667rem;
      }

      .iconfont {
        color: #fff;
        font-size: 0.586667rem;
        // font-weight: 600;
      }

      &:nth-child(1) {
        padding-left: 0.4rem;
      }

      &:nth-child(3) {
        padding-right: 0.4rem;
      }
    }
  }
}

#banner {
  width: 100%;
  height: 5.333333rem;

  .swiper-container {
    --swiper-theme-color: #ff734c;
  }

  .swiper-slide {
    width: 100%;
    height: 5.333333rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

#bannerInfo {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -moz-box;
  display: flex;
  height: 1.066667rem;
  font-size: 0.32rem;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  -moz-box-align: center;
  align-items: center;
  overflow: hidden;
  background: #fff;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;

  .bannerInfo-item {
    color: #000;

    i {
      color: #435448;
    }
  }
}

#productcategory {
  width: 100%;
  height: 1.466667rem;
  padding: 0.266667rem 0;
  background-color: #fff;

  ul {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -moz-box;
    display: flex;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    img {
      width: 1.013333rem;
      height: 1.013333rem;
    }
	p{
		text-align: center;
	}
  }
}

#scene {
  background: #fff;
  padding-bottom: 0.266667rem;
  text-align: center;

  .scene-title {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -moz-box;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    -moz-box-align: center;
    align-items: center;
    padding: 0 0.346667rem;
    line-height: 1.12rem;
    background: #fff;
    font-size: 0.426667rem;

    &::before {
      content: "";
      display: inline-block;
      width: 0.08rem;
      height: 0.453333rem;
      background: #435448;
      margin-right: 0.266667rem;
    }
  }

  .scene-list {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -moz-box;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    -moz-box-pack: justify;
    justify-content: space-between;
    margin: 0.106667rem 0;

    .scene-listItem {
      position: relative;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      margin: 0 0.08rem;
    }

    .scene1-listItem {
      width: 33%;

      a {
        display: inline-block;
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 3.866667rem;
        }

        span {
          position: absolute;
          font-size: 0.4rem;
          bottom: 0.266667rem;
          left: 0;
          right: 0;
          color: #fff;
          text-align: center;
        }
      }
    }

    .scene2-listItem {
      width: 25%;

      a {
        display: inline-block;
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
        }

        span {
          position: absolute;
          top: 0.133333rem;
          left: 0;
          right: 0;
          color: #000;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }

    .scene3-listItem {
      width: 50%;
      padding: 0.4rem;
      height: 4.533333rem;

      border: 1px solid #e9ecf0;
      text-align: left;

      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        color: #000;
        background-repeat: no-repeat;
        -o-background-size: contain;
        background-size: contain;
        background-position: center center;

        p {
          &:nth-child(1) {
            font-size: 0.426667rem;
          }

          &:nth-child(2) {
            color: #71797f;
            font-size: 0.32rem;
          }
        }

        .thisbottom {
          position: absolute;
          width: 80%;
          bottom: 0.266667rem;
          font-size: 0.32rem;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: -moz-box;
          display: flex;
          -webkit-box-pack: justify;
          -webkit-justify-content: space-between;
          -ms-flex-pack: justify;
          -moz-box-pack: justify;
          justify-content: space-between;

          p {
            &:nth-child(1) {
              font-size: 0.32rem;
              border-radius: 0.266667rem;
              background: #ff734c;
              padding: 0.053333rem 0.133333rem;
              color: #fff;
            }

            &:nth-child(2) {
              color: #000;
              font-size: 0.32rem;
            }
          }
        }
      }
    }
  }
}

#Advantage {
  background-color: #fff;

  .Advantage-title {
    width: 100%;
    height: 3.733333rem;

    a {
      display: inline-block;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .Advantage-cont {
    .Advantage-cont-title {
      padding: 20px 0 20px 5px;
      font-size: 18px;
    }

    .Advantage-cont-items {
      ul {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: -moz-box;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;

        li {
          width: 33%;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          text-align: center;
          padding-bottom: 25px;

          img {
            width: 70px;
            height: 70px;
          }
        }
      }
    }
  }
}

#footer {
  background-color: #fff;
  margin-top: 0.266667rem;

  .linkBox {
    padding-top: 0.266667rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -moz-box;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;

    a {
      width: 20%;
      margin: 0.133333rem 2.5%;
      background: #e9ecf0;
      text-align: center;
      color: #000;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding: 0.133333rem 0.213333rem;
    }
  }

  .footer-entry {
    padding-top: 0.533333rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -moz-box;
    display: flex;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    div{
      text-align: center;
      p {
      &:nth-child(1) {
        border-radius: 50%;
        width: 1.066667rem;
        height: 1.066667rem;
        font-weight: 600;
        background: #e9ecf0;
        text-align: center;
        i {
          font-size: 0.533333rem;
          line-height: 1.066667rem;
        }
      }
    }
    }
  }

  .footer-copyright {
    padding: 0.4rem 0;
    font-size: 0.266667rem;
    color: #b4babf;
    text-align: center;
  }
}

.goTop {
  div {
    z-index: 99;
    width: 1.066667rem;
    height: 1.066667rem;
    text-align: center;
    position: fixed;
    right: 0.266667rem;
    bottom: 1.866667rem;
    border-radius: 50%;
    background: white;
    color: #000000;
    box-shadow: 0 0.053333rem 0.133333rem 0.053333rem #ccc;

    i {
      line-height: 1.066667rem;
      font-size: 0.48rem;
    }
  }
}
</style>
