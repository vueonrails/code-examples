<template>
  <table class="table table-responsive">
    <thead>
      <tr>
        <th scope="col">Board</th>
        <th>Status</th>
        <th>Players</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <template v-for="game in games">
        <game-row :game="game"></game-row>
      </template>
      <tr>
        <td colspan="2"><button class="btn btn-outline-dark" @click="loadMore()" :disabled="!anyMore">{{ anyMore ? 'Load More' : '...No More'}}</button></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2"><button class="btn btn-outline-dark" @click="newGame()">New Game</button></td>
        <td></td>
        <td></td>
      </tr>
    </tfoot>
  </table>
</template>
<script src="./games.js"></script>
<style src="./games.css"></style>