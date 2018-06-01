import Vue from 'vue'
import Vuex from 'vuex'
import createRailsPlugin from 'plugins/rails'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  plugins: [createRailsPlugin('posts'), createRailsPlugin('categories')]
})