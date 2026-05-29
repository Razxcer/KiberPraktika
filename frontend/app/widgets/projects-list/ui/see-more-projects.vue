<script setup lang="ts">
import type { SeeMoreProps } from '../model/types';
import type { ProjectsResponse, ProjectItem } from '#types';

const props = withDefaults(defineProps<SeeMoreProps>(), {
  title: 'Ознакомьтесь с нашими проектами',
});

const projects = ref<ProjectItem[]>([]);
const pending = ref(false);
const error = ref(false);

const loadProjects = async () => {
  pending.value = true;
  error.value = false;

  try {
    const response = await useProjectFetch<ProjectsResponse>('/projects');
    if (response.data.value) {
      projects.value = response.data.value.data.items;
      console.log(projects.value);
    }
  } catch (e) {
    error.value = true;
    console.error('Ошибка загрузки проектов:', e);
  } finally {
    pending.value = false;
  }
};

onMounted(() => {
  loadProjects();
});
</script>

<template>
  <div class="see-more">
    <div class="see-more__container">
      <div class="see-more__title">{{ props.title }}</div>
      <div v-if="pending" class="see-more__status">Ожидание ответа от сервера...</div>
      <div v-else-if="error" class="see-more__status see-more__status--error">Произошла ошибка</div>
      <div v-else-if="projects" class="see-more__grid">
        <ProjectCard v-if="projects[0]" :project="projects[0]" />
        <ProjectCard v-if="projects[1]" :project="projects[1]" />
      </div>
      <div class="see-more__flex">
        <SeeAllProjectsButton class="see-more__button" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.see-more {
  width: 100%;
  padding: 40px 0;
  background-color: var(--dark);
  color: var(--white);
  border-radius: 2em 2em 0 0;

  &__container {
    width: 80%;
    margin: 0 auto;

    @include mobile {
      width: 90%;
    }
  }

  &__title {
    width: 60%;
    margin: 0 auto;
    font-size: 42px;
    font-family: $font-title;
    font-weight: 600;
    padding-bottom: 50px;
    color: var(--white);

    @include mobile {
      font-size: 28px;
      width: 100%;
    }
  }

  &__status {
    margin: 0 auto;
    text-align: center;
    font-size: 16px;
    color: var(--white);
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @include mobile {
      grid-template-columns: 1fr;
    }
  }

  &__flex {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 40px;
  }
}
</style>
