<template>
  <div class="h-[13rem] bg-[#f1f1f1]">
    <div class="w-full h-[10rem]"><img class="w-full h-full object-cover" :src="getImgSrc" alt="img"></div>
    <div class="h-[3rem] font-bold text-lg lg:text-sm xl:text-lg uppercase text-[#2e3192] flex items-center justify-center">{{ cardtitle }}</div>
  </div>
</template>

<script>

export default {
    props: {
        imgsrc: {
            type: String,
            default: ''
        },
        cardtitle: {
            type: String,
            default: ''
        }
    },
    computed: {
        getImgSrc () {
            return this.imgsrc
        },
        getImgTitle () {
            return this.cardtitle
        }
    }
}
</script>

<style>

</style>