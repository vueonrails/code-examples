import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
Vue.use(Vuex)
import VuexRailsPlugin from 'vuex-rails-plugin/src/VuexRailsPlugin'

export default new Vuex.Store({
  plugins: [
    VuexRailsPlugin('games'),
    VuexRailsPlugin('games_players'),
    VuexRailsPlugin('players')
  ]
})