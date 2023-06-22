<template>
  <section class="w-full my-20">
    <div class="w-9/12 mx-auto flex flex-col lg:flex-row justify-center gap-20">
        <div v-for="feature, key in features" :key="key" class="w-full lg:w-3/12 flex flex-col gap-2">
            <section class="h-fit flex flex-col gap-5 items-center justify-between">
                <div class="w-[4rem]"><img class="w-full h-full object-cover" :src="'http://mitworks.my.id/storage/icon/' + feature.icon" :alt=feature.icon ></div>
                <p class="text-[#2e3192] font-bold text-md xl:text-lg text-center">{{ feature.title }}</p>
            </section>
            <p class="text-center opacity-60 text-sm leading-6 tracking-wider">{{ feature.description }}</p>
        </div>
    </div>
  </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    computed: {
        ...mapGetters ({
            features: 'features'
        })
    },
    methods: {
        ...mapActions ({
            getFeaturesData: 'getFeaturesData'
        })
    },
    mounted () {
        this.getFeaturesData()
    }
}
</script>

<style>

</style>