<script setup lang="ts">
import type { NewsResponse, NewsItem } from '#types';

const config = useRuntimeConfig();

const newsItems = ref<NewsItem[]>([]);
const currentPage = ref(1);
const lastPage = ref(1);
const pending = ref(false);
const error = ref(false);

const loadNews = async (append = false) => {
  pending.value = true;
  error.value = false;
  
  try {
    const response = await $fetch<NewsResponse>('/posts', {
      baseURL: config.public.apiBase,
      query: {
        is_news: 1,
        page: currentPage.value
      }
    });

    if (response?.data) {
      if (append) {
        newsItems.value = [...newsItems.value, ...response.data.items];
      } else {
        newsItems.value = response.data.items;
      }
      
      currentPage.value = +response.data.pagination.page;
      lastPage.value = +response.data.pagination.last_page;
    }
  } catch (err) {
    error.value = true;
    console.error('Ошибка при получении новостей:', err);
  } finally {
    pending.value = false;
  }
};

const loadMore = () => {
  if (currentPage.value < lastPage.value) {
    currentPage.value += 1;
    loadNews(true);
  }
};

onMounted(() => {
  loadNews(false);
});
</script>

<template>
  <section class="news-block" id="news">
    <div class="news-block__container">
      
      <h2 class="news-block__main-title">Новости</h2>

      <!-- Ошибки и загрузка первой страницы -->
      <div v-if="pending && currentPage === 1" class="news-block__status">Загрузка ленты новостей...</div>
      <div v-else-if="error" class="news-block__status news-block__status--error">Не удалось загрузить новости</div>

      <!-- Сетка на 3 колонки по макету -->
      <div v-else class="news-block__grid">
        <!-- Сущность NewsCard автоимпортируется автоматически -->
        <NewsCard 
          v-for="item in newsItems" 
          :key="item.id" 
          :news="item"
        />
      </div>

      <!-- Кнопка "Загрузить еще" с фиксами от прыжков страницы -->
      <div v-if="currentPage < lastPage" class="news-block__actions">
        <LoadMoreButton :disabled="pending" @click.prevent="loadMore"/>
      </div>

    </div>
  </section>
</template>

<style lang="scss">
.news-block {
    width: 100%;
    padding: 10px 0;
    background-color: var(--gray-light);
    border-radius: 1.5em;

  &__container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 var(--base-padding-x);

    @include tablet{
      padding: 0 calc(var(--base-padding-x) / 2);
    }
    @include mobile{
      padding: 0 calc(var(--base-padding-x) / 4);
    }
  }

  &__main-title {
    font-family: $font-title;
    font-size: 48px;
    font-weight: 600;
    text-align: center;
    color: var(--dark);
    margin-bottom: 20px;

    @include mobile { font-size: 32px; margin-bottom: 10px; }
  }

  &__status {
    text-align: center;
    font-family: $font-text;
    color: var(--gray-dark);
    padding: 40px 0;
    
    &--error { color: var(--red); }
  }

  &__grid {
    display: grid;
    column-gap: 20px;
    row-gap: 60px;

    @include mobile { grid-template-columns: 1fr; row-gap: 40px; }
    @include tablet { grid-template-columns: repeat(2, 1fr); }
    @include desktop { grid-template-columns: repeat(3, 1fr); } 
  }

  &__actions {
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }
}
</style>