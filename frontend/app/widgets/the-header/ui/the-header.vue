<script setup lang="ts">
const isScrolled = ref(false);
const isMenuOpen = ref(false);
const currentLink = ref('');

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header :class="['the-header', { 'the-header--scrolled': isScrolled }]">
    <div class="the-header__container">
      <!-- Логотип -->
      <NuxtLink to="/" class="the-header__logo" aria-label="Киберия">
        <span class="the-header__logo-wrapper">
          <svg
            width="174"
            height="33"
            viewBox="0 0 174 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="the-header__logo-svg"
          >
            <path
              d="M170.123 21.133V25.1649H161.696L161.669 25.0551C160.125 25.0551 158.77 24.79 157.603 24.2597C156.454 
            23.7295 155.557 22.9798 154.911 22.0107C154.282 21.0415 153.968 19.9079 153.968 18.6096C153.968 17.2748 154.282 
            16.1228 154.911 15.1537C155.557 14.1663 156.454 13.3983 157.603 12.8498C158.77 12.2829 160.125 11.9995 161.669 
            11.9995H174.001V32.5704H168.4V13.508L170.904 16.0588H162.477C161.561 16.0588 160.843 16.2874 160.323 16.7445C159.82 
            17.1834 159.569 17.8051 159.569 18.6096C159.569 19.3959 159.82 20.0176 160.323 20.4747C160.843 20.9135 161.561 21.133 
            162.477 21.133H170.123ZM166.785 22.9432L159.892 32.5704H153.43L160.538 22.9432H166.785Z"
              fill="currentColor"
              style="opacity: 1"
            ></path>
            <path
              d="M127.711 32.5704V11.9995H133.207V29.5807L131.672 29.2242L143.123 11.9995H150.425V32.5704H144.901V14.66L146.464 
            15.0166L134.797 32.5704H127.711Z"
              fill="currentColor"
              style="opacity: 1"
            ></path>
            <path
              d="M116.893 11.9995C118.599 11.9995 120.07 12.2921 121.304 12.8772C122.557 13.4623 123.51 14.2943 124.163 
            15.3731C124.817 16.4337 125.143 17.6771 125.143 19.1033C125.143 20.5113 124.817 21.7547 124.163 22.8335C123.51 
            23.894 122.557 24.7169 121.304 25.302C120.07 25.8871 118.599 26.1797 116.893 26.1797H108.044V21.6267H116.539C117.447 
            21.6267 118.155 21.4072 118.663 20.9684C119.171 20.5113 119.425 19.8896 119.425 19.1033C119.425 18.2988 119.171 17.6771 
            118.663 17.2382C118.155 16.7811 117.447 16.5525 116.539 16.5525H108.534L111.066 13.9195V32.5704H105.43V11.9995H116.893Z"
              fill="currentColor"
              style="opacity: 1"
            ></path>
            <path
              d="M101.104 20.2279V24.342H86.2518V20.2279H101.104ZM88.7408 22.2849V30.5407L86.4683 
            27.9625H101.997V32.5704H83.1406V22.2849V11.9995H101.862V16.6074H86.4683L88.7408 14.0292V22.2849Z"
              fill="currentColor"
              style="opacity: 1"
            ></path>
            <path
              d="M64.2178 19.8164H73.1184C74.8215 19.8164 76.2197 20.0816 77.3133 20.6118C78.4068 21.1421 79.2224 21.8918 
            79.7602 22.8609C80.298 23.8118 80.5669 24.9271 80.5669 26.2071C80.5669 27.4871 80.2712 28.6116 79.6796 29.5807C79.088 30.5316 
            78.2365 31.2721 77.125 31.8024C76.0136 32.3144 74.678 32.5704 73.1184 
            32.5704H59.9961V21.9009V11.9995H79.0073V16.3057H63.4649L65.3359 13.7V21.7912V31.0344L63.3573 28.4288H72.3924C73.1991 28.4288 
            73.8355 28.2185 74.3016 27.7979C74.7856 27.3774 75.0276 26.8014 75.0276 26.07C75.0276 25.3203 74.7856 24.7443 74.3016 
            24.342C73.8355 23.9215 73.1991 23.7112 72.3924 23.7112H64.2178V19.8164Z"
              fill="currentColor"
              style="opacity: 1"
            ></path>
            <path
              d="M33.8555 32.5704V11.9995H39.352V29.5807L37.8162 29.2242L49.2673 11.9995H56.5691V32.5704H51.0456V14.66L52.6084 
            15.0166L40.9417 32.5704H33.8555Z"
              fill="currentColor"
              style="opacity: 1"
            ></path>
            <path
              d="M9.85547 32.5704V22.7512H15.5582V28.0448L14.0357 26.8654L25.8011 11.9995H31.8637L15.0323 32.5704H9.85547ZM19.7661 
            22.7512L23.974 19.2953L32.1406 32.5704H25.635L19.7661 22.7512Z"
              fill="currentColor"
            ></path>
            <path
              d="M8.2919 3.82403L4.94141 6.40308L8.82158 10.2341L8.96964 8.14075L11.0312 8.53324L8.2919 
            3.82403Z"
              fill="currentColor"
            ></path>
            <path
              d="M10.3397 10.0017L22.3676 13.0707L19.2831 16.7137L14.1539 14.9569L14.6591 20.7522L10.3561 
            20.7791L10.3397 10.0017Z"
              fill="#2d41f9"
            ></path>
            <path
              d="M3.19717 12.3614L4.78175 16.4199L9.22277 14.7608L9.13639 10.6487L3.19717 12.3614Z"
              fill="currentColor"
            ></path>
            <path
              d="M14.5255 3.645L18.0435 6.2153L15.3033 10.084L11.3502 8.94829L14.5255 3.645Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </NuxtLink>

      <!-- Меню навигации -->
      <nav class="the-header__nav">
        <ul class="the-header__menu">
          <li class="the-header__menu-item">
            <NuxtLink to="/projects" class="the-header__link">Проекты</NuxtLink>
          </li>
          <li class="the-header__menu-item">
            <NuxtLink to="/services" class="the-header__link">Услуги</NuxtLink>
          </li>
          <li class="the-header__menu-item">
            <NuxtLink to="/about" class="the-header__link">О компании</NuxtLink>
          </li>
          <li class="the-header__menu-item">
            <NuxtLink to="/career" class="the-header__link">Карьера</NuxtLink>
          </li>
          <li class="the-header__menu-item">
            <NuxtLink to="/blog" class="the-header__link">Блог</NuxtLink>
          </li>
          <li class="the-header__menu-item">
            <NuxtLink to="/news" class="the-header__link">Новости</NuxtLink>
          </li>
          <li class="the-header__menu-item">
            <NuxtLink to="/contacts" class="the-header__link">Контакты</NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Соцсети -->
      <div class="the-header__socials">
        <TgButton class="the-header__social--special" />
        <MaxButton class="the-header__social" />
        <VkButton class="the-header__social" />
      </div>

      <!-- Иконка бургер-меню -->
      <button class="the-header__burger" aria-label="Открыть меню" @click="toggleMenu">
        <span class="the-header__burger-line"></span>
        <span class="the-header__burger-line"></span>
        <span class="the-header__burger-line"></span>
      </button>
    </div>

    <!-- МОБИЛЬНОЕ ОВЕРЛЕЙ-МЕНЮ -->
    <div
      :class="['the-header__mobile-overlay', { 'the-header__mobile-overlay--active': isMenuOpen }]"
    >
      <div class="the-header__mobile-wrapper">
        <!-- Шапка внутри мобильного меню (Лого + Крестик) -->
        <div class="the-header__mobile-top">
          <a href="/" class="the-header__logo" aria-label="Киберия">
            <span class="the-header__logo-wrapper">
              <svg
                width="174"
                height="33"
                viewBox="0 0 174 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="the-header__logo-svg"
              >
                <path
                  d="M170.123 21.133V25.1649H161.696L161.669 25.0551C160.125 25.0551 158.77 24.79 157.603 24.2597C156.454 
                23.7295 155.557 22.9798 154.911 22.0107C154.282 21.0415 153.968 19.9079 153.968 18.6096C153.968 17.2748 154.282 
                16.1228 154.911 15.1537C155.557 14.1663 156.454 13.3983 157.603 12.8498C158.77 12.2829 160.125 11.9995 161.669 
                11.9995H174.001V32.5704H168.4V13.508L170.904 16.0588H162.477C161.561 16.0588 160.843 16.2874 160.323 16.7445C159.82 
                17.1834 159.569 17.8051 159.569 18.6096C159.569 19.3959 159.82 20.0176 160.323 20.4747C160.843 20.9135 161.561 21.133 
                162.477 21.133H170.123ZM166.785 22.9432L159.892 32.5704H153.43L160.538 22.9432H166.785Z"
                  fill="currentColor"
                  style="opacity: 1"
                ></path>
                <path
                  d="M127.711 32.5704V11.9995H133.207V29.5807L131.672 29.2242L143.123 11.9995H150.425V32.5704H144.901V14.66L146.464 
                15.0166L134.797 32.5704H127.711Z"
                  fill="currentColor"
                  style="opacity: 1"
                ></path>
                <path
                  d="M116.893 11.9995C118.599 11.9995 120.07 12.2921 121.304 12.8772C122.557 13.4623 123.51 14.2943 124.163 
                15.3731C124.817 16.4337 125.143 17.6771 125.143 19.1033C125.143 20.5113 124.817 21.7547 124.163 22.8335C123.51 
                23.894 122.557 24.7169 121.304 25.302C120.07 25.8871 118.599 26.1797 116.893 26.1797H108.044V21.6267H116.539C117.447 
                21.6267 118.155 21.4072 118.663 20.9684C119.171 20.5113 119.425 19.8896 119.425 19.1033C119.425 18.2988 119.171 17.6771 
                118.663 17.2382C118.155 16.7811 117.447 16.5525 116.539 16.5525H108.534L111.066 13.9195V32.5704H105.43V11.9995H116.893Z"
                  fill="currentColor"
                  style="opacity: 1"
                ></path>
                <path
                  d="M101.104 20.2279V24.342H86.2518V20.2279H101.104ZM88.7408 22.2849V30.5407L86.4683 
                27.9625H101.997V32.5704H83.1406V22.2849V11.9995H101.862V16.6074H86.4683L88.7408 14.0292V22.2849Z"
                  fill="currentColor"
                  style="opacity: 1"
                ></path>
                <path
                  d="M64.2178 19.8164H73.1184C74.8215 19.8164 76.2197 20.0816 77.3133 20.6118C78.4068 21.1421 79.2224 21.8918 
                79.7602 22.8609C80.298 23.8118 80.5669 24.9271 80.5669 26.2071C80.5669 27.4871 80.2712 28.6116 79.6796 29.5807C79.088 30.5316 
                78.2365 31.2721 77.125 31.8024C76.0136 32.3144 74.678 32.5704 73.1184 
                32.5704H59.9961V21.9009V11.9995H79.0073V16.3057H63.4649L65.3359 13.7V21.7912V31.0344L63.3573 28.4288H72.3924C73.1991 28.4288 
                73.8355 28.2185 74.3016 27.7979C74.7856 27.3774 75.0276 26.8014 75.0276 26.07C75.0276 25.3203 74.7856 24.7443 74.3016 
                24.342C73.8355 23.9215 73.1991 23.7112 72.3924 23.7112H64.2178V19.8164Z"
                  fill="currentColor"
                  style="opacity: 1"
                ></path>
                <path
                  d="M33.8555 32.5704V11.9995H39.352V29.5807L37.8162 29.2242L49.2673 11.9995H56.5691V32.5704H51.0456V14.66L52.6084 
                15.0166L40.9417 32.5704H33.8555Z"
                  fill="currentColor"
                  style="opacity: 1"
                ></path>
                <path
                  d="M9.85547 32.5704V22.7512H15.5582V28.0448L14.0357 26.8654L25.8011 11.9995H31.8637L15.0323 32.5704H9.85547ZM19.7661 
                22.7512L23.974 19.2953L32.1406 32.5704H25.635L19.7661 22.7512Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M8.2919 3.82403L4.94141 6.40308L8.82158 10.2341L8.96964 8.14075L11.0312 8.53324L8.2919 
                3.82403Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M10.3397 10.0017L22.3676 13.0707L19.2831 16.7137L14.1539 14.9569L14.6591 20.7522L10.3561 
                20.7791L10.3397 10.0017Z"
                  fill="#49ffe9"
                ></path>
                <path
                  d="M3.19717 12.3614L4.78175 16.4199L9.22277 14.7608L9.13639 10.6487L3.19717 12.3614Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M14.5255 3.645L18.0435 6.2153L15.3033 10.084L11.3502 8.94829L14.5255 3.645Z"
                  fill="currentColor"
                ></path>
              </svg>
              <!-- <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg" class="b-letter" style="opacity:0;scale:none;translate:none;rotate:none;transform:scale(0, 0);" data-v-9c2cce72=""><path d="M43.375 0V6.125H12.75V18.375H18.875V24.5H12.75V36.75H31.125V18.375H18.875V12.25H37.25V18.375H43.375V36.75H37.25V42.875H6.625V36.75H0.5V6.125H6.625V0H43.375Z" fill="#0B0D20" data-v-9c2cce72=""></path></svg><svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg" class="star star-1" style="opacity: 0; transform: scale(0);" data-v-9c2cce72=""><path d="M14.6766 0.338998H24.3046L23.7236 13.038L35.5926 8.39L38.5806 17.603L26.2966 21.006L34.4306 30.966L26.6286 36.61L19.4906 25.986L12.3526 36.61L4.5506 30.966L12.6846 21.006L0.483598 17.603L3.3886 8.39L15.3406 13.038L14.6766 0.338998Z" fill="#9E70FF" data-v-9c2cce72=""></path></svg><svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg" class="star star-2" style="opacity: 0; transform: scale(0);" data-v-9c2cce72=""><path d="M14.6766 0.338998H24.3046L23.7236 13.038L35.5926 8.39L38.5806 17.603L26.2966 21.006L34.4306 30.966L26.6286 36.61L19.4906 25.986L12.3526 36.61L4.5506 30.966L12.6846 21.006L0.483598 17.603L3.3886 8.39L15.3406 13.038L14.6766 0.338998Z" fill="#2D41F9" data-v-9c2cce72=""></path></svg><svg class="sharp" width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg" style="opacity: 0; transform: scale(0);" data-v-9c2cce72=""><path d="M11.3533 0.499997H19.9953L14.8913 44H6.24933L11.3533 0.499997ZM31.0733 0.499997H39.7153L34.6113 44H25.9693L31.0733 0.499997ZM2.18933 11.288H45.1673V18.712H2.18933V11.288ZM0.797328 25.846H43.7753V33.27H0.797328V25.846Z" fill="#49FFE9" data-v-9c2cce72=""></path></svg><svg class="r-letter" width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg" style="opacity: 0; transform: scale(0);" data-v-9c2cce72=""><path d="M0.5 42.875V0H37.25V6.125H43.375V24.5H37.25V30.625H12.75V42.875H0.5ZM12.75 24.5H31.125V6.125H12.75V24.5Z" fill="#9E70FF" data-v-9c2cce72=""></path></svg><svg class="comment" width="42" height="48" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="opacity:0;" data-v-9c2cce72=""><path d="M16.8684 0.933999H25.1044L8.86441 47.566H0.628406L16.8684 0.933999ZM33.1243 0.933999H41.3603L25.1203 47.566H16.8843L33.1243 0.933999Z" fill="#49FFE9" data-v-9c2cce72=""></path></svg> -->
            </span>
          </a>
          <button class="the-header__close-btn" aria-label="Закрыть меню" @click="toggleMenu">
            ✕
          </button>
        </div>

        <!-- Белое меню со ссылками -->
        <nav class="the-header__mobile-nav-box">
          <ul class="the-header__mobile-menu">
            <li>
              <NuxtLink to="/projects" class="the-header__mobile-link" @click="toggleMenu"
                >Проекты</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/services"
                class="the-header__mobile-link the-header__mobile-link--active"
                @click="toggleMenu"
                >Услуги</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/about" class="the-header__mobile-link" @click="toggleMenu"
                >О компании</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/career" class="the-header__mobile-link" @click="toggleMenu"
                >Карьера</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/blog" class="the-header__mobile-link" @click="toggleMenu"
                >Блог</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/news" class="the-header__mobile-link" @click="toggleMenu"
                >Новости</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/contacts" class="the-header__mobile-link" @click="toggleMenu"
                >Контакты</NuxtLink
              >
            </li>
          </ul>
        </nav>

        <!-- Темный блок контактов -->
        <div class="the-header__mobile-contacts">
          <a href="tel:+79609591866" class="the-header__mobile-phone">+7 960 959 18 66</a>
          <a href="mailto:hello@cyberia.studio" class="the-header__mobile-email"
            >hello@cyberia.studio</a
          >

          <div class="the-header__mobile-socials">
            <TgButton />
            <MaxButton />
            <VkButton />
          </div>
        </div>

        <!-- Кнопка в самом низу -->
        <button class="the-header__mobile-action-btn">Обсудить проект</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.the-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: transparent;
  color: var(--dark);
  --current-color: var(--dark); //Переменная для градиента
  padding: 24px 0;

  transition:
    background-color 0.4s ease,
    padding 0.4s ease,
    color 0.4s ease;

  &__container {
    max-width: 3050px;
    margin: 0 auto;
    padding: 0 var(--base-padding-x);
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include mobile {
      padding: 0 calc(var(--base-padding-x) / 4);
    }
  }

  &__logo-svg {
    @include mobile {
      transform: scale(0.8);
    }
  }

  &__menu {
    display: flex;
    gap: 24px;
    list-style: none;
    margin: 0;
    padding: 0;
    font-weight: 600;

    @include tablet {
      display: none;
    }

    @include mobile {
      display: none;
    }
  }

  &__link {
    // Сслыки - градиент, в 2.5 раза шире фон и двигается
    color: inherit;
    text-decoration: none;
    font-weight: 600;

    background-image: linear-gradient(
      to right,
      var(--current-color) 40%,
      var(--purple-dark) 60%,
      var(--purple-light) 80%,
      var(--blue-dodger) 100%
    );

    background-size: 250% 100%;
    background-position: left center;
    background-clip: text;
    color: transparent;

    transition: background-position 0.1s ease;

    &:hover {
      background-position: right center;
    }

    &.router-link-active {
      background-position: right center;
    }
  }

  &__nav,
  &__social {
    @include mobile {
      display: none;
    }
    @include tablet {
      display: none;
    }
  }

  &__socials {
    display: flex;
    gap: 10px;

    @include mobile {
      margin-left: auto;
      margin-right: 10px;
    }
    @include tablet {
      margin-left: auto;
      margin-right: 20px;
    }
  }

  &__burger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 5px;

    @include mobile {
      display: flex;
    }
    @include tablet {
      display: flex;
    }
  }

  &__burger-line {
    display: block;
    width: 24px;
    height: 2px;
    background-color: currentColor; // Наследует цвет текста шапки
    transition: transform 0.3s ease;
  }

  // ==========================================

  &--scrolled {
    background-color: var(--dark);
    color: var(--white);
    --current-color: var(--white);
    padding: 14px 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 0 0 24px 24px;

    @include mobile {
      border-radius: 0 0 12px 12px;
    }

    .the-header__burger-line {
      color: var(--white);
    }
  }

  &__mobile-overlay {
    position: fixed;
    top: 0;
    right: -100%; // Изначально спрятано за правым краем экрана
    width: 100%;
    height: 100vh;
    background-color: var(--blue-button); // Яркий синий фон подложки
    z-index: 200;
    transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1); // Элегантная плавная анимация вылета
    color: var(--dark);

    &--active {
      right: 0; // Вылетает на экран при активации
    }
  }

  &__mobile-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 24px var(--base-padding-x);
    gap: 20px;
    overflow-y: auto; // На случай если на мелком телефоне весь контент не влезет в высоту
    box-sizing: border-box;

    @include tablet {
      padding: 24px calc(var(--base-padding-x) / 2);
    }

    @include mobile {
      padding: 24px calc(var(--base-padding-x) / 4);
    }
  }

  &__mobile-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--white);
    padding-bottom: 10px;
  }

  &__close-btn {
    background: transparent;
    border: none;
    color: var(--white);
    font-size: 28px;
    cursor: pointer;
  }

  // Белая карточка со ссылками меню
  &__mobile-nav-box {
    background-color: var(--white);
    border-radius: 24px;
    padding: 24px;
  }

  &__mobile-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__mobile-link {
    color: var(--dark);
    text-decoration: none;
    font-family: $font-text;
    font-size: 20px;
    font-weight: 600;
    display: block;
    color: inherit;
    text-decoration: none;

    background-image: linear-gradient(
      to right,
      var(--current-color) 40%,
      var(--purple-dark) 60%,
      var(--purple-light) 80%,
      var(--blue-dodger) 100%
    );

    background-size: 500% 100%;
    background-position: left center;
    background-clip: text;
    color: transparent;

    transition: background-position 0.1s ease;

    &:hover {
      background-position: right center;
    }

    &.router-link-active {
      background-position: right center;
    }
  }

  // Темно-синяя карточка контактов
  &__mobile-contacts {
    background-color: var(--dark); // Наш глубокий черный/темный цвет
    border-radius: 24px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: var(--white);
  }

  &__mobile-phone {
    font-family: $font-text;
    font-size: 18px;
    font-weight: 600;
    color: var(--white);
    text-decoration: none;
  }

  &__mobile-email {
    font-family: $font-text;
    font-size: 16px;
    color: var(--gray);
    text-decoration: none;
    margin-bottom: 8px;
  }

  &__mobile-socials {
    display: flex;
    gap: 12px;

    // Перебиваем цвета внутренних кнопок common под темный фон блока
    .ui-icon-button {
      border-color: rgba(255, 255, 255, 0.2);
      color: var(--white);
    }
  }

  // Нижняя фиолетовая кнопка действия
  &__mobile-action-btn {
    background-color: var(--purple-dark-2); // Наш фиолетовый из палитры
    color: var(--white);
    border: none;
    border-radius: 20px;
    padding: 18px;
    font-family: $font-text;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--purple);
    }
  }
}
</style>
