import Vue from 'vue'
import App from '../parts/tab_component/tab_component.vue'
import Tabs from 'vue-tabs-component';

Vue.use(Tabs);

document.addEventListener('DOMContentLoaded', () => {
  if(isView('pages#index')){
    document.body.appendChild(document.createElement('hello'))
    const app = new Vue({
      render: h => h(App)
    }).$mount('hello')
    console.log({app})
  }
})
