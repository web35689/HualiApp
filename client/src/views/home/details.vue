<template>
  <div id="mydetails">
    <my-header>
      <img src="img/home/m_hualogo.png" alt />
    </my-header>
    <!-- banner -->
    <div id="banner">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="swiper-slide" v-for="(item,key,index) in bannerImg[id]" :key="index">
          <a href="#">
            <img :src="item" alt />
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div id="proinfo">
      <div class="info-head">
        <p class="proinfo-title">
          一往情深-精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎
          <span class="title-text">经典爆款，年销售冠军！</span>
        </p>
        <p class="proinfo-shoucang" @click="SCflag = !SCflag">
          <i class="iconfont icon-collect-active" v-show="SCflag"></i>
          <i class="iconfont icon-shoucang" v-show="!SCflag"></i>
        </p>
      </div>
      <div class="info-body">
        <p class="info-body-price">
          <span class="newPrice">￥249</span>
          <span class="oldPrice">￥315</span>
        </p>
        <p class="info-body-num">已售12.04万件</p>
      </div>
    </div>
    <div id="download">
      <p>
        <i class="iconfont icon-zhanghao"></i>APP下单立减50元
      </p>
      <i class="iconfont icon-jf-row"></i>
    </div>
    <div id="detailsinfo">
      <div class="detailsinfo-item" v-for="(item, index) in data" :key="index">
        <p class="item-name">{{item.name}}</p>
        <p class="item-cont">{{item.cont}}</p>
      </div>
      <div class="detailsinfo-item">
        <p class="item-name">配送</p>
        <p
          style="border-bottom:none"
          class="item-cont item-citycont"
          :class="{hidden:isFlag}"
        >限送100多个主要城市的市区及近郊：北京,上海,深圳,广州,成都,武汉,南京,杭州,苏州,天津,西安,长沙,东莞,厦门,佛山,沈阳,合肥,重庆,大连,郑州,青岛,太原,无锡,石家庄,济南,宁波,哈尔滨,乌鲁木齐,贵阳,昆明,福州,长春,南昌,兰州,珠海,南宁,中山,常州,金华,邯郸,泉州,海口,嘉兴,南通,呼和浩特,廊坊,唐山,温州,徐州,绵阳,烟台,襄阳,保定,潍坊,镇江,衡阳,包头,赣州,扬州,清远,荆州,莆田,汉中,洛阳,湛江,九江,鞍山,大庆,秦皇岛,张家口,桂林,吉林,淄博,蚌埠,柳州,遵义,邢台,宜春,漳州,三亚,宜宾,东营,临沂,德州,开封,大同,龙岩,齐齐哈尔,连云港,新乡,黄冈,焦作,十堰,驻马店,信阳,牡丹江,黄石,宝鸡,丹东,阜阳,北海,聊城,锦州,许昌,内江,萍乡,安庆,承德,商丘,盘锦,乐山,沧州,河源,营口,平顶山,临汾,韶关,日照,新余,晋城,松原,淮北,淮南,晋中,潮州,滨州,自贡,六安,株州,濮阳,常熟,晋江,顺德,江阴,吴江,昆山,义乌,惠阳,银川,温江,燕郊,新都,涿州,南沙,宜兴,即墨,海安县,都江堰,增城,仙桃,菏泽</p>
        <i class="iconfont icon-xiangxia" v-show="isFlag" @click="isFlag=!isFlag"></i>
        <i class="iconfont icon-xiangshang" v-show="!isFlag" @click="isFlag=!isFlag"></i>
      </div>
    </div>
    <div id="skuselect">
      <div class="skuselect-item">
        <p class="item-name">已选</p>
        <p class="item-cont">一往情深</p>
        <i class="iconfont icon-gengduo"></i>
      </div>
      <div class="skuselect-item">
        <p class="item-name">配送至</p>
        <p class="item-cont">
          <i class="iconfont icon-png" style="padding-right:0.133333rem"></i>请选择配送区域
        </p>
        <i class="iconfont icon-gengduo"></i>
      </div>
    </div>
    <!-- <div id="panel">
      <div class="panel-head">
        <p>订单评价</p>
        <p>最近已有8417条评价</p>
      </div>
      <div class="panel-body">
        <div class="bodyhead">
          <p><img src="" alt=""><span ></span></p>
          <p><img src="" alt=""></p>
        </div>
        <div class="bodycont">
          <p></p>
          <img src="" alt="">
          <p></p>
        </div>
      </div>
    </div>-->
    <!-- 产品优点 -->
    <div id="Advantage">
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
    <!-- 图文详情 -->
    <div id="detailImg">
      <p class="detailImg-title">图文详情</p>
      <div class="detailImg-img">
        <img v-for="(item, index) in detailImg" :key="index" :src="item.img" :alt="item.name" />
      </div>
    </div>
    <!-- 企业文化 -->
    <div id="culture">
      <div class="culture-item" v-for="(item, index) in culture" :key="index">
        <h2>{{item.title}}</h2>
        <p>{{item.desc}}</p>
        <img :src="item.img" alt />
      </div>
    </div>
    <!-- 底部选项按钮 -->
    <div id="tabbar">
      <div class="tabbar-left">
        <a href>
          <i class="iconfont icon-kefu"></i>
          <p>客服</p>
        </a>
        <a href="/shop">
          <i class="iconfont icon-gouwuche"></i>
          <p>购物车</p>
        </a>
      </div>
      <div class="tabbar-right">
        <p>加入购物车</p>
        <p>立即购买</p>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "../../components/MyHeader";
export default {
  name: "mydetails",
  data() {
    return {
		// 把首页传递过来的参数赋值给变量id
		id:null,
      culture: [
        {
          title: "龙头企业认证·15年品牌",
          desc: "始于2005，多次获中国电子商务协会“鲜花龙头企业”认证。",
          img: "img/home/details/disseminate/disseminat1.png"
        },
        {
          title: "12道品控标准 + 送前实拍",
          desc:
            "行业内率先研发并实施12道严苛品控标准：从花材采购、制作、成品、配送、售后全程覆盖，将产品及服务标准化；每束花均实拍回传总部审核，符合品控标准方可送出。",
          img: "img/home/details/disseminate/disseminat2.png"
        },
        {
          title: "花艺设计团队",
          desc:
            "国内领先的原创花艺：中国花艺博览会赛事冠军花艺师打造团队，坚持原创设计，创作花款迄今已畅销千万束。",
          img: "img/home/details/disseminate/disseminat3.png"
        },
        {
          title: "当日新鲜花材制作，极速送达",
          desc:
            "门店覆盖全国2000+城市，鲜花皆由当地门店花艺师在配送当日使用新鲜A级花材制作，确保鲜花娇艳欲滴！并由专人专车送货上门，最快1小时送达，快人一步！",
          img: "img/home/details/disseminate/disseminat4.png"
        },
        {
          title: "客服团队",
          desc:
            "建设一支较其他电商更大规模的客服团队，将常规客服升级为售前订花顾问、售中专人跟单、售后快速响应的一站式管家客服模式。",
          img: "img/home/details//disseminate/disseminat5.png"
        },
        {
          title: "优秀平台汇聚优秀人才",
          desc:
            "我们相信优秀的平台环境可以吸引同样气质、热爱花礼行业的优秀人才。",
          img: "img/home/details//disseminate/disseminat6.png"
        },
        {
          title: "不只鲜花 · 跨界音乐微电影",
          desc:
            "联合GIMC打造“勇敢爱”系列原创微电影、赞助《不要音乐》大型音乐旅行节目，全网播放超5000万次。",
          img: "img/home/details//disseminate/disseminat7.png"
        }
      ],
      bannerImg: [
		  {
			  img1:"img/home/details/ywqs1.jpg",
			  img2:"img/home/details/ywqs2.jpg",
			  img3:"img/home/details/ywqs3.jpg",
			  img4:"img/home/details/ywqs4.jpg"
		  },
		  {
			  img1:"img/home/details/yxyy1.jpg",
			  img2:"img/home/details/yxyy2.jpg",
			  img3:"img/home/details/yxyy3.jpg",
			  img4:"img/home/details/yxyy4.jpg"
		  },
		  {
			  img1:"img/home/details/wqbl1.jpg",
			  img2:"img/home/details/wqbl2.jpg",
			  img3:"img/home/details/wqbl3.jpg",
			  img4:"img/home/details/wqbl4.jpg"
		  },
		  {
			  img1:"img/home/details/llsq1.jpg",
			  img2:"img/home/details/llsq2.jpg",
			  img3:"img/home/details/llsq3.jpg",
			  img4:"img/home/details/llsq4.jpg"
		  },
		  {
			  img1:"img/home/details/bbdcn1.jpg",
			  img2:"img/home/details/bbdcn2.jpg",
			  img3:"img/home/details/bbdcn3.jpg",
			  img4:"img/home/details/bbdcn4.jpg"
		  },
		  {
			  img1:"img/home/details/bbdcn1.jpg",
			  img2:"img/home/details/bbdcn2.jpg",
			  img3:"img/home/details/bbdcn3.jpg",
			  img4:"img/home/details/bbdcn4.jpg"
		  },
		  {
			  img1:"img/home/details/hsxlcsbf1.jpg",
			  img2:"img/home/details/hsxlcsbf2.jpg",
			  img3:"img/home/details/hsxlcsbf3.jpg",
			  img4:"img/home/details/hsxlcsbf4.jpg"
		  },
		  {
			  img1:"img/home/details/hsxlqadn1.jpg",
			  img2:"img/home/details/hsxlqadn2.jpg",
			  img3:"img/home/details/hsxlqadn3.jpg",
			  img4:"img/home/details/hsxlqadn4.jpg"
		  }
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false
        // },
        loop: false
      },
      data: [
        {
          name: "花语",
          cont:
            "你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。"
        },
        {
          name: "材料",
          cont: "高档礼盒装鲜花:19枝红玫瑰，勿忘我0.1扎"
        }
      ],
      AdvantageImg: [
        { img: "img/home/Advantage2.png", name: "获评鲜花龙头企业" },
        { img: "img/home/Advantage3.png", name: "1~3小时送花上门" },
        { img: "img/home/Advantage4.png", name: "赛事冠军花艺师团队" },
        { img: "img/home/Advantage5.png", name: "严选花材" },
        { img: "img/home/Advantage6.png", name: "12道严苛品控标准" },
        { img: "img/home/Advantage7.png", name: "500万用户信赖好评" }
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
      ],
      SCflag: false,
      isFlag: true
    };
  },
  created() {
	  //接收首页传递过来的参数并赋值
    this.id = this.$route.query.id - 1;
  },
  components: {
    myHeader
  }
};
</script>

<style lang='less' scoped>
#mydetails {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  font-size: 0.373333rem;
  background-color: #e9ecf0;
  #banner {
    padding-top: 50px;
    width: 100%;
    height: 10.906667rem;

    .swiper-container {
      --swiper-theme-color: #ff734c;
    }

    .swiper-slide {
      width: 100%;
      height: 10.906667rem;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination-fraction {
      background-color: rgba(256, 256, 256, 0.8);
      width: 0.96rem;
      height: 0.48rem;
      text-align: center;
      margin-left: 90%;
      color: #000;
    }
  }
  #proinfo {
    background-color: #fff;
    padding: 0.32rem 0.426667rem;
    height: 1.973333rem;
    text-align: left;
    .info-head {
      display: flex;
      .proinfo-title {
        width: 85%;
        .title-text {
          color: #ff734c;
          padding-left: 0.133333rem;
        }
      }
      .proinfo-shoucang {
        width: 15%;
        text-align: right;
        .icon-collect-active {
          font-size: 20px;
          color: #ff9c00;
        }
        .icon-shoucang {
          font-size: 18px;
          color: #000;
        }
      }
    }
    .info-body {
      margin-top: 0.32rem;
      height: 0.64rem;
      display: flex;
      .info-body-price {
        flex: 1;
        span {
          &:nth-child(1) {
            font-size: 0.533333rem;
            color: #ff734c;
            font-weight: 600;
          }
          &:nth-child(2) {
            font-size: 14px;
            color: #b4babf;
          }
        }
      }
      .info-body-num {
        font-size: 12px;
        color: #000;
      }
    }
  }
  #download {
    background-color: #fff;
    border-top: 1px solid #ebeef2;
    padding: 0.373333rem 0.426667rem;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 0.426667rem;
    }
    i {
      &:nth-child(1) {
        font-weight: 600;
        padding-right: 0.4rem;
      }
      &:nth-child(2) {
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
  #detailsinfo,
  #skuselect {
    margin-top: 0.213333rem;
    padding: 0.213333rem 0.426667rem;
    background-color: #fff;
    .detailsinfo-item,
    .skuselect-item {
      font-size: 0.32rem;
      display: flex;
      text-align: left;

      .item-name {
        width: 15%;
        padding: 0.32rem 0;
      }
      .item-cont {
        width: 85%;
        padding: 0.32rem 0;
        border-bottom: 1px solid #f7f8f9;
      }
      .item-citycont {
        width: 80%;
      }
      i {
        width: 10%;

        padding: 0.32rem 0;
        text-align: right;
      }
    }
  }
  .hidden {
    overflow: hidden; //超出部分隐藏
    text-overflow: ellipsis; //超出部分显示...
    white-space: nowrap; //文本强制一行显示
  }
  .skuselect-item {
    .item-cont {
      font-size: 0.373333rem;
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
      margin-top: 0.213333rem;
      .Advantage-cont-title {
        text-align: center;
        padding: 0.64rem 0.426667rem;
        font-size: 0.426667rem;
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
            p {
              font-size: 0.32rem;
            }
          }
        }
      }
    }
  }
  #detailImg {
    background-color: #fff;
    margin-top: 0.213333rem;
    width: 100%;
    .detailImg-title {
      padding: 0.32rem 0.426667rem;
      font-size: 0.426667rem;
    }
    img {
      width: 100%;
    }
  }
  #culture {
    background-color: #fff;
    margin-top: 0.213333rem;
    width: 100%;
    box-sizing: border-box;
    padding: 0.426667rem 0.426667rem 2rem;
    h2 {
      padding: 0.64rem 0;
      text-align: center;
    }
    p {
      font-size: 0.32rem;
    }
    img {
      width: 100%;
    }
  }
  #tabbar {
    position: fixed;
    width: 100%;
    height: 1.333333rem;
    bottom: 0;
    left: 0;
    display: flex;
    background-color: #fff;
    z-index: 99;
    .tabbar-left {
      width: 40%;
      display: flex;
      a {
        padding-top: 0.213333rem;
        width: 50%;
        box-sizing: border-box;
        overflow: hidden;
        text-align: center;
        color: #000;
        font-weight: 500;
        i {
          font-size: 0.48rem;
        }
        p {
          font-size: 0.32rem;
        }
        &:nth-child(1) {
          border-left: 1px solid #e9ecf0;
        }
      }
    }
    .tabbar-right {
      width: 60%;
      display: flex;
      p {
        width: 50%;
        line-height: 1.333333rem;
        text-align: center;
        font-size: 0.426667rem;
        color: #fff;
        &:nth-child(1) {
          background-color: #3d4d42;
        }
        &:nth-child(2) {
          background-color: #ff734c;
        }
      }
    }
  }
}
</style>