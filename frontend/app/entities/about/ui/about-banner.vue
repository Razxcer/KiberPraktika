<template>

    <!-- Пока что только для ПК -->

    <div class="banner">
        <div class="banner-list">
            <img class="banner__img" src="~/assets/img/developers/about1.png">
            <img class="banner__img" src="~/assets/img/developers/about2.png">
            <img class="banner__img" src="~/assets/img/developers/about3.png">
            <img class="banner__img" src="~/assets/img/developers/about4.png">
            <img class="banner__img" src="~/assets/img/developers/about5.png">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.banner{
    width: 100%;
    padding: 50px 0;

    &__list{
        display: flex;
    }

    &__img{
        width: 20%;
    }
}
</style>