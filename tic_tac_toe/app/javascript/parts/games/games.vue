<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Board</th>
        <th scope="col">Status</th>
        <th scope="col">Players</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="game in games">
        <td scope="row"><board :board="game.board" :width="50"></board></td>
        <td>{{ game.status }}</td>
        <td>X - {{ game.x ? game.x.name : '' }} / O - {{ game.o ? game.o.name : '' }}</td>
        <td><button class="btn btn-outline-dark" @click="visit(game)">Play</button></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td scope="row"><button class="btn btn-outline-dark" @click="newGame()">New Game</button></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tfoot>
  </table>
</template>
<script src="./games.js"></script>
<style src="./games.css"></style>