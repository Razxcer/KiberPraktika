<template>
    <div class="team">
        <div class="team__container">
            <div class="team__title">Предоставляем разработчиков для усиления IT-команды</div>
            <div class="team__grid team__grid--two">
                <div class="team__developers">
                    <div class="team__img-box">
                        <div class="team__img-container" ><img src="~/assets/img/developers/front1.png" class="team__developer-img"></div>
                        <div class="team__img-container" style="box-shadow: -2px -2px 10px 1px var(--gray-dark); margin-left: -2.5%;"><img src="~/assets/img/developers/front2.png" class="team__developer-img"></div>
                        <div style="font-weight: 500; margin-left: 5px;">+9</div>
                    </div>
                    <div class="team__developers__title">Frontend-разработчик</div>
                    <div class="team__developers__desc">HTML, CSS/SCSS, Javascript, Typescript, React.js, Next.js, Vue.js, Nuxt.js, Webpack, Gulp, Websockets</div>
                </div>

                <div class="team__developers">
                    <div class="team__img-box">
                        <div class="team__img-container" ><img src="~/assets/img/developers/back1.png" class="team__developer-img" style="object-position: center 55%; margin-left: -55%;"></div>
                        <div class="team__img-container" style="box-shadow: -2px -2px 10px 1px var(--gray-dark); margin-left: -2.5%;"><img src="~/assets/img/developers/back2.png" class="team__developer-img" style="object-position: center 51%;"></div>
                        <div class="team__img-container" style="box-shadow: -2px -2px 10px 1px var(--gray-dark); margin-left: -2.5%;"><img src="~/assets/img/developers/back3.png" class="team__developer-img" style="object-position: center 40%; margin-left: -55%;"></div>
                        <div style="font-weight: 500; margin-left: 5px;">+12</div>
                    </div>
                    <div class="team__developers__title">Backend-разработчик</div>
                    <div class="team__developers__desc">PHP, Yii2, Laravel, Go, MySQL, PostgreSQL, Clickhouse, Redis, RabbitMQ, Docker</div>
                </div>
            </div>

            <div class="team__title team__title--small">Соберем проектную команду и дополним ваш отдел разработки</div>
            <div class="team__grid team__grid--three">
                <div class="team__developers">
                    <div class="team__developers__title">Дизайнер</div>
                    <div class="team__developers__desc">веб-сайты, мобильные приложения, брендинг</div>
                </div>

                <div class="team__developers">
                    <div class="team__developers__title">Тимлид и техлид</div>
                    <div class="team__developers__desc">управление своей или вашей командой разработки</div>
                </div>

                <div class="team__developers">
                    <div class="team__developers__title">QA</div>
                    <div class="team__developers__desc">ручное и автоматизированное тестирование</div>
                </div>
            </div>


        </div>
    </div>
</template>

<style lang="scss" scoped>
    .team{
        width: 100%;
        border-radius: 0.7em 0.7em 0 0;
        padding: 40px 0;
        background-color: var(--turquoise);
        background-image:url('~/assets/img/background-gradient-short.png');
        background-repeat: repeat;
        
        &__container{
            max-width: 1440px;
            width: 50%;
            margin: 0 auto;

            @include tablet{
                width: 80%;
            }

            @include mobile{
                width: 90%;
            }
        }

        &__title{
            font-size: 48px;
            font-family: $font-title;
            font-weight: 600;
            padding: 50px 0;
            
            @include mobile{
                font-size: 30px;
                padding: 30px 0;
            }

            &--small{
                font-size: 26px;
                width: 80%;

                @include mobile{
                    font-size: 20px;
                    width: 90%;
                }
            }
        }

        &__grid{
            display: grid;

            &--two{
                width: 60%;
                grid-template-columns: 1fr 1fr;
                gap: 30px;

                @include mobile{
                    grid-template-columns: 1fr;
                    margin: 0 auto;
                }
                
            }

            &--three{
                width: 90%;
                grid-template-columns: 1fr 1fr 1fr;
                gap: 60px;
                padding-bottom: 40px;

                @include mobile{
                    grid-template-columns: 1fr;
                    margin: 0 auto;
                    width: 80%;
                }
            }
        }

        &__developers{
            display: flex;
            flex-direction: column;
            gap: 15px;

            &__title{
                font-family: $font-text;
                font-weight: 600;
                font-size: 18px;
            }

            &__desc{
                font-family: $font-text;
                font-weight: 500;
                font-size: 16px;
            }
        }

        &__img-box{
            width: 100%;
            display: flex;
            align-items: center;
        }

        &__img-container{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;
        }

        &__developer-img{
            width: 200%;
            height: 200%;
            object-fit: cover;
            object-position: center 48%;
            margin-left: -48%;
        }

        


    }
</style>