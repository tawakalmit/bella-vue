<template>
  <main>
    <MainBanner />
    <feature />
    <NewArrival />
    <OurCollections />
    <Review />
    <BeritaArtikel />
  </main>
</template>

<script>
import MainBanner from '../components/MainBanner.vue';
import Feature from '../components/Feature.vue';
import NewArrival from '../components/NewArrival.vue';
import OurCollections from '../components/OurCollections.vue';
import Review from '../components/Review.vue';
import BeritaArtikel from '../components/BeritaArtikel.vue';

export default {
  components: {
    MainBanner,
    Feature,
    NewArrival,
    OurCollections,
    Review,
    BeritaArtikel
  }
}
</script>

<style>

</style>