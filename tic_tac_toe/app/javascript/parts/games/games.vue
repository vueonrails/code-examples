<template>
  <table>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Board</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="game in games"></tr>
    </tbody>
  </table>
</template>
<script src="./games.js"></script>
<style src="./games.css"></style>