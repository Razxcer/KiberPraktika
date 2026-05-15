<script setup lang="ts">
import type { ProjectsResponse } from '~/entities/project/model/types';

// Делаем запрос к API с помощью нашего хелпера useProjectFetch
// Запрос автоматически типизируется интерфейсом ProjectsResponse
const { data, error, pending } = await useProjectFetch<ProjectsResponse>('/projects');

// Вытаскиваем массив элементов, безопасно проверяя наличие данных
const projects = computed(() => data.value?.data.items || []);
</script>

<template>
  <section class="projects-widget">
    <h2 class="projects-widget__main-title">Наши проекты</h2>

    <!-- Теги-фильтры (пока статичные для верстки по БЭМ) -->
    <div class="projects-widget__filters">
      <button class="projects-widget__tag projects-widget__tag--active">Веб-сервисы ✕</button>
      <button class="projects-widget__tag">CRM-системы</button>
      <button class="projects-widget__tag">Интернет-магазины</button>
    </div>

    <!-- Состояния загрузки -->
    <div v-if="pending" class="projects-widget__loading">Загрузка проектов...</div>
    <div v-else-if="error" class="projects-widget__error">Не удалось загрузить данные</div>

    <!-- Сетка проектов -->
    <div v-else class="projects-widget__grid">
      <!-- ProjectCard автоимпортируется из entities благодаря настройкам Nuxt -->
      <ProjectCard 
        v-for="item in projects" 
        :key="item.id" 
        :project="item"
      />
    </div>
  </section>
</template>

<style lang="scss">
.projects-widget {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;

  &__main-title {
    font-size: 48px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 40px;
  }

  &__filters {
    display: flex;
    gap: 12px;
    overflow-x: auto; // Чтобы скроллилось на мобилках
    margin-bottom: 40px;
    padding-bottom: 10px;
  }

  &__tag {
    padding: 10px 20px;
    border-radius: 20px;
    border: 1px solid #e0e0e0;
    background: #f5f5f7;
    white-space: nowrap;
    cursor: pointer;
    font-size: 14px;

    &--active {
      background-color: #5d5fef; // Фиолетово-синий активный тег
      color: white;
      border-color: #5d5fef;
    }
  }

  // Реализация адаптивной сетки на CSS Grid (3 разрешения)
  &__grid {
    display: grid;
    gap: 40px;

    @include mobile {
      grid-template-columns: 1fr; // 1 колонка на мобилке
    }

    @include tablet {
      grid-template-columns: repeat(2, 1fr); // 2 колонки на планшете
    }

    @include desktop {
      grid-template-columns: repeat(2, 1fr); // 2 колонки на десктопе
    }
  }
}
</style>