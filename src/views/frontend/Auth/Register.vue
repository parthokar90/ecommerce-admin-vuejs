<template>
  <div class="container">
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <form @submit.prevent="register">
     <div class="form-group">
        <label>Name</label>
        <input type="text" v-model="name" class="form-control" />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" v-model="email" class="form-control" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="password" class="form-control" />
      </div>
      <button type="submit" class="btn btn-success">Register</button>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async register() {
      try {
        const response = await useAuthStore().register({
          name: this.name,
          email: this.email,
          password: this.password,
        });
        if(response==true){
            this.$router.push('/dashboard');
        }
      } catch (error) {
          if (error.response) {
          // Server error
          if (error.response.data.original && error.response.data.original.error) {
            this.errorMessage = error.response.data.original.error;
          } else {
            this.errorMessage = error.response.data.message || "An error occurred. Please try again.";
          }
        }
         else if (error.request) {
          // No response received
          this.errorMessage =
            "No response from server. Please try again later.";
        } else {
          this.errorMessage = "An error occurred. Please try again.";
        }
      }
    },
  },
};
</script>
