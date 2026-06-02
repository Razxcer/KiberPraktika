<template>
  <div class="service__categoris-block">
    <div class="service__container">
      <p class="service__title service__categories-title">Мы растём и ищем того, кто будет развиваться с нами</p>
      <div class="service__grid service__categories-grid">
        <div class="service__categories-element">
          <p class="service__categories-element-title">Крутая команда</p>
          <p class="service__categories-element-text">
            Большая команда специалистов своего дела, где каждый готов помочь тебе в реализации твоих задач и идей
          </p>
        </div>
        <div class="service__categories-element">
          <p class="service__categories-element-title">Профессиональное развитие</p>
          <p class="service__categories-element-text">
           Возможность вертикального и горизонтального карьерного роста и частичная компенсация обучения
          </p>
        </div>
        <div class="service__categories-element">
          <p class="service__categories-element-title">Комфортный офис</p>
          <p class="service__categories-element-text">
           Новый большой офис с кухней, зоной отдыха и Playstation
          </p>
        </div>
        <div class="service__categories-element">
          <p class="service__categories-element-title">Свобода и гибкость</p>
          <p class="service__categories-element-text">
            Свободный график отпусков и гибкое начало рабочего дня (8-10 утра)
          </p>
        </div>
        <div class="service__categories-element">
          <p class="service__categories-element-title">Зарплатный рост</p>
          <p class="service__categories-element-text">
            Стабильная и конкурентноспособная заработная плата, растущая в соответствии с твоим карьерным треком
          </p>
        </div>
        <div class="service__categories-element">
          <p class="service__categories-element-title">Хорошая техника</p>
          <p class="service__categories-element-text">
            Рабочие места оборудованы новой техникой (PC, Mac), эргономичными креслами, двумя 2К-мониторами и механикой
          </p>
        </div>
        <div class="service__categories-element">
          <p class="service__categories-element-title">Трудоустройство</p>
          <p class="service__categories-element-text">
            Полный соцпакет и официальное трудоустройство по ТК РФ
          </p>
        </div>
        <div class="service__categories-element">
          <p class="service__categories-element-title">Корпоративы и тусовки</p>
          <p class="service__categories-element-text">
            От небольших пятничных посиделок до крупных выездных мероприятий
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.service {
  &__categoris-block {
    width: 100%;
    padding: 40px 0 80px 0;
    border-radius: 40px 40px 0 0;
    background-color: var(--white);
  }

  &__container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 var(--base-padding-x);

    @include tablet {
      padding: 0 calc(var(--base-padding-x) / 2);
    }
    @include mobile {
      padding: 0 calc(var(--base-padding-x) / 4);
    }
  }

  &__title {
    font-size: 48px;
    font-family: $font-title;
    font-weight: 600;
  }

  &__categories-title {
    width: 70%;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 40px;

    @include mobile {
      font-size: 24px;
      width: 90%;
      text-align: left;
    }

    @include tablet {
      font-size: 28px;
      width: 90%;
    }
  }


  &__grid {
    display: grid;
    width: 100%;
  }

  &__categories-grid {
    gap: 20px;
    column-gap: 60px;
    grid-template-columns: 1fr 1fr;
    width: 60%;
    margin: 0 auto;

    @include mobile {
      grid-template-columns: 1fr;
      width: 100%;
    }
    @include tablet {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }

  &__categories-element {
    border-bottom: 2px solid var(--gray-light);
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  &__categories-element-title {
    font-family: $font-title;
    font-weight: 600;
    color: var(--blue);
    flex: 0.4;
    margin-bottom: 0;

    @include mobile {
      font-size: 12px;
    }
  }

  &__categories-element-text {
    font-family: $font-text;
    font-weight: 500;
    flex: 0.6;

    @include mobile {
      font-size: 14px;
      flex: 0.55;
    }
  }
}
</style>
