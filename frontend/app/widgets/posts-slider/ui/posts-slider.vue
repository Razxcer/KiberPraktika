<script lang="ts" setup>
import type { NewsItem, NewsResponse } from '~/entities/news/model/types';

const pending = ref(false);
const error = ref(false);
const posts= ref<NewsItem[]>();
const loadData = async ()=>{
    pending.value=true;
    error.value=false
    const params: Record<string, any> = {is_news : 0}
    try{
        const response = await useProjectFetch<NewsResponse>('/posts', {
            query: params
        });
        posts.value = response.data.value?.data.items;

        pending.value=false;
        error.value=false;
    }
    catch(e){
        error.value = true;
        pending.value=false;
    };
};
loadData();

const containerRef = ref(null)
const swiper = useSwiper(containerRef)
</script>

<template>
    <section class="posts-slider">
        <div class="posts-slider__container">
            <div v-if="pending" class="posts-slider__status">
                Загрузка...
            </div>
            <div v-else-if="error" class="posts-slider__status" style="color: var(--red);">
                Не удалось загрузить новости.
            </div>
            <ClientOnly v-else>
                <swiper-container ref="containerRef"
                    :slides-per-view="1.43"
                    :navigation="true"
                    :pagination="{ clickable: true }"
                    :centered-slides="true"
                    :space-between="20"
                    class="posts-slider__slider" 
                    >

                    <swiper-slide v-for="post in posts" :key="post.id" class="posts-slider__slide">
                        <PostSlide :post="post"/>
                    </swiper-slide>

                </swiper-container>
            </ClientOnly>
            <button @click="swiper.prev()">Prev</button>
            <button @click="swiper.next()">Next</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .posts-slider{
        width: 100%;
        padding: 40px 0;

        &__container{
            width: 100%;
        }

        &__status{
            text-align: center;
            color: var(--gray-dark);
            padding: 40px 0;
        }

    }
</style>