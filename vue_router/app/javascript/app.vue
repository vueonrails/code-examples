<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  },
  created: function () {
    this.$router.push('/posts')
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
