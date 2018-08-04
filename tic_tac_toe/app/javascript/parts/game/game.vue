<template>
  <div class="row">
    <div class="col col-md-3 col-12"></div>
    <div class="col col-md-6 col-12 pb-2">
      <div class="d-flex justify-content-around">
        <button class="btn btn-outline-dark m-2">Play as X</button>
        <button class="btn btn-outline-dark m-2">Play as O</button>
      </div>
      <div class="d-flex justify-content-center">
        <board :board="game.board" v-if="game && game.board" :width="100"></board>
      </div>
    </div>
  </div>
</template>

<script src="./game.js"></script>
<style scoped src="./game.css"></style>
