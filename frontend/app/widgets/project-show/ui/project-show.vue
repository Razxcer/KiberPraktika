<script lang="ts" setup>
import type { ProjectResponseShow } from '#types';

const route = useRoute();
const router = useRouter();
const projectSlug = route.params.slug
console.log(projectSlug)

const { data, pending, error } =  useProjectFetch<ProjectResponseShow>(`/projects/${projectSlug}`)

const project = computed(()=> data.value?.data.project);

const goBack=()=>{
    router.back();
}
</script>

<template>
    <div class="project">
        <p class="project__status" v-if="pending">Подождите...</p>
        <p class="project__status project__status--error" v-else-if="error">Произошла ошибка</p>
        <div class="project__container" v-else>
            <div class="project__back-container">
                <button class="project__go-back" @click="goBack">< Назад</button>
            </div>
            <h2 class="project__title">Кейс: {{ project.title }}</h2>
            <div class="project__about" >
                <div class="project__content" v-for="content in project.content">
                    <div class="project__paragraph" v-if="content.type == 'paragraph'" v-html="content.data.content" />
                    <img class="project__image" v-else-if="content.type == 'image'" :src="content.data.image" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.project{
    width: 100%;
    padding: 20px 0;

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

    &__back-container{
        width: 90%;
        margin: 0 auto;
        padding-bottom: 30px;
    }

    &__go-back{
        font-family: $font-text;
        font-weight: 500;
        font-size: 16px;
        background: transparent;
        border: none;
        cursor: pointer;
        color: var(--gray-dark);
    }

    &__title{
        width: 60%;
        font-family: $font-title;
        font-size: 54px;
        margin: 0 auto;

        @include mobile{
            font-size: 30px;
            width: 80%;
        }
    }

    &__status{
        width: 100%;
        text-align: center;
        color: var(--gray-dark);
        font-size: 14px;
        font-family: $font-text;

        &--error{
            color: var(--red);
        }
    }

    &__content {
        width: 100%;
    }

    &__paragraph{
        width: 60%;
        margin: 0 auto;
        padding: 20px 0;
        font-weight: 500;
        font-family: $font-text;
        font-size: 17px;

        @include mobile{
            width: 90%;
        }
    }

    &__image{
        width: 100%;
    }
}

</style>