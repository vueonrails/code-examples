<template>
  <div id="app">
    <p>{{ message }}</p>
    <button @click="notice()">Notice</button>
  </div>
</template>

<script>
import Flash from 'parts/flash/flash.vue'
export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  },
  methods: {
    notice: function() {
      Flash.methods.notice('Hello from Vue')
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
