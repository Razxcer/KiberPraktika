<template>
  <div class="about">
    <div class="about__title">Делаем интернет лучше. Проект за проектом</div>
    <AboutBanner />
    <AboutTeam />
    <AboutStages />
    <AboutClients />
  </div>
</template>

<style lang="scss" scoped>
.about {
  width: 100%;

  &__title {
    font-size: 48px;
    font-family: $font-title;
    font-weight: 600;
    padding-bottom: 50px;
    margin: 0 auto;
    width: 70%;
    text-align: center;

    @include mobile {
      font-size: 30px;
      padding-bottom: 0px;
      width: 90%;
    }
  }
}
</style>
