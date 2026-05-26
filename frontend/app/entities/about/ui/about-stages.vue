<template>
    <div class="stages">
        <div class="stages__container">
            <div class="stages__title">Наш подход к работе</div>
            <div class="stages__grid">
                <div class="stages__item">
                    <div class="stages__num">01</div>
                    <img class="stages__img" src="~/assets/img/icons/stages1.png">
                    <div class="stages__name">Планирование</div>
                    <div class="stages__disc">Перед началом работ мы проводим стадию планирования: определяем цель и задачи проекта, оцениваем сроки разработки и предлагаем решения в рамках бюджета</div>
                </div>
                <div class="stages__item">
                    <div class="stages__num">02</div>
                    <img class="stages__img" src="~/assets/img/icons/stages2.png">
                    <div class="stages__name">Гибкая разработка</div>
                    <div class="stages__disc">Благодаря многолетнему опыту мы гибко используем современные методологии разработки – Scrum, Agile, Lean, Kanban, применяя и адаптируя их под нужды проекта</div>
                </div>
                <div class="stages__item">
                    <div class="stages__num">03</div>
                    <img class="stages__img" src="~/assets/img/icons/stages3.png">
                    <div class="stages__name">Гарантия и поддержка</div>
                    <div class="stages__disc">После завершения работ мы гарантируем 6-ти месячную поддержку. В течение этого периода мы бесплатно исправляем ошибки и недоработки, чтобы убедиться, что все работает в соответствии с требованиями</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.stages{
    width: 100%;
    padding: 50px 0;

    @include mobile{
        padding: 0;
    }

    &__container{
        width: 80%;
        margin: 0 auto;

        @include mobile{
            width: 90%;
        }
    }

    &__title{
        font-size: 48px;
        font-family: $font-title;
        font-weight: 600;
        padding-bottom: 50px 0;
        text-align: center;

        @include mobile{
            font-size: 24px;
        }
    }

    &__grid{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        padding: 30px 0;
        width: 100%;

        @include mobile{
            grid-template-columns: 1fr;
            margin: 0 auto;
            gap: 20px;
        }
    }

    &__item{
        display: flex;
        flex-direction: column;
    }

    &__num{
        font-size: 42px;
        font-family: $font-title;
        font-weight: 600;

        @include mobile{
            font-size: 24px;
        }
    }

    &__img{
        width: 100%;
    }

    &__name{
        font-family: $font-title;
        font-size: 16px;
        font-weight: 500;
        color: var(--blue);
        padding: 10px 0;

        @include mobile{
            font-size: 16px;
        }
    }

    &__disc{
        font-size: 14px;
        font-weight: 500;
        line-height: 1.3;

        @include mobile{
            font-size: 14px;
        }
    }

}
</style>