<script lang="ts" setup>
import type { ProjectContent, ProjectItem } from '#types';

const route = useRoute();
const projectSlug = route.params.slug
console.log(projectSlug)

const { data, pending, error } =  useProjectFetch<{ data: ProjectItem }>(`/projects/${projectSlug}`)

const project = computed(()=> data.value?.data);

watch(pending, ()=>{
    console.log(project.value)
})
</script>

<template>
    <div class="project">
        <div class="project__container">
            <div class="project__status" v-if="pending">Подождите...</div>
            <div class="project__status project__status--error" v-else-if="error">Произошла ошибка</div>

            <div class="project__content" v-else v-for="content in project?.content">
                <p class="project__paragraph" v-if="content.type == 'paragraph'" v-html="content.data.content" />
                <img class="project__paragraph" v-else-if="content.type == 'image'" :src="content.data.content" />
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.project{
    width: 100%;
    padding: 80px 0;

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

    &__status{
        text-align: center;
        color: var(--gray-light);
        font-size: 14px;
        font-family: $font-text;

        &--error{
            color: var(--red);
        }
    }
}

</style>