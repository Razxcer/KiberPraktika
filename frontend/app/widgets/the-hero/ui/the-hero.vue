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

        <!-- Нижняя панель -->
        <div class="the-hero__actions">

          <!-- Блок управления (Кнопка + Соцсети) -->
          <div class="the-hero__socials">
            <FeedBackButton/>
            <MessIconsFilled/>
          </div>

          <!-- Вывеска "30 место" -->
          <div class="the-hero__badge">
            <div class="the-hero__badge-number-box">
              <span class="the-hero__badge-digit">30</span>
              <span class="the-hero__badge-text-low text-h10">место</span>
            </div>
            <p class="the-hero__badge-desc text-h10">
              Разработка сайтов и<br/>веб-сервисов в среднем<br/>ценовом сегменте
            </p>
          </div>
          
        </div>

        

      </div>

      <!-- ПРАВАЯ ЧАСТЬ: Фотография команды -->
      <div class="the-hero__image-box">
        <img 
          src="~assets/img/banner-pic-2.avif" 
          alt="Команда разработки" 
          class="the-hero__team-photo"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.the-hero {
  position: relative;
  background-color: var(--blue-button); 
  border-radius: 40px;
  margin: 20px var(--base-padding-x);
  overflow: hidden;
  color: var(--white);

  &__bg-snowflake {
    position: absolute;
    right: -10%;
    top: -20%;
    width: 60%;
    height: 140%;
    color: var(--blue);
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
  }

  // Блок кнопок
  &__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 50px;
    margin-bottom: 50px;
    max-width: 600px;

    @include mobile {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__socials {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }


  // Вывеска "30 место"
  &__badge {
    display: flex;
    align-items: center;
    gap: 16px;
    background-color: rgba(11, 13, 32, 0.9);
    border-radius: 30px;
    padding: 12px 24px;
    align-self: flex-start;
    max-width: 380px;
    rotate: -3deg;

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
      color: var(--white);
      font-weight: 600;
      line-height: 1.4;
    }
  }

  // Правый блок с фото команды
  &__image-box {
    flex: 0.5;
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
    display: block; 
    z-index: 2;
  }
}
</style>
