<template>
  <div class="row" v-if="game">
    <div class="col col-12 pb-2">
      <div class="d-flex justify-content-around">
        <button
          class="btn btn-outline-dark m-2"
          @click="join('X')"
          :disabled="isPlayingThisGame() || game.status != 'waiting'">
          {{ game.x ? (playingAs('X') ? 'You are' : game.x.name + ' is') + ' Playing' : 'Play'}} as X
        </button>
        <div class="alert alert-info" v-if="game.status === 'tied'">Tied Game</div>
        <div
          class="alert"
          :class="{'alert-success': game.winner.id == currentPlayer.id,
                   'alert-danger': game.winner.id != currentPlayer.id}"
          v-if="game.winner && isPlayingThisGame()">
          {{ game.winner.id == currentPlayer.id ? 'You Win' : 'You Lose' }}
        </div>
        <button
          class="btn btn-outline-dark m-2"
          @click="join('O')"
          :disabled="isPlayingThisGame() || game.status != 'waiting'">
          {{ game.o ? (playingAs('O') ? 'You are' : game.o.name + ' is') + ' Playing' : 'Play'}} as O
        </button>
      </div>
      <div class="d-flex justify-content-center">
        <board :game="game" :width="400" :myPiece="myPiece()"></board>
      </div>
    </div>
  </div>
</template>

<script src="./game.js"></script>
<style scoped src="./game.css"></style>
