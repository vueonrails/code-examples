<template>
  <div>
    <h1>New Post</h1>
    <form @submit.prevent="createPost()">
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
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost: function() {
      var vm = this
      http.post('/posts.json', { post: this.post })
        .then(function(res) {
          vm.$router.push(`/posts/${res.data.id}`)
        })
        .catch(function(err) {
          alert(err)
        })
    }
  }
}
</script>