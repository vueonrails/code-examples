<template>
  <div>
    <h1>Edit {{ post.title }}</h1>
    <form @submit.prevent="updatePost()">
      <label for="title">Title</label>
      <input type="text" v-model="post.title" name="title" id="title">
      <label for="body">Body</label>
      <textarea name="body" id="body" v-model="post.body"></textarea>
      <input type="submit" value="Save Post">
    </form>
    <router-link to="/posts">&laquo; Back to Posts</router-link>
  </div>
</template>

<script>
import http from '../http'
export default {
  data: function() {
    return {
      post: {
        id: null,
        title: '',
        body: ''
      }
    }
  },
  mounted: function() {
    this.post.id = this.$route.params.id
    var vm = this
    http.get(`/posts/${this.post.id}.json`)
      .then(function(res) {
        vm.post = res.data
      })
      .catch(function(err) {
        alert(err)
      })
  },
  methods: {
    updatePost: function() {
      var vm = this
      http.put(`/posts/${this.$route.params.id}.json`, { post: this.post })
        .then(function(res) {
          vm.$router.push(`/posts/${vm.post.id}`)
        })
        .catch(function(err) {
          alert(err)
        })
    }
  }
}
</script>