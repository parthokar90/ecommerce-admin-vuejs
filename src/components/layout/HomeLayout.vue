<template>
   <main id="main" class="main">
    <Header />
     <RouterView />
    <Footer />
  </main>
</template>


<script>
import Header from '../include/frontend/Header.vue';
import Footer from '../include/frontend/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
