<template>
  <div id="flash">
    <div class="toast" v-for="message in messages">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script src="./flash.js"></script>
<style scoped src="./flash.css"></style>
