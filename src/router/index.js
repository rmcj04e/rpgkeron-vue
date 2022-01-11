import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import register from "@/router/middleware/register";
import usercp_access from "@/router/middleware/usercp_access";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title : 'Главная'
    }
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    meta: {
      title : 'Регистрация',
      middleware : [register]
    }
  },
  {
    path: '/donate',
    name: 'Donate',
    component: () => import(/* webpackChunkName: "donate" */ '../views/Donate.vue'),
    meta: {
      title : 'Донат-услуги'
    }
  },
  {
    path: '/rules',
    name: 'Rules',
    component: () => import(/* webpackChunkName: "rules" */'../views/Rules.vue'),
    meta: {
      title : 'Правила'
    }
  },
  {
    path: '/start',
    name: 'Start',
    component: () => import(/* webpackChunkName: "start" */ '../views/Start.vue'),
    meta: {
      title: 'Начать игру'
    }
  },
  {
    path: '/usercp',
    name: 'UserCP',
    component: () => import(/* webpackChunkName: "usercp" */ '../views/UserCP/UserCP.vue'),
    meta: {
      title : 'Личный кабинет',
      middleware: [usercp_access]
    }
   }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware
  const context = {
    to,
    from,
    next,
    store,
  }
  return middleware[0]({
    ...context
  })
})

export default router
