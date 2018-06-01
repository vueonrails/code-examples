<template>
  <div id="app">
    <p v-if="currentPost">{{ currentPost.id }} - {{ currentPost.title }}</p>
    <ul>
      <li v-for="post in allPosts" :track-by="post.id">
        <input type="text" v-model="post.title" v-if="currentPost && currentPost.id === post.id" @keyup.enter="updatePost(post)"/>
        <span v-else>
          {{ post.title }} |
          <a href="#!" @click.prevent="getPost(post.id)">Edit</a>
        </span>
        | <a href="#!" @click.prevent="destroyPost(post)">Delete</a>
      </li>
      <li><input type="text" v-model="newPost.title" @keyup.enter="createPost()" placeholder="...Type and hit enter"/></li>
      <li style="color:red;" v-if="error">{{ error }}</li>
    </ul>
  </div>
</template>

<script src="./posts.js"></script>
<style scoped src="./posts.css"></style>
