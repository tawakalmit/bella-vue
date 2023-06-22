<template>
    <section class="w-9/12 mx-auto bg-[#f7f7f7] min-h-[20rem] p-10">
        <h1 class="font-bold text-[#2e3192] text-center text-xl uppercase">Customer Reviews</h1>
        <div class="w-[2rem] mx-auto h-[3px] bg-white mt-3"></div>
        <p class="text-sm text-center opacity-50 my-5">Konsumen kami adalah fokus utama kami. Berikut ini apa yang mereka katakan tentang kami.</p>
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
            <swiper-slide v-for="item,key in testimonies" :key="key" class="bg-black grid grid-cols-3 gap-4">
                <CardReview
                :testimony="item.review" 
                :name="item.name" 
                :role="item.role" 
                :imgSrc="'http://mitworks.my.id/storage/avatar/'+item.avatar" 
                />
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
import CardReview from './CardReview.vue'
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
        CardReview,
        Swiper,
        SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination, Autoplay],
      };
    },
    computed: {
        ...mapGetters({
            testimonies: 'testimonies'
        })
    },
    methods: {
        ...mapActions({
            getTestimoniesData: 'getTestimoniesData'
        })
    },
    mounted () {
        this.getTestimoniesData()
    }
}
</script>

<style>

</style>