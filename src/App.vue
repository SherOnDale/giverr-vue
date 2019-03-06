<template>
  <div id="app">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Sign In' }">Sign In</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
