<template>
  <section class="mt-[7rem]">
    <swiper :navigation="true" :modules="modules" class="mySwiper" :autoplay="{delay: 2500, disableOnInteraction: false}">
      <swiper-slide v-for="homeBanner, key in homeBanners" :key="key"><img :src="getImgPath(homeBanner.image_banner)" alt=""></swiper-slide>
    </swiper>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Autoplay } from 'swiper';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';

  export default {
    computed: {
        ...mapGetters({
            homeBanners : 'homeBanners'
        }),
        getImgPath () {
            return imgPath => {
                return "http://127.0.0.1:8000/storage/image_banner/" + imgPath
            }
        }
    },
    methods: {
        ...mapActions({
            getHomeBannersData : 'getHomeBannersData'
        })
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation, Autoplay]
      };
    },
    mounted () {
        this.getHomeBannersData()
    }
  };
</script>