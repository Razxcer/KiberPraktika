<script setup lang="ts">
import type { ProjectItem } from '#types';

defineProps<{
  project: ProjectItem;
}>();
</script>

<template>
  <article class="project-card">
    <NuxtLink :to="`/projects/${project.slug}`" class="project-card__image-wrapper">
      <img 
        :src="project.image.original_url" 
        :alt="project.title" 
        class="project-card__image"
      />
      <NuxtLink :to="`/projects/${project.slug}`" class="project-card__arrow">↗</NuxtLink>
    </NuxtLink>
    <h3 class="project-card__title">{{ project.title }}</h3>
    <p class="project-card__description">{{ project.description }}</p>
  </article>
</template>

<style lang="scss">
.project-card {
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &__image-wrapper {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    aspect-ratio: 4 / 3;
    margin-bottom: 20px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover &__image {
    transform: scale(1.03);
  }

  &__arrow {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #0047ff; // Синий цвет из скрина
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    opacity: 0;
  }

  &:hover &__arrow {
    opacity: 1;
    transition: 0.3s;
  }

  &__arrow:hover {
    opacity: 1;
    transform: scale(1.1);
    transition: 0.3s;
  }

  &__title {
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 8px 0;
    color: #111;
  }

  &__description {
    font-size: 16px;
    color: #666;
    line-height: 1.4;
    margin: 0;
  }
 
}
</style>