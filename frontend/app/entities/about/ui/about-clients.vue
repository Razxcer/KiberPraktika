<template>
  <div class="clients">
    <div class="clients__container">
      <div class="clients__title">Нам доверяют</div>
      <div class="clients__grid">
        <div class="clients__element">
          <IconGazpromNeft class="clients__svg" />
          <div class="clients__desc">НТЦ “Газпром Нефть”</div>
        </div>
        <div class="clients__element">
          <IconManna class="clients__svg" />
          <div class="clients__desc">Онлайн-гипермаркет “Манна” (РосТрейд)</div>
        </div>
        <div class="clients__element">
          <IconItKit class="clients__svg" />
          <div class="clients__desc">Холдинг цифровых и IT- решений “ИТ-Кит”</div>
        </div>
        <div class="clients__element">
          <IconComfortel class="clients__svg" />
          <div class="clients__desc">Оператор связи бизнес- класса</div>
        </div>
        <div class="clients__element">
          <IconIntegraSources class="clients__svg" />
          <div class="clients__desc">
            Разработка аппаратного и программного обеспечения в сфере IoT
          </div>
        </div>
        <div class="clients__element">
          <IconDveridoff class="clients__svg" />
          <div class="clients__desc">Оператор связи бизнес- класса</div>
        </div>
        <div class="clients__element">
          <IconSmart class="clients__svg" />
          <div class="clients__desc">Транспортная компания “Smart Logistic”</div>
        </div>
        <div class="clients__element">
          <IconForkagro class="clients__svg" />
          <div class="clients__desc">
            Платформа для развития бизнеса на национальном и международном рынке
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.clients {
  width: 100%;
  border-radius: 2em 2em 0 0;
  background-image:
    url('~/assets/img/background-gradient-short.png'), url('~/assets/img/background-small.png');
  background-repeat: repeat, no-repeat;
  background-size: auto, cover;
  background-position:
    top left,
    center center;
  padding: 5em 0;
  padding-bottom: 120px;
  box-sizing: border-box;

  background-blend-mode: soft-light;

  &__container {
    width: 80%;
    margin: 0 auto;
  }

  &__title {
    width: 100%;
    font-family: $font-title;
    font-weight: 500;
    font-size: 3em;
    text-align: center;
    padding-bottom: 1em;

    @include mobile {
      font-size: 22px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2em;
    row-gap: 5em;

    @include mobile {
      grid-template-columns: 1fr 1fr;
      gap: 2em;
      row-gap: 3em;
    }
  }

  &__element {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @include mobile {
      justify-content: start;
      height: 80px;
    }
  }

  &__svg {
    max-width: 100%;
    max-height: 100%;
    height: 50%;
    width: auto;
  }

  &__desc {
    display: none;

    @include mobile {
      display: block;
      font-size: 12px;
      height: 50%;
      text-align: center;
    }
  }
}
</style>
