<script setup lang="ts">
  import type { ProjectCategoriesResponse } from '~/entities/project-category/model/types';
  import type { ProjectsResponse,  ProjectItem } from '~/entities/project/model/types';


  const { data: categoriesData } = await useProjectFetch<ProjectCategoriesResponse>('/project-categories');
  const categories = computed(() => categoriesData.value?.data || []);
  const activeCategoryId = ref<number | null>(null);

  const config = useRuntimeConfig();
  const projects = ref<ProjectItem[]>([]);
  const currentPage = ref(1);
  const lastPage = ref(1);
  const pending = ref(false);
  const error = ref(false);

  const loadProjects = async (append = false) => {
    pending.value = true;
    error.value = false;
    
    try {
      const queryParams: Record<string, any> = { page: currentPage.value };
      if (activeCategoryId.value !== null) {
        queryParams.project_category_id = activeCategoryId.value;
      }

      const response = await $fetch<ProjectsResponse>('/projects', {
        baseURL: config.public.apiBase,
        query: queryParams
      });

      if (response?.data) {
        if (append) {
          projects.value = [...projects.value, ...response.data.items];
        } else {
          projects.value = response.data.items;
        }
        
        // Обновляем счетчики страниц с бэкенда (приводим строки к числам через +)
        currentPage.value = +response.data.pagination.page;
        lastPage.value = +response.data.pagination.last_page;
      }
    } catch (err) {
      error.value = true;
      console.error('Ошибка загрузки проектов:', err);
    } finally {
      pending.value = false;
    }
  };

  const selectCategory = (id: number | null) => {
    console.log(activeCategoryId.value);
    activeCategoryId.value = id;
    currentPage.value = 1;
    loadProjects(false);
  };

  const closeCategory = ()=>{
    activeCategoryId.value = null
    console.log("Долны быть все проекты " + activeCategoryId.value)
    currentPage.value = 1;
    loadProjects(false);
  }

  const loadMore = () => {
    if (currentPage.value < lastPage.value) {
      currentPage.value += 1;
      loadProjects(true);
    }
  };

  onMounted(() => {
    loadProjects(false);
  });

  // ВСЯ ЛОГИКА СЛАЙДЕРА КАТЕГОРИЙ
  const sliderRef = ref<HTMLElement | null>(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const startDragging = (e: MouseEvent) => {
    if (!sliderRef.value) return;
    isDown = true;
    sliderRef.value.classList.add('projects-widget__filters--active-drag');
    startX = e.pageX - sliderRef.value.offsetLeft;
    scrollLeft = sliderRef.value.scrollLeft;
  };

  const moveSlider = (e: MouseEvent) => {
    if (!isDown || !sliderRef.value) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.value.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.value.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    isDown = false;
    sliderRef.value?.classList.remove('projects-widget__filters--active-drag');
  };

</script>

<template>
  <section class="projects-widget" id="projects">
    <div class="projects-widget__container">
      <h2 class="projects-widget__main-title">Наши проекты</h2>

      <!-- ЛЕНТА ТАБОВ-ФИЛЬТРОВ -->
      <div class="projects-widget__filters"
      ref="sliderRef"
      @mousedown="startDragging"
      @mouseleave="stopDragging"
      @mouseup="stopDragging"
      @mousemove="moveSlider">
        <CategoryTag 
          v-for="cat in categories"
          :key="cat.id"
          :category="cat"
          :is-active="activeCategoryId === cat.id"
          @click="selectCategory(cat.id)"
          @close="closeCategory"
        />
      </div>

      <!-- СОСТОЯНИЯ ЗАГРУЗКИ ПРОЕКТОВ -->
      <div v-if="pending" class="projects-widget__status">Обновление списка проектов...</div>
      <div v-else-if="error" class="projects-widget__status projects-widget__status--error">
        Не удалось загрузить проекты
      </div>

      <!-- СЕТКА КАРТОЧЕК -->
      <div v-else-if="projects.length > 0" class="projects-widget__grid">
        <ProjectCard 
          v-for="item in projects" 
          :key="item.id"
          :project="item"
        />
      </div>

      <!-- Если по выбранной категории ничего не нашлось -->
      <div v-else class="projects-widget__status">
        В этой категории пока нет выполненных проектов
      </div>

      <!-- КНОПКА ПАГИНАЦИИ (Показывается, если текущая страница меньше максимальной) -->
      <div v-if="currentPage < lastPage" class="projects-widget__actions">
        <LoadMoreButton @click.prevent="loadMore" :disabled="pending" class="projects-widget__load-more"/>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects-widget {
  width: 100%;
  padding: 80px 0;


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
    text-align: center;
    font-family: $font-title;
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 40px;
    color: var(--dark);

    @include mobile{
      font-size: 28px;
      margin-bottom: 10px;
    }
  }

  // Горизонтальный скролл табов на мобилках
  &__filters {
    display: flex;
    gap: 12px;
    
    // Включаем горизонтальный скролл
    overflow-x: auto;
    width: 100%;
    margin-bottom: 50px;
    padding: 10px 0; // Место под тени или ховеры тегов
    
    // Делаем скролл пальцем на мобилках супер-плавным с инерцией
    -webkit-overflow-scrolling: touch;
    
    // Меняем обычную стрелочку мыши на раскрытую ладонь ("схватись за меня")
    cursor: grab;
    
    // Запрещаем пользователю случайно выделять текст табов во время перетаскивания
    user-select: none;

    // Прячем стандартный некрасивый скроллбар во всех браузерах
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    // Модификатор БЭМ: состояние, когда пользователь ЖМЕТ И ТАЩИТ ленту
    &--active-drag {
      cursor: grabbing; // Курсор сжимается в кулак
    }

    @include mobile{
      margin-bottom: 10px;
    }
  }

  &__status {
    text-align: center;
    padding: 40px 0;
    font-family: $font-text;
    color: var(--gray-dark);
  }

  &__grid {
    display: grid;
    gap: 40px;

    @include mobile { grid-template-columns: 1fr; }
    @include tablet { grid-template-columns: repeat(2, 1fr); }
    @include desktop { grid-template-columns: repeat(2, 1fr); }
  }

  &__actions {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    width: 100%;
  }

  &__load-more:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    border-color: var(--gray);
    color: var(--gray);
  }
}
</style>