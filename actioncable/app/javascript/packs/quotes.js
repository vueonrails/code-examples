import Vue from 'vue'

import App from '../parts/quotes/quotes.vue'

import ActionCable from 'actioncable'
Vue.prototype.$cable = ActionCable.createConsumer('/cable')

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    render: h => h(App)
  }).$mount('hello')
  //console.log(app)
})