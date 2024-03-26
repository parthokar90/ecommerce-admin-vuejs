<!-- PostDetails.vue -->
<template>
  <div v-if="post" class="col-md-12 col-12 mb-4">
    <article class="card article-card">
      <div class="card-body px-0 pb-1">
        <h2 class="h1">
          {{ post.title }}
        </h2>
        <ul class="post-meta mb-2">
          <li>
            {{ post.category.name }}
          </li>
        </ul>
        <div class="post-info">
          <span class="text-uppercase">{{ formatDate(post.created_at) }}</span><br>
          <span class="text-uppercase">{{ formatTimeAgo(post.created_at) }}</span>
        </div>
        <p class="card-text">{{ post.content }}</p>
      </div>
    </article>
  </div>

  <div v-if="post" class="col-md-12 col-12 mb-4">
    <article class="card article-card">
      <div class="card-image">
        <img
          loading="lazy"
          decoding="async"
          :src="post.image"
          alt="Post Thumbnail"
          class="w-5"
        />
      </div>
    </article>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  data() {
    return {
      post: null,
    };
  },
  created() {
    this.fetchPostDetails();
  },
  methods: {
    formatDate(timestamp) {
      return moment(timestamp).format("DD MMM YYYY hh:mm A");
    },
    formatTimeAgo(timestamp) {
      return moment(timestamp).fromNow();
    },
    fetchPostDetails() {
      const postId = this.$route.params.id;
      axios
        .get(`http://127.0.0.1:8000/api/post/details/${postId}`)
        .then((response) => {
          this.post = response.data;
        })
        .catch((error) => {
          console.error("Error fetching post details:", error);
        });
    },
  },
};
</script>
