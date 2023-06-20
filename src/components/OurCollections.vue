<template>
    <section class="my-20">
        <h1 class="font-bold text-[#2e3192] text-center text-xl uppercase">Our Collections</h1>
        <div class="w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10">
            <CardCollection v-for="item,key in productCategories" :key="key" :imgsrc="`${base_url}/${item.image}`" :cardtitle="item.title" />
        </div>
    </section>
</template>

<script>
import CardCollection from './CardCollection.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
    data () {
        return {
            base_url : import.meta.env.VITE_IMAGE_PATH
        }
    },
    components: {
        CardCollection
    },
    computed: {
        ...mapGetters({
            productCategories: 'productCategories'
        })
    },
    methods: {
        ...mapActions({
            getProductCategoriesData: 'getProductCategoriesData'
        })
    },
    mounted () {
        this.getProductCategoriesData()
    }
}
</script>

<style>

</style>