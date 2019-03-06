<template>
  <div>
    <h1>This is the {{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      message: 'home page'
    }
  }
}
</script>

<style scoped lang="scss"></style>
