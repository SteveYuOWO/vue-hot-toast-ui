<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <div class="tw-text-white">
    <nav>
      <RouterLink to="/" class="tw-pr-5">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
    </nav>
  </div>
  <div>
    <RouterView />
  </div>
</template>
