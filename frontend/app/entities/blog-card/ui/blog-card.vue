<script setup lang="ts">
import type { BlogCardProps } from '../model/types';

const props = defineProps<BlogCardProps>();

// Автор(ы)
const authorText = ref('');
if (props.blogItem.authors.length < 1) {
  authorText.value = 'Автор: не указан';
} else if ((props.blogItem.authors.length = 1)) {
  authorText.value = `Автор: ${props.blogItem.authors[0]?.first_name} ${props.blogItem.authors[0]?.last_name}`;
} else if (props.blogItem.authors.length > 1) {
  authorText.value = `Авторы: `;
  props.blogItem.authors.forEach((author) => {
    authorText.value += `${author?.first_name} ${author?.last_name},`;
  });
  authorText.value = authorText.value.slice(0, -1);
} else {
  authorText.value = 'Автор: ХЫ код не работает, бывает!';
}

// Дата
const date = new Date(props.blogItem.published_at * 1000).toLocaleDateString('ru-RU');
</script>

<template>
  <div class="post-slide">
    <div class="post-slide__grid">
      <div class="post-slide__img-block">
        <NuxtImg :src="props.blogItem.image_preview" class="post-slide__img" />
      </div>
      <div class="post-slide__about">
        <div class="post-slide__tags">
          <p v-for="tag in props.blogItem.tags" class="post-slide__tag">{{ tag.name }}</p>
        </div>
        <div class="post-slide__desc">
          <p class="post-slide__title">{{ props.blogItem.title }}</p>
          <p class="post-slide__authors">{{ authorText }}</p>
        </div>
        <div class="post-slide__meta">
          <IconCalendar />
          <p class="post-slide_meta-date" style="margin-right: 10px">{{ date }}</p>
          <IconClock />
          <p class="post-slide__meta-reading-time">10-15 минут</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-slide {
  background-color: var(--dark);
  display: flex;
  color: var(--white);
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  box-sizing: border-box;
  flex-direction: column;
  padding: 20px;
  border: 2px solid var(--dark-3);

  &__grid {
    width: 100%;
    height: 100%;
    gap: 20px;

    display: grid;
    grid-template-columns: 1fr;
    position: relative;
  }

  &__img-block {
    height: 100%;
    width: 100%;
    border-radius: 24px;
    overflow: hidden;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  &__about {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__tags {
    width: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    flex-direction: column;

    position: absolute;
    top: 10px;
    left: 10px;
  }

  &__tag {
    margin: 0;
    font-weight: 500;
    padding: 8px;
    background-color: var(--white);
    border-radius: 1.5em;
    color: var(--dark);
    width: min-content;
    text-wrap-mode: nowrap;

    @include mobile {
      padding: 4px;
      font-size: 14px;
    }
  }

  &__desc {
    height: auto;
  }

  &__title {
    font-size: 1.7em;
    font-weight: bold;
    margin: 0;
    font-size: 24px;

    @include mobile {
      font-size: 18px;
    }
  }

  &__authors {
    margin: 5px 0 0 0;
    font-size: 16px;
    @include mobile {
      font-size: 12px;
    }
  }

  &__meta {
    color: var(--gray-dark);
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;
    font-size: 14px;
    @include mobile {
      display: none;
    }
  }
}
</style>
