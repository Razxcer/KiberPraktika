<template>
  <div class="about-page">
    <AboutBlock />
    <SeeMoreProjects :title="'Ознакомьтесь с нашими проектами'" class="about-page__see-more" />
  </div>
</template>

<style lang="scss" scoped>
.about-page {
  padding-top: 90px;

  &__see-more {
    margin-top: -40px;
    margin-bottom: 40px;
  }
}
</style>
