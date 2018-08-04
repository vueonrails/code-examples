/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue/dist/vue.esm'
import Games from '../parts/games/games.vue'
import Game from '../parts/game/game.vue'
import TurbolinksAdapter from 'vue-turbolinks'
import store from '../store'
Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  new Vue(Games).$mount('#games')
  new Vue({store, el: '#game', components: { Game }})
})
