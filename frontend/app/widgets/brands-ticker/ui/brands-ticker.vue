<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const modules = [Autoplay];
</script>

<template>
  <section class="brands-ticker">
    <div class="brands-ticker__container">
      <Swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="80"
        :loop="true"
        :speed="4000"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        class="brands-ticker__slider"
      >
        <SwiperSlide class="brands-ticker__slide" style="animation-delay: 0s">
          <div class="brands-ticker__item">
            <IconGazpromNeft/>
          </div>
        </SwiperSlide>

        <SwiperSlide class="brands-ticker__slide" style="animation-delay: 0.4s">
          <div class="brands-ticker__item">
            <IconManna/>
          </div>
        </SwiperSlide>

        <SwiperSlide class="brands-ticker__slide" style="animation-delay: 0.8s">
          <div class="brands-ticker__item">
            <IconItKit/>
          </div>
        </SwiperSlide>

        <SwiperSlide class="brands-ticker__slide" style="animation-delay: 1.2s">
          <div class="brands-ticker__item">
            <IconComfortel/>
          </div>
        </SwiperSlide>

        <SwiperSlide class="brands-ticker__slide" style="animation-delay: 1.6s">
          <div class="brands-ticker__item">
            <IconIntegraSources/>
          </div>
        </SwiperSlide>

        <SwiperSlide class="brands-ticker__slide" style="animation-delay: 2s">
          <div class="brands-ticker__item">
            <IconDveridoff/>
          </div>
        </SwiperSlide>

        <SwiperSlide class="brands-ticker__slide" style="animation-delay: 2.4s">
          <div class="brands-ticker__item">
            <IconSmart/>
          </div>
        </SwiperSlide>

        <SwiperSlide class="brands-ticker__slide" style="animation-delay: 2.8s">
          <div class="brands-ticker__item">
            <IconForkagro/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@keyframes float-y {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  } 
  100% {
    transform: translateY(0);
  }
}

.brands-ticker {
  width: 100%;
  padding: 30px 0;
  background-color: var(--white);
  overflow: hidden;

  :deep(.swiper-wrapper) {
    transition-timing-function: linear !important;
    padding-top: 20px;
  }

  &__slide {
    width: auto !important;
    display: flex;
    align-items: center;
    animation: float-y 3s infinite ease-in-out;
  }

  &__item {
    color: var(--gray);
    opacity: 0.6;
    white-space: nowrap;
    transition: opacity 0.3s ease;

    svg,
    img {
      height: 32px;
      width: auto;
      display: block;
    }

    &:hover {
      opacity: 1;
    }
  }
}
</style>
