<template>
  <div id="app">
    <p>{{ message }}</p>
    <button @click="notice2()">Notice</button>
    <flash ref="flash"></flash>
  </div>
</template>

<script src="./anotherFlash.js"></script>
<style scoped src="./anotherFlash.css"></style>
