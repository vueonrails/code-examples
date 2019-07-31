/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
import App from '../app.vue'
import Flash from '../parts/flash/flash.vue'

var flashVM, appVM

document.addEventListener('DOMContentLoaded', () => {
  flashVM = new Vue(Flash)
  flashVM.$mount('#flash')
  // makes the instance globally available
  window.flashVM = flashVM

  appVM = new Vue({
    el: '#app',
    render: h => h(App)
  })
  console.log(appVM)
})
