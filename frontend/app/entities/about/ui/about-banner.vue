<template>
  <!-- Пока что только для ПК -->

  <div class="banner">
    <ClientOnly>
      <swiper-container
      :slides-per-view="1.5"
      :breakpoints="{
        750:{
          slidesPerView: 2.5
        },
        992:{
          slidesPerView: 5
        }
      }"
      :pagination="{
        el: '.banner__dots',
        clickable: true,
      }"
      class="banner-swiper"
      >
        <swiper-slide class="banner-slide">
          <img class="banner__img" src="~/assets/img/developers/about1.png" />
        </swiper-slide>
        <swiper-slide class="banner-slide">
          <img class="banner__img" src="~/assets/img/developers/about2.png" />
        </swiper-slide>
        <swiper-slide class="banner-slide">
          <img class="banner__img" src="~/assets/img/developers/about3.png" />
        </swiper-slide>
        <swiper-slide class="banner-slide">
          <img class="banner__img" src="~/assets/img/developers/about4.png" />
        </swiper-slide>
        <swiper-slide class="banner-slide">
          <img class="banner__img" src="~/assets/img/developers/about5.png" />
        </swiper-slide>
      </swiper-container>  
    </ClientOnly>

    <div class="banner__dots"></div>

  </div>
</template>

<style lang="scss" scoped>
.banner {
  width: 100%;
  padding: 50px 0;

  &_swiper{
    width: 100%;
  }

  &__slide{
    width: 25%;
  }

  &__img {
    width: 100%;
  }

  &__dots{
    display: flex;
    gap: 8px;
    width: auto !important;
    justify-content: center;
    

    :deep(.swiper-pagination-bullet) {
      width: 20px;
      height: 4px;
      background-color: var(--gray);
      opacity: 0.5;
      margin: 0 !important;
      transition: all 0.3s ease;
      border-radius: 1.5em;
    }

    :deep(.swiper-pagination-bullet-active) {
      background-color: var(--blue-button);
      opacity: 1;
      width: 30px;
    }
  }
}
</style>
