<template>
  <div id="app">
    <p>{{ message }}</p>
    <app1></app1>
    <app2></app2>
  </div>
</template>

<script>
import { App1, App2 } from './parts'
export default {
  components: { App1, App2 },
  data: function () {
    return {
      message: "Hello Vue!"
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
