<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { BeakerIcon, BoltIcon } from './icons'
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
    </nav>
    <p class="tw-bg-gradient-to-r tw-from-yellow-300 tw-to-orange-600 tw-p-3 tw-rounded-xl tw-text-white">Hello</p>
    <BeakerIcon class="tw-h-6 tw-w-6 tw-text-orange-600" />
    <BoltIcon class="tw-h-6 tw-w-6 tw-text-orange-600" />
  </div>
  <HelloWorld msg="Vue-Hot-Toast" />
  <div>
    <RouterView />
  </div>
</template>
