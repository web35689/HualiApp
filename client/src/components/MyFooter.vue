<template>
  <!-- 页脚组件 -->
  <div id="myfooter">
    <div class="myfooter-item" v-for="(item, index) in list" :key="index">
      <span v-if="index==2">{{carnum}}</span>
      <router-link :to="item.path">
        <i class="iconfont" :class="item.icon"></i>
        <p>{{item.text}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "myfooter",
  data() {
    return {
      list: [
        { icon: "icon-shouye", text: "首页", path: "/index" },
        { icon: "icon-fenlei1", text: "分类", path: "/category" },
        { icon: "icon-gouwuche", text: "购物车", path: "/shop" },
        { icon: "icon-xiaolianchenggong", text: "我的", path: "/my" }
      ],
      // 添加商品数
      carnum: 0
    };
  },
  // 实例创建时,计算添加商品数
  created() {
    if(window.localStorage.getItem("sum")){
      this.carnum = window.localStorage.getItem("sum");
      this.$store.state.shopcarList.push(...JSON.parse(window.localStorage.getItem("productArr")));
    }else if(window.localStorage.getItem("productArr")){
      this.carnum = JSON.parse(window.localStorage.getItem("productArr")).length;
    }
  },
  // 监听添加商品数
  watch: {
    "$store.state.shopcarList.length"(newval) {
      this.carnum = newval;
      window.localStorage.setItem("sum",this.carnum);
    }
  }
};
</script>

<style lang="less">
#myfooter {
  position: fixed;
  z-index: 99;
  width: 100%;
  bottom: 0;
  height: 1.2rem;
  padding: 0.066667rem 0;
  font-size: 0.426667rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: #f7f9fa;

  .myfooter-item {
    position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    span {
      position: absolute;
      width: 0.4rem;
      height: 0.4rem;
      background-color: #ff734c;
      top: 0;
      right: 0.533333rem;
      color: #fff;
      font-size: 0.32rem;
      font-weight: 200;
      border-radius: 50%;
      text-align: center;
    }
    a {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -moz-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      display: inline-block;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: #000;
      text-align: center;

      i {
        line-height: 0.666667rem;
        font-size: 0.453333rem;
      }

      p {
        line-height: 0.666667rem;
        font-size: 0.373333rem;
      }
    }

    .router-link-active {
      color: #ff734c;
      font-weight: 600;
    }
  }
}
</style>
