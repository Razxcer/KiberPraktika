<template>
  <!-- Вся кнопка с анимациями -->
  <a href="https://t.me/cyberia_studio" rel="nofollow" aria-label="Перейти в Telegram">
    <button class="ui-icon-button">
      <!-- Контейнер для летающих клякс -->
      <span class="ui-icon-button__over" aria-hidden="true">
        
        <!-- 1 клякса -->
        <svg width="74" height="70" viewBox="0 0 74 70" fill="none" xmlns="http://www.w3.org/2000/svg" 
        class="ui-icon-button__orb-blue">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.478 14.0988C43.2469 
            13.6875 49.2925 14.4557 53.639 18.3947C58.2258 22.5515 60.9952 28.7938 60.6354 35.0851C60.2914 
            41.1012 56.2318 45.9497 51.8365 49.914C47.7883 53.5652 42.8426 56.3118 37.478 55.9715C32.3729 
            55.6477 28.6556 51.6464 24.7812 48.1978C20.4111 44.3081 14.3087 41.0353 14.0124 35.0851C13.7112 
            29.038 18.9721 24.5142 23.4042 20.5503C27.4378 16.943 32.155 14.4783 37.478 14.0988Z" fill="currentColor">
            </path>
        </svg>

        <!-- 2 клякса -->
        <svg width="74" height="70" viewBox="0 0 74 70" fill="none" xmlns="http://www.w3.org/2000/svg" 
        class="ui-icon-button__orb-cyan">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.478 14.0988C43.2469 13.6875 49.2925 14.4557 53.639 
            18.3947C58.2258 22.5515 60.9952 28.7938 60.6354 35.0851C60.2914 41.1012 56.2318 45.9497 51.8365 49.914C47.7883 
            53.5652 42.8426 56.3118 37.478 55.9715C32.3729 55.6477 28.6556 51.6464 24.7812 48.1978C20.4111 44.3081 14.3087 
            41.0353 14.0124 35.0851C13.7112 29.038 18.9721 24.5142 23.4042 20.5503C27.4378 16.943 32.155 14.4783 37.478 14.0988Z" 
            fill="currentColor">
            </path>
        </svg>

        <!-- 3 клякса -->
        <svg width="74" height="70" viewBox="0 0 74 70" fill="none" xmlns="http://www.w3.org/2000/svg" 
        class="ui-icon-button__orb-pink">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.478 14.0988C43.2469 13.6875 49.2925 
            14.4557 53.639 18.3947C58.2258 22.5515 60.9952 28.7938 60.6354 35.0851C60.2914 41.1012 56.2318 
            45.9497 51.8365 49.914C47.7883 53.5652 42.8426 56.3118 37.478 55.9715C32.3729 55.6477 28.6556 51.6464 
            24.7812 48.1978C20.4111 44.3081 14.3087 41.0353 14.0124 35.0851C13.7112 29.038 18.9721 24.5142 23.4042 
            20.5503C27.4378 16.943 32.155 14.4783 37.478 14.0988Z" fill="currentColor">
            </path>
        </svg>

        <!-- PS:Можно и больше, главное красиво расположить -->
      </span>
      
      <!-- Контент самой кнопки (иконка) -->
        <span class="ui-icon-button__content text-h9">
        Обсудить проект
        </span>
    </button>
  </a>
</template>

<style lang="scss" scoped>
// 1. Анимация для всего контейнера с кляксами
@keyframes orbit-move {
  0% { transform: translate(-67%, -67%) rotate(0deg); }
  50% { transform: translate(-33%, -33%) rotate(180deg); }
  100% { transform: translate(-67%, -67%) rotate(360deg); }
}

// 2. Анимация для самих клякс (компенсация в противоположную сторону)
@keyframes orbit-compensate {
  0% { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
}

.ui-icon-button {
  --orb-blur: 7px; // Локальная переменная размытости клякс
  padding: 5px 0 5px 0;
  position: relative;
  width: 220px;  // Размеры круглой кнопки из дизайна
  height: 40px;
  border-radius: 1.5em;
  background: var(--dark);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  text-decoration: none;
  color: inherit;
  isolation: isolate; 
  overflow: hidden; // Регулировка границ

  &__over {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 74px;
    height: 70px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;

    animation: orbit-move 5s infinite linear;
  }

  &:hover &__over {
    opacity: 1;
  }

  &:hover{
    color: var(--white);
    border: none;
    background: var(--blue-button);
  }

  &__content {
    width: 60%;
    height: 60%;
    position: relative;
  }

  &__orb-blue, &__orb-cyan, &__orb-pink {
    position: absolute;
    top: 0;
    left: 0;
    width: 280px;
    height: 280px;
    transform-origin: center center;
    animation: orbit-compensate 5s infinite linear;
    filter: blur(var(--orb-blur)); 
  }
  &__orb-blue {
    color: var(--cerulean);
    margin-top: -70px;
    margin-left: -150px;
  }

  &__orb-cyan {
    color: var(--gradient-cyan-bright);
    margin-top: -150px;
    margin-left: -40px;
  }

  &__orb-pink {
    color: var(--gradient-pink-bright);
    margin-top: -40px;
    margin-left: -30px;
  }
}
</style>