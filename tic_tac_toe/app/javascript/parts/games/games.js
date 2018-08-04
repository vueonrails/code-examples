import { mapState, mapActions } from 'vuex'
import store from '../../store'
import Board from '../board/board.vue'
export default {
  store,
  components: { Board },
  created() {
    this.getGames()
  },
  computed: {
    ...mapState('games', {
      games: state => state.all
    })
  },
  methods: {
    ...mapActions('games', {
      getGames: 'getAll',
      createGame: 'create'
    }),
    newGame() {
      this.createGame()
        .then(res => {
          Turbolinks.visit(`/games/${res.data.id}`)
        })
        .catch(err => { console.error(err) })
    },
    visit(game) {
      Turbolinks.visit(`/games/${game.id}`)
    }
  }
}