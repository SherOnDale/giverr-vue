<template>
  <div id="form_container">
    <SignInForm
      v-bind:user="user"
      v-on:signIn="signIn"
      v-on:createUser="createUser"
    />
  </div>
</template>

<script>
import SignInForm from '../components/SignInForm'
import firebase from 'firebase'

export default {
  name: 'SignIn',
  data: function() {
    return {
      user: null
    }
  },
  methods: {
    signIn: function(email, password) {
      alert(`Sign in with email as ${email} and password as ${password}!`)
    },
    createUser: function(email, password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function() {})
    }
  },
  components: {
    SignInForm
  }
}
</script>

<style>
#form_container {
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
