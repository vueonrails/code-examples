import { mapActions, mapState } from 'vuex'
export default {
  data: function() {
    return {
      // references to X svg items
      xSvgIds: [
        '#b1J3J3u53u', '#d5dGefT03', '#b4rCcqG9M2',
        '#edMUL8MKj', '#b3iRLvZeTI', '#bM5pWK78k',
        '#aalyDEzGM', '#aHsYD8uiN', '#bx9FJFzLH'
      ],
      oSvgIds: [
        ['#c3tmsvTYqT', '#clipc2D22cRKl3'], ['#d6mu4XE1Zq', '#clipa48872oHrx'], ['#cdxBmq8ac', '#clipb1Tvlzf7yq'],
        ['#c2fgghO5XC', '#clipg1RvfJwhpp'], ['#a3cg5A5jh9', '#clipamYr6lmI3'], ['#a4uHcLt7ce', '#clipe3GpCmJHG'],
        ['#b2SCXRPcte', '#clipa3z8ozGwq'], ['#a1MaLXdBcm', '#clipe2Tq8zIpX'], ['#b2y1GcQSH', '#clipiyb4Spavu']
      ],
      squareSvgIds: [
        ['#b3hl5rxiHZ', '#clipd1VooHJll'], ['#auJWqndPM', '#clipbbgk1P0iK'], ['#a5mW0goT0Y', '#clipc1lbZECt9p'],
        ['#dxVYDPwWP', '#clipk2FrGyPi37'], ['#a2d0zZA1ip', '#clipa1qdRN1LdS'], ['#m1Mo5dggkS', '#cliparCraKUqz'],
        ['#d6GpnPETO', '#clipk2i98muDrJ'], ['#c2YjO4nvhp', '#clipaaBRuaTWE'], ['#f2lQx2Xy77', '#cliph1LChlITv']
      ],
      currentPosition: null
    }
  },
  props: {
    game: Object,
    width: Number,
    myPiece: String
  },
  computed: {
    ...mapState('games_players', {
      error: state => state.error.errors ? state.error.errors : state.error
    })
  },
  methods: {
    ...mapActions('games', {
      getGame: 'get'
    }),
    ...mapActions('games_players', {
      updateGamesPlayer: 'update'
    }),
    play(position) {
      const vm = this
      if (this.game.board[position] != '') { return }
      const gp = this.game.games_players.find(gPlayer => gPlayer.piece === this.myPiece)
      this.updateGamesPlayer({id: gp.id, game_id: this.game.id, position: position})
        .then(res => {
          // this.getGame(vm.game.id)
        })
        .catch(err => {
          console.error(err)
          alert(vm.error ? vm.error.board : 'Something Went Wrong')
        })
    }
  }
};
