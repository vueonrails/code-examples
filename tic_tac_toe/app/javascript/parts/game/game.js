import Board from '../board/board'
import { mapState, mapActions } from 'vuex'
export default {
  data: function() {
    return {
      channel: null
    }
  },
  components: { Board },
  props: {
    game_id: Number
  },
  created: function() {
    this.getGame(this.game_id)
    this.getPlayer('any')
    const vm = this
    this.channel = this.$cable.subscriptions.create({channel: 'GameChannel', game_id: this.game_id}, {
      received: function(data) {
        console.debug('data maessage from game channel => ', data)
        const item = JSON.parse(data)
        vm.$store.commit('games/UPDATE', { item })
      }
    })
  },
  computed: {
    ...mapState('games', {
      game: state => state.current
    }),
    ...mapState('players', {
      currentPlayer: state => state.current
    }),
    ...mapState('games_players', {
      error: state => state.error
    })
  },
  methods: {
    ...mapActions('games', {
      getGame: 'get'
    }),
    ...mapActions('players', {
      getPlayer: 'get'
    }),
    ...mapActions('games_players', {
      createGamesPlayer: 'create'
    }),
    join(piece) {
      const vm = this
      this.createGamesPlayer({game_id: this.game_id, piece: piece})
        .then(res => {
          vm.getGame(vm.game_id)
        })
        .catch(err => {
          alert(vm.error.errors)
        })
    },
    playingAs(piece) {
      const pieceLower = piece.toLowerCase()
      return this.game[pieceLower] && this.game[pieceLower].id === this.currentPlayer.id
    },
    isPlayingThisGame() {
      return this.playingAs('X') || this.playingAs('O')
    },
    myPiece() {
      return this.playingAs('X') ? 'X' : (this.playingAs('O') ? 'O' : null)
    }
  },
  destroyed() {
    this.$cable.subscriptions.remove(this.channel)
  }
};
