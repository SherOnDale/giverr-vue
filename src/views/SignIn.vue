<template>
  <div id="form_container">
    <SignInForm
      v-bind:user="user"
      :sign-in="signIn"
      :create-user="createUser"
    />
  </div>
</template>

<script>
import SignInForm from '../components/SignInForm'
import API from '../utils/Api'

export default {
  name: 'SignIn',
  data: function() {
    return {
      user: null
    }
  },
  methods: {
    signIn: API.auth.signIn,
    createUser: API.auth.createUser
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
