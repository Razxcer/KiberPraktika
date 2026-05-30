<script setup lang="ts">
import type { ProjectCategoryItem } from '../model/types';

defineProps<{
  category: ProjectCategoryItem;
  isActive: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const close = () => {
  emit('close');
};
</script>

<template>
  <OrbitAnimationLarge>
    <div class="large-button">
      <span class="large-button__content">
        {{ category.name }}
        <span v-if="isActive" class="large-button__close" @click.stop="close">✕</span>
      </span>
    </div>
  </OrbitAnimationLarge>
</template>

<style lang="scss" scoped>
.large-button {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.5em;
  background-color: var(--grey-light);
  transition: 0.3s;
  border: none;
  padding: 0 30px;
  color: var(--dark);

  &__content {
    font-family: $font-text;
    font-size: 18px;
    font-weight: 600;
    color: currentColor;
    white-space: nowrap;
  }

  &:hover {
    background-color: transparent;
    transition: 0.3s;
    color: var(--white);
  }

  &__close {
    font-size: 14px;
    opacity: 0.8;
  }
}
</style>
