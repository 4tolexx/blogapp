<template>
   <div class="container">
     <P>{{ showPosts(id) }}</P>
    <h4>{{ post.title }}</h4>
    <p>{{ post.body }}</p>

    <h3>Comments</h3>

    <ul class="list group">
    <li class="list-group-item" v-for="(comment, index) in comments" :key="index">{{ comment.body }}</li>
    <p>{{ showComments(id) }}</p>
    </ul>

    <h3> Add a Comment </h3>
  <form class="form-horizontal" @submit.prevent="postComment">
    <div class="form-group">
      <label for="Name" class="col-sm-2 control-label">Name</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="name" placeholder="Name" v-model="comment.name">
      </div>
    </div>
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email" placeholder="Email" v-model="comment.email">
    </div>
  </div>
    <div class="form-group">
      <label for="comment" class="col-sm-2 control-label">comment</label>
      <div class="col-sm-10">
        <textarea class="form-control" id="body" placeholder="enter comment" rows="10" v-model="comment.body"></textarea>
      </div>
    </div>
      <div class="col-sm-offset-2 col-sm-10">
        <input type="submit" class="btn btn-primary" value="post comment"/>
      </div>
  </form>
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
        body: '',
        email: ''
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
      if (this.comment.name && this.comment.body && this.comment.email) {
        this.comments.push(this.comment)
        this.comment = {
          name: '',
          body: '',
          email: ''
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
