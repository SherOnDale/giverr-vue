import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from './router'
import {
  MdCard,
  MdField,
  MdButton,
  MdProgress,
  MdToolbar
} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdCard)
Vue.use(MdField)
Vue.use(MdButton)
Vue.use(MdToolbar)
Vue.use(MdProgress)

const config = {
  apiKey: 'AIzaSyDELpcZ2u53bmlGD07CaRnYhKA0rRqRCJo',
  authDomain: 'giverr-d63f1.firebaseapp.com',
  databaseURL: 'https://giverr-d63f1.firebaseio.com',
  projectId: 'giverr-d63f1',
  storageBucket: 'giverr-d63f1.appspot.com',
  messagingSenderId: '616597502663'
}

firebase.initializeApp(config)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
