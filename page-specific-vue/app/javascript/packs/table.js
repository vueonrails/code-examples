import Vue from 'vue'
import App from '../parts/table/table.vue'
// import VueGoodTablePlugin from 'vue-good-table';
// import 'vue-good-table/dist/vue-good-table.css'

// Vue.use(VueGoodTablePlugin);

document.addEventListener('DOMContentLoaded', () => {
  if(isView('pages#second')){
    document.body.appendChild(document.createElement('hello'))
    const app = new Vue({
      render: h => h(App)
    }).$mount('hello')
    console.log({app})
  }
})