export default {
  data: function() {
    return {
      message: "Hello quotes!",
      quoteSubscription: null
    };
  },
  created: function() {
    this.subscribeToQuotes()
  },
  methods: {
    subscribeToQuotes: function() {
      var vm = this
      this.quoteSubscription = this.$cable.subscriptions.create(
        {
          channel: 'QuotesChannel'
        },
        {
          received: function (data) {
            console.debug(`msg rcvd => `, data)
            vm.message = data.message
          }
        }
      );
    }
  },
  destroyed: function() {

  }
};
