import Vue from 'vue'
import store from '../store'
import App from '../parts/posts/posts.vue'


document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    store,
    render: h => h(App)
  }).$mount('hello')
  //console.log(app)
})