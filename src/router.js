import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import SignIn from './views/SignIn'
import Home from './views/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('/')
  else if (!requiresAuth && currentUser) next('home')
  else next()
})

export default router
