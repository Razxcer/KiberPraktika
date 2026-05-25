<template>
    <div class="service__stages-block">
        <div class="service__container" style="display: flex;">
            <div class="service__description">Этапы разработки проекта под ключ</div>
            <div class="service__wrapper">
                <p class="service__title service__stages-title">С особой щепетильностью подходим к планированию разработки наших проектов </p>
                <div class="service__grid service__stages-grid">
                    <div class="service__stages-element">
                        <p class="service__stages-element-title">Аналитика</p>
                        <p class="service__stages-element-text">Выявление бизнес-требований, разработка технического задания, проектирование систем</p>
                    </div>
                    <div class="service__stages-element">
                        <p class="service__stages-element-title">Дизайн</p>
                        <p class="service__stages-element-text">Прототипирование и дизайн-концепция будущего продукта</p>
                    </div>
                    <div class="service__stages-element">
                        <p class="service__stages-element-title">Разработка</p>
                        <p class="service__stages-element-text">Создание интерфейсов, алгоритмов, программирование кода и проектирование баз данныхм</p>
                    </div>
                    <div class="service__stages-element">
                        <p class="service__stages-element-title">Тестирование</p>
                        <p class="service__stages-element-text">Поиск и устранение ошибок, недоработок</p>
                    </div>
                    <div class="service__stages-element">
                        <p class="service__stages-element-title">Девопсинг</p>
                        <p class="service__stages-element-text">Организация серверной инфраструктуры проекта</p>
                    </div>
                    <div class="service__stages-element">
                        <p class="service__stages-element-title">Поддержка</p>
                        <p class="service__stages-element-text">Публикация проекта в сети, пострелизная гарантийная поддержка</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.service{
     &__container{
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 var(--base-padding-x);

        @include tablet{
            padding: 0 calc(var(--base-padding-x) / 2);
            display: flex;
            flex-direction: column;
        }
        @include mobile{
            padding: 0 calc(var(--base-padding-x) / 4);
            display: flex;
            flex-direction: column;
        }
    }

    &__title{
        font-size: 48px;
        font-family: $font-title;
        font-weight: 600;
    }

    &__grid{
        display: grid;
        width: 100%;
    }

    &__stages-block{
        width: 100%;
        padding: 40px 0;
        border-radius: 40px 40px 0 0;
        background-color: var(--dark);
        display: flex;
    }

    &__description{
        color: var(--gray-light);
        width: 10%;
        flex: 0.1;

        @include mobile{
            width: 40%;
            padding-bottom: 20px;
            font-size: 14px;
        }

        @include tablet{
            width: 40%;
            padding-bottom: 20px;
            font-size: 14px;
        }
    }

    &__wrapper{
        display: flex;
        flex-direction: column;
        width: 100%;
        flex: 0.9;
    }

    &__stages-title{
        background-image: linear-gradient(to right, var(--blue-dodger), var(--turquoise));
        background-clip: text;
        color: transparent;
        width: 70%;
        margin: 0 auto;

        @include mobile {
            font-size: 20px;
            width: 100%;
        }

        @include tablet {
            font-size: 20px;
            width: 100%;
        }

    }

    &__stages-grid{
        gap: 60px;
        grid-template-columns: 1fr 1fr 1fr;
        width: 70%;
        margin: 0 auto;
        padding: 40px 0;
        row-gap: 40px;

        @include mobile{
            grid-template-columns: 1fr 1fr;
            width: 95%;
            gap: 30px;
        }

        @include tablet{
            grid-template-columns: 1fr 1fr;
            width: 95%;
            gap: 30px;
        }
    }

    &__stages-element{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__stages-element-title{
        font-family: $font-text;
        font-weight: 600;
        font-size: 20px;
        color: var(--malibu);
        text-align: left;
        margin: 0;

        @include mobile{
            font-size: 12px;
        }

        @include tablet{
            font-size: 16px;
        }
    }

    &__stages-element-text{
        font-family: $font-text;
        font-size: 18px;
        color: var(--white);
        font-weight: 500;
        width: 90%;
        margin: 0;

        @include mobile{
            font-size: 14px;
        }

        @include tablet{
            font-size: 16px;
        }
    }
}
</style>