<template>
    <div class="container">
       <h3>Blog posts</h3>
       <ul class="list-group">
        <li class="list-group-item" v-for="post of posts" :key="post">
          <h5>{{ post.title }}</h5>
          <router-link :to="'/details/' + post.id" class="btn btn-primary">read more</router-link>
       </li>
       </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      posts: []
    }
  },

  created () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.posts = response.data
      })
  }
}
</script>
