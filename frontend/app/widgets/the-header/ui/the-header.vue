<script setup lang="ts">
// Переменная отслеживает, прокрутил ли пользователь страницу
const isScrolled = ref(false);

const handleScroll = () => {
  // Если прокрутили больше 20 пикселей, включаем темное состояние
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  // Включаем слежку за скроллом при заходе на сайт
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  // Убираем слежку при уходе с сайта
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <!-- Динамически добавляем классthe-header--scrolled на основе переменнойisScrolled -->
  <header :class="['the-header', { 'the-header--scrolled': isScrolled }]">
    <div class="the-header__container">
      
      <!-- Логотип -->
      <div class="the-header__logo">
        <span class="the-header__logo-text">КИБЕРИЯ</span>
      </div>

      <!-- Меню навигации -->
      <nav class="the-header__nav">
        <ul class="the-header__menu">
          <li class="the-header__menu-item"><a href="#projects" class="the-header__link">Проекты</a></li>
          <li class="the-header__menu-item"><a href="#services" class="the-header__link">Услуги</a></li>
          <li class="the-header__menu-item"><a href="#about" class="the-header__link">О компании</a></li>
          <li class="the-header__menu-item"><a href="#career" class="the-header__link">Карьера</a></li>
          <li class="the-header__menu-item"><a href="#blog" class="the-header__link">Блог</a></li>
          <li class="the-header__menu-item"><a href="#news" class="the-header__link">Новости</a></li>
          <li class="the-header__menu-item"><a href="#contacts" class="the-header__link">Контакты</a></li>
        </ul>
      </nav>

      <!-- Соцсети (Иконки справа) -->
      <div class="the-header__socials">
        <TgButton/>
        <MaxButton/>
        <VkButton/>
      </div>

    </div>
  </header>
</template>

<style lang="scss" scoped>
.the-header {
  // Фиксируем шапку наверху экрана
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  
  // Дефолтное (светлое) состояние шапки
  background-color: transparent; 
  color: var(--dark);
  padding: 24px 0;
  
  // Плавный переход для цвета фона, отступов и текста при скролле
  transition: background-color 0.4s ease, padding 0.4s ease, color 0.4s ease;

  &__container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 var(--base-padding-x);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo-text {
    font-weight: 800;
    font-size: 24px;
    letter-spacing: 1px;
  }

  &__menu {
    display: flex;
    gap: 24px;
    list-style: none;
    margin: 0;
    padding: 0;
    
    @include mobile {
      display: none; // Скрываем обычное меню на мобилках по ТЗ
    }
  }

  &__link {
    color: inherit; // Наследует цвет от родительского the-header
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }

  &__socials {
    display: flex;
    gap: 10px;
  }

  &__social-icon {
    width: 32px;
    height: 32px;
    border: 1px solid currentColor;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    text-decoration: none;
    color: inherit;
  }

  // ==========================================
  // МОДИФИКАТОР БЭМ: Состояние при скролле вниз
  // ==========================================
  &--scrolled {
    background-color: var(--dark); // Меняем фон на темно-синий
    color: var(--white);           // Меняем весь текст внутри на белый
    padding: 14px 0;               // Шапка становится чуть уже и изящнее
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); // Мягкая тень снизу
    border-radius: 0 0 24px 24px; 
  }
}
</style>