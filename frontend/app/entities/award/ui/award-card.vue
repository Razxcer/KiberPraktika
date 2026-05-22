<script setup lang="ts">
import type { AwardItem } from '#types';

defineProps<{
  award: AwardItem;
}>();
</script>

<template>
  <article class="award-card">
    <!-- Левая колонка: круглая иконка-вывеска -->
    <div class="award-card__icon-zone">
      <div class="award-card__icon-wrapper">
        <img 
          :src="award.award_icon.original_url" 
          :alt="award.title" 
          class="award-card__icon-img"
        />
      </div>
    </div>

    <!-- Правая колонка: текстовый контент -->
    <div class="award-card__content">
      <h3 class="award-card__title">{{ award.title }}</h3>
      <p class="award-card__description text-h9">{{ award.description }}</p>
      
      <!-- Ссылка на кейс/проект, если бэкенд его передал -->
      <div v-if="award.project" class="award-card__project-zone">
        <a :href="award.project.link" class="award-card__project-link text-h9" target="_blank">
          {{ award.project.title }} <span class="award-card__project-arrow">↗</span>
        </a>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.award-card {
  display: flex;
  gap: 20px;
  align-items: flex-start;

  &__icon-wrapper {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: var(--gray-light);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  &__icon-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__title {
    font-family: $font-title;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
    color: var(--dark);
    margin: 0;
  }

  &__description {
    color: var(--gray-dark);
    line-height: 1.4;
    margin: 0;
  }

  &__project-zone {
    margin-top: 4px;
  }

  &__project-link {
    --current-color: var(--dark);
    color: var(--dark);
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;

    background-image: linear-gradient(to right, 
    var(--current-color) 40%, 
    var(--purple-dark) 60%, 
    var(--purple-light) 80%, 
    var(--blue-dodger) 100%);

    background-size: 250% 100%;
    background-position: left center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    transition: background-position 0.2s ease-in-out;

    &:hover {
      background-position: right center;
    }
  }

  &__project-arrow {
    color: var(--blue-button);
    font-weight: bold;
  }
}
</style>