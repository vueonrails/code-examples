import Vue from 'vue'
import App from '../parts/anotherFlash/anotherFlash.vue'


document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app2'))
  const app = new Vue({
    render: h => h(App)
  }).$mount('app2')
  //console.log(app)
})