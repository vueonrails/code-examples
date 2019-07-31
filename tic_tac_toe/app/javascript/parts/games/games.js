import { mapActions } from 'vuex'
import store from '../../store'
import GameRow from './game-row'
export default {
  store,
  components: { GameRow },
  data: function() {
    return {
      page: 1,
      limit: 10,
      anyMore: true
    }
  },
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
    loadMore() {
      const currentCount = this.games.length
      this.limit += 10
      const vm = this
      this.getGames({page: this.page, limit: this.limit})
        .then(res => {
          const newCount = this.games.length
          if (newCount === currentCount) {
            vm.anyMore = false
          }
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}