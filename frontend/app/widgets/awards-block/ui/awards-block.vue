<script setup lang="ts">
import type { AwardsResponse } from '~/entities/award/model/types';

const { data, error, pending } = await useProjectFetch<AwardsResponse>('/awards');
const awardsList = computed(() => data.value?.data.awards || []);
</script>

<template>
  <section class="awards-block">
    <div class="awards-block__container">
      <!-- Большой заголовок блока -->
      <h2 class="awards-block__main-title">Награды студии</h2>

      <!-- Экраны состояний загрузки -->
      <div v-if="pending" class="awards-block__status">Загрузка наград...</div>
      <div v-else-if="error" class="awards-block__status awards-block__status--error">
        Ошибка при получении наград сервера
      </div>

      <!-- сетка на 3 колонки -->
      <div v-else class="awards-block__grid">
        <AwardCard v-for="item in awardsList" :key="item.id" :award="item" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.awards-block {
  width: 100%;
  padding: 80px 0;
  background-color: var(--white);

  &__container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 var(--base-padding-x);
  }

  &__main-title {
    font-family: $font-title;
    font-size: 48px;
    font-weight: 600;
    text-align: center;
    color: var(--dark);
    margin: 0 0 60px 0;

    @include mobile {
      font-size: 28px;
      margin-bottom: 40px;
    }
    @include tablet {
      font-size: 38px;
    }
  }

  &__status {
    text-align: center;
    font-family: $font-text;
    color: var(--gray-dark);

    &--error {
      color: var(--red);
    }
  }

  &__grid {
    display: grid;
    row-gap: 60px;
    column-gap: 40px;

    @include mobile {
      grid-template-columns: 1fr; // 1 колонка на смартфонах
      row-gap: 40px;
    }

    @include tablet {
      grid-template-columns: repeat(2, 1fr); // 2 колонки на планшетах
    }

    @include desktop {
      grid-template-columns: repeat(3, 1fr); // Идеальные 3 колонки на десктопе, как на картинке
    }
  }
}
</style>
