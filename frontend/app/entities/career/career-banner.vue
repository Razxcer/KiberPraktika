<template>
  <section class="banner">
    <div class="banner__container">
      <h2 class="banner__title">Не нашли подходящей вакансии?</h2>
      <div class="banner__flex banner__flex--large">
        <p class="banner__desc">
          Мы всегда рады творческим и энергичным людям. Если тебе не удалось найти подходящую
          вакансию – напиши или позвони нам
        </p>
        <div class="banner__flex banner__flex--small">
          <a href="" class="banner__link">+7 906 964 84 23</a>
          <a href="" class="banner__link">hr@cyberia.studio</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  margin-top: 40px;
  box-sizing: border-box;
  width: 100%;
  padding: 30px 20px 30px 20px;
  border-radius: 2em 2em 0 0;
  color: var(--white);
  font-family: $font-title;

  margin-bottom: 50px;

  background-image:
    url('~/assets/img/background-gradient-short.png'), url('~/assets/img/background-small.png');
  background-repeat: repeat, no-repeat;
  background-size:
    auto,
    100% 120%;
  background-position:
    top left,
    bottom center;
  background-blend-mode: soft-light;

  @include mobile {
    color: var(--dark);
  }

  &__container {
    width: 50%;
    margin: 0 auto;

    @include mobile {
      width: 90%;
    }
  }

  &__title {
    font-size: 50px;
    font-weight: 600;

    @include mobile {
      font-size: 28px;
    }
  }

  &__flex {
    display: flex;

    &--large {
      justify-content: space-between;
      align-items: center;
      width: 90%;

      @include mobile {
        flex-direction: column;
        width: 100%;
      }
    }

    &--small {
      flex-direction: column;

      @include mobile {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
      }
    }
  }

  &__desc {
    width: 70%;
    @include mobile {
      width: 100%;
    }
  }

  &__link {
    border-bottom: 2px solid var(--white);
    padding: 6px;

    @include mobile {
      border: none;
      padding: 2px;
      font-size: 13px;
    }
  }
}
</style>
