<template>
  <section class="the-hero">
    <!-- Синяя декоративная SVG-снежинка на заднем фоне -->
    <div class="the-hero__bg-snowflake" aria-hidden="true">
      <img src="~assets/img/star.svg" alt="Снежинка"/>
    </div>

    <div class="the-hero__container">
      <!-- ЛЕВАЯ ЧАСТЬ: Контент и кнопки -->
      <div class="the-hero__content">
        
        <!-- Сложный заголовок (Разр*батываем...) с использованием новых шрифтов -->
        <h2 class="the-hero__title">
          Разрабатываем сложные ИТ-продукты: 
          e-ком, веб-cервисы, ИИ
        </h2>

        <!-- Блок управления (Кнопка + Соцсети) -->
        <div class="the-hero__actions">
          <!-- <button class="the-hero__btn-discuss text-h9">Обсудить проект</button> -->
          <FeedBackButton/>
          <div class="the-hero__socials">
            <MessIconsFilled/>
          </div>
        </div>

        <!-- Вывеска "30 место" -->
        <div class="the-hero__badge">
          <div class="the-hero__badge-number-box">
            <span class="the-hero__badge-digit">30</span>
            <span class="the-hero__badge-text-low text-h10">место</span>
          </div>
          <p class="the-hero__badge-desc text-h10">
            Разработка сайтов и веб-сервисов в среднем ценовом сегменте
          </p>
        </div>

      </div>

      <!-- ПРАВАЯ ЧАСТЬ: Фотография девушек -->
      <div class="the-hero__image-box">
        <!-- Когда найдете фото, просто замените путь в src -->
        <img 
          src="~assets/img/banner-pic-2.avif" 
          alt="Команда разработки" 
          class="the-hero__team-photo"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.the-hero {
  position: relative;
  // Цвет фона берем из палитры (темно-синий/фиолетовый)
  background-color: var(--blue-button); 
  border-radius: 40px; // Большое скругление краев баннера
  margin: 20px var(--base-padding-x);
  overflow: hidden;
  color: var(--white);

  // Снежинка на заднем плане
  &__bg-snowflake {
    position: absolute;
    right: -10%;
    top: -20%;
    width: 60%;
    height: 140%;
    color: var(--blue); // Чуть темнее основного фона баннера
    opacity: 0.6;
    pointer-events: none;
    z-index: 1;
    
    svg {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__container {
    position: relative;
    z-index: 2;
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    padding: 50px 50px 0 50px;

    @include mobile {
      flex-direction: column;
      padding: 40px 20px;
    }
    @include tablet {
      padding: 50px 30px;
    }
  }

  // Левый блок контента
  &__content {
    flex: 1.2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 3;
  }

  // Главный заголовок
  &__title {
    font-family: $font-title;
    font-weight: 600;
    line-height: 1.2;
    margin: 0 0 40px 0;

    @include mobile { font-size: 28px; }
    @include tablet { font-size: 40px; }
    @include desktop { font-size: 54px; }

    // Стилизация цветных знаков внутри текста, как на баннере
    &-star { color: var(--purple-light-2); }
    &-amp { color: var(--turquoise); }
    &-dollar { color: var(--purple-light-2); }
    &-equal { color: var(--gray); }
  }

  // Блок кнопок
  &__actions {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 50px;

    @include mobile {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  // Кнопка "Обсудить проект"
  &__btn-discuss {
    background-color: var(--dark);
    color: var(--white);
    border: none;
    padding: 16px 36px;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 600;
    transition: transform 0.2s ease, background-color 0.2s ease;

    &:hover {
      background-color: var(--dark-2);
      transform: translateY(-2px);
    }
  }

  &__socials {
    display: flex;
    gap: 12px;
  }

  // Вывеска "30 место"
  &__badge {
    display: flex;
    align-items: center;
    gap: 16px;
    background-color: rgba(11, 13, 32, 0.6); // Прозрачный темный фон
    backdrop-filter: blur(10px); // Эффект матового стекла
    border-radius: 30px;
    padding: 12px 24px;
    align-self: flex-start;
    max-width: 380px;

    &-number-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1;
    }

    &-digit {
      font-family: $font-title;
      font-size: 38px;
      font-weight: 600;
      color: var(--blue-light);
    }

    &-text-low {
      font-family: $font-title;
      text-transform: uppercase;
      font-size: 10px;
      color: var(--blue-light);
      margin-top: 4px;
    }

    &-desc {
      margin: 0;
      color: var(--gray);
      line-height: 1.4;
    }
  }

  // Правый блок с фото девушек
  &__image-box {
    flex: 0.8;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    @include mobile {
      margin-top: 40px;
      justify-content: center;
    }
  }

  &__team-photo {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    // Делаем так, чтобы снизу фото ровно прижималось к краю баннера
    display: block; 
    z-index: 2;
  }
}
</style>
