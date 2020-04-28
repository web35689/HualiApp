<template>
  <div class="catebox-header">
    <a href>
      <!-- 这个匿名插槽放对应的图片header -->
      <slot></slot>
    </a>
  </div>
</template>


<style lang="less" scoped>
.catebox-header {
  height: 2.8rem;
  overflow: hidden;
  margin-bottom: 0.32rem;

  a {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
    }
  }
}
</style>