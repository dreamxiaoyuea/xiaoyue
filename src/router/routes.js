// import HelloWorld from '@/pages/HelloWorld'
// import Home from '@/pages/Home'
// import Cart from '@/pages/Cart'
// import Search from '@/components/home/Search'
// import Kind from '@/pages/Kind'
// import User from '@/pages/User'
// import Detail from '@/pages/Detail'
import Footer from '@/components/Footer'
// import Register from '@/pages/Register'
import Stroll from '@/pages/Stroll'

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: () => import(/* webpackChunkName: "group-footer" */ '@/pages/Home'),
      footer: Footer
    }
  },
  {
    path: '/kind',
    name: 'kind',
    components: {
      default: () => import(/* webpackChunkName: "group-footer" */ '@/pages/Kind'),
      footer: Footer
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: () => import(/* webpackChunkName: "group-footer" */ '@/pages/Cart')
    }
  },
  {
    path: '/stroll',
    name: 'stroll',
    component: Stroll
  },
  {
    path: '/user',
    name: 'user',
    components: {
      default: () => import(/* webpackChunkName: "group-footer" */ '@/pages/User'),
      footer: Footer
    }
  },
  {
    path: '/detail',
    name: 'detail',
    components: {
      default: () => import(/* webpackChunkName: "group-footer" */ '@/pages/Detail')
    }
  },
  {
    path: '/register',
    name: 'register',
    components: {
      default: () => import(/* webpackChunkName: "group-footer" */ '@/pages/Register')
    }
  },
  {
    path: '/city',
    name: 'city',
    components: {
      default: () => import(/* webpackChunkName: "group-footer" */ '@/pages/City')
    }
  },
  {
    path: '/search',
    name: 'search',
    components: {
      default: () => import(/* webpackChunkName: "group-footer" */ '@/pages/Search'),
      footer: Footer
    }
  }
]

export default routes
