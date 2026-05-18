<script setup lang="ts">
import type { ReviewItem } from '../model/types';

defineProps<{
  review: ReviewItem;
}>();
</script>

<template>
  <div class="review-card">
    <div class="review-card__header">
      <h3 class="review-card__project-title">{{ review.project.title }}</h3>
      
      <a 
        v-if="review.document" 
        :href="review.document" 
        target="_blank" 
        class="review-card__doc-btn"
        title="Посмотреть благодарственное письмо"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <div v-else class="review-card__doc-btn review-card__doc-btn--disabled">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org">
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" stroke-width="2"/>
        </svg>
      </div>
    </div>

    <div class="review-card__balloon">
      <p class="review-card__text text-h8">{{ review.content }}</p>
      
      <div class="review-card__author">
        <div class="review-card__avatar-wrapper">
          <img 
            v-if="review.image" 
            :src="review.image.original_url" 
            :alt="review.fio" 
            class="review-card__avatar-img"
          />

          <div v-else class="review-card__avatar-placeholder">👤</div>
        </div>
        
        <div class="review-card__author-info">
          <h4 class="review-card__author-name text-h9">{{ review.fio }}</h4>
          <span class="review-card__author-position text-h10">{{ review.position }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.review-card {
  background-color: var(--gray-light);
  border-radius: 24px;
  padding: 32px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 350px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }

  &__project-title {
    font-family: $font-title;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.3;
    color: var(--dark);
    margin: 0;
  }

  &__doc-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: var(--dark);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
    transition: background-color 0.2s;

    &:hover { background-color: var(--blue-button); }
    
    &--disabled {
      background-color: var(--gray);
      color: var(--gray-light);
      cursor: not-allowed;
    }
  }

  &__balloon {
    background-color: var(--white);
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex-grow: 1;
  }

  &__text {
    color: var(--gray-dark);
    margin: 0;
    line-height: 1.5;
  }

  &__author {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: auto;
  }

  &__avatar-wrapper {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
  }

  &__avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__avatar-placeholder {
    width: 100%;
    height: 100%;
    background-color: #edeeff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }

  &__author-name {
    color: var(--blue-button);
    margin: 0 0 4px 0;
  }

  &__author-position {
    color: var(--gray-dark);
  }
}
</style>