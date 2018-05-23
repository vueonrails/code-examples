<template>
  <div id="flash">
    <div class="toast" v-for="message in messages" :class="[message[0]]">
      <p>{{ message[1] }}</p>
    </div>
  </div>
</template>

<script src="./flash.js"></script>
<style src="./flash.css"></style>
