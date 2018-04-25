var XComponent = Vue.component('x-component', {
  template: '#x-component',
  data: function() {
    return {
      message: 'Hello x-template!'
    }
  }
});

document.addEventListener('turbolinks:load', () => {
  var app = new Vue({
    el: '#app',
    components: { XComponent }
  });
});
