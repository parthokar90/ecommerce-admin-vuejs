import { defineStore } from 'pinia';
import axios from '@/api/axios'; 

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: JSON.parse(localStorage.getItem('token')) || null,
  }),
  actions: {
    async login({ email, password }) {
      try {

        const response = await axios.post('/login', { email, password });

        if(response.data.original.message!=null){
          alert(response.data.original.message);
          return false;
        }

        else if(response.data.original.status==true){
          const user = response.data.original.user;
          this.user = user;
          const token = response.data.original.token;
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', JSON.stringify(token));
          return true;
        }else{
          return false;
        }
      } catch (error) {
        console.error('Login failed:', error);
        throw error; 
      }
    },

    async register({name, email, password }) {
      try {

        const response = await axios.post('/register', { name, email, password });

         if(response.data.original.status==true){
          const user = response.data.original.user;
          this.user = user;
          const token = response.data.original.token;
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', JSON.stringify(token));
          return true;
        }else{
          return false;
        }
      } catch (error) {
        console.error('Register failed:', error);
        throw error; 
      }
    },

    isAuthenticated() {
      return this.user !== null;
    },

    logout() {
      this.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }
});
