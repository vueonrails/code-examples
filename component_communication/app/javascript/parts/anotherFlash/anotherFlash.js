import Flash from 'parts/flash/flash.vue'

export default {
  components: {Flash},
  data: function() {
    return {
      message: "Hello anotherFlash!"
    };
  },
  methods: {
    notice2: function() {
      this.$refs.flash.notice('hi')
    }
  }
};
