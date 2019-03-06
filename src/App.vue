<template>
  <div id="app">
    <md-toolbar md-elevation="1">
      <h3 class="md-title" style="flex: 1">Giverr</h3>
      <router-link :to="{ name: 'Home' }">
        <md-button>Home</md-button>
      </router-link>
      <router-link :to="{ name: 'Sign In' }">
        <md-button class="md-primary">Sign in</md-button>
      </router-link>
    </md-toolbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
