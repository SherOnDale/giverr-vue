<template>
  <div class="centered-container">
    <md-card class="md-elevation-3">
      <div class="title">
        <div class="md-title">Giverr</div>
        <div class="md-body-1">For those in need</div>
      </div>

      <ul id="signInErrors" v-if="errors.length" key="sign-in-errors">
        <li class="errorMessage" v-for="error in errors" :key="error.id">
          {{ error }}
        </li>
      </ul>

      <div class="form">
        <md-field>
          <label>E-mail</label>
          <md-input
            type="email"
            name="email"
            v-model="email"
            placeholder="Email"
            autofocus
          ></md-input>
        </md-field>

        <md-field md-has-password>
          <label>Password</label>
          <md-input
            name="password"
            v-model="password"
            placeholder="Password"
            type="password"
          ></md-input>
        </md-field>
      </div>

      <div class="actions md-layout md-alignment-center-space-between">
        <md-button class="md-raised md-primary" @click="login"
          >Log in</md-button
        >
        <md-button class="md-raised md-primary" @click="register"
          >Create Account</md-button
        >
      </div>

      <div class="loading-overlay" v-if="loading">
        <md-progress-spinner
          md-mode="indeterminate"
          :md-stroke="2"
        ></md-progress-spinner>
      </div>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'SignInForm',
  props: ['user', 'sign-in', 'create-user', 'errors', 'loading'],
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function() {
      this.signIn(this.email, this.password)
    },
    register: function() {
      this.createUser(this.email, this.password)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
  .title {
    text-align: center;
    margin-bottom: 30px;
    img {
      margin-bottom: 16px;
      max-width: 80px;
    }
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
  .form {
    margin-bottom: 60px;
  }
  .md-card {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #signInErrors {
    list-style: none;
    padding: 0;
  }

  .errorMessage {
    color: #e54304;
  }
}
</style>
