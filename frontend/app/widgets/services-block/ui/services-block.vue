<template>
  <div class="service">
    <div class="service__title-block">
      Мы занимаемся заказной разработкой и предлагаем услуги аутстаффинга
    </div>
    <ServiceCategories class="service__categories-block" />
    <ServiceStages class="service__stages-block" />
    <ServiceTeam class="service__team-block" />
  </div>
</template>

<style lang="scss" scoped>
.service {
  width: 100%;
  padding: 40px 0;

  &__title-block {
    box-sizing: border-box;
    width: 100%;
    padding: 60px 20px 100px 20px;
    border-radius: 0.7em 0.7em 0 0;
    color: var(--white);
    font-family: $font-title;
    font-size: 50px;
    font-weight: 600;
    text-align: center;
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
      font-size: 28px;
    }
  }

  &__categories-block {
    margin-top: -40px;
  }

  &__stages-block {
    margin-top: -40px;
  }

  &__team-block {
    margin-top: -40px;
  }
}
</style>
