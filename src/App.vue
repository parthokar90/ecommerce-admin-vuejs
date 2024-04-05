<template>
  <div id="app">
    <component :is="currentLayout"></component>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import HomeLayout from './components/layout/HomeLayout.vue';
import DashboardLayout from './components/layout/DashboardLayout.vue';

export default {
  setup() {
    const route = useRoute();

    const currentLayout = computed(() => {
      // Check the route path to decide which layout to use
      if (route.path.startsWith('/dashboard')) {
        return DashboardLayout;
      } else {
        return HomeLayout;
      }
    });

    return {
      currentLayout
    };
  }
};
</script>
