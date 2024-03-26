<template>
  <div id="app">
    <component :is="currentLayout"></component>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import HomeLayout from './components/HomeLayout.vue';
import DashboardLayout from './components/DashboardLayout.vue';

export default {
  setup() {
    const route = useRoute();

    // Define a computed property to determine the current layout based on the route
    const currentLayout = computed(() => {
      // Check the route path to decide which layout to use
      if (route.path === '/') {
        return HomeLayout;
      } else {
        return DashboardLayout;
      }
    });

    return {
      currentLayout
    };
  }
};
</script>
