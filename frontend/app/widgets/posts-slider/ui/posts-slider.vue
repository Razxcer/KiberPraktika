<script lang="ts" setup>
import type { NewsItem, NewsResponse } from '~/entities/news/model/types';

const prevButtonRef = ref<HTMLElement | null>(null);
const nextButtonRef = ref<HTMLElement | null>(null);

const pending = ref(false);
const error = ref(false);
const posts = ref<NewsItem[]>();
const loadData = async () => {
  pending.value = true;
  error.value = false;
  const params: Record<string, any> = { is_news: 0 };
  try {
    const response = await useProjectFetch<NewsResponse>('/posts', {
      query: params,
    });
    posts.value = response.data.value?.data.items;

    pending.value = false;
    error.value = false;
  } catch (e) {
    error.value = true;
    pending.value = false;
  }
};
loadData();

const containerRef = ref(null);
const swiper = useSwiper(containerRef);
</script>

<template>
  <section class="posts-slider">
    <div class="posts-slider__container">
      <div v-if="pending" class="posts-slider__status">Загрузка...</div>
      <div v-else-if="error" class="posts-slider__status" style="color: var(--red)">
        Не удалось загрузить новости.
      </div>
      <ClientOnly v-else>
        <swiper-container
          ref="containerRef"
          :slides-per-view="1.1"
          :centered-slides="true"
          :space-between="10"
          :breakpoints="{
            992: {
              slidesPerView: 1.43,
              spaceBetween: 20,
            },
          }"
          :navigation="{
            prevEl: prevButtonRef,
            nextEl: nextButtonRef,
          }"
          :pagination="{
            el: '.posts-slider__dots',
            clickable: true,
          }"
          class="posts-slider__slider"
        >
          <swiper-slide v-for="post in posts" :key="post.id" class="posts-slider__slide">
            <PostSlide :post="post" />
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
      <div class="posts-slider__controls">
        <button
          ref="prevButtonRef"
          class="posts-slider__arrow posts-slider__arrow--prev"
          aria-label="Назад"
        >
          <svg
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.65391 0.367968C9.14406 -0.122185 9.93875 -0.122185 10.4289 0.367968C10.9191 0.858122 10.9191 1.65281 10.4289 2.14297L3.09141 9.48047L10.4289 16.818C10.9191 17.3081 10.9191 18.1028 10.4289 18.593C9.93875 19.0831 9.14406 19.0831 8.65391 18.593L0.32572 10.2648C-0.107446 9.83162 -0.107445 9.12932 0.32572 8.69615L8.65391 0.367968Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <!-- Контейнер для точек пагинации Swiper -->
        <div class="posts-slider__dots"></div>

        <button
          ref="nextButtonRef"
          class="posts-slider__arrow posts-slider__arrow--next"
          aria-label="Вперед"
        >
          <svg
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.14297 18.593C1.65282 19.0831 0.858122 19.0831 0.367969 18.593C-0.122184 18.1028 -0.122184 17.3081 0.367969 16.818L7.70547 9.48047L0.36797 2.14297C-0.122183 1.65282 -0.122184 0.858121 0.367969 0.367969C0.858121 -0.122184 1.65282 -0.122184 2.14297 0.367969L10.4712 8.69616C10.9043 9.12932 10.9043 9.83162 10.4712 10.2648L2.14297 18.593Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.posts-slider {
  width: 100%;
  padding: 40px 0;

  &__container {
    width: 100%;
  }

  &__status {
    text-align: center;
    color: var(--gray-dark);
    padding: 40px 0;
  }

  &__controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 40px;

    @include mobile {
      margin-top: 10px;
    }
  }

  &__arrow {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    background-color: var(--blue);
    color: var(--white);
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

    @include mobile {
      display: none;
    }
  }

  &__dots {
    display: flex;
    gap: 8px;
    width: auto !important;

    :deep(.swiper-pagination-bullet) {
      width: 20px;
      height: 8px;
      background-color: var(--gray);
      opacity: 0.5;
      margin: 0 !important;
      transition: all 0.3s ease;
      border-radius: 1.5em;
    }

    :deep(.swiper-pagination-bullet-active) {
      background-color: var(--blue-button);
      opacity: 1;
      width: 30px;
    }
  }
}
</style>
