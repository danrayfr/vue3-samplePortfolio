import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import About from '@/views/About/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About  ,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact/index.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact/index.vue')
  }
  ,
  {
    path: '/articles',
    name: 'Articles.index',
    component: () => import('@/views/Articles/index.vue')
  },
  {
    path: '/articles/:slug',
    name: 'Articles.show',
    component: () => import('@/views/Articles/show.vue'),
    props: true
  },
  {
    path: '/programming',
    name: 'Programming',
    component: () => import('@/views/Programming/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes
})

export default router
