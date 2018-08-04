<template>
  <div class="row" v-if="game">
    <div class="col col-md-3 col-12">
      <div class="alert" :class="{'alert-success': game.winner.id == currentPlayer.id, 'alert-danger': game.winner.id != currentPlayer.id}" v-if="game.winner">{{ game.winner.id == currentPlayer.id ? 'You Win' : 'You Lose' }}</div>
    </div>
    <div class="col col-md-6 col-12 pb-2">
      <div class="d-flex justify-content-around">
        <button class="btn btn-outline-dark m-2" @click="join('X')" :disabled="isPlayingThisGame() || game.status != 'waiting'">{{ game.x ? (playingAs('X') ? 'You are' : game.x.name + ' is') + ' Playing' : 'Play'}} as X</button>
        <button class="btn btn-outline-dark m-2" @click="join('O')" :disabled="isPlayingThisGame() || game.status != 'waiting'">{{ game.o ? (playingAs('O') ? 'You are' : game.o.name + ' is') + ' Playing' : 'Play'}} as O</button>
      </div>
      <div class="d-flex justify-content-center">
        <!-- 100 for 100% width -->
        <board :game="game" :width="100" :myPiece="myPiece()"></board>
      </div>
    </div>
  </div>
</template>

<script src="./game.js"></script>
<style scoped src="./game.css"></style>
