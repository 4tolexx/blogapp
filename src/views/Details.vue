<template>
   <div>
    <h4>{{ post.title }}</h4>
    <p>{{ post.body }}</p>

    <h3>Comments</h3>
    <button @click="showComments" class="btn btn-primary">see comments</button>
    <li v-for="comment in comments" :key="comment">{{ comment.body }}</li>
   </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      post: {},
      comments: []
    }
  },

  created () {
    axios.get('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id)
      .then(response => {
        this.post = response.data
      })
  },

  methods: {
    showComments () {
      axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + this.$route.params.id)
        .then(response => {
          this.comments = response.data
        })
    }
  }
}
</script>
