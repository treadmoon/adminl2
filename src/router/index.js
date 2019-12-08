import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push 
VueRouter.prototype.push = function push(location) { 
  return originalPush.call(this, location).catch(err => err) 
}

export const menuRoute = [
  {
    path: 'extPlay',
    name: 'extPlay',
    title:'推广计划',
    id:'tgjh',
    component: () => import('@/views/extPlay/index.vue')
  },
  {
    path: 'extGroup',
    name: 'extGroup',
    title:'推广组',
    id:'tgz',
    component: () => import('@/views/extGroup/index.vue')
  },
  {
    path: 'extIdea',
    name: 'extIdea',
    title:'推广创意',
    id:'tgcy',
    component: () => import('@/views/extIdea/index.vue')
  },
  {
    path: 'countDetail',
    name: 'countDetail',
    title:'账单明细',
    id:'zdmx',
    component: () => import('@/views/countDetail/index.vue')
  },
  {
    path: 'dataPort',
    name: 'dataPort',
    title:'数据报告',
    id:'sjbg',
    component: () => import('@/views/dataPort/index.vue')
  },
  {
    path: 'countCenter',
    name: 'countCenter',
    title:'账户中心',
    id:'zhzx',
    component: () => import('@/views/countCenter/index.vue')
  },
  {
    path: 'aboutPlat',
    name: 'aboutPlat',
    title:'关于平台',
    id:'gypt',
    component: () => import('@/views/aboutPlat/index.vue')
  }
]

const routes = [
  {
    path: '/',
    redirect:'/home',
  },
  {
    path: '/home',
    name: 'home',
    redirect:'/home/extPlay',
    component: () => import('@/views/Home.vue'),
    children: menuRoute
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
