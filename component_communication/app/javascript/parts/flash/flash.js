export default {
  data: function() {
    return {
      messages: []
    }
  },
  mounted() {
    // const notice = $('#flashData').data('notice')
    this.toastMsg('notice', 'Hey')
  },
  methods: {
    notice(msg) {
      this.toastMsg('notice', msg)
    },
    toastMsg(type, msg) {
      this.messages.push([type, msg])
      var vm = this
      setTimeout(function() {
        vm.messages.shift()
      }, 3000)
    }
  }
};
