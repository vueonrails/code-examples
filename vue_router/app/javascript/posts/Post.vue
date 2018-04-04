<template>
  <article>
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <router-link to="/posts">&laquo; Back to Posts</router-link>
  </article>
</template>

<script>
import http from '../http'
export default {
  data: function() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  mounted: function() {
    var vm = this
    http.get(`/posts/${this.$route.params.id}.json`)
      .then(function(res) {
        vm.post = res.data
      })
      .catch(function(err) {
        alert(err)
      })
  }
}
</script>