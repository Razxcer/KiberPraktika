<template>
  <div class="service__categoris-block">
    <div class="service__container">
      <p class="service__title service__categories-title">Заказная разработка под ключ</p>
      <p class="service__about">
        Полный цикл создания новых ИТ-проектов, а также модернизация существующих: от предпроектных
        исследований до ввода в эксплуатацию и поддержки
      </p>
      <div class="service__grid service__categories-grid">
        <div class="service__categories-element">
          <p class="service__categories-element-title">Интернет-магазины</p>
          <p class="service__categories-element-text">
            Разработаем интернет-магазин с продуманной логикой, удобным интерфейсом и необходимыми
            интеграциями
          </p>
        </div>
        <div class="service__categories-element">
          <p class="service__categories-element-title">Образовательные проекты</p>
          <p class="service__categories-element-text">
            Воплотим любую вашу идею о дистанционном образовании при помощи грамотно подобранных
            технических решений
          </p>
        </div>
        <div class="service__categories-element">
          <p class="service__categories-element-title">CRM, ERP и ERM - системы</p>
          <p class="service__categories-element-text">
            Реализуем удобную и функциональную систему для коммуникации с клиентами, управления
            складом и производством под ваши задачи
          </p>
        </div>
        <div class="service__categories-element">
          <p class="service__categories-element-title">Системы ЭДО</p>
          <p class="service__categories-element-text">
            Подберем удобный для вас вариант системы электронного документооборота, разработаем и
            поможем с плавным переходом компании на него
          </p>
        </div>
        <div class="service__categories-element">
          <p class="service__categories-element-title">Системы автоматизации бизнеса</p>
          <p class="service__categories-element-text">
            Разработаем систему для автоматизации бизнес-процессов под ваши задачи и цели
          </p>
        </div>
        <div class="service__categories-element">
          <p class="service__categories-element-title">Сайты-визитки</p>
          <p class="service__categories-element-text">
            Создадим функциональный и отзывчивый сайт, который работает на всех устройствах и
            браузерах
          </p>
        </div>
        <div class="service__categories-element">
          <p class="service__categories-element-title">Корпоративные сайты</p>
          <p class="service__categories-element-text">
            Разработаем уникальный дизайн, который отражает вашу компанию и уделим внимание удобству
            использования
          </p>
        </div>
        <div class="service__categories-element">
          <p class="service__categories-element-title">Лендинги, промо-сайты</p>
          <p class="service__categories-element-text">
            Изучим вашу целевую аудиторию и определим цели, которые вы хотите достичь с помощью
            лендинга
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
    width: 50%;
    margin: 0 auto;
    text-align: left;

    @include mobile {
      font-size: 28px;
      width: 90%;
    }

    @include tablet {
      font-size: 28px;
      width: 90%;
    }
  }

  &__about {
    padding: 40px 0;
    width: 50%;
    margin: 0 auto;
    text-align: left;
    font-size: 22px;
    font-family: $font-text;
    font-weight: 500;

    @include mobile {
      font-size: 18px;
      width: 90%;
    }

    @include tablet {
      font-size: 18px;
      width: 90%;
    }
  }

  &__grid {
    display: grid;
    width: 100%;
  }

  &__categories-grid {
    gap: 60px;
    grid-template-columns: 1fr 1fr;
    width: 80%;
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
    justify-content: space-between;
    gap: 20px;

    @include mobile {
      flex-direction: column;
      gap: 0;
    }
  }

  &__categories-element-title {
    font-family: $font-title;
    font-weight: 600;
    color: var(--blue);
    padding-left: 25px;
    flex: 0.4;

    @include mobile {
      font-size: 12px;
      padding-left: 0;
    }
  }

  &__categories-element-text {
    font-family: $font-text;
    font-weight: 500;
    width: 80%;
    flex: 0.6;

    @include mobile {
      font-size: 14px;
      flex: 0.6;
      width: 100%;
    }
  }
}
</style>
