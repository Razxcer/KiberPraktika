<script setup lang="ts">
import { Navigation, Pagination } from 'swiper/modules';
import type { ReviewsResponse } from '~/entities/review/model/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Navigation, Pagination];

// Кастомные ссылки для навигации Swiper
const nextButtonRef = ref<HTMLElement | null>(null);
const prevButtonRef = ref<HTMLElement | null>(null);

// Запрашиваем данные отзывов с бэкенда
const { data, pending, error } = await useProjectFetch<ReviewsResponse>('/reviews');
const reviews = computed(() => data.value?.data.items || []);
</script>

<template>
  <section id="reviews" class="reviews-slider">
    <div class="reviews-slider__container">
      <h2 class="reviews-slider__main-title">Нам доверяют</h2>

      <div v-if="pending" class="reviews-slider__status">Загрузка отзывов...</div>
      <div v-else-if="error" class="reviews-slider__status">Не удалось загрузить отзывы</div>

      <div v-else class="reviews-slider__wrapper">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="24"
          :loop="false"
          :navigation="{
            prevEl: prevButtonRef,
            nextEl: nextButtonRef,
          }"
          :pagination="{
            el: '.reviews-slider__dots',
            clickable: true,
          }"
          :breakpoints="{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }"
          class="reviews-slider__swiper"
        >
          <SwiperSlide v-for="item in reviews" :key="item.id">
            <ReviewCard :review="item" />
          </SwiperSlide>
        </Swiper>

        <!-- БЛОК НАВИГАЦИИ (Стрелки + Точки снизу по центру) -->
        <div class="reviews-slider__controls">
          <button
            ref="prevButtonRef"
            class="reviews-slider__arrow reviews-slider__arrow--prev"
            aria-label="Назад"
          >
            ‹
          </button>

          <!-- Контейнер для точек пагинации Swiper -->
          <div class="reviews-slider__dots"></div>

          <button
            ref="nextButtonRef"
            class="reviews-slider__arrow reviews-slider__arrow--next"
            aria-label="Вперед"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.reviews-slider {
  width: 100%;
  padding: 80px 0;
  background-color: var(--white);

  &__container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 var(--base-padding-x);

    @include tablet {
      padding: 0 calc(var(--base-padding-x) / 2);
    }
    @include mobile {
      padding: 0 calc(var(--base-padding-x) / 4);
    }
  }

  &__main-title {
    font-family: $font-title;
    font-size: 48px;
    font-weight: 600;
    text-align: center;
    color: var(--dark);
    margin: 0 0 48px 0;

    @include mobile {
      font-size: 24px;
      margin-bottom: 24px;
    }
  }

  &__swiper {
    padding-bottom: 20px;
  }

  &__controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 40px;
  }

  &__arrow {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    background-color: var(--gray-light);
    color: var(--dark);
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition:
      background-color 0.2s,
      color 0.2s;

    &:hover:not(.swiper-button-disabled) {
      background-color: var(--blue-button);
      color: var(--white);
    }

    &.swiper-button-disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  &__dots {
    display: flex;
    gap: 8px;
    width: auto !important;

    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background-color: var(--gray);
      opacity: 0.5;
      margin: 0 !important;
      transition: all 0.3s ease;

      &-active {
        background-color: var(--blue-button);
        opacity: 1;
        transform: scale(1.2);
      }
    }
  }
}
</style>
