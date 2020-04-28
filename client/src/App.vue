<template>
  <div id="app">
    <router-view @getFlag="changeFlag" />
    <my-footer v-show="footerFlag"></my-footer>
  </div>
</template>

<script>
// 引入组件
import myFooter from "./components/MyFooter";
export default {
  name: "APP",
  data() {
    return {
      // myMooter组件的显示与隐藏
      footerFlag: true
    };
  },
  // 注册组件
  components: {
    myFooter
  },
  methods: {
    // Shop.vue  判断购物车有无商品
    changeFlag(val) {
      this.footerFlag = val;
    }
  },
  watch: {
    //监听路由改变
    "$route.path"(newval) {
      if (newval == "/shop") {
        this.changeFlag;
        console.log(newval);
      } else if (newval == "/index/details") {
        console.log(newval);
        this.footerFlag = false;
      } else {
        this.footerFlag = true;
      }
    }
  }
};
</script>


<style lang="less" scpoed>
* {
  padding: 0;
  margin: 0;
}

html {
  background-color: #e9ecf0;
  @media (min-device-width: 800px) {
    font-size: 80px;
  }
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
