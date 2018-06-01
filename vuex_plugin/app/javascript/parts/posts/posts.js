import { mapState, mapActions } from 'vuex'

export default {
  data: function() {
    return {
      message: "Hello posts!",
      newPost: {
        title: ''
      }
    }
    ;
  },
  created: function() {
    // supports params
    this.getAll({ page: 2, limit: 10 })
    // actions also return a promise with http response/error if needed
    // .then(res => {
    //   console.log('response from new post => ', res)
    // })
    // .catch(err => {
    //   console.error('error from new post => ', err.response)
    // })
  },
  computed: {
    ...mapState({
      allPosts: state => state.posts.all,
      currentPost: state => state.posts.current,
      error: state => state.posts.error
    })
  },
  methods: {
    // creates local methods that map to the posts module
    ...mapActions('posts', [
      'getAll',
      'get',
      'create',
      'update',
      'destroy'
    ]),
    createPost() {
      this.create(this.newPost)
        .then(res => {
          this.newPost.title = ''
        })
    },
    updatePost(post) {
      this.update(post)
    },
    getPost(id) {
      // also sets current post
      this.get(id)
    },
    destroyPost(post) {
      this.destroy(post)
    }

  }
};
