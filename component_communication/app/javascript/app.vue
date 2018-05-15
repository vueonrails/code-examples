<template>
  <div id="app">
    <p>{{ message }}</p>
    <button @click="notice()">Notice</button>
    <flash ref="flash"></flash>
  </div>
</template>

<script>
import Flash from 'parts/flash/flash.vue'
export default {
  components: {Flash},
  data: function () {
    return {
      message: "Hello Vue!"
    }
  },
  methods: {
    notice: function() {
      this.$refs.flash.notice('hi')
      // Flash.methods.notice('Hello from Vue')
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
