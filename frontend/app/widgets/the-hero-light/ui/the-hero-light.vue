<template>
  <section class="the-hero">
    <!-- Синяя декоративная SVG-снежинка на заднем фоне -->
    <div class="the-hero__bg-snowflake" aria-hidden="true">
      <!-- <img src="~assets/img/star.svg" alt="Снежинка"/> -->
       <svg width="492" height="340" viewBox="0 0 492 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M360.892 -53.2211L453.15 30.0675L338.176 146.23L491.952 204.548L441.21 318.318L294.184 244.529L286.316 409.943L163.726 397.03L186.062 233.177L26.134 272.815L-0.00155542 151.461L163.75 126.776L76.1547 -11.2465L183.365 -74.0377L257.848 73.7117L360.892 -53.2211Z" fill="#6ECCFF"/>
      </svg>

    </div>

    <div class="the-hero__container">
       <div class="the-hero__image-box">
        <img 
          src="~assets/img/banner-pic-2.avif" 
          alt="Команда разработки" 
          class="the-hero__team-photo"
        />
      </div>
      <div class="the-hero__content">
        
        <h2 class="the-hero__title">
          Обсудим ваш проект?
        </h2>

        <h4 class="the-hero__title-small">
          Сформируем четкий план реализации проекта в кратчайшие сроки и в рамках вашего бюджета
        </h4>

        <div class="the-hero__actions">
          <div class="the-hero__feedback">Обсудить проект</div>
          <MessIcons/>
        </div>

        

      </div>

      <!-- ПРАВАЯ ЧАСТЬ: Фотография команды -->
      
    </div>
  </section>
</template>

<style lang="scss" scoped>
.the-hero {
  position: relative;
  background-image: linear-gradient(to right, var(--blue-dodger-light), var(--blue));
  border-radius: 40px;
  margin: 20px var(--base-padding-x);
  overflow: hidden;
  color: var(--white);

  @include tablet{
    margin: 20px calc(var(--base-padding-x) / 2);
  }

  @include mobile{
    margin: 0px calc(var(--base-padding-x) / 4);
  }

  &__bg-snowflake {
    position: absolute;
    left: -10%;
    top: -20%;
    width: 60%;
    height: 140%;
    color: var(--turquoise);
    opacity: 0.6;
    pointer-events: none;
    z-index: 1;
    
    svg {
      fill: var(--turquoise);
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

    @include tablet {
      padding: 20px 10px 0 10px;
    }

    @include mobile {
      flex-direction: column;
      padding: 10px 15px;
    }
    
  }

  &__content {
    flex: 1.2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 3;
  }

  &__title {
    font-family: $font-title;
    font-weight: 600;
    line-height: 1.2;
    margin: 0 0 40px 0;

    @include mobile { font-size: 22px; }
    @include tablet { font-size: 40px; }
    @include desktop { font-size: 54px; }
  }

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

    @include tablet {
      flex: 0.6;
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
