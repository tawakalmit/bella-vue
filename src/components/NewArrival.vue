<template>
    <div class="flex flex-col gap-5">
        <h1 class="font-bold text-[#2e3192] text-center text-xl uppercase">New Arrival</h1>
        <div class="w-[2rem] mx-auto h-[2px] bg-black"></div>
        <div v-for="newArrival, key in newArrivals" :key="key" class="w-9/12 mx-auto"><img class="w-full h-full object-cover" :src="'http://mitworks.my.id/storage/image/' + newArrival.image" :alt="newArrival.image"></div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    computed: {
        ...mapGetters({
            newArrivals : 'newArrivals'
        })
    },
    methods: {
        ...mapActions({
            getNewArrivalData: 'getNewArrivalData'
        })
    },
    mounted () {
        this.getNewArrivalData()
    }
}
</script>

<style>

</style>