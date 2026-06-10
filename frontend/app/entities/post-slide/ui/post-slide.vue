<script setup lang="ts">
import type { PostSlideProps } from '../model/types';

const props = defineProps<PostSlideProps>();

// Автор(ы)
const authorText = ref('');
if(props.post.authors.length<1){
    authorText.value = "Автор: не указан"
}
else if(props.post.authors.length=1){
    authorText.value = `Автор: ${props.post.authors[0]?.first_name} ${props.post.authors[0]?.last_name}`
}
else if (props.post.authors.length>1){
    authorText.value = `Авторы: `;
    props.post.authors.forEach(author => {
        authorText.value+= `${author?.first_name} ${author?.last_name},`
    });
    authorText.value = authorText.value.slice(0, -1);
}
else{
    authorText.value = "Автор: ХЫ код не работает, бывает!"
}

// Дата
const date = new Date(props.post.published_at * 1000).toLocaleDateString('ru-RU');

</script>

<template>
    <div class="post-slide">
        <div class="post-slide__grid">
            <div class="post-slide__img-block">
                <NuxtImg :src="props.post.image_preview" class="post-slide__img"/>
            </div>
            <div class="post-slide__about">
                <div class="post-slide__tags">
                    <p class="post-slide__tag" v-for="tag in props.post.tags">{{ tag.name }}</p>
                </div>
                <div class="post-slide__desc">
                    <p class="post-slide__title">{{ props.post.title }}</p>
                    <p class="post-slide__authors">{{ authorText }}</p>
                </div>
                <div class="post-slide__meta">
                    <IconCalendar/>
                    <p class="post-slide_meta-date" style="margin-right: 10px;">{{ date }}</p>
                    <IconClock/>
                    <p class="post-slide__meta-reading-time">10-15 минут</p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .post-slide{
        background-color: var(--dark);
        display: flex;
        color: var(--white);
        width: 100%;
        align-items: center;
        justify-content: center;
        height: 440px;
        border-radius: 24px;
        padding: 20px;
        box-sizing: border-box;


        @include mobile{
            flex-direction: column;
        }

        @include tablet{
            flex-direction: column;
        }

        &__grid{
            width: 100%;
            height: 100%;
            gap: 20px;
            
            display: grid;
            grid-template-columns: 2fr 1fr;
        }

        &__img-block{
            height: 100%;
            width: 100%;
            border-radius: 24px;
            overflow: hidden;
        }
        
        &__img{
            width: 100%;
            object-fit: cover;
            object-position: center center;
        }

        &__about{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        &__tags{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            @include mobile{
                display: none;
            }
        }

        &__tag{
            margin: 0;
            font-weight: 500;
            padding: 8px;
            background-color: var(--white);
            border-radius: 1.5em;
            color: var(--dark);
        }

        &__desc{
            height: 180px;
        }

        &__title{
            font-size: 1.7em;
            font-weight: bold;
            margin: 0;
            margin-top: 20px;
        }

        &__authors{
            margin: 5px 0 0 0;
        }

        &__meta{
            color: var(--gray-dark);
            display: flex;
            align-items: center;
            gap: 5px;
            font-weight: 500;
        }
    }
</style>