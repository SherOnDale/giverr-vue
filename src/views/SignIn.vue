<template>
  <div id="form_container">
    <SignInForm
      v-bind:user="user"
      :sign-in="signIn"
      :create-user="createUser"
      :errors="errors"
      :loading="loading"
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
      user: null,
      errors: [],
      loading: false
    }
  },
  methods: {
    signIn: async function(email, password) {
      try {
        this.loading = true
        this.errors = []

        const loginResult = await API.auth.signIn(email, password)

        this.loading = false
        this.$router.push('Home')

        return loginResult
      } catch (e) {
        this.loading = false
        this.errors.push(e)
      }
    },
    createUser: async function(email, password) {
      try {
        this.loading = true
        this.errors = []

        const registrationResult = await API.auth.createUser(email, password)

        this.loading = false

        return registrationResult
      } catch (e) {
        this.loading = false
        this.errors.push(e)
      }
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
