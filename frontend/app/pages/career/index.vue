<script setup lang="ts"></script>

<template>
  <div class="career-page">
    <CareerJob />
    <CarrerConditions />
    <CareerVacancies />
    <CareerBanner />
    <CareerMap />
    <CareerGallery class="career-page__widget" />
  </div>
</template>

<style lang="scss" scoped>
.career-page {
  padding-top: 90px;

  &__widget {
    margin: 40px 0;
  }
}
</style>
