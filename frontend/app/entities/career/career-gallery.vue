<template>
  <section class="gallery">
    <div class="gallery__container">
      <h2 class="gallery__title text-h3">А пока думаешь,<br />посмотри наши фоточки</h2>
      <div class="gallery__grid">
        <div class="gallery__item gallery__item--top-left">
          <img src="~/assets/img/team-photos/block-1/1-(1).jpg" class="gallery__img" />
        </div>
        <div class="gallery__item gallery__item--center-big">
          <img src="~/assets/img/team-photos/block-1/2-(1-2).jpg" class="gallery__img" />
        </div>
        <div class="gallery__item gallery__item--top-right">
          <img src="~/assets/img/team-photos/block-1/3-(1).jpg" class="gallery__img" />
        </div>
        <div class="gallery__item gallery__item--mid-left">
          <img src="~/assets/img/team-photos/block-1/4-(2-3).jpg" class="gallery__img" />
        </div>
        <div class="gallery__item gallery__item--bottom-small">
          <img src="~/assets/img/team-photos/block-1/5-(3).jpg" class="gallery__img" />
        </div>
        <div class="gallery__item gallery__item--mid-right">
          <img src="~/assets/img/team-photos/block-1/6-(2-3).jpg" class="gallery__img" />
        </div>
        <div class="gallery__item gallery__item--mid-right-2">
          <img src="~/assets/img/team-photos/block-2/1.jpg" class="gallery__img" />
        </div>
      </div>

      <div class="gallery__item gallery__item--wide">
        <img src="~/assets/img/team-photos/block-1/1-fullwidth.jpg" class="gallery__img" />
      </div>

      <div class="gallery__grid">
        <div class="gallery__item gallery__item--top-left-tall">
          <img src="~/assets/img/team-photos/block-2/1.jpg" class="gallery__img" />
        </div>
        <div class="gallery__item gallery__item--center-bigest">
          <img src="~/assets/img/team-photos/block-2/2.jpg" class="gallery__img" />
        </div>
        <div class="gallery__item gallery__item--top-right-tall">
          <img src="~/assets/img/team-photos/block-2/3.jpg" class="gallery__img" />
        </div>
        <div class="gallery__item gallery__item--bottom-left-tall">
          <img src="~/assets/img/team-photos/block-2/4.jpg" class="gallery__img" />
        </div>
        <div class="gallery__item gallery__item--bottom-center">
          <img src="~/assets/img/team-photos/block-2/5.jpg" class="gallery__img" />
        </div>
        <div class="gallery__item gallery__item--bottom-right-tall">
          <img src="~/assets/img/team-photos/block-2/6.jpg" class="gallery__img" />
        </div>
      </div>

      <div class="gallery__grid gallery__grid--psFive-mobTwo">
        <div class="gallery__item gallery__item--left-tall">
          <img src="~/assets/img/team-photos/block-3/1.jpg" class="gallery__img" />
        </div>
        <div class="gallery__item gallery__item--right-top">
          <img src="~/assets/img/team-photos/block-3/2.jpg" class="gallery__img" />
        </div>
        <div class="gallery__item gallery__item--right-bottom">
          <img src="~/assets/img/team-photos/block-3/3.jpg" class="gallery__img" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.gallery {
  background-color: var(--dark);
  border-radius: 1em;
  width: 100%;

  &__container {
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;
  }

  &__title {
    text-align: center;
    width: 100%;
    margin: 0 auto;
    color: var(--white);
    padding: 40px 0;

    @include mobile {
      font-size: 25px;
      text-align: start;
      width: 100%;
      font-weight: 500;
      padding: 20px 0;
    }
  }

  &__grid {
    display: grid;
    width: 100%;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;

    @include mobile {
      gap: 10px;
      grid-template-columns: 1fr 1fr;
    }

    &--psFive-mobTwo {
      padding: 20px 0;
      grid-template-columns: repeat(5, 1fr);

      @include mobile {
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  &__item {
    border-radius: 24px;
    overflow: hidden;
    width: 100%;

    &--wide {
      margin: 20px 0;
      border-radius: 2em;
    }

    @include mobile {
      border-radius: 12px;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__item {
    // 1
    &--top-left {
      grid-column: 1;
      grid-row: 1;
      aspect-ratio: 4 / 3;
    }
    &--center-big {
      grid-column: 2;
      grid-row: 1 / span 2;
      aspect-ratio: 3 / 4;
    }
    &--top-right {
      grid-column: 3;
      grid-row: 1;
      aspect-ratio: 4 / 3;
    }
    &--mid-left {
      grid-column: 1;
      grid-row: 2 / span 3;
      aspect-ratio: 3 / 4;
    }

    &--mid-right {
      grid-column: 3;
      grid-row: 2 / span 3;
      aspect-ratio: 3 / 4;
    }

    &--mid-right-2 {
      display: none;
    }

    &--bottom-small {
      grid-column: 2;
      grid-row: 3;
    }

    // 2

    &--top-left-tall {
      grid-column: 1;
      grid-row: 1 / span 3;
      aspect-ratio: 3 / 4;
    }

    &--center-bigest {
      grid-column: 2;
      grid-row: 1 / span 4;
      aspect-ratio: 3 / 5;
    }

    &--top-right-tall {
      grid-column: 3;
      grid-row: 1 / span 3;
      aspect-ratio: 3 / 4;
    }

    &--bottom-left-tall {
      grid-column: 1;
      grid-row: 4 / span 3;
      aspect-ratio: 3 / 4;
    }

    &--bottom-center {
      grid-column: 2;
      grid-row: 5 / span 2;
      aspect-ratio: 1 / 1;
    }

    &--bottom-right-tall {
      grid-column: 3;
      grid-row: 4 / span 3;
      aspect-ratio: 3 / 4;
    }

    // 3

    &--left-tall {
      grid-column: 1 / span 3;
      grid-row: 1 / span 2;
      aspect-ratio: 2 / 3;

      @include tablet {
        aspect-ratio: 4 / 7;
      }
    }

    &--right-top {
      grid-column: 4 / span 5;
      grid-row: 1;
      aspect-ratio: 1 / 1;
    }

    &--right-bottom {
      grid-column: 4 / span 5;
      grid-row: 2;
      aspect-ratio: 1 / 1;
    }
  }

  @include mobile {
    &__item {
      // 1
      &--top-left {
        grid-column: 1;
        grid-row: 1;
        aspect-ratio: 4 / 3;
      }

      &--top-right {
        grid-column: 2;
        grid-row: 1;
        aspect-ratio: 4 / 3;
      }

      &--center-big {
        grid-column: 1 / span 2;
        grid-row: 2;
        aspect-ratio: 3 / 4;
      }

      &--bottom-small {
        grid-column: 1 / span 2;
        grid-row: 3;
        aspect-ratio: 4 / 3;
      }

      &--mid-left {
        grid-column: 1 / span 2;
        grid-row: 4;
        aspect-ratio: 3 / 4;
      }

      &--mid-right {
        grid-column: 1;
        grid-row: 5;
        aspect-ratio: 3 / 4;
      }

      &--mid-right-2 {
        grid-column: 2;
        grid-row: 5;
        aspect-ratio: 3 / 4;
      }

      // 2

      &--center-bigest {
        grid-column: 1 / span 2;
        grid-row: 1;
        aspect-ratio: 3 / 5;
      }

      &--top-left-tall {
        display: none;
      }

      &--top-right-tall {
        grid-column: 1;
        grid-row: 2;
        aspect-ratio: 3 / 4;
      }

      &--bottom-left-tall {
        grid-column: 2;
        grid-row: 2;
        aspect-ratio: 3 / 4;
      }

      &--bottom-center {
        grid-column: 1 / span 2;
        grid-row: 3;
      }

      &--bottom-right-tall {
        grid-column: 1 / span 2;
        grid-row: 4;
        aspect-ratio: 3 / 4;
      }

      // 3

      &--left-tall {
        grid-column: 1 / span 2;
        grid-row: 2;
        aspect-ratio: 2 / 3;
      }

      &--right-top {
        grid-column: 1;
        grid-row: 1;
      }

      &--right-bottom {
        grid-column: 2;
        grid-row: 1;
      }
    }
  }
}
</style>
