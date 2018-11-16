import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
import login from '@/components/login.vue'
import HelloWorld from '@/components/HelloWorld.vue'

import firebase from 'firebase'


Vue.use(Router)

const router = new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: Home
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     component: About
  //   }
  // ]
  routes: [
    {
      path: '*',
      redirect:'/login'
    },
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: HelloWorld,
      meta:{
        autentificado:true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let usuario = firebase.auth().currentUser;
  // eslint-disable-next-line no-console
  console.log(usuario)
  let autorizacion = to.matched.some(record=> record.meta.autentificado)
  if(autorizacion && !usuario){
    next('login')
  }
  else if(!autorizacion && usuario){
    next('helloWorld')
  }else{
    next()
  }
})

export default router