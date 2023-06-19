<template>
  <nav class="w-full h-[4rem] lg:h-[7rem] bg-[#f3f3f3] flex items-center justify-center">
    <div class="w-11/12 xl:w-9/12 mx-auto flex items-center justify-between">
        <router-link to="/"><div class="w-[5rem] lg:w-[9rem]"><img class="w-full h-full object-cover" src="../assets/logo.png" alt="logo" /></div></router-link>
        <ul class="hidden lg:flex gap-7 text-sm tracking-widest uppercase text-[#3a3f45]">
            <li class="hover:text-[#2e3192]"><router-link to="/">Beranda</router-link></li>
            <li class="hover:text-[#2e3192]"><router-link to="/tentangkami">Tentang Kami</router-link></li>
            <li class="hover:text-[#2e3192]"><router-link to="/produk">Produk</router-link></li>
            <li class="hover:text-[#2e3192]"><router-link to="/toko">Toko</router-link></li>
            <li class="hover:text-[#2e3192]"><router-link to="/info">Info</router-link></li>
            <li class="hover:text-[#2e3192]"><router-link to="/berita">Berita</router-link></li>
            <li class="hover:text-[#2e3192]"><router-link to="/kontak">Kontak</router-link></li>
        </ul>
        <i class="fa-solid fa-bars fa-xl cursor-pointer block lg:hidden"></i>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters ({
            features:'features' 
        })
    },
    methods : {
        ...mapActions({
            getFeaturesData : 'getFeaturesData'
        }),
    },
    mounted () {
        this.getFeaturesData()
    }
}
</script>