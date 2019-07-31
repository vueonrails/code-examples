<template>
  <div id="app">
    <p>{{ message }}</p>
    <button @click="notice()">Notice</button>
    <button @click="success()">Success</button>
    <button @click="warn()">Warn</button>
    <button @click="error()">Error</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  },
  methods: {
    notice: function() {
      flashVM.notice('Hello from Vue')
    },
    success: function() {
      flashVM.success('Success from Vue')
    },
    warn: function() {
      flashVM.warn('Warn from Vue')
    },
    error: function() {
      flashVM.error('Error from Vue')
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
