<script setup lang="ts"></script>

<template>
  <div class="news-page">
    <PostsSlider class="news-page__widget" />
    <NewsBlock class="news-page__widget" />
  </div>
</template>

<style lang="scss" scoped>
.news-page {
  padding-top: 90px;

  &__widget {
    margin: 40px 0;
  }
}
</style>
