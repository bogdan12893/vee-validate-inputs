<script setup></script>

<template lang="pug">
.menu
  NuxtLink(to="/") Home
  NuxtLink(to="/simple-form") Simple Form
</template>

<style lang="scss" scoped>
.menu {
  @apply flex flex-col items-center gap-3 py-4 col-span-2 bg-white border-r border-gray-500 drop-shadow-lg;

  .router-link-exact-active {
    @apply underline;
  }
}
</style>
