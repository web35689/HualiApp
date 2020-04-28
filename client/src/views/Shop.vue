<template>
  <div id="myshop">
    <!-- head -->
    <div id="header">
      <div class="headerbox">
        <p @click="goBack()">
          <i class="iconfont icon-xiangzuo"></i>
        </p>
        <p>
          购物车
          <span v-if="carList.length">({{carList.length}})</span>
        </p>
        <p>
          <i class="iconfont icon-menu" v-if="carList.length" @click="menuFlag=!menuFlag"></i>
        </p>
      </div>
    </div>
    <!-- 点击菜单按钮购物车一级页面显示与隐藏 -->
    <div id="activeMenu" v-if="menuFlag">
      <p v-for="(item, index) in list" :key="index">
        <a :href="item.path">
          <i class="iconfont" :class="item.icon"></i>
          {{item.text}}
        </a>
      </p>
    </div>

    <!-- 没有商品时显示 -->
    <div v-if="!carList.length">
      <div class="carNull">
        <img src="img/home/shop1.png" alt />
        <p>购物车内暂时没有商品</p>
        <router-link to="/index">去逛逛</router-link>
      </div>
      <!-- 没有商品时,随机刷新商品到空购物车底部,给用户提供选择 -->
      <shop-pro></shop-pro>
    </div>

    <!-- 有商品时显示 -->
    <div v-else>
      <div class="carHave">
        <div class="carItme" v-for="(item, index) in carList" :key="index">
          <div class="carCheck" @click="changeCheck(index)">
            <i class="iconfont icon-xuanzhong" v-if="item.flag"></i>
            <i class="iconfont icon-quan" v-else style="color:#000"></i>
          </div>
          <div class="carRight">
            <div class="carRight-img">
              <img :src="item.img" alt />
            </div>
            <div class="carRight-config">
              <p>{{item.name}}</p>
              <div class="cart-item-num">
                <span>数量:</span>
                <p class="reduce" @click="reduce(index)">
                  <i class="iconfont icon-jian1" v-if="item.reduceFlag"></i>
                  <i class="iconfont icon-shanchu2" v-else></i>
                </p>
                <input type="text" v-model="item.thisNum" />
                <p class="add" @click="add(index)">
                  <i class="iconfont icon-jia1"></i>
                </p>
              </div>
              <p class="carRight-price">￥{{item.newPrice}}</p>
              <a href="javascript:;" class="carRight-delete" @click="openModel(index)">删除</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 购物车结算 -->
    <footer id="footer" v-if="carList.length">
      <div class="footer-left">
        <p class="footer-checkAll" @click="changeCheckAll()">
          <i class="iconfont icon-xuanzhong" v-if="checkAll"></i>
          <i class="iconfont icon-quan" v-else style="color:#000"></i>
          全选
        </p>
        <a href="javascript:;" @click.stop="openMoremodel()">删除</a>
      </div>
      <span class="footer-center">
        合计:
        <span class="total">￥{{total.Price}}</span>
      </span>
      <button class="footer-right" type="button" id="jieSuan">去结算({{total.num}})</button>
    </footer>

    <!-- 单删模态框 -->
    <div class="delModelbox" v-if="model.flag">
      <div class="delModel">
        <p class="delModel-text">确认删除此商品吗?</p>
        <div class="delModel-option">
          <p @click="model.flag=false">我再想想</p>
          <p @click="del(model.thisnum)">确定</p>
        </div>
      </div>
    </div>

    <!-- 多删模态框 -->
    <div class="delModelbox" v-if="moremodelFlag">
      <div class="delModel">
        <p class="delModel-text">确认删除这{{total.num}}个商品吗?</p>
        <div class="delModel-option">
          <p @click="moremodelFlag=false">我再想想</p>
          <p @click="delAll()">确定</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shopPro from "../components/shop/shopProduct.vue";
export default {
  name: "shop",
  data() {
    return {
      carList: [],
      list: [
        { icon: "icon-shouye", text: "首页", path: "/index" },
        { icon: "icon-fenlei1", text: "分类", path: "/category" },
        { icon: "icon-gouwuche", text: "购物车", path: "/shop" },
        { icon: "icon-xiaolianchenggong", text: "我的", path: "/my" }
      ],
      // 全选
      checkAll: false,
      model: {
        // 当前准备删除商品的下标
        thisnum: "",
        // 单删模态框
        flag: false
      },
      //多删模态框
      moremodelFlag: false,
      // 右上角菜单
      menuFlag: false
    };
  },
  created() {
    //将VueX仓库里面的shopcarList 存在当前carList
    // this.carList = this.$store.state.shopcarList;
    this.carList = JSON.parse(window.localStorage.getItem("productArr")) || [];
    //创建完毕后 判断购物车长度 向app父组件发送相对应的flag
    if (this.carList.length > 0) this.$emit("getFlag", false);
    else this.$emit("getFlag", true);
    this.addflag();
  },
  methods: {
    //数组里面是没有flag的 这个时候我们需要在加载完成后将我们需要的属性给添加上去
    addflag() {
      for (const i in this.carList) {
        this.$set(this.carList[i], "flag", false);
      }
    },
    //头部点击回退事件
    goBack() {
      window.history.go(-1);
    },
    //每条商品的点击事件 当所有商品被选中的时候 全选按钮高亮 否则未选中
    changeCheck(index) {
      this.carList[index].flag = !this.carList[index].flag;
      let newcarList = this.carList.filter(item => {
        return item.flag == true;
      });
      if (newcarList.length == this.carList.length) this.checkAll = true;
      else this.checkAll = false;
    },
    //点击全选和取消全选
    changeCheckAll() {
      this.checkAll = !this.checkAll;
      for (const i in this.carList) {
        if (this.checkAll) this.carList[i].flag = true;
        else this.carList[i].flag = false;
      }
    },
    //当前商品数量-1 若当前商品数量等于或少于1 那么显示删除icon 当点击删除icon时 打开模态框 并赋值
    reduce(index) {
      if (this.carList[index].thisNum > 1) {
        this.carList[index].thisNum--;
        this.$store.commit("changeList", this.carList); //将当前数组传给仓库
        if (this.carList[index].thisNum <= 1)
          // reduceFlag 购物车删除图标的显示与隐藏
          this.carList[index].reduceFlag = false;
      } else {
        // this.carList.splice(index, 1);
        this.openModel();
      }
    },
    //当前数量+1 若当前商品数量大于1 那么还原减号icon
    add(index) {
      this.carList[index].thisNum++;
      this.$store.commit("changeList", this.carList); //将当前数组传给仓库
      if (this.carList[index].thisNum > 1)
        this.carList[index].reduceFlag = true;
    },
    //打开单删模态框 获取要删除商品的下标并赋值
    openModel(index) {
      this.model.flag = true;
      this.model.thisnum = index;
    },
    //单删模态框删除当前商品
    del(index) {
      this.carList.splice(index, 1);
      this.model.flag = false;
      this.$store.commit("changeList", this.carList); //将当前数组传给仓库
    },
    //打开多删模态框
    openMoremodel() {
      let newcarList = this.carList.filter(item => {
        return item.flag == true;
      });
      if (newcarList.length == 0) return;
      else this.moremodelFlag = true;
    },
    //多删模态框删除选中商品
    delAll() {
      this.carList = this.carList.filter(item => {
        return item.flag == false;
      });
      this.moremodelFlag = false;
      this.$store.commit("changeList", this.carList); //将当前数组传给仓库
    }
  },
  components: {
    shopPro
  },
  computed: {
    // 计算属性检测 被选中商品的总价和数量
    total() {
      let newCarList = this.carList.filter(item => {
        return item.flag == true;
      });
      if (newCarList.length == 0) {
        return {
          Price: 0,
          num: 0
        };
      } else {
        let totalPrice = 0;
        for (const i in newCarList) {
          totalPrice += parseInt(newCarList[i].thisNum)*parseFloat(newCarList[i].newPrice);
        }
        return {
          Price: totalPrice,
          num: newCarList.length
        };
      }
    }
  },
  watch: {
    //监听数组的长度 若长度大于0 给app父组件发送false 反之发送true
    "carList.length": {
      handler(newVal, oldVal) {
        if (newVal > 0) this.$emit("getFlag", false);
        else this.$emit("getFlag", true);
      }
    }
  }
};
</script>

<style lang="less" scoped>
#myshop {
  max-width: 800px;
  margin: 0 auto;
  font-size: 0.426667rem;
  position: relative;
}

#header {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: 1.333333rem;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
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
    width: 100%;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 1.333333rem;

    p {
      &:nth-child(1),
      &:nth-child(3) {
        width: 12%;
        height: 1.333333rem;
        line-height: 1.226667rem;
        text-align: center;

        i {
          font-size: 0.533333rem;
          color: #000;
        }
      }

      &:nth-child(2) {
        width: 76%;
        font-size: 0.48rem;
        line-height: 1.333333rem;
        text-align: center;
      }
    }
  }
}
#activeMenu {
  background-color: #fff;
  position: absolute;
  // top: 1.333333rem;
  right: 0.213333rem;
  z-index: 99;
  width: 2.533333rem;
  border: 1px solid #e9ecf0;
  border-radius: 0.133333rem;
  -webkit-box-shadow: 0 4px 12px 0 #e9ecf0;
  -ms-box-shadow: 0 4px 12px 0 #e9ecf0;
  -o-box-shadow: 0 4px 12px 0 #e9ecf0;
  box-shadow: 0 4px 12px 0 #e9ecf0;
  &::before {
    content: "";
    position: absolute;
    top: -0.106667rem;
    right: 0.213333rem;
    width: 0.106667rem;
    height: 0.106667rem;
    background: #fff;
    border-top: 1px solid #e9ecf0;
    border-left: 1px solid #e9ecf0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  p {
    width: 100%;
    height: 1.333333rem;
    line-height: 1.333333rem;
    a {
      box-sizing: border-box;
      padding: 0 0.32rem;
      width: 100%;
      height: 100%;
      display: inline-block;
      font-size: 0.346667rem;
      color: #232628;
      text-align: left;
      i {
        padding-right: 0.213333rem;
      }
    }
  }
}

.carNull {
  margin-top: 1.333333rem;
  background-color: #fff;
  padding: 1.2rem 0;
  text-align: center;

  img {
    width: 3.733333rem;
    height: 2.666667rem;
  }

  p {
    margin-top: 0.533333rem;
    color: #232628;
    font-size: 0.426667rem;
  }

  a {
    display: inline-block;
    margin-top: 0.4rem;
    width: 3.093333rem;
    height: 0.8rem;
    line-height: 0.8rem;
    background: #ff734c;
    border-radius: 0.533333rem;
    color: #ffffff;
    font-size: 0.373333rem;
    font-weight: 600;
  }
}

.carHave {
  margin: 1.333333rem 0;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
  text-align: center;

  .carItme {
    padding-top: 0.266667rem;
    width: 94%;
    height: 4rem;
    margin: 0 3%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px solid #e9ecf0;

    .carCheck {
      width: 10%;

      input {
        display: none;
        outline: none;
        -webkit-appearance: none;
      }

      i {
        display: inline-block;
        font-size: 0.613333rem;
        margin-top: 1.333333rem;
        color: #ff734c;
      }
    }

    .carRight {
      height: 3.333333rem;
      width: 90%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;

      .carRight-img {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: inline-block;
        width: 35%;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .carRight-config {
        position: relative;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width: 65%;
        height: 3.333333rem;
        padding: 0 0.346667rem;
        text-align: left;

        .cart-item-num {
          height: 0.666667rem;
          margin-top: 0.213333rem;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          display: -webkit-box;
          display: -webkit-flex;
          display: -moz-box;
          display: -ms-flexbox;
          display: flex;

          span {
            font-size: 0.32rem;
            line-height: 0.666667rem;
            padding-right: 0.266667rem;
          }

          p {
            width: 0.613333rem;
            height: 0.613333rem;
            border: 1px solid #e9ecf0;
            text-align: center;
            line-height: 0.666667rem;
          }

          .reduce {
            border-right: none;
          }

          .add {
            border-left: none;
          }

          input {
            width: 1.28rem;
            text-align: center;
            border: 1px solid #e9ecf0;
          }
        }

        .carRight-price {
          position: absolute;
          left: 0.266667rem;
          bottom: 0;
          font-size: 0.4rem;
          color: #ff734c;
          font-weight: 500;
        }

        .carRight-delete {
          position: absolute;
          right: 0.266667rem;
          bottom: 0;
          font-size: 0.32rem;
          color: #ccc;
          font-weight: 500;
          text-decoration: underline;
        }
      }
    }
  }
}

#footer {
  max-width: 450px;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1.386667rem;
  font-size: 0;
  background-color: #fff;
  line-height: 1.386667rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;

  .footer-left {
    text-align: left;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;

    width: 33.33%;
    font-size: 0.373333rem;
    line-height: 1.333333rem;

    .footer-checkAll {
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
      width: 60%;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding-left: 0.4rem;
      font-size: 0.373333rem;
      // @media (max-device-width: 355px) {
      //   font-size: .32rem;
      // }

      input {
        display: none;
        outline: none;
        -webkit-appearance: none;
      }

      i {
        display: inline-block;
        font-size: 0.613333rem;
        color: #ff734c;
        padding-right: 0.133333rem;
        // @media (max-device-width: 355px) {
        //   font-size: .533333rem;
        // }
      }
    }

    a {
      line-height: 1.413333rem;
      display: inline-block;
      width: 40%;
      vertical-align: bottom;
      text-align: center;
      font-size: 0.32rem;
      color: #ccc;
      font-weight: 500;
      text-decoration: underline;
    }
  }

  .footer-center {
    text-align: right;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 33.33%;
    padding-right: 0.266667rem;
    font-size: 0.4rem;

    .total {
      color: #ff734c;
      font-size: 0.48rem;
      font-weight: 500;
      margin-left: 0.266667rem;
    }
  }

  button {
    width: 33.33%;
    border: none;
    height: 100%;
    border-radius: 0;
    color: #fff;
    font-size: 0.426667rem;
    text-align: center;
    background-color: #ff734c;
  }
}

.delModelbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);

  .delModel {
    background-color: #fff;
    font-size: 0.373333rem;
    text-align: center;
    width: 70%;
    max-width: 320px;
    margin: 50vh auto 0;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    border-radius: 0.266667rem;

    .delModel-text {
      color: #71797f;
      font-size: 0.4rem;
      line-height: 2.266667rem;
    }

    .delModel-option {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;

      p {
        width: 50%;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 1.333333rem;
        border-top: 1px solid #d0d0d0;

        &:nth-child(1) {
          border-right: 1px solid #d0d0d0;
        }

        &:nth-child(2) {
          color: #ff734c;
        }
      }
    }
  }
}
</style>
