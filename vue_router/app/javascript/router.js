import VueRouter from 'vue-router'
import Posts from 'posts/Posts'
import Post from 'posts/Post'
import NewPost from 'posts/NewPost'
import EditPost from 'posts/EditPost'

const routes = [
  { path: '/posts', component: Posts },
  { path: '/posts/new', component: NewPost },
  { path: '/posts/:id', component: Post, name: 'post' },
  { path: '/posts/:id/edit', component: EditPost, name: 'edit_post' }
]

const router = new VueRouter({
  routes
})

export default router