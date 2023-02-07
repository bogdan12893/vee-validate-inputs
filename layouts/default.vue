<script setup></script>

<template lang="pug">
.default-layout
  LayoutSideMenu
  .page-content
    slot
</template>

<style lang="scss" scoped>
.default-layout {
  @apply grid grid-cols-12 gap-4 min-h-screen;

  .page-content {
    @apply col-start-3 col-span-10;
  }
}
</style>
