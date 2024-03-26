<template>
   <main id="main" class="main">
    <div class="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
    <Header />
     <Sidebar />
     <RouterView />
    <Footer />
  </main>
</template>

<style>
@import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
@import "../assets/css/style.css";
</style>

<script>
import Header from './include/Header.vue';
import Sidebar from './include/Sidebar.vue';
import Footer from './include/Footer.vue';

export default {
  components: {
    Header,
    Sidebar,
    Footer,
  },
};
</script>
