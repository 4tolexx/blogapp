import Vue from 'vue'
import VueRouter from 'vue-router'

import Post from '../views/Post.vue'
import Details from '../views/Details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Post',
    component: Post
  },

  {
    path: '/details/:id',
    name: 'Details',
    component: Details
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
