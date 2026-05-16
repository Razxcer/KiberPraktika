<template>
  <!-- Вся кнопка с анимациями -->
  <a href="https://max.ru/u/f9LHodD0cOIBm8wIxDYTM2XWn8RdEOYIcv8WTWWIiBFMVgTRn6EPkoc8IK0" rel="nofollow" aria-label="Перейти в Telegram">
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
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
      class="ui-icon-button__content">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.22281 4.45459C6.39124 4.35817 4.96194 5.63398 4.64676 7.63083C4.38575
        9.28447 4.84851 11.2994 5.24434 11.4009C5.41222 11.4439 5.81623 11.1337 6.11017 10.8554C6.16543 10.8031 6.24899 10.7943 
        6.3138 10.8341C6.772 11.1154 7.29077 11.3267 7.86269 11.3568C9.74302 11.4558 11.4093 9.97853 11.5078 8.09081C11.6063 
        6.20309 10.1031 4.55357 8.22281 4.45459ZM5.15571 14.0412C5.08479 13.9908 4.98709 14.0044 4.92765 14.0681C4.13329 14.9186 
        2.10032 15.5152 2.00719 14.3543C2.00719 13.4448 1.8037 12.6784 1.57965 11.8346C1.30524 10.8011 1 9.65152 1 7.98068C1 
        3.99638 4.2551 1 8.11456 1C11.974 1 15 4.14268 15 8.01937C15 11.8961 11.8777 14.9614 8.15108 14.9614C6.82896 14.9614 
        6.18738 14.7744 5.15571 14.0412Z" fill="currentColor">
        </path>
      </svg>
    </button>
  </a>
</template>

<style lang="scss" scoped>
// 1. Анимация для всего контейнера с кляксами
@keyframes orbit-move {
  0% { transform: translate(-60%, -60%) rotate(0deg); }
  50% { transform: translate(-40%, -40%) rotate(180deg); }
  100% { transform: translate(-60%, -60%) rotate(360deg); }
}

// 2. Анимация для самих клякс (компенсация в противоположную сторону)
@keyframes orbit-compensate {
  0% { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
}

.ui-icon-button {
  --orb-blur: 7px; // Локальная переменная размытости клякс

  position: relative;
  width: 40px;  // Размеры круглой кнопки из дизайна
  height: 40px;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid currentColor;
  text-decoration: none;
  color: inherit;
  isolation: isolate; 
  overflow: hidden; // Регулировка границ (hidden - внутри границы кнопки, visible - вылезает за границы кнопки)

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
    width: 74px;
    height: 70px;
    transform-origin: center center;
    animation: orbit-compensate 5s infinite linear;
    filter: blur(var(--orb-blur)); 
  }
  &__orb-blue {
    color: var(--blue);
    margin-top: -10px;
    margin-left: 5px;
  }

  &__orb-cyan {
    color: var(--gradient-cyan-bright);
    margin-top: 15px;
    margin-left: 0px;
  }

  &__orb-pink {
    color: var(--gradient-pink-bright);
    margin-top: 0px;
    margin-left: -20px;
  }
}
</style>