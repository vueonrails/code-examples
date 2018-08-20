import Vue from 'vue/dist/vue.esm'
import App from '../parts/tab_component/tab_component.vue'
import Tabs from 'vue-tabs-component';
import TurbolinksAdapter from 'vue-turbolinks'
Vue.use(Tabs);
Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  if(isView('pages#index')){
    document.body.appendChild(document.createElement('hello'))
    const app = new Vue({
      render: h => h(App)
    }).$mount('hello')
    console.log({app})
  }
})
