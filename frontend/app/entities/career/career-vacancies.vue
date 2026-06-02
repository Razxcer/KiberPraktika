<template>
  <div class="stages">
    <div class="stages__container">
      <div class="stages__title">Кого мы ищем?</div>
      <div class="stages__grid">
        <div class="stages__item">
          <IconBackendCard class="stages__img"/>
        </div>
        <div class="stages__item">
          <IconFrontendCard class="stages__img"/>
        </div>
        <div class="stages__item">
          <IconUxUiDesigner class="stages__img"/>
        </div>
      </div>
      <a class="stages__button">Все вакансии на hh.ru</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.stages {
  width: 100%;
  padding: 50px 0;

  @include mobile {
    padding: 0;
  }

  &__container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @include mobile {
      width: 90%;
    }
  }

  &__title {
    font-size: 48px;
    font-family: $font-title;
    font-weight: 600;
    padding-bottom: 50px 0;
    text-align: center;

    @include mobile {
      font-size: 24px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 30px 0;
    width: 100%;

    @include mobile {
      grid-template-columns: 1fr;
      margin: 0 auto;
      gap: 20px;
    }
  }

  &__img {
    width: 100%;
  }

  &__button{
        margin: 0 auto;
        font-size: 18px;
        font-weight: 500;
        color: var(--white);
        background-color: var(--blue);
        padding: 10px 30px;
        border: none;
        border-radius: 2em;

        @include mobile {
            font-size: 14px;
        }
    }
}
</style>
