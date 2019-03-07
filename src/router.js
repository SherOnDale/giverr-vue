import Vue from 'vue'
import Router from 'vue-router'
import SignIn from './views/SignIn'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
