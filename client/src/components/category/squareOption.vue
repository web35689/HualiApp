<template>
  <!-- 图像为方形的任意块组件 目前为品牌类组件 -->
  <div class="cont-brand">
    <p class="cont-title">品牌</p>
    <ul class="contBrand-img">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  //图像为方形的任意块组件 目前为品牌类组件
  name: "squareOption"
};
</script>

<style lang="less" scoped>
.cont-brand {
  font-size: 0.4rem;
  padding: 0.266667rem 0.133333rem;
  margin-bottom: 0.32rem;
  box-shadow: 0px 2px 6px 0px #e9ecf0;

  .cont-title {
    padding: 0 0.346667rem 0.346667rem 0.346667rem;
    text-align: left;
  }

  .contBrand-img {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;

    li {
      width: 33.33%;
      height: 1.333333rem;
      padding-bottom: 0.266667rem;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border-right: 1px solid #f7f9fa;
      border-bottom: 1px solid #f7f9fa;

      &:nth-child(3n) {
        border-right: none;
      }

      a {
        width: 100%;
        height: 100%;
        display: inline-block;

        img {
          width: 2.08rem;
          height: 1.146667rem;
        }
      }
    }
  }
}
</style>