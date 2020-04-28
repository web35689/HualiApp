import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Details from '../views/home/details.vue';
import Category from '../views/Category.vue';
import Shop from '../views/Shop.vue';
import My from '../views/My.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    name: 'Home',
    component: Home,
  },
  {
    path: '/index/details',
    component: Details
  },
  {
    path: '/Category',
    name: 'Category',
    component: Category
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/my/login',
    component: Login
  }
]

const router = new VueRouter({
  //html5模式    访问路径没有#号
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router