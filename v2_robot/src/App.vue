<template>
  <div>
      <label>Please ask a yes or no question. 
        For example: Is the sky blue? </label>
      <input v-model="question">
      <button>Search</button>
      <p>{{ answer }}</p>
  </div>
</template>

<script>  
  // import _ from 'lodash'
  import axios from 'axios'

  export default {
  data: function () {
    return {
      question: "", 
      answer: ""
    }
  },
  watch: {
    question: function () {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
     }
  },
  methods: {
    // getAnswer: _.debounce(
    //   function () {
    //     if (this.question.indexOf('?') === -1) {
    //       this.answer = 'Questions usually contain a question mark. :)'
    //       return
    //     }
    //     this.answer = 'Thinking...'
    //     var vm = this
    //     axios.get('https://yesno.wtf/api')
    //       .then(function (response) {
    //         vm.answer = _.capitalize(response.data.answer)
    //       })
    //       .catch(function (error) {
    //         vm.answer = 'Error! Could not reach the API. ' + error
    //       })
    //   },
    //   500
    // )

    getAnswer: function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. :)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = response.data.answer
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      }
  }
  }


</script>

