export default {
  data: function() {
    return {
      messages: [],
      counter: 0
    }
  },
  mounted() {
    var flashFromServer = document.getElementById('flashData');
    this.notice(flashFromServer.dataset.notice);
    this.error(flashFromServer.dataset.error);
    this.warn(flashFromServer.dataset.error);
  },
  methods: {
    notice(msg) {
      this.toastMsg('notice', msg)
    },
    error(msg) {
      this.toastMsg('error', msg)
    },
    warn(msg) {
      this.toastMsg('warning', msg)
    },
    toastMsg(type, msg) {
      this.counter++
      this.messages.push([type, `${msg} (#${this.counter})`])
      var vm = this
      setTimeout(function() {
        vm.messages.shift()
      }, 3000)
    }
  }
};
