<script setup>
import { FireIcon } from '../icons'
</script>

<template>
  <div class="tw-bg-black/15 tw-flex tw-justify-between tw-px-5 tw-py-4">
    <div class="tw-flex tw-items-center">
      <img src="https://em-content.zobj.net/source/microsoft-teams/363/fire_1f525.png" alt="fire" width="40">
      <h1 class="tw-px-1 tw-text-orange-500 tw-text-xs tw-font-bold">vue hot toast</h1>
    </div>
    <div class="tw-flex tw-items-center">
      <div class="tw-gap-3 tw-flex tw-items-center tw-text-gray-500 tw-text-xs">
        <a href="">twitter</a>
        <a href="https://github.com/SteveYuOWO/vue-hot-toast-ui" target="_blank">github</a>
        <a href="">npm</a>
      </div>
      <div @click="() => $router.push('/contributors')"
        class="tw-bg-gradient-to-r tw-from-orange-500 tw-to-red-500 tw-text-orange-200 tw-border tw-border-orange-700 tw-shadow-lg tw-w-max tw-flex tw-items-center tw-mx-3 tw-py-1 tw-px-2 tw-rounded tw-text-xs tw-cursor-pointer">
        <p class="tw-px-1">maintainers</p>
        <FireIcon class="tw-h-4 tw-w-4" />
      </div>
    </div>
  </div>
</template>