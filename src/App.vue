<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { BeakerIcon, BoltIcon } from './icons'
</script>

<template>
  <div>
    <p class="tw-bg-gradient-to-r tw-from-yellow-300 tw-to-orange-600 tw-p-3 tw-rounded-xl tw-text-white">Hello</p>
    <BeakerIcon class="tw-h-6 tw-w-6 tw-text-orange-600" />
    <BoltIcon class="tw-h-6 tw-w-6 tw-text-orange-600" />
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
  </div>
  <HelloWorld msg="Vue-Hot-Toast" />
</template>
