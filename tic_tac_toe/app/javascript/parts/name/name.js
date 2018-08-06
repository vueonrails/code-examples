import store from '../../store'
import { mapState, mapActions } from 'vuex'
export default {
  store,
  data: function() {
    return {
      name: null
    }
  },
  created() {
    const vm = this
    this.get('any')
      .then(res => {
        vm.name = vm.current.name
      })
      .catch(err => {
        console.error(err)
      })
  },
  computed: {
    ...mapState('players', {
      current: state => state.current,
      error: state => state.error
    })
  },
  methods: {
    ...mapActions('players', ['update', 'get']),
    save() {
      const vm = this
      const playerId = this.current.id
      this.update({id: playerId, name: this.name})
        .then(res => {
          vm.get(playerId)
        })
        .catch(err => {
          console.error(vm.error)
        })
    }
  }
};
