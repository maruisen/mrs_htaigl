import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, form, next) => {
  let token =true
  if (!token &&to.name != "Login") {
    // console.log(to);

    next("/login")
  }
  
  if (token&&to.name == "Login") {
    next("/")
  }
  next()
})
export default router