<template>
  <div class="job">
    <section class="job__container">
      <h2 class="job__title">Пробуй новое, создавай значимое</h2>
      <p class="job__desc">
        Работая в нашей команде, каждый день ты будешь делать и узнавать что-то новое и интересное.
        Крутые знакомства, долгосрочные проекты и необычные задачи – то, что ждет тебя в Киберии
      </p>
      <a class="job__button">Вакансии на hh.ru</a>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.job {
  box-sizing: border-box;
  width: 100%;
  padding: 60px 20px 100px 20px;
  border-radius: 2em 2em 0 0;
  text-align: center;
  color: var(--dark);
  background-image:
    url('~/assets/img/background-gradient-short.png'), url('~/assets/img/background-large.png');
  background-repeat: repeat, no-repeat;
  background-size:
    auto,
    100% 120%;
  background-position:
    top left,
    bottom center;
  background-blend-mode: soft-light;

  @include mobile {
    font-size: 28px;
  }

  &__container {
    width: 40%;
    margin: 0 auto;

    @include mobile {
      width: 90%;
    }
  }

  &__title {
    font-family: $font-title;
    font-size: 50px;
    font-weight: 600;

    @include mobile {
      font-size: 22px;
    }
  }

  &__desc {
    font-size: 18px;
    font-weight: 500;

    @include mobile {
      font-size: 14px;
    }
  }

  &__button {
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
