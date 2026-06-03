<script setup lang="ts">
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
} from 'vue-yandex-maps';

const mapCenter: [number, number] = [83.7573, 53.3551];
const mapZoom = 16;
</script>

<template>
  <section class="map">
    <div class="map__container">
      <YandexMap
        :settings="{
          location: {
            center: mapCenter,
            zoom: mapZoom,
          },
        }"
        class="map__canvas"
      >
        <YandexMapDefaultSchemeLayer />
        <YandexMapDefaultFeaturesLayer />

        <YandexMapMarker :settings="{ coordinates: mapCenter }">
          <div class="map__pin">
            <span class="map__pin-text">КИБЕРИЯ</span>
            <div class="map__pin-arrow"></div>
          </div>
        </YandexMapMarker>
      </YandexMap>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.map {
  width: 100%;

  &__container {
    width: 80%;
    height: 500px;
  }

  &__canvas {
    width: 100%;
    height: 100%;
    border-radius: 24px;
  }

  &__pin {
    position: relative;
    background-color: var(--blue-button); // Наш фирменный синий цвет
    color: var(--white);
    padding: 8px 16px;
    border-radius: 12px;
    font-family: $font-text;
    font-weight: 600;
    font-size: 14px;
    white-space: nowrap;
    box-shadow: 0 4px 15px rgba(45, 65, 249, 0.3);

    // Центрируем маркер точно над точкой координат
    transform: translate(-50%, -100%) translateY(-10px);

    &-arrow {
      position: absolute;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid var(--blue-button); // Стрелочка пина смотрит вниз
    }
  }
}
</style>
