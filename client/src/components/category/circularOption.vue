<template>
  <!-- 图像为圆形的任意块组件 -->
  <div class="cont-details">
    <div class="cont-top">
      <!-- 这个插槽写入相对应的标题 -->
      <p class="cont-title">
        <slot name="title"></slot>
      </p>
      <!-- 这个插槽放icon和鲜花榜的名字 -->
      <p class="RankingList">
        <slot name="RankingList"></slot>
      </p>
    </div>

    <ul class="contBrand-img">
      <!-- 循环数据插槽 -->
      <slot name="ImgLoop"></slot>
    </ul>
  </div>
</template>

<script>
export default {
  //图像为圆形的任意块组件
  name: "circularOption"
};
</script>


<style lang="less" scoped>
.cont-details {
  font-size: 0.4rem;
  padding: 0.266667rem 0.133333rem;
  margin-bottom: 0.32rem;
  box-shadow: 0px 2pc 6pc 0px #e9ecf0;

  .cont-top {
    padding: 0 0.346667rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;

    .cont-title {
      padding-bottom: 0.346667rem;
      text-align: left;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -moz-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    .RankingList {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -moz-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      text-align: right;
      color: #71797f;
      font-size: 0.32rem;

      i {
        font-size: 0.373333rem;
      }

      a {
        color: #71797f;
      }
    }
  }

  .contBrand-img {
    width: 100%;
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
      padding: 0.266667rem 0;
      -moz-box-sizing: border-box;
      box-sizing: border-box;

      a {
        width: 100%;
        height: 100%;
        display: inline-block;
        color: #5d5d5d;

        img {
          width: 1.6rem;
          height: 1.6rem;
        }

        p {
          font-size: 0.373333rem;
          font-weight: 300;
        }
      }
    }
  }
}
</style>