<template>
  <div class="team">
    <div class="team__container">
      <div class="team__title">Специалисты в команде</div>
      <div class="team__grid">
        <div class="team__item">
          <img class="team__img" src="~/assets/img/icons/1.png" />
          <p class="team__name">Системные аналитики</p>
          <p class="team__disc">
            Переводят требования к IT-продукту с языка бизнеса на язык разработки
          </p>
        </div>
        <div class="team__item">
          <img class="team__img" src="~/assets/img/icons/2.png" />
          <p class="team__name">UX/UI дизайнеры</p>
          <p class="team__disc">Проектируют и создают дизайн: мобильных и веб-приложений, сайтов</p>
        </div>
        <div class="team__item">
          <img class="team__img" src="~/assets/img/icons/3.png" />
          <p class="team__name">Проджект-менеджеры</p>
          <p class="team__disc">Контролируют сроки, бюджет и ход разработки проекта</p>
        </div>
        <div class="team__item">
          <img class="team__img" src="~/assets/img/icons/4.png" />
          <p class="team__name">Тестировщики</p>
          <p class="team__disc">
            Проверяют, как работает продукт, следят за качеством, ищут ошибки
          </p>
        </div>
        <div class="team__item">
          <img class="team__img" src="~/assets/img/icons/5.png" />
          <p class="team__name">Фронтенд-разработчики</p>
          <p class="team__disc">Разрабатывают интерфейсы для сайтов и веб-приложений</p>
        </div>
        <div class="team__item">
          <img class="team__img" src="~/assets/img/icons/6.png" />
          <p class="team__name">Бэкенд-разработчики</p>
          <p class="team__disc">Проектируют базы данных, разрабатывают программную логику</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.team {
  width: 100%;
  padding: 50px 0;

  @include mobile {
    padding: 0;
  }

  &__container {
    width: 60%;
    margin: 0 auto;

    @include mobile {
      width: 90%;
    }
  }

  &__title {
    font-size: 48px;
    font-family: $font-title;
    font-weight: 600;
    padding-bottom: 50px 0;

    @include mobile {
      font-size: 28px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    padding: 30px 0;
    width: 90%;

    @include mobile {
      grid-template-columns: 1fr 1fr;
      margin: 0 auto;
      gap: 20px;
      width: 95%;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
  }

  &__img {
    width: 25%;

    @include mobile {
      width: 40%;
    }
  }

  &__name {
    font-size: 16px;
    font-weight: 600;
    margin: 0;

    @include mobile {
      font-size: 14px;
    }
  }

  &__disc {
    font-size: 14px;
    margin: 0;
    padding: 10px 0;
    font-weight: 500;

    @include mobile {
      font-size: 12px;
    }
  }
}
</style>
