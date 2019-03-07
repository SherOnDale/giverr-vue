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
import { firebaseConfig } from '../firebaseConfig'

Vue.use(MdCard)
Vue.use(MdField)
Vue.use(MdButton)
Vue.use(MdToolbar)
Vue.use(MdProgress)

let app

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
