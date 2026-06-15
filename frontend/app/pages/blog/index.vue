<script setup lang="ts"></script>

<template>
  <div class="page">
    <PostsSlider class="page__widget" />
    <BlogBlock class="page__widget" />
  </div>
</template>
<style lang="scss" scoped>
.page {
  padding-top: 90px;

  &__widget {
    margin: 40px 0;
  }
}
</style>
