import Board from '../board/board'
import { mapState, mapActions } from 'vuex'
export default {
  components: { Board },
  props: {
    game_id: Number
  },
  created: function() {
    this.getGame(this.game_id)
    this.getPlayer('any')
  },
  computed: {
    ...mapState('games', {
      game: state => state.current
    }),
    ...mapState('players', {
      currentPlayer: state => state.current
    })
  },
  methods: {
    ...mapActions('games', {
      getGame: 'get'
    }),
    ...mapActions('players', {
      getPlayer: 'get'
    })
  }
};
