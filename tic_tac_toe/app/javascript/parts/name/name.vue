<template>
  <form class="form-inline mt-2 mt-md-0" @submit.prevent="save()">
    <input class="form-control mr-sm-2" type="text" placeholder="My Name..." v-model="name">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Save</button>
  </form>
</template>

<script src="./name.js"></script>
<style scoped src="./name.css"></style>
