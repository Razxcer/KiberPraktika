<template>
    <div class="service">
        <div class='service__title-block'>Мы занимаемся заказной разработкой и предлагаем услуги аутстаффинга</div>
        <div class='service__categoris-block'>
            <div class="service__container">
                <p class="service__title service__categories-title">Заказная разработка под ключ</p>
                <p class="service__about">Полный цикл создания новых ИТ-проектов, а также модернизация существующих: от предпроектных исследований до ввода в эксплуатацию и поддержки</p>
                <div class="service__grid service__categories-grid">
                    <div class="service__categories-element">
                        <p class="service__categories-element-title">Интернет-магазины</p>
                        <p class="service__categories-element-text">Разработаем интернет-магазин с продуманной логикой, удобным интерфейсом и необходимыми интеграциями</p>
                    </div>
                    <div class="service__categories-element">
                        <p class="service__categories-element-title">Образовательные проекты</p>
                        <p class="service__categories-element-text">Воплотим любую вашу идею о дистанционном образовании при помощи грамотно подобранных технических решений</p>
                    </div>
                    <div class="service__categories-element">
                        <p class="service__categories-element-title">CRM, ERP и ERM - системы</p>
                        <p class="service__categories-element-text">Реализуем удобную и функциональную систему для коммуникации с клиентами, управления складом и производством под ваши задачи</p>
                    </div>
                    <div class="service__categories-element">
                        <p class="service__categories-element-title">Системы ЭДО</p>
                        <p class="service__categories-element-text">Подберем удобный для вас вариант системы электронного документооборота, разработаем и поможем с плавным переходом компании на него </p>
                    </div>
                    <div class="service__categories-element">
                        <p class="service__categories-element-title">Системы автоматизации бизнеса</p>
                        <p class="service__categories-element-text">Разработаем систему для автоматизации бизнес-процессов под ваши задачи и цели</p>
                    </div>
                    <div class="service__categories-element">
                        <p class="service__categories-element-title">Сайты-визитки</p>
                        <p class="service__categories-element-text">Создадим функциональный и отзывчивый сайт, который работает на всех устройствах и браузерах</p>
                    </div>
                    <div class="service__categories-element">
                        <p class="service__categories-element-title">Корпоративные сайты</p>
                        <p class="service__categories-element-text">Разработаем уникальный дизайн, который отражает вашу компанию и уделим внимание удобству использования </p>
                    </div>
                    <div class="service__categories-element">
                        <p class="service__categories-element-title">Лендинги, промо-сайты</p>
                        <p class="service__categories-element-text">Изучим вашу целевую аудиторию и определим цели, которые вы хотите достичь с помощью лендинга</p>
                    </div>
                </div>
            </div>
        </div>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.service{
    width: 100%;
    padding: 40px 0;

    &__title-block{
        box-sizing: border-box;
        width: 100%;
        padding: 60px 20px 100px 20px;
        border-radius: 0.7em 0.7em 0 0;
        color: var(--white);
        font-family: $font-title;
        font-size: 50px;
        font-weight: 600;
        text-align: center;
        background-color: var(--blue);
        background-image: url('./background-gradient.png');
        background-repeat: repeat-x;

        @include mobile{
            font-size: 28px;
        }
    }

    &__categoris-block{
        width: 100%;
        padding: 40px 0 80px 0;
        border-radius: 40px 40px 0 0;
        background-color: var(--white);
        margin-top: -40px;
    }

    &__container{
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 var(--base-padding-x);

        @include tablet{
            padding: 0 calc(var(--base-padding-x) / 2);
        }
        @include mobile{
            padding: 0 calc(var(--base-padding-x) / 4);
        }
    }

    &__title{
        font-size: 48px;
        font-family: $font-title;
        font-weight: 600;
    }
    
    &__categories-title{
        width: 50%;
        margin: 0 auto;
        text-align: left;

        @include mobile{
            font-size: 28px;
            width: 90%;
        }
    }

    &__about{
        padding: 40px 0;
        width: 50%;
        margin: 0 auto;
        text-align: left;
        font-size: 22px;
        font-family: $font-text;
        font-weight: 500;

        @include mobile{
            font-size: 18px;
            width: 90%;
        }
    }

    &__grid{
        display: grid;
        width: 100%;
    }

    &__categories-grid{
        gap: 60px;
        grid-template-columns: 1fr 1fr;
        width: 80%;
        margin: 0 auto;

        @include mobile{
            grid-template-columns: 1fr;
            width: 100%;
        }
    }

    &__categories-element{
        border-bottom: 2px solid var(--gray-light);
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }

    &__categories-element-title{
        font-family: $font-title;
        font-weight: 600;
        color: var(--blue);
        padding-left: 25px;
        flex: 0.4;

        @include mobile{
            font-size: 12px;
        }
    }

    &__categories-element-text{
        font-family: $font-text;
        font-weight: 500;
        width: 80%;
        flex: 0.6;

        @include mobile{
            font-size: 14px;
            flex:0.55
        }
    }

    &__stages-block{
        width: 100%;
        padding: 40px 0;
        border-radius: 40px 40px 0 0;
        background-color: var(--dark);
        margin-top: -40px;
        display: flex;
    }

    &__description{
        color: var(--gray-light);
        width: 10%;
        flex: 0.1;
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
        }
    }

    &__stages-grid{
        gap: 20px;
        grid-template-columns: 1fr 1fr 1fr;
        width: 70%;
        margin: 0 auto;
        padding: 40px 0;
    }

    &__stages-element{
        border-bottom: 2px solid var(--gray-light);
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }

    &__stages-element-title{
        font-family: $font-title;
        font-weight: 600;
        color: var(--blue);
        padding-left: 25px;
        flex: 0.4;

        @include mobile{
            font-size: 12px;
        }
    }

    &__stages-element-text{
        font-family: $font-text;
        font-weight: 500;
        width: 80%;
        flex: 0.6;

        @include mobile{
            font-size: 14px;
            flex:0.55
        }
    }
}


</style>