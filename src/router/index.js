import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login2 from '../views/Login2.vue'
import Authenticated from "@/views/Authenticated";
import Pessoa from "@/views/Pessoa";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login2',
    name: 'Login',
    component: Login2
  },
  {
    path: '/authenticated',
    name: 'Authenticated',
    component: Authenticated
  },
  {
    path: '/pessoa',
    name: 'Pessoa',
    component: Pessoa
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
