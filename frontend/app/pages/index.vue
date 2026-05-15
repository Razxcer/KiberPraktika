<template>
  <div class="layout-default">
    <!-- Компонент TheHeader импортируется автоматически благодаря Nuxt -->
    <TheHeader />
    
    <!-- Сюда Nuxt будет автоматически вставлять содержимое ваших страниц из папки pages/ -->
    <div class="layout-default__content">
      <TheHero />
    </div>
  </div>
</template>

<style lang="scss">
.layout-default {
  &__content {
    // Делаем отступ сверху, чтобы контент страниц не залезал под фиксированную шапку
    padding-top: 90px;
    height: 2000px;
  }
}
</style>