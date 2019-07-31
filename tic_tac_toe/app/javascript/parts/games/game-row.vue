<template>
  <tr>
    <td scope="row"><board :game="game" :width="38" :myPiece="null"></board></td>
    <td>{{ game.status }}</td>
    <td>X: {{ game.x ? game.x.name : '' }}, O: {{ game.o ? game.o.name : '' }}</td>
    <td><button class="btn btn-outline-dark" @click="visit(game)">Go to Board</button></td>
  </tr>
</template>

<script>
import Board from '../board/board.vue'
export default {
  components: { Board },
  data: function() {
    return {
      channel: null
    }
  },
  props: {
    game: Object
  },
  created: function() {
    const vm = this
    this.channel = this.$cable.subscriptions.create({channel: 'GameChannel', game_id: this.game.id}, {
      received: function(data) {
        console.debug('data maessage from game channel => ', data)
        const item = JSON.parse(data)
        vm.$store.commit('games/UPDATE', { item })
      }
    })
  },
  methods: {
    visit(game) {
      Turbolinks.visit(`/games/${game.id}`)
    }
  },
  destroyed: function() {
    this.$cable.subscriptions.remove(this.channel)
  }
}
</script>