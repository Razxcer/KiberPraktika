<script setup lang="ts">
import type { NewsItem } from '#types';

const props = defineProps<{
  news: NewsItem;
}>();

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};
</script>

<template>
  <article class="news-card">
    <div class="news-card__image-wrapper">
      <img 
        :src="news.image_preview" 
        :alt="news.title" 
        class="news-card__img"
      />
    </div>

    <div class="news-card__content">
      <h3 class="news-card__title">{{ news.title }}</h3>
      
      <div class="news-card__description text-h8" v-html="news.description"></div>
      
      <div class="news-card__date-box text-h10">
        <svg class="news-card__calendar-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org">
          <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span class="news-card__date-text">{{ formatDate(news.published_at) }}</span>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.news-card {
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  cursor: pointer;
  border-radius: 1.5em;
  padding: calc(var(--base-padding-x) / 4);

  &__image-wrapper {
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 24px;
    overflow: hidden;
    margin-bottom: 24px;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover &__img {
    transform: scale(1.04);
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  &__title {
    font-family: $font-title;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.3;
    color: var(--dark);
    margin: 0 0 12px 0;
  }

  &__description {
    color: var(--gray-dark);
    line-height: 1.5;
    margin: 0 0 20px 0;
    
    p {
      margin: 0;
      padding: 0;
    }

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__date-box {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--gray);
    margin-top: auto;
  }

  &__calendar-icon {
    flex-shrink: 0;
  }
}
</style>