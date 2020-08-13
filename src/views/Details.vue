<template>
   <div>
     <P>{{ showPosts(id) }}</P>
    <h4>{{ post.title }}</h4>
    <p>{{ post.body }}</p>

    <h3>Comments</h3>

    <li v-for="comment in comments" :key="comment">{{ comment.body }}</li>
    <p>{{ showComments(id) }}</p>

    <b-form @submit.prevent="postComment">
      <b-form-group id="input-group-1" label="Name" label-for="input-1">
        <b-form-input id="input-1" v-model="comment.name" placeholder="enter your name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Comment" label-for="input-2">
        <b-form-textarea id="input-1" v-model="comment.body" placeholder="enter your comment here"></b-form-textarea>
      </b-form-group>
      <input type="submit" class="btn btn-primary" value="postComment"/>
    </b-form>
   </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      id: this.$route.params.id,
      post: {},
      comments: [],
      comment: {
        name: '',
        body: ''
      }
    }
  },

  methods: {
    showPosts (id) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
          this.post = response.data
        })
    },

    showComments (id) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => {
          this.comments = response.data
        })
    },

    postComment () {
      if (this.comment.name && this.comment.body) {
        this.comments.push(this.comment)
        this.comment = {
          name: '',
          body: ''
        }
      }
    },

    created () {
      this.showPosts(this.id)
      this.showComments(this.id)
    }
  }
}
</script>
