import Vue from 'vue';
import VueRouter from 'vue-router';
const register = () => import('../views/register')
const Login = () => import('../views/Login')
const userinfo = () => import('../views/userinfo')
const Edit = () => import('../views/Edit')

Vue.use(VueRouter)

const routes = [
  {
    redirect:'/register',
    path:''
  },
  {
    path:'/register',
    component:register
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/userinfo',
    component:userinfo,
    meta:{
      istoken:true
    }
  },
  {
    path:'/edit',
    component:Edit,
    meta:{
      istoken:true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  if (localStorage.getItem('token')&&!localStorage.getItem('id')&&to.meta.istoken == true){
    router.push('/login')
    Vue.prototype.$msg.fail('请重新登录')
    return
  }
  next()
})

export default router

