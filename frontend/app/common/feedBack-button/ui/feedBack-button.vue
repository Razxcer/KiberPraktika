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
        <svg class="ui-icon-button__content"
          width="14" 
          height="13" 
          viewBox="0 0 14 13" 
          fill="none" 
          style="transform:translate(-0.6px, 0.7px);" 
          xmlns="http://www.w3.org/2000/svg">
          <path class="tg-icon__path" fill-rule="evenodd" clip-rule="evenodd" d="M12.1847 0.95331C12.3494 0.883971 12.5297 0.860056 12.7069 
          0.884055C12.884 0.908054 13.0514 0.979089 13.1918 1.08977C13.3321 1.20044 13.4403 1.34672 13.5049 1.51337C13.5695 
          1.68001 13.5883 1.86094 13.5593 2.03731L12.0473 11.2086C11.9007 12.0933 10.93 12.6006 10.1187 12.16C9.43999 11.7913 
          8.43199 11.2233 7.52533 10.6306C7.07199 10.334 5.68333 9.38398 5.85399 8.70798C6.00066 8.12998 8.33399 5.95798 9.66733 
          4.66664C10.1907 4.15931 9.95199 3.86664 9.33399 4.33331C7.79933 5.49198 5.33533 7.25398 4.52066 7.74998C3.80199 8.18731 
          3.42733 8.26198 2.97933 8.18731C2.16199 8.05131 1.40399 7.84064 0.785326 7.58398C-0.0506738 7.23731 -0.0100072 6.08798 
          0.784659 5.75331L12.1847 0.95331Z" fill="currentColor"></path>
        </svg>
    </button>
  </a>
</template>

<style lang="scss">
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