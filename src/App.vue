<template>
  <div id="app">
    <md-toolbar md-elevation="1">
      <h3 class="md-title" style="flex: 1">Giverr</h3>
      <!-- <router-link :to="{ name: 'Home' }">
        <md-button>Home</md-button>
      </router-link>
      <router-link :to="{ name: 'SignIn' }">
        <md-button class="md-primary">Sign in</md-button>
      </router-link>-->
      <md-button v-show="user" @click="signOut">Sign Out</md-button>
    </md-toolbar>
    <router-view />
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'app',
  data() {
    return {
      user: null
    }
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('/')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
      } else {
        this.user = null
      }
    })
  }
}
</script>
