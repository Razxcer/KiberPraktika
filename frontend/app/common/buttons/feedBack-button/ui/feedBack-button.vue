<template>
  <OrbitAnimationLarge>
    <div class="large-button">
      <span class="large-button__content"> Обсудить проект </span>
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
  background-color: var(--dark);
  transition: 0.3s;
  border: none;
  padding: 0 20px;

  &__content {
    font-family: $font-title;
    color: var(--white);
  }

  &:hover {
    background-color: transparent;
    transition: 0.3s;
  }
}
</style>
