<template>
    <section class="my-20 w-9/12 mx-auto min-h-[25rem] bg-[#F7F6F7] p-10">
        <h1 class="font-bold text-[#2e3192] text-center text-xl uppercase">Berita & Artikel</h1>
        <div class="w-[2rem] mx-auto h-[3px] bg-white mt-3"></div>
        <swiper
            :slidesPerView="1"
            :spaceBetween="30"
            :autoplay="{delay: 2500, disableOnInteraction: false}"
            :pagination="{
            clickable: true,
            }"
            :modules="modules"
            :breakpoints="{
                '768':{
                    slidesPerView: 1
                },
                '1024':{
                    slidesPerView: 3
                }
            }"
            class="mySwiper mt-10"
        >
            <swiper-slide v-for="post, key in posts" :key="key">
                <router-link :to="'/post/' + post.slug">
                    <CardBerita 
                    :imgsrc="'http://127.0.0.1:8000/storage/image_headline/'+post.image_headline"
                    :title="post.title"
                    :exerpt="post.excerpt"
                    />
                </router-link>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
import CardBerita from './CardBerita.vue'
import { mapGetters, mapActions } from 'vuex'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper';

export default {
    components: {
        Swiper,
        SwiperSlide,
        CardBerita
    },
    computed: {
        ...mapGetters({
            posts: 'posts'
        })
    },
    methods: {
        ...mapActions({
            getPostsData: 'getPostsData'
        })
    },
    mounted () {
        this.getPostsData()
    },
    setup() {
      return {
        modules: [Pagination, Autoplay]
      };
    },
}
</script>

<style>

</style>