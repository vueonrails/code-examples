<template>
  <ul>
    <li v-for="post in posts">
      {{ post.title }}
      <router-link :to="{ name: 'post', params: { id: post.id }}">Read More</router-link>
      | <router-link :to="{ name: 'edit_post', params: { id: post.id }}">Edit</router-link>
      | <a href="#!" @click.prevent="deletePost(post)">Delete</a>
    </li>
    <li>
      <router-link to="/posts/new">New Post</router-link>
    </li>
  </ul>
</template>

<script>
import http from '../http'
export default {
  data: function() {
    return {
      posts: []
    }
  },
  mounted: function() {
    var vm = this
    http.get('/posts.json')
      .then(function(res) {
        vm.posts = res.data
      })
      .catch(function(err) {
        console.error(err)
      })
  },
  methods: {
    deletePost: function (post) {
      if (confirm(`Are you sure you want to delete ${post.title}?`)) {
        var vm = this
        http.delete(`/posts/${post.id}.json`)
          .then(function (res) {
            vm.posts.splice(vm.posts.indexOf(post), 1)
          })
          .catch(function (err) {
            alert(err)
          })
      }
    }
  }
}
</script>