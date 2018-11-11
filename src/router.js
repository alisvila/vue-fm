import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RegisterForm from './views/RegisterForm.vue'
import singleOrder from './views/order.vue'
import Login from './views/Login.vue'
import Register from './views/register.vue'
import Apps from './views/pannel/Apps.vue'
import NewService from './views/pannel/NewService.vue'
import PannelIndex from './views/pannel/index.vue'
import Documents from './views/pannel/Document.vue'
import AppDetail from './views/pannel/ServiceDetail.vue'
import Example from './views/pannel/Example.vue'






Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/order',
      name: 'register',
      component: RegisterForm
    },
    {
      path: '/allOrder',
      name: 'order',
      component: singleOrder
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/pannel/apps',
      name: 'apps',
      component: Apps
    },
    {
      path: '/pannel/new',
      name: 'NewService',
      component: NewService
    },
    {
      path: '/pannel',
      name: 'PannelIndex',
      component: PannelIndex
    },
    {
      path: '/pannel/documents',
      name: 'Documents',
      component: Documents
    },
    {
      path: '/pannel/app',
      name: 'AppDetail',
      component: AppDetail
    },
    {
      path: '/pannel/example',
      name: 'Example',
      component: Example
    },
    
  ]
})
