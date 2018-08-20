import Vue from 'vue'
import App from '../parts/table/table.vue'

document.addEventListener('DOMContentLoaded', () => {
  if(isView('pages#second')){
    document.body.appendChild(document.createElement('hello'))
    const app = new Vue({
      render: h => h(App)
    }).$mount('hello')
    console.log({app})
  }
})